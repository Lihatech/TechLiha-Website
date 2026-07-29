import { useEffect } from "react";
import "../styles/liquid-glass.css";

const FLOATING_GLASS_SELECTORS = [
  ".sky-unlock-glass",
];

const CONTENT_GLASS_SELECTORS = [
  ".sky-product-feature",
  ".sky-product-window",
  ".sky-product-chip",
];

const GLASS_PROFILES = [
  {
    key: "floating",
    selectors: FLOATING_GLASS_SELECTORS,
    surfaceClass: "liha-liquid-glass--floating",
    canvasClass: "liha-liquid-glass-canvas--floating",
    zIndex: 49,
  },
  {
    key: "content",
    selectors: CONTENT_GLASS_SELECTORS,
    surfaceClass: "liha-liquid-glass--content",
    canvasClass: "liha-liquid-glass-canvas--content",
    zIndex: 4,
  },
];

const GLASS_SURFACE_SELECTORS = GLASS_PROFILES.flatMap(
  (profile) => profile.selectors,
);
const SURFACE_SELECTOR = GLASS_SURFACE_SELECTORS.join(",");
const READY_ATTRIBUTE = "data-liquid-gl-ready";
const SURFACE_CLASS = "liha-liquid-glass";

const GLASS_OPTIONS = {
  resolution: 0.55,
  refraction: 0.018,
  bevelDepth: 0.065,
  bevelWidth: 0.12,
  frost: 1.1,
  shadow: false,
  specular: true,
  reveal: "none",
  tilt: false,
  magnify: 1.012,
};

const originalInlineStyles = new WeakMap();

function supportsEnhancedGlass() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktopCanvas = window.matchMedia("(min-width: 900px)").matches;
  const isSafari =
    /Safari/i.test(navigator.userAgent) &&
    !/Chrome|Chromium|CriOS|Edg|OPR|Android/i.test(navigator.userAgent);

  return desktopCanvas && !reducedMotion && !isSafari;
}

function getSnapshotSelector(profileKey) {
  if (profileKey === "content" && document.querySelector(".sky-prototype")) {
    return ".sky-prototype";
  }
  return document.querySelector(".parallax-hero") ? ".parallax-hero" : "body";
}

function rememberInlineStyles(element) {
  if (originalInlineStyles.has(element)) return;

  originalInlineStyles.set(element, {
    opacity: element.style.opacity,
    pointerEvents: element.style.pointerEvents,
    transition: element.style.transition,
  });
}

function restoreInteractionStyles(elements) {
  elements.forEach((element) => {
    const original = originalInlineStyles.get(element);
    if (!original) return;

    element.style.opacity = original.opacity;
    element.style.pointerEvents = original.pointerEvents;
    element.style.transition = original.transition;
  });
}

function restoreCssFallback(elements) {
  elements.forEach((element) => {
    const original = originalInlineStyles.get(element);

    element.style.removeProperty("background");
    element.style.removeProperty("background-color");
    element.style.removeProperty("background-image");
    element.style.removeProperty("backdrop-filter");
    element.style.removeProperty("-webkit-backdrop-filter");
    element.style.removeProperty("box-shadow");

    if (original) {
      element.style.opacity = original.opacity;
      element.style.pointerEvents = original.pointerEvents;
      element.style.transition = original.transition;
    }

    element.removeAttribute(READY_ATTRIBUTE);
    element.classList.remove(SURFACE_CLASS);
  });
}

function pruneDisconnectedLenses(renderer) {
  if (!renderer?.lenses) return;

  renderer.lenses = renderer.lenses.filter((lens) => {
    if (lens.el?.isConnected) return true;

    lens._sizeObs?.disconnect();
    lens._destroyMirrorCanvas?.();
    lens.setShadow?.(false);
    return false;
  });
}

function preventOffscreenRendering(renderer) {
  if (renderer._lihaVisibilityGuard || !renderer._renderLens) return;

  const renderLens = renderer._renderLens.bind(renderer);
  renderer._renderLens = (lens) => {
    const rect = lens.rectPx;
    const clippingSurface = lens.el.closest(".sky-prototype");
    const clipRect = clippingSurface?.getBoundingClientRect();
    const canvasHost = renderer.canvas.parentElement;
    const outsideActiveHost =
      canvasHost?.classList.contains("sky-prototype") &&
      !canvasHost.contains(lens.el);
    const clippedBySection =
      clipRect &&
      (clipRect.bottom <= 0 ||
        clipRect.top >= window.innerHeight ||
        rect.top + rect.height <= clipRect.top ||
        rect.top >= clipRect.bottom);
    const outsideViewport =
      !rect ||
      rect.width <= 0 ||
      rect.height <= 0 ||
      rect.left + rect.width < 0 ||
      rect.top + rect.height < 0 ||
      rect.left > window.innerWidth ||
      rect.top > window.innerHeight;

    if (!outsideViewport && !clippedBySection && !outsideActiveHost) {
      renderLens(lens);
    }
  };
  renderer._lihaVisibilityGuard = true;
}

function placeCanvas(renderer, profile) {
  const canvas = renderer?.canvas;
  if (!canvas) return;

  let host = document.body;
  if (profile.key === "content") {
    const sky = document.querySelector(".sky-prototype");
    const hero = document.querySelector(".parallax-hero");
    const skyIsEntering =
      sky && sky.getBoundingClientRect().top <= window.innerHeight * 0.82;
    const heroIsVisible =
      hero && hero.getBoundingClientRect().bottom > 0;

    host = skyIsEntering
      ? sky
      : heroIsVisible
        ? hero
        : document.querySelector(".parallax-page") || document.body;
  }

  if (canvas.parentElement !== host) host.appendChild(canvas);
  canvas.style.zIndex = String(profile.zIndex);
}

