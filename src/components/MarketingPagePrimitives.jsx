import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/marketing-pages.css";

const MotionDiv = motion.div;
const MotionHeading = motion.h1;
const MotionParagraph = motion.p;

const reveal = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const hero = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  interactive = false,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionDiv
      className={className}
      variants={reveal}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      whileHover={
        interactive && !shouldReduceMotion
          ? { y: -5, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } }
          : undefined
      }
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionDiv>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  copy,
  actions,
  backLink,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="marketing-hero">
      <div className="marketing-shell marketing-hero__grid">
        <MotionDiv
          className="marketing-hero__content"
          variants={hero}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          {backLink && (
            <MotionDiv variants={heroItem}>
              <Link className="marketing-back-link" to={backLink.to}>
                <ArrowLeft size={16} aria-hidden="true" />
                {backLink.label}
              </Link>
            </MotionDiv>
          )}
          <MotionParagraph className="marketing-eyebrow" variants={heroItem}>
            {eyebrow}
          </MotionParagraph>
          <MotionHeading variants={heroItem}>
            {title} {accent && <em>{accent}</em>}
          </MotionHeading>
          <MotionParagraph className="marketing-hero__copy" variants={heroItem}>
            {copy}
          </MotionParagraph>
          {actions && (
            <MotionDiv className="marketing-actions" variants={heroItem}>
              {actions}
            </MotionDiv>
          )}
        </MotionDiv>
      </div>
    </section>
  );
}

export function PrimaryLink({ to, children }) {
  return (
    <Link className="marketing-button marketing-button--primary" to={to}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

export function SecondaryLink({ to, children }) {
  return (
    <Link className="marketing-button marketing-button--secondary" to={to}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

export function PageCTA({
  eyebrow,
  title,
  copy,
  label = "Start a conversation",
}) {
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
