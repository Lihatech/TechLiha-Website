import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  Database,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { projects, solutions, technologies } from "../data/siteContent";
import "./marketing-pages.css";

const solutionIcons = {
  bot: Bot,
  code: Code2,
  globe: Globe2,
  cloud: Cloud,
  database: Database,
  shield: ShieldCheck,
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function PageHero({ eyebrow, title, accent, copy, actions, aside }) {
  return (
    <section className="marketing-hero">
      <div className="marketing-shell marketing-hero__grid">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="marketing-eyebrow">{eyebrow}</p>
          <h1>
            {title} {accent && <em>{accent}</em>}
          </h1>
          <p className="marketing-hero__copy">{copy}</p>
          {actions && <div className="marketing-actions">{actions}</div>}
        </motion.div>
        {aside && <div className="marketing-hero__aside">{aside}</div>}
      </div>
    </section>
  );
}

function PrimaryLink({ to, children }) {
  return (
    <Link className="marketing-button marketing-button--primary" to={to}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

function SecondaryLink({ to, children }) {
  return (
    <Link className="marketing-button marketing-button--secondary" to={to}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

function PageCTA({ eyebrow, title, copy, label = "Start a conversation" }) {
  return (
    <section className="marketing-cta">
      <Reveal className="marketing-shell marketing-cta__inner">
        <div>
          <p className="marketing-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{copy}</p>
          <PrimaryLink to="/contact">{label}</PrimaryLink>
        </div>
      </Reveal>
    </section>
  );
}

export function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="SOLUTIONS"
        title="Technology designed around"
        accent="real work."
        copy="We combine product thinking, engineering, and practical AI to improve the processes that matter most to your business."
        actions={
          <>
            <PrimaryLink to="/contact?topic=project">Discuss your project</PrimaryLink>
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
              ["01", "Understand", "Map the users, workflow, constraints, and outcome."],
              ["02", "Shape", "Define the smallest valuable release and its architecture."],
              ["03", "Build", "Design, engineer, test, and demonstrate in short cycles."],
              ["04", "Improve", "Measure what works and evolve with real usage."],
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

export function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="SELECTED WORK"
        title="Useful systems."
        accent="Visible outcomes."
        copy="A closer look at products built for industrial accuracy, conversational commerce, and customer support."
        actions={<PrimaryLink to="/contact?topic=project">Build something similar</PrimaryLink>}
        aside={
          <div className="marketing-count">
            <strong>03</strong>
            <span>production-focused case studies</span>
          </div>
        }
      />
      <section className="marketing-section work-list">
        <div className="marketing-shell">
          {projects.map((project) => (
            <Reveal className="work-case" key={project.title}>
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

export function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="TECHNOLOGY"
        title="Modern foundations."
        accent="Practical choices."
        copy="We choose technology for reliability, maintainability, and fit—not fashion. The stack follows the product and the people who will own it."
        actions={
          <>
            <PrimaryLink to="/solutions">Explore solutions</PrimaryLink>
            <SecondaryLink to="/contact">Discuss your stack</SecondaryLink>
          </>
        }
        aside={
          <div className="technology-signal" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>LIHA / STACK</span>
          </div>
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
                <Link to={technology.href} aria-label={`Explore ${technology.title}`}>
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
            ["Secure by design", "Clear boundaries, sensible access, and tested failure paths."],
            ["Observable in use", "Logs, metrics, and feedback that make systems easier to own."],
            ["Ready to evolve", "Modular decisions that support change without unnecessary complexity."],
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

const programmes = {
  course: {
    eyebrow: "ONLINE & OFFLINE",
    title: "Agentic AI Course",
    accent: "Learn by building.",
    copy: "A focused programme for understanding how AI agents reason, use tools, retain context, and complete multi-step workflows.",
    audience: "Students, professionals, founders, and teams who want practical Agentic AI foundations.",
    icon: GraduationCap,
    outcomes: [
      "Understand agents, tools, memory, retrieval, and orchestration",
      "Design useful multi-step AI workflows",
      "Build guided practical projects",
      "Evaluate reliability, safety, and output quality",
    ],
    format: ["Online or offline", "Instructor-led", "Project-based", "Completion pathway"],
  },
  internship: {
    eyebrow: "PRACTICAL EXPERIENCE",
    title: "Agentic AI Internship",
    accent: "Turn knowledge into proof.",
    copy: "A supervised experience for applying Agentic AI concepts through practical projects, reviews, and visible implementation work.",
    audience: "Learners with basic technical foundations who are ready to build, test, and improve real agent workflows.",
    icon: BriefcaseBusiness,
    outcomes: [
      "Work on guided Agentic AI projects",
      "Translate requirements into agent workflows",
      "Test, debug, and improve AI behaviour",
      "Create visible proof of practical experience",
    ],
    format: ["Guided projects", "Mentor reviews", "Practical delivery", "Portfolio outcomes"],
  },
};

export function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="AGENTIC AI LEARNING"
        title="Learn the systems shaping"
        accent="what comes next."
        copy="LihaTech offers one focused Agentic AI course—online or offline—and a practical internship for deeper implementation experience."
        actions={<PrimaryLink to="/contact?topic=training">Talk to our learning team</PrimaryLink>}
        aside={
          <div className="marketing-count">
            <strong>02</strong>
            <span>clear learning pathways</span>
          </div>
        }
      />
      <section className="marketing-section">
        <div className="marketing-shell programme-grid">
          {Object.entries(programmes).map(([key, programme], index) => {
            const Icon = programme.icon;
            return (
              <Reveal className="programme-card" key={key}>
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
                <PrimaryLink to={`/training/${key}`}>View programme</PrimaryLink>
              </Reveal>
            );
          })}
        </div>
      </section>
      <PageCTA
        eyebrow="FIND YOUR PATH"
        title="Start with the format that fits where you are now."
        copy="Ask us about upcoming course batches, offline availability, or internship requirements."
        label="Ask about training"
      />
    </>
  );
}

function ProgrammeDetail({ type }) {
  const programme = programmes[type];
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
            <PrimaryLink to={`/contact?topic=${type}`}>Ask about availability</PrimaryLink>
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

export function CoursePage() {
  return <ProgrammeDetail type="course" />;
}

export function InternshipPage() {
  return <ProgrammeDetail type="internship" />;
}

export function AboutPage() {
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
            ["Plan", "Make the problem, outcome, and constraints clear before complexity grows."],
            ["Practice", "Improve through building, testing, feedback, and real use."],
            ["Patience", "Choose dependable progress over shortcuts that create future risk."],
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

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const subjectMap = {
    project: "New LihaTech project enquiry",
    training: "Agentic AI training enquiry",
    course: "Agentic AI course enquiry",
    internship: "Agentic AI internship enquiry",
  };
  const subject = subjectMap[topic] || "LihaTech enquiry";
  const emailHref = `mailto:info@lihatech.com?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <PageHero
        eyebrow="START A CONVERSATION"
        title="Tell us what should work"
        accent="smarter."
        copy="Share the problem, the people it affects, and what a better outcome would look like. We’ll help you identify a focused next step."
        actions={
          <>
            <a className="marketing-button marketing-button--primary" href={emailHref}>
              Email LihaTech <Mail size={17} />
            </a>
            <a
              className="marketing-button marketing-button--secondary"
              href="tel:+919767037492"
            >
              Call +91 97670 37492 <Phone size={17} />
            </a>
          </>
        }
        aside={
          <div className="contact-pulse">
            <Sparkles size={34} aria-hidden="true" />
            <span>OPEN TO NEW CONVERSATIONS</span>
          </div>
        }
      />
      <section className="marketing-section">
        <div className="marketing-shell contact-grid">
          <Reveal className="contact-card">
            <Mail size={24} />
            <p className="marketing-eyebrow">EMAIL</p>
            <h2>info@lihatech.com</h2>
            <p>Projects, partnerships, course enquiries, and internships.</p>
            <a href={emailHref}>Write to us <ArrowRight size={16} /></a>
          </Reveal>
          <Reveal className="contact-card">
            <Phone size={24} />
            <p className="marketing-eyebrow">PHONE</p>
            <h2>+91 97670 37492</h2>
            <p>Monday to Friday, 9:00 AM–6:00 PM IST.</p>
            <a href="tel:+919767037492">Call LihaTech <ArrowRight size={16} /></a>
          </Reveal>
          <Reveal className="contact-card">
            <MapPin size={24} />
            <p className="marketing-eyebrow">LOCATION</p>
            <h2>Pune, India</h2>
            <p>Working with businesses and learners worldwide.</p>
          </Reveal>
        </div>
      </section>
      <section className="marketing-section marketing-section--mist">
        <div className="marketing-shell contact-brief">
          <Reveal>
            <p className="marketing-eyebrow">A USEFUL FIRST MESSAGE</p>
            <h2>Four details help us respond well.</h2>
          </Reveal>
          <Reveal>
            <ul>
              <li><Check size={18} /> What you want to improve or learn</li>
              <li><Check size={18} /> Who the users or participants are</li>
              <li><Check size={18} /> Your preferred timing</li>
              <li><Check size={18} /> What a successful outcome means to you</li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
