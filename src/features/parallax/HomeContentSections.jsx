import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Phone,
  Quote,
} from "lucide-react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../../components/Footer";
import { projects } from "../../data/siteContent";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Techliha demonstrated strong technical expertise and professionalism. The collaboration was smooth and results were delivered as promised.",
    name: "Gajana Bhole",
    role: "Director, VimDigitech, Pune",
  },
  {
    quote:
      "Working with Techliha was a great experience. Their team understands business needs and delivers scalable, reliable solutions.",
    name: "Komal Deshmukh",
    role: "Founder, CodeNucleus Solutions, Pune",
  },
  {
    quote:
      "The team showed excellent coordination and timely delivery. Their approach and communication were highly professional.",
    name: "Sushant C.",
    role: "HR, Deloitte, Hyderabad",
  },
];

function SectionIntro({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`sky-section-intro sky-section-intro--${align}`}>
      <p className="sky-section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="sky-section-copy">{copy}</p>}
    </div>
  );
}

function SectionReveal({ children, className = "" }) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    const context = gsap.context(() => {
      const revealTargets = root.querySelectorAll("[data-sky-reveal]:not([data-sky-card])");
      const cardTargets = root.querySelectorAll("[data-sky-card]");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      });

      timeline.from(revealTargets, {
        autoAlpha: 0,
        y: 14,
        duration: 0.38,
        stagger: 0.05,
        ease: "power2.out",
      });

      if (cardTargets.length) {
        timeline.from(
          cardTargets,
          {
            autoAlpha: 0,
            y: 18,
            duration: 0.42,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "transform",
          },
          0.08,
        );
      }
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}

function ProjectGallery({ images, title }) {
  const galleryRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || isPaused || !isVisible || images.length < 2) return undefined;

    const timer = window.setInterval(
      () => {
        setSlideDirection(1);
        setActiveImage((current) => (current + 1) % images.length);
      },
      4200,
    );
    return () => window.clearInterval(timer);
  }, [images.length, isPaused, isVisible, reducedMotion]);

  const moveImage = (direction) => {
    setSlideDirection(direction);
    setActiveImage((current) => (current + direction + images.length) % images.length);
  };

  const image = images[activeImage];

  return (
    <figure
      ref={galleryRef}
      className="sky-project-gallery"
      aria-label={`${title} project gallery`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="sky-project-gallery__stage">
        <div className="sky-project-gallery__glow" aria-hidden="true" />
        <div className="sky-project-gallery__frame">
          <AnimatePresence initial={false} custom={slideDirection}>
            <Motion.img
              key={image.src}
              src={image.src}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              alt={`${title} showcase slide ${activeImage + 1} of ${images.length}`}
              custom={slideDirection}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: slideDirection * 64 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: slideDirection * -64 }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </AnimatePresence>
        </div>
        <span className="sky-project-gallery__count" aria-hidden="true">
          {String(activeImage + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          className="sky-project-gallery__arrow sky-project-gallery__arrow--previous"
          onClick={() => moveImage(-1)}
          aria-label={`Previous ${title} image`}
        >
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="sky-project-gallery__arrow sky-project-gallery__arrow--next"
          onClick={() => moveImage(1)}
          aria-label={`Next ${title} image`}
        >
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </figure>
  );
}

function FeaturedSystemSection() {
  return (
    <section className="sky-content-section sky-projects" id="featured-system">
      <div className="sky-content-inner sky-projects__panel">
        <SectionReveal className="sky-projects__header">
          <div data-sky-reveal>
            <SectionIntro
              eyebrow="SELECTED WORK"
              title="Real systems. Clear business outcomes."
              copy="Three Techliha projects built around practical problems, from the factory floor to conversational commerce."
            />
          </div>
        </SectionReveal>

        <div className="sky-project-list">
          {projects.map((project) => (
            <SectionReveal className="sky-project-row" key={project.title}>
              <article className="sky-project-row__inner">
                <div className="sky-project-copy" data-sky-reveal>
                  <div className="sky-project-copy__meta">
                    <span>{project.number}</span>
                    <p>{project.eyebrow}</p>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="sky-project-copy__description">{project.copy}</p>
                  <div className="sky-project-copy__outcome">
                    <span>OUTCOME</span>
                    <p>{project.outcome}</p>
                  </div>
                  <ul aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <a href="/contact?topic=project">
                    Discuss a similar project <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
                <div data-sky-card>
                  <ProjectGallery images={project.images} title={project.title} />
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningSection() {
  return (
    <section className="sky-content-section sky-learning" id="training">
      <div className="sky-content-inner">
        <SectionReveal className="sky-learning-program">
          <header className="sky-learning-header" data-sky-reveal>
            <div>
              <p className="sky-section-eyebrow">AGENTIC AI LEARNING</p>
              <h2>Learn Agentic AI by building with it.</h2>
            </div>
            <div className="sky-learning-header__copy">
              <p>
                Choose a focused online or offline course designed around practical
                Agentic AI skills.
              </p>
              <div aria-label="Available learning formats">
                <span>Online</span>
                <span>Offline</span>
                <span>Project-led</span>
              </div>
            </div>
          </header>

          <div className="sky-learning-paths">
            <article id="agentic-ai-course" data-sky-card>
              <div className="sky-learning-paths__top">
                <span><Bot size={24} aria-hidden="true" /></span>
                <b>01</b>
              </div>
              <p>ONLINE &amp; OFFLINE COURSE</p>
              <h3>Agentic AI Course</h3>
              <p className="sky-learning-paths__summary">
                Understand how AI agents reason, use tools, retain context, and complete
                multi-step workflows.
              </p>
              <ul>
                <li><Check size={15} /> Agent foundations, tools, memory, and workflows</li>
                <li><Check size={15} /> Guided practical build sessions</li>
                <li><Check size={15} /> Join online or attend offline</li>
              </ul>
              <a href="/training/course">
                Ask about the course <ArrowRight size={15} />
              </a>
            </article>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="sky-content-section sky-voices" id="client-voices">
      <div className="sky-content-inner">
        <SectionReveal>
          <div data-sky-reveal>
            <SectionIntro
              eyebrow="CLIENT VOICES"
              title="Good work should feel clear from beginning to end."
              copy="The software matters. So do the communication, coordination, and confidence that surround it."
              align="center"
            />
          </div>
          <div className="sky-voice-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} data-sky-card>
                <Quote size={28} aria-hidden="true" />
                <blockquote>“{testimonial.quote}”</blockquote>
                <div>
                  <span>{testimonial.name.charAt(0)}</span>
                  <p><b>{testimonial.name}</b><small>{testimonial.role}</small></p>
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function FinalInvitation() {
  return (
    <section className="sky-content-section sky-final" id="contact-techliha">
      <div className="sky-content-inner">
        <SectionReveal className="sky-final-card">
          <div data-sky-reveal>
            <p className="sky-section-eyebrow">START A CONVERSATION</p>
            <h2>Have a process that should work <em>smarter?</em></h2>
          </div>
          <div data-sky-reveal>
            <p>
              From a focused first release to a dependable enterprise platform,
              let&apos;s shape the technology around the outcome you need.
            </p>
            <div className="sky-final-actions">
              <a className="sky-button sky-button--light" href="/contact?topic=project">
                Start a project <ArrowRight size={16} />
              </a>
              <a className="sky-button sky-button--outline-light" href="tel:+919172743364">
                <Phone size={15} /> +91 9172743364
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export default function HomeContentSections() {
  return (
    <>
      <FeaturedSystemSection />
      <LearningSection />
      <TestimonialsSection />
      <FinalInvitation />
      <Footer />
    </>
  );
}
