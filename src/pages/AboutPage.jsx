import {
  ArrowUpRight,
  Building2,
  DraftingCompass,
  FlaskConical,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";
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
        eyebrow="ABOUT Techliha"
        title="Technology - and the people who will"
        accent="shape its future."
        copy="Techliha is a Kolhapur-based IT services and technology consulting company helping businesses design, build, modernize, and scale dependable digital systems."
        actions={
          <>
            <PrimaryLink to="/contact">Start a conversation</PrimaryLink>
            <SecondaryLink to="/work">See our work</SecondaryLink>
          </>
        }
      />
      <section className="marketing-section">
        <div className="marketing-shell about-story">
          <Reveal>
            <p className="marketing-eyebrow">OUR POINT OF VIEW</p>
            <h2>Useful technology starts with understanding.</h2>
            <p className="about-story__intro">
              We begin with the people, the operating reality, and the outcome
              that matters. Technology earns its place by making those things
              clearer, faster, or more dependable.
            </p>
          </Reveal>
          <Reveal className="about-story__content">
            <p>
              We partner with startups and established enterprises across AI,
              cloud, data engineering, enterprise software, DevOps,
              cybersecurity, automation, and IT consulting.
            </p>
            <p>
              From our corporate office in Kolhapur, Maharashtra, we serve
              clients across India and worldwide. We also help aspiring
              professionals build practical skills through Agentic AI training
              and project-led learning.
            </p>
            <div className="about-story__signals" aria-label="How Techliha works">
              {[
                ["01", "Clarify the real need", "Understand the users, constraints, and success measure before choosing the stack."],
                ["02", "Build in useful steps", "Create, test, learn, and improve with visible progress at every stage."],
                ["03", "Leave teams stronger", "Deliver systems people can operate, evolve, and trust after launch."],
              ].map(([number, title, copy]) => (
                <article key={title}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="marketing-section marketing-section--mist">
        <div className="marketing-shell">
          <Reveal className="marketing-section__heading">
            <p className="marketing-eyebrow">OUR PRESENCE</p>
            <h2>Based in Kolhapur. Working worldwide.</h2>
            <p>
              Visit our corporate office or connect with the team remotely for
              technology consulting, delivery, training, and partnerships.
            </p>
          </Reveal>
          <div className="contact-grid">
            <Reveal className="contact-card" delay={0} interactive>
              <Building2 size={24} aria-hidden="true" />
              <p className="marketing-eyebrow">CORPORATE OFFICE</p>
              <h2>Kolhapur, Maharashtra</h2>
              <p>Locally based, serving businesses across India and worldwide.</p>
            </Reveal>
            <Reveal className="contact-card" delay={0.045} interactive>
              <Star size={24} aria-hidden="true" />
              <p className="marketing-eyebrow">GOOGLE RATING</p>
              <h2>4.6 out of 5</h2>
              <p>Rated by 22 reviewers on the public Techliha listing.</p>
            </Reveal>
            <Reveal className="contact-card" delay={0.09} interactive>
              <MapPin size={24} aria-hidden="true" />
              <p className="marketing-eyebrow">VISIT US</p>
              <h2>DRS Group Tower</h2>
              <p>
                3rd Floor, 2851/A, Subhash Road, B Ward, Jawahar Nagar,
                Kolhapur, Maharashtra 416012.
              </p>
              <a
                href="https://share.google/DXyxnxlz308kCO12w"
                target="_blank"
                rel="noreferrer"
              >
                View on Google Maps <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="marketing-section marketing-section--blue">
        <div className="marketing-shell value-grid">
          {[
            {
              title: "Plan",
              copy: "Make the problem, outcome, and constraints clear before complexity grows.",
              icon: <DraftingCompass size={24} strokeWidth={1.7} aria-hidden="true" />,
            },
            {
              title: "Practice",
              copy: "Improve through building, testing, feedback, and real use.",
              icon: <FlaskConical size={24} strokeWidth={1.7} aria-hidden="true" />,
            },
            {
              title: "Patience",
              copy: "Choose dependable progress over shortcuts that create future risk.",
              icon: <ShieldCheck size={24} strokeWidth={1.7} aria-hidden="true" />,
            },
          ].map(({ title, copy, icon }, index) => (
            <Reveal
              className={`value-card value-card--${title.toLowerCase()}`}
              key={title}
              delay={index * 0.045}
              interactive
            >
              <div className="value-card__top">
                <span>0{index + 1}</span>
                {icon}
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <PageCTA
        eyebrow="WORK WITH Techliha"
        title="Build something useful - or learn how to build it."
        copy="Talk to us about a product, a workflow, or the Agentic AI course."
      />
    </>
  );
}
