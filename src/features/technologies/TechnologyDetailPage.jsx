import { Navigate, useParams } from "react-router-dom";
import {
  PageCTA,
  PageHero,
  PrimaryLink,
  Reveal,
  SecondaryLink,
} from "../../components/MarketingPagePrimitives";
import { technologyDetails } from "../../data/technologyDetails";

export default function TechnologyDetailPage() {
  const { slug } = useParams();
  const technology = technologyDetails[slug];

  if (!technology) return <Navigate to="/technology" replace />;

  return (
    <>
      <PageHero
        eyebrow="TECHNOLOGY"
        title={technology.title}
        accent="Built for production."
        copy={technology.summary}
        backLink={{ to: "/technology", label: "Back to technology" }}
        actions={
          <>
            <PrimaryLink to="/contact?topic=project">Discuss your project</PrimaryLink>
            <SecondaryLink to="/services">Explore services</SecondaryLink>
          </>
        }
      />

      <section className="marketing-section">
        <div className="marketing-shell process-grid">
          <Reveal className="marketing-section__heading">
            <p className="marketing-eyebrow">OVERVIEW</p>
            <h2>{technology.overviewTitle}</h2>
          </Reveal>
          <Reveal className="technology-detail-copy">
            {technology.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="marketing-section marketing-section--blue technology-detail-capabilities">
        <div className="marketing-shell process-grid">
          <Reveal className="marketing-section__heading">
            <p className="marketing-eyebrow">WHAT WE BUILD</p>
            <h2>Capability with a clear purpose.</h2>
          </Reveal>
          <div>
            {technology.capabilities.map(([title, copy], index) => (
              <Reveal className="process-row" key={title} delay={index * 0.04}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-section--mist">
        <div className="marketing-shell">
          <Reveal className="marketing-section__heading">
            <p className="marketing-eyebrow">BEST FIT</p>
            <h2>Where {technology.title} creates value.</h2>
          </Reveal>
          <div className="solution-grid">
            {technology.useCases.map((useCase, index) => (
              <Reveal className="solution-card" key={useCase} delay={index * 0.04} interactive>
                <div className="solution-card__top"><span>0{index + 1}</span></div>
                <h3>{useCase}</h3>
                <p>Designed around measurable outcomes, dependable operation, and long-term ownership.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="BUILD WITH CONFIDENCE"
        title={`Put ${technology.title} to work.`}
        copy="Tell us what you need to improve, automate, or build. We’ll shape the technology around the outcome."
        label="Talk to our team"
      />
    </>
  );
}
