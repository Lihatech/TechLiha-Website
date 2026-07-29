import { Check } from "lucide-react";
import {
  PageCTA,
  PageHero,
  PrimaryLink,
  Reveal,
  SecondaryLink,
} from "../../components/MarketingPagePrimitives";
import { trainingProgrammes } from "../../data/trainingProgrammes";

export default function ProgrammeDetail({ type }) {
  const programme = trainingProgrammes[type];
  const Icon = programme.icon;
  return (
    <>
      <PageHero
        eyebrow={programme.eyebrow}
        title={programme.title}
        accent={programme.accent}
        copy={programme.copy}
        actions={
          <>
            <PrimaryLink to={`/contact?topic=${type}`}>
              Ask about availability
            </PrimaryLink>
            <SecondaryLink to="/training">Compare programmes</SecondaryLink>
          </>
        }
        aside={
          <div className="programme-icon">
            <Icon size={54} aria-hidden="true" />
          </div>
        }
      />
      <section className="marketing-section">
        <div className="marketing-shell programme-detail">
          <Reveal>
            <p className="marketing-eyebrow">WHO IT IS FOR</p>
            <h2>A practical next step.</h2>
            <p>{programme.audience}</p>
          </Reveal>
          <Reveal>
            <p className="marketing-eyebrow">WHAT YOU WILL DO</p>
            <ul>
              {programme.outcomes.map((outcome) => (
                <li key={outcome}>
                  <Check size={18} /> {outcome}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <PageCTA
        eyebrow="UPCOMING AVAILABILITY"
        title={`Ready to explore the ${programme.title.toLowerCase()}?`}
        copy="Contact our learning team for schedules, format, eligibility, and the next available intake."
        label="Contact the learning team"
      />
    </>
  );
}