function scheduleSnapshotRefresh(renderer) {
  let attempts = 0;

  const refresh = () => {
    attempts += 1;

    if (renderer._capturing && attempts < 32) {
      window.setTimeout(refresh, 250);
      return;
    }

    renderer._snapshotResolution = GLASS_OPTIONS.resolution;
    renderer.captureSnapshot?.();
  };

  window.setTimeout(refresh, 120);
}

export default function LiquidGlassSystem() {
  useEffect(() => {
    if (!supportsEnhancedGlass()) {
      document.documentElement.dataset.liquidGlass = "css";
      return undefined;
    }

    let active = true;
    let liquidGL;
    const renderers = new Map();
    let scanTimer = 0;
    let placementFrame = 0;
    let idleHandle = 0;
    let loading = false;

    const scan = async () => {
      scanTimer = 0;
      if (!active || loading) return;

      renderers.forEach(pruneDisconnectedLenses);

      const profileBatches = GLASS_PROFILES.map((profile) => {
        const selector = profile.selectors.join(",");
        const surfaces = Array.from(document.querySelectorAll(selector));
        const freshSurfaces = surfaces.filter(
          (element) => element.getAttribute(READY_ATTRIBUTE) !== "true",
        );
        return { profile, surfaces, freshSurfaces };
      }).filter(({ freshSurfaces }) => freshSurfaces.length);
      if (!profileBatches.length) return;

      loading = true;

      try {
        if (!liquidGL) {
          ({ default: liquidGL } = await import("liquid-gl"));
        }
        if (!active) return;

        for (const { profile, surfaces, freshSurfaces } of profileBatches) {
          freshSurfaces.forEach((element) => {
            rememberInlineStyles(element);
            element.classList.add(SURFACE_CLASS, profile.surfaceClass);
          });

          let renderer = renderers.get(profile.key);
          const onInit = () => {
            document.documentElement.dataset.liquidGlass = "webgl";
          };

          if (!renderer) {
            window.__liquidGLRenderer__ = undefined;
            liquidGL({
              ...GLASS_OPTIONS,
              snapshot: getSnapshotSelector(profile.key),
              target: `.${profile.surfaceClass}:not([${READY_ATTRIBUTE}="true"])`,
              on: { init: onInit },
            });
            renderer = window.__liquidGLRenderer__;
            if (renderer) renderers.set(profile.key, renderer);
          } else {
            freshSurfaces.forEach((element) => {
              renderer.addLens(element, {
                ...GLASS_OPTIONS,
                on: { init: onInit },
              });
            });
          }

          if (!renderer) {
            restoreCssFallback(freshSurfaces);
            continue;
          }

          renderer.canvas.classList.add(
            "liha-liquid-glass-canvas",
            profile.canvasClass,
          );
          renderer.canvas.setAttribute("aria-hidden", "true");
          preventOffscreenRendering(renderer);
          placeCanvas(renderer, profile);

          freshSurfaces.forEach((element) => {
            element.setAttribute(READY_ATTRIBUTE, "true");
          });
          restoreInteractionStyles(freshSurfaces);
          scheduleSnapshotRefresh(renderer);

          window.setTimeout(() => {
            if (!renderer.texture) {
              restoreCssFallback(surfaces);
              renderer.canvas.style.display = "none";
            }
          }, 15000);
        }

        const preferredRenderer =
          renderers.get("content") || renderers.get("floating");
        if (preferredRenderer) {
          window.__liquidGLRenderer__ = preferredRenderer;
          document.documentElement.dataset.liquidGlass = "webgl";
        } else {
          document.documentElement.dataset.liquidGlass = "css";
        }
      } catch (error) {
        console.warn("LihaTech liquid glass enhancement could not start.", error);
        profileBatches.forEach(({ freshSurfaces }) => {
          restoreCssFallback(freshSurfaces);
        });
        document.documentElement.dataset.liquidGlass = "css";
      } finally {
        loading = false;
      }
    };

    const queueScan = () => {
      window.clearTimeout(scanTimer);
      scanTimer = window.setTimeout(scan, 80);
    };

    const observer = new MutationObserver(queueScan);
    observer.observe(document.body, { childList: true, subtree: true });

    const updateCanvasPlacement = () => {
      if (placementFrame) return;
      placementFrame = window.requestAnimationFrame(() => {
        placementFrame = 0;
        GLASS_PROFILES.forEach((profile) => {
          placeCanvas(renderers.get(profile.key), profile);
        });
      });
    };
    window.addEventListener("scroll", updateCanvasPlacement, { passive: true });
    window.addEventListener("resize", updateCanvasPlacement);

    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(scan, { timeout: 1200 });
    } else {
      scanTimer = window.setTimeout(scan, 320);
    }

    return () => {
      active = false;
      observer.disconnect();
      window.removeEventListener("scroll", updateCanvasPlacement);
      window.removeEventListener("resize", updateCanvasPlacement);
      window.clearTimeout(scanTimer);
      window.cancelAnimationFrame(placementFrame);
      if (idleHandle && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      }
    };
  }, []);

  return null;
}
