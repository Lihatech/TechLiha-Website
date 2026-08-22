import { Check } from "lucide-react";
import {
  PageCTA,
  PageHero,
  PrimaryLink,
  Reveal,
} from "../components/MarketingPagePrimitives";
import { trainingProgrammes } from "../data/trainingProgrammes";

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="AGENTIC AI LEARNING"
        title="Learn the systems shaping"
        accent="what comes next."
        copy="Techliha offers one focused Agentic AI course, available online or offline, with guided practical learning."
        actions={
          <PrimaryLink to="/contact?topic=training">
            Talk to our learning team
          </PrimaryLink>
        }
      />
      <section className="marketing-section">
        <div className="marketing-shell programme-grid">
          {Object.entries(trainingProgrammes).map(
            ([key, programme], index) => {
              const Icon = programme.icon;
              return (
                <Reveal
                  className="programme-card"
                  key={key}
                  delay={index * 0.045}
                  interactive
                >
                  <div className="programme-card__top">
                    <span>0{index + 1}</span>
                    <Icon size={27} aria-hidden="true" />
                  </div>
                  <p className="marketing-eyebrow">{programme.eyebrow}</p>
                  <h2>{programme.title}</h2>
                  <p>{programme.copy}</p>
                  <ul>
                    {programme.format.map((item) => (
                      <li key={item}>
                        <Check size={15} /> {item}
                      </li>
                    ))}
                  </ul>
                  <PrimaryLink to={`/training/${key}`}>
                    View programme
                  </PrimaryLink>
                </Reveal>
              );
            },
          )}
        </div>
      </section>
      <PageCTA
        eyebrow="FIND YOUR PATH"
        title="Start with the format that fits where you are now."
        copy="Ask us about upcoming course batches and offline availability."
        label="Ask about training"
      />
    </>
  );
}
