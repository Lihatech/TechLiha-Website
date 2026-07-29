import {
  PageCTA,
  PageHero,
  PrimaryLink,
  Reveal,
  SecondaryLink,
} from "../components/MarketingPagePrimitives";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT LIHATECH"
        title="Technology—and the people who will"
        accent="shape its future."
        copy="LihaTech is a technology and learning company focused on useful digital products and practical Agentic AI education."
        actions={
          <>
            <PrimaryLink to="/contact">Start a conversation</PrimaryLink>
            <SecondaryLink to="/work">See our work</SecondaryLink>
          </>
        }
        aside={
          <div className="about-mantra">
            <span>PLAN.</span>
            <span>PRACTICE.</span>
            <span>PATIENCE.</span>
          </div>
        }
      />
      <section className="marketing-section">
        <div className="marketing-shell about-story">
          <Reveal>
            <p className="marketing-eyebrow">OUR POINT OF VIEW</p>
            <h2>Useful technology starts with understanding.</h2>
          </Reveal>
          <Reveal>
            <p>
              We work with businesses to turn practical problems into dependable
              software, intelligent workflows, and digital experiences.
            </p>
            <p>
              We also help aspiring professionals build relevant skills through
              our Agentic AI course, internship, and project-led learning.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="marketing-section marketing-section--blue">
        <div className="marketing-shell value-grid">
          {[
            [
              "Plan",
              "Make the problem, outcome, and constraints clear before complexity grows.",
            ],
            [
              "Practice",
              "Improve through building, testing, feedback, and real use.",
            ],
            [
              "Patience",
              "Choose dependable progress over shortcuts that create future risk.",
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
        eyebrow="WORK WITH LIHATECH"
        title="Build something useful—or learn how to build it."
        copy="Talk to us about a product, a workflow, the Agentic AI course, or an internship."
      />
    </>
  );
}
