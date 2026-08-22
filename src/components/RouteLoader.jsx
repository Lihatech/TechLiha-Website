import cloudMedium from "../assets/cloud-medium.webp";
import cloudSmall from "../assets/cloud-small.webp";
import "../styles/route-loader.css";

export default function RouteLoader() {
  return (
    <div
      className="route-loader"
      role="status"
      aria-live="polite"
      aria-label="Techliha is loading the next page"
    >
      <div className="route-loader__glow" aria-hidden="true" />

      <img
        className="route-loader__cloud route-loader__cloud--left"
        src={cloudMedium}
        alt=""
        aria-hidden="true"
      />
      <img
        className="route-loader__cloud route-loader__cloud--right"
        src={cloudSmall}
        alt=""
        aria-hidden="true"
      />

      <div className="route-loader__content">
        <div className="route-loader__logo-shell" aria-hidden="true">
          <span className="route-loader__logo-shine" />
          <img
            className="route-loader__logo"
            src="/images/lihatech-logo-official.png"
            alt=""
          />
        </div>

        <div className="route-loader__wordmark" aria-hidden="true">
          Techliha
        </div>

        <div className="route-loader__horizon" aria-hidden="true">
          <span />
        </div>

        <p>Building what&apos;s next</p>
      </div>

      <div className="route-loader__curve" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
