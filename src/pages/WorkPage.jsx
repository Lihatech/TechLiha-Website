import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PageCTA,
  PageHero,
  PrimaryLink,
  Reveal,
} from "../components/MarketingPagePrimitives";
import { projects } from "../data/siteContent";

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="SELECTED WORK"
        title="Useful systems."
        accent="Visible outcomes."
        copy="A closer look at products built for industrial accuracy, conversational commerce, and customer support."
        actions={
          <PrimaryLink to="/contact?topic=project">
            Build something similar
          </PrimaryLink>
        }
      />
      <section className="marketing-section work-list">
        <div className="marketing-shell">
          {projects.map((project, index) => (
            <Reveal
              className="work-case"
              key={project.title}
              delay={index * 0.045}
            >
              <div className="work-case__copy">
                <p className="marketing-eyebrow">
                  {project.number} / {project.eyebrow}
                </p>
                <h2>{project.title}</h2>
                <p>{project.copy}</p>
                <div className="work-case__outcome">
                  <span>OUTCOME</span>
                  <p>{project.outcome}</p>
                </div>
                <ul>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link to="/contact?topic=project">
                  Discuss a similar system <ArrowRight size={16} />
                </Link>
              </div>
              <div className="work-case__visual">
                <img
                  src={project.images[0].src}
                  width={project.images[0].width}
                  height={project.images[0].height}
                  alt={`${project.title} project presentation`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <PageCTA
        eyebrow="YOUR PROJECT"
        title="The next case study could start with one conversation."
        copy="Tell us what is slow, repetitive, unclear, or ready to scale."
      />
    </>
  );
}
