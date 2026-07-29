import SkyBackground from "./SkyBackground";
import "../styles/marketing-sky.css";

const SKY_CONTROLS = {
  scroll: true,
  pointer: true,
  idle: true,
  intensity: 84,
};

export default function MarketingSky({ pageRef }) {
  return (
    <div className="marketing-sky" aria-hidden="true">
      <SkyBackground
        controls={SKY_CONTROLS}
        pageRef={pageRef}
        revealed
        parallaxReady
      />
    </div>
  );
}
