import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "../../assets/BG video.mp4";
import "../../styles/parallax-hero.css";

const heroQuestions = [
  { lead: "to scale your business ", accent: "with AI?" },
  { lead: "for software built around ", accent: "your needs?" },
  { lead: "to automate ", accent: "repetitive workflows?" },
  { lead: "for a website that ", accent: "performs and converts?" },
  { lead: "to upskill for ", accent: "the future?" },
  { lead: "to train your team in ", accent: "Agentic AI?" },
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
  variant?: "primary" | "secondary";
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
  animateOnMount = true,
  initialQuestionComplete = false,
}: {
  primaryHref?: string;
  secondaryHref?: string;
  animateOnMount?: boolean;
  initialQuestionComplete?: boolean;
}) {
  const typedQuestion = useTypedHeroQuestion(initialQuestionComplete);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return undefined;
    }

    let frame = 0;
    const syncPlayback = () => {
      frame = 0;
      const bounds = hero.getBoundingClientRect();
      const skyTop = document
        .querySelector("#sky-experience")
        ?.getBoundingClientRect().top;
      const beforeSkyLock = skyTop === undefined || skyTop > 1;
      const visible =
        beforeSkyLock &&
        bounds.bottom > window.innerHeight * 0.08 &&
        bounds.top < window.innerHeight;

      if (visible) {
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };

    const queuePlaybackSync = () => {
      if (!frame) frame = window.requestAnimationFrame(syncPlayback);
    };

    syncPlayback();
    window.addEventListener("scroll", queuePlaybackSync, { passive: true });
    window.addEventListener("resize", queuePlaybackSync);

    return () => {
      window.removeEventListener("scroll", queuePlaybackSync);
      window.removeEventListener("resize", queuePlaybackSync);
      window.cancelAnimationFrame(frame);
      video.pause();
    };
  }, []);

  return (
    <section ref={heroRef} className="parallax-hero" id="ecosystem">
      <video
        ref={videoRef}
        className="parallax-ocean-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
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
            LihaTech builds custom software, powerful websites, and AI workflows
            that automate and accelerate your business. We also offer practical
            Agentic AI courses and internships to help you stay future-ready.
          </motion.p>
          <motion.div className="parallax-hero-actions" variants={heroReveal}>
            <ParallaxButton href={primaryHref}>Start Your Project</ParallaxButton>
            <ParallaxButton href={secondaryHref} variant="secondary">
              Explore Training
            </ParallaxButton>
          </motion.div>
        </motion.div>
      </ParallaxContainer>
    </section>
  );
}
