"""Extract the three clouds from the supplied blue-sky source.

The source sky is a smooth gradient, not a flat chroma key.  This script fits a
low-order colour field to cloud-free pixels, builds a soft colour-distance
matte, feathers it, and unmixes the estimated sky colour from translucent edge
pixels before exporting lossless-alpha WebP assets.
"""

from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


CLOUD_REGIONS = {
    "cloud-large.webp": (58, 34, 815, 568),
    "cloud-medium.webp": (877, 266, 1536, 650),
    "cloud-small.webp": (527, 646, 1038, 970),
}

# Expanded areas excluded from the background fit.
FIT_EXCLUSIONS = (
    (45, 24, 835, 590),
    (855, 245, 1536, 675),
    (500, 620, 1070, 990),
)


def polynomial_terms(x: np.ndarray, y: np.ndarray, degree: int = 4) -> np.ndarray:
    terms = []
    for total in range(degree + 1):
        for x_power in range(total + 1):
            y_power = total - x_power
            terms.append((x**x_power) * (y**y_power))
    return np.stack(terms, axis=-1)


def estimate_sky(rgb: np.ndarray) -> np.ndarray:
    """Fit a smooth RGB sky field using only known cloud-free pixels."""
    height, width, _ = rgb.shape
    yy, xx = np.mgrid[0:height, 0:width]
    x_norm = (xx / max(width - 1, 1)) * 2.0 - 1.0
    y_norm = (yy / max(height - 1, 1)) * 2.0 - 1.0

    valid = np.ones((height, width), dtype=bool)
    for left, top, right, bottom in FIT_EXCLUSIONS:
        valid[top:bottom, left:right] = False

    # A regular sample keeps the least-squares solve small and deterministic.
    sample = valid & ((xx % 7) == 0) & ((yy % 7) == 0)
    design = polynomial_terms(x_norm[sample], y_norm[sample])
    coefficients, *_ = np.linalg.lstsq(design, rgb[sample], rcond=None)

    full_design = polynomial_terms(x_norm.ravel(), y_norm.ravel())
    fitted = full_design @ coefficients
    return np.clip(fitted.reshape(height, width, 3), 0, 255).astype(np.float32)


def soft_cloud_matte(rgb: np.ndarray, sky: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    """Return unspilled foreground RGB and a gently cleaned alpha matte."""
    delta = rgb.astype(np.float32) - sky

    # Blue skies contain almost no red.  Red lift is therefore the most stable
    # signal, with green lift preserving the palest cyan translucent edges.
    alpha_red = np.maximum(delta[..., 0], 0.0) / np.maximum(232.0 - sky[..., 0], 70.0)
    alpha_green = np.maximum(delta[..., 1], 0.0) / np.maximum(236.0 - sky[..., 1], 42.0)
    alpha = np.maximum(alpha_red, alpha_green * 0.82)
    alpha = np.clip(alpha, 0.0, 1.0)

    # A sub-pixel feather softens quantisation without sharpening or contracting
    # the original airbrushed edge.
    alpha_image = Image.fromarray(np.uint8(alpha * 255), mode="L")
    alpha = np.asarray(alpha_image.filter(ImageFilter.GaussianBlur(1.35)), dtype=np.float32) / 255.0

    # Keep low-opacity edge information, but remove tiny unrelated colour noise
    # far away from the cloud.  The wide support halo avoids clipping wisps.
    core = Image.fromarray(np.uint8(alpha > 0.035) * 255, mode="L")
    support = core.filter(ImageFilter.MaxFilter(81)).filter(ImageFilter.GaussianBlur(22))
    support_array = np.asarray(support, dtype=np.float32) / 255.0
    alpha *= np.clip(support_array * 1.45, 0.0, 1.0)

    # Only values below roughly half of one 8-bit alpha step are cleared.
    alpha = np.where(alpha < 0.0018, 0.0, alpha)
    alpha = np.power(np.clip(alpha, 0.0, 1.0), 0.94)

    # Recover foreground colour from C = aF + (1-a)B.  Stabilise very faint
    # pixels and blend them toward a cool cloud tint to prevent blue fringing.
    safe_alpha = np.maximum(alpha[..., None], 0.022)
    foreground = sky + delta / safe_alpha
    foreground = np.clip(foreground, 0.0, 255.0)
    edge_mix = np.clip((0.08 - alpha) / 0.08, 0.0, 1.0)[..., None]
    cool_edge = np.array([205.0, 231.0, 250.0], dtype=np.float32)
    foreground = foreground * (1.0 - edge_mix * 0.34) + cool_edge * (edge_mix * 0.34)

    return foreground, alpha


def trim_with_padding(
    foreground: np.ndarray,
    alpha: np.ndarray,
    padding: int = 30,
) -> tuple[np.ndarray, np.ndarray]:
    visible = np.argwhere(alpha > 0.003)
    if not len(visible):
        raise RuntimeError("No visible cloud pixels found")

    top, left = visible.min(axis=0)
    bottom, right = visible.max(axis=0) + 1
    top = max(0, int(top) - padding)
    left = max(0, int(left) - padding)
    bottom = min(alpha.shape[0], int(bottom) + padding)
    right = min(alpha.shape[1], int(right) + padding)
    return foreground[top:bottom, left:right], alpha[top:bottom, left:right]


def checkerboard(size: tuple[int, int], cell: int = 24) -> Image.Image:
    width, height = size
    yy, xx = np.mgrid[0:height, 0:width]
    tiles = ((xx // cell + yy // cell) % 2)[..., None]
    light = np.array([239, 246, 250], dtype=np.uint8)
    dark = np.array([202, 220, 229], dtype=np.uint8)
    rgb = np.where(tiles == 0, light, dark)
    return Image.fromarray(rgb.astype(np.uint8), mode="RGB")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--preview", type=Path)
    args = parser.parse_args()

    source = Image.open(args.source).convert("RGB")
    rgb = np.asarray(source, dtype=np.float32)
    sky = estimate_sky(rgb)
    args.output.mkdir(parents=True, exist_ok=True)

    outputs: list[Image.Image] = []
    for filename, (left, top, right, bottom) in CLOUD_REGIONS.items():
        crop_rgb = rgb[top:bottom, left:right]
        crop_sky = sky[top:bottom, left:right]
        foreground, alpha = soft_cloud_matte(crop_rgb, crop_sky)
        foreground, alpha = trim_with_padding(foreground, alpha)

        rgba = np.dstack((np.uint8(foreground), np.uint8(np.clip(alpha * 255, 0, 255))))
        asset = Image.fromarray(rgba, mode="RGBA")
        # WebP quality 92 keeps the soft alpha edge clean while reducing the
        # three-asset transfer size by roughly two thirds versus lossless RGB.
        asset.save(args.output / filename, "WEBP", quality=92, method=6)
        outputs.append(asset)

    if args.preview:
        card_width = max(asset.width for asset in outputs) + 80
        card_heights = [asset.height + 70 for asset in outputs]
        preview = checkerboard((card_width, sum(card_heights) + 40))
        y = 20
        for asset, filename, card_height in zip(outputs, CLOUD_REGIONS, card_heights):
            x = (card_width - asset.width) // 2
            preview.paste(asset, (x, y), asset)
            y += card_height
        args.preview.parent.mkdir(parents=True, exist_ok=True)
        preview.save(args.preview, "PNG", optimize=True)


if __name__ == "__main__":
    main()
