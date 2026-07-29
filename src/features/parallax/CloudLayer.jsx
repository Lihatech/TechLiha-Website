export default function CloudLayer({
  className,
  src,
  width,
  height,
  priority = false,
  registerLayer,
}) {
  return (
    // Scroll, pointer, and idle motion use separate nested transforms.
    <div
      ref={(node) => registerLayer?.("scroll", node)}
      className={`cloud-scroll-layer ${className}`}
      aria-hidden="true"
    >
      <div ref={(node) => registerLayer?.("pointer", node)} className="cloud-pointer-layer">
        <img
          ref={(node) => registerLayer?.("idle", node)}
          className="cloud-idle-layer"
          src={src}
          width={width}
          height={height}
          alt=""
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          fetchpriority={priority ? "high" : "auto"}
          draggable="false"
        />
      </div>
    </div>
  );
}
