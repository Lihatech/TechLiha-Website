import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  Database,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  PageCTA,
  PageHero,
  PrimaryLink,
  Reveal,
  SecondaryLink,
} from "../components/MarketingPagePrimitives";
import { solutions } from "../data/siteContent";

const solutionIcons = {
  bot: Bot,
  code: Code2,
  globe: Globe2,
  cloud: Cloud,
  database: Database,
  shield: ShieldCheck,
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="SOLUTIONS"
        title="Technology designed around"
        accent="real work."
        copy="We combine product thinking, engineering, and practical AI to improve the processes that matter most to your business."
        actions={
          <>
            <PrimaryLink to="/contact?topic=project">
              Discuss your project
            </PrimaryLink>
            <SecondaryLink to="/work">See selected work</SecondaryLink>
          </>
        }
        aside={
          <div className="marketing-orbit" aria-hidden="true">
            <span>AI</span>
            <i />
            <i />
          </div>
        }
      />

      <section className="marketing-section">
        <div className="marketing-shell">
          <Reveal className="marketing-section__heading">
            <p className="marketing-eyebrow">WHAT WE BUILD</p>
            <h2>Focused capabilities. One accountable team.</h2>
            <p>
              Start with one workflow or build a complete platform. Every
              engagement is shaped around a clear business result.
            </p>
          </Reveal>
          <div className="solution-grid">
            {solutions.map((solution, index) => {
              const Icon = solutionIcons[solution.icon];
              return (
                <Reveal className="solution-card" key={solution.title}>
                  <div className="solution-card__top">
                    <span>0{index + 1}</span>
                    <Icon size={25} aria-hidden="true" />
                  </div>
                  <h3>{solution.title}</h3>
                  <p>{solution.copy}</p>
                  <Link to={solution.href}>
                    Explore capability <ArrowRight size={16} />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-section--blue">
        <div className="marketing-shell process-grid">
          <Reveal className="marketing-section__heading">
            <p className="marketing-eyebrow">HOW WE WORK</p>
            <h2>Clear decisions from discovery to delivery.</h2>
          </Reveal>
          <div>
            {[
              [
                "01",
                "Understand",
                "Map the users, workflow, constraints, and outcome.",
              ],
              [
                "02",
                "Shape",
                "Define the smallest valuable release and its architecture.",
              ],
              [
                "03",
                "Build",
                "Design, engineer, test, and demonstrate in short cycles.",
              ],
              [
                "04",
                "Improve",
                "Measure what works and evolve with real usage.",
              ],
            ].map(([number, title, copy]) => (
              <Reveal className="process-row" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="READY WHEN YOU ARE"
        title="Bring us the process that should work smarter."
        copy="We’ll help you turn it into a focused, dependable digital solution."
      />
    </>
  );
}
