import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PageCTA,
  PageHero,
  PrimaryLink,
  Reveal,
  SecondaryLink,
} from "../components/MarketingPagePrimitives";
import { technologies } from "../data/siteContent";

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="TECHNOLOGY"
        title="Modern foundations."
        accent="Practical choices."
        copy="We choose technology for reliability, maintainability, and fit—not fashion. The stack follows the product and the people who will own it."
        actions={
          <>
            <PrimaryLink to="/services">Explore services</PrimaryLink>
            <SecondaryLink to="/contact">Discuss your stack</SecondaryLink>
          </>
        }
      />
      <section className="marketing-section">
        <div className="marketing-shell">
          <Reveal className="marketing-section__heading">
            <p className="marketing-eyebrow">CORE CAPABILITIES</p>
            <h2>A stack built to keep moving.</h2>
          </Reveal>
          <div className="technology-grid">
            {technologies.map((technology) => (
              <Reveal className="technology-card" key={technology.title}>
                <span>{technology.label}</span>
                <h3>{technology.title}</h3>
                <p>{technology.copy}</p>
                <Link
                  to={technology.href}
                  aria-label={`Explore ${technology.title}`}
                >
                  <ArrowRight size={18} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="marketing-section marketing-section--mist">
        <div className="marketing-shell principles-grid">
          {[
            [
              "Secure by design",
              "Clear boundaries, sensible access, and tested failure paths.",
            ],
            [
              "Observable in use",
              "Logs, metrics, and feedback that make systems easier to own.",
            ],
            [
              "Ready to evolve",
              "Modular decisions that support change without unnecessary complexity.",
            ],
          ].map(([title, copy], index) => (
            <Reveal key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <PageCTA
        eyebrow="BUILD WITH CONFIDENCE"
        title="Choose the right technology for the outcome."
        copy="We’ll help you shape a stack that your product and team can depend on."
      />
    </>
  );
}
