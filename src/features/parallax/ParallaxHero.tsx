import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  MessageCircleMore,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/parallax-hero.css";

const heroQuestions = [
  { lead: "to scale your business ", accent: "with AI?" },
  { lead: "for software built around ", accent: "your needs?" },
  { lead: "to automate ", accent: "repetitive workflows?" },
  { lead: "for a website that ", accent: "performs and converts?" },
  { lead: "to upskill for ", accent: "the future?" },
  { lead: "to train your team in ", accent: "Agentic AI?" },
];

const heroProofProjects = [
  {
    eyebrow: "WHATSAPP AUTOMATION",
    title: "Twin_AI Commerce Assistant",
    tags: ["Meta WhatsApp API", "RAG"],
    icon: Bot,
  },
  {
    eyebrow: "CONVERSATIONAL COMMERCE",
    title: "AI Fragrance Consultant",
    tags: ["Recommendations", "Context memory"],
    icon: MessageCircleMore,
  },
  {
    eyebrow: "INDUSTRIAL AI",
    title: "AI Parts Identification",
    tags: ["AI OCR", "Quality logging"],
    icon: ScanSearch,
  },
];

const heroReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function ParallaxContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`parallax-container ${className}`}>{children}</div>;
}

function ParallaxButton({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "internship";
}) {
  return (
    <Link className={`parallax-button parallax-button--${variant}`} to={href}>
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
    </Link>
  );
}

function useTypedHeroQuestion(initiallyComplete = false) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(() =>
    initiallyComplete
      ? heroQuestions[0].lead.length + heroQuestions[0].accent.length
      : 0,
  );
  const [deleting, setDeleting] = useState(false);
  const question = heroQuestions[questionIndex];
  const fullText = question.lead + question.accent;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCharacterCount(fullText.length);
      return undefined;
    }

    let delay = deleting ? 32 : 54;
    if (!deleting && characterCount === fullText.length) delay = 1900;
    if (deleting && characterCount === 0) delay = 320;

    const timer = window.setTimeout(() => {
      if (!deleting && characterCount === fullText.length) {
        setDeleting(true);
      } else if (deleting && characterCount === 0) {
        setQuestionIndex((current) => (current + 1) % heroQuestions.length);
        setDeleting(false);
      } else {
        setCharacterCount((current) => current + (deleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characterCount, deleting, fullText.length]);

  return {
    question,
    visibleLead: question.lead.slice(
      0,
      Math.min(characterCount, question.lead.length),
    ),
    visibleAccent: question.accent.slice(
      0,
      Math.max(0, characterCount - question.lead.length),
    ),
  };
}

export function ParallaxHero({
  primaryHref = "/contact",
  secondaryHref = "/training",
  internshipHref = "/internship-application",
  animateOnMount = true,
  initialQuestionComplete = false,
}: {
  primaryHref?: string;
  secondaryHref?: string;
  internshipHref?: string;
  animateOnMount?: boolean;
  initialQuestionComplete?: boolean;
}) {
  const typedQuestion = useTypedHeroQuestion(initialQuestionComplete);
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section ref={heroRef} className="parallax-hero" id="ecosystem">
      <div className="parallax-ocean-overlay" aria-hidden="true" />
      <ParallaxContainer className="parallax-hero-inner">
        <motion.div
          className="parallax-hero-copy parallax-hero-copy--ocean"
          initial={animateOnMount ? "hidden" : false}
          animate="visible"
          transition={
            animateOnMount
              ? { staggerChildren: 0.1, delayChildren: 0.12 }
              : undefined
          }
        >
          <motion.h1
            className="parallax-typed-question"
            variants={heroReveal}
            transition={{ duration: 0.7 }}
            aria-label={`Looking ${typedQuestion.question.lead}${typedQuestion.question.accent}`}
          >
            Looking <span>{typedQuestion.visibleLead}</span>
            <em>{typedQuestion.visibleAccent}</em>
            <i className="parallax-type-cursor" aria-hidden="true" />
          </motion.h1>
          <motion.div className="parallax-copy-rule" variants={heroReveal}>
            <i />
            <i />
          </motion.div>
          <motion.p variants={heroReveal}>
            Techliha builds custom software, powerful websites, and AI workflows
            that automate and accelerate your business. We also offer practical
            Agentic AI courses to help you stay future-ready.
          </motion.p>
          <motion.div className="parallax-hero-actions" variants={heroReveal}>
            <ParallaxButton href={primaryHref}>Start Your Project</ParallaxButton>
            <ParallaxButton href={secondaryHref} variant="secondary">
              Explore Training
            </ParallaxButton>
            <ParallaxButton href={internshipHref} variant="internship">
              Apply for Internship
            </ParallaxButton>
          </motion.div>
        </motion.div>

        <aside className="hero-ai-showcase" aria-label="Selected Techliha AI systems">
          <div className="hero-ai-showcase__orbit" aria-hidden="true" />
          <div className="hero-ai-showcase__core">
            <span className="hero-ai-showcase__core-icon">
              <BrainCircuit size={38} strokeWidth={1.55} aria-hidden="true" />
            </span>
            <small>TECHLIHA AI</small>
            <strong>Applied intelligence</strong>
            <p>Built around real business workflows</p>
          </div>

          {heroProofProjects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <Link
                className={`hero-ai-project hero-ai-project--${index + 1}`}
                key={project.title}
                to="/work"
              >
                <span className="hero-ai-project__icon">
                  <ProjectIcon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="hero-ai-project__copy">
                  <small>{project.eyebrow}</small>
                  <strong>{project.title}</strong>
                  <span>{project.tags.join(" · ")}</span>
                </span>
                <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </Link>
            );
          })}

          <div className="hero-ai-showcase__trust">
            <ShieldCheck size={18} strokeWidth={1.8} aria-hidden="true" />
            <span>
              <strong>Project-backed capabilities</strong>
              <small>Explore the systems behind our work</small>
            </span>
          </div>
        </aside>
      </ParallaxContainer>
    </section>
  );
}
