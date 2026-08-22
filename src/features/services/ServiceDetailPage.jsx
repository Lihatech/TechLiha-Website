import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  Check,
  Cloud,
  Code2,
  Database,
  Globe2,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import "../../styles/service-pages.css";

const MotionArticle = motion.article;
const MotionDiv = motion.div;

const serviceIcons = {
  ai: BrainCircuit,
  cloud: Cloud,
  aws: ServerCog,
  server: ServerCog,
  web: Globe2,
  mobile: Smartphone,
  data: Database,
  qa: BadgeCheck,
  quality: BadgeCheck,
  enterprise: Building2,
  security: ShieldCheck,
  devops: Workflow,
  code: Code2,
};

const reveal = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

export default function ServiceDetailPage({ service }) {
  const Icon = serviceIcons[service.icon] ?? Code2;
  const serviceNumber = services.findIndex((item) => item.slug === service.slug) + 1;
  const shouldReduceMotion = useReducedMotion();
  const revealProps = shouldReduceMotion ? {} : reveal;

  return (
    <div className="service-detail">
      <section className="service-detail__hero">
        <div className="service-shell">
          <Link className="service-back" to="/services">
            <ArrowLeft size={17} aria-hidden="true" />
            Back to services
          </Link>

          <MotionDiv
            className="service-detail__hero-grid"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <div className="service-detail__hero-copy">
              <p className="service-kicker">{service.eyebrow}</p>
              <h1>
                {service.title}
                {service.accent && <em>{service.accent}</em>}
              </h1>
              <p>{service.summary}</p>
              <Link
                className="service-button service-button--primary"
                to="/contact?topic=project"
              >
                Start a project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="service-detail__hero-mark" aria-hidden="true">
              <span>{String(serviceNumber).padStart(2, "0")}</span>
              <Icon size={58} strokeWidth={1.5} />
              <small>{service.cardTitle}</small>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="service-detail__overview">
        <div className="service-shell service-detail__overview-grid">
          <MotionArticle {...revealProps}>
            <p className="service-kicker">Overview</p>
            <h2>{service.overviewTitle}</h2>
            {service.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </MotionArticle>

          {service.deliverables?.length > 0 && (
            <MotionArticle className="service-deliverables" {...revealProps}>
              <p className="service-kicker">{service.deliverTitle}</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <span>
                      <Check size={16} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </MotionArticle>
          )}
        </div>
      </section>

      <section className="service-detail__capabilities">
        <div className="service-shell">
          <MotionDiv className="service-detail__section-heading" {...revealProps}>
            <p className="service-kicker">Capabilities</p>
            <h2>{service.capabilitiesTitle}</h2>
          </MotionDiv>

          <div className="service-capability-grid">
            {service.capabilities.map((capability, index) => (
              <MotionArticle
                className="service-capability"
                key={capability.title}
                {...revealProps}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: {
                          duration: 0.24,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        ...reveal.transition,
                        delay: index * 0.035,
                      }
                }
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </MotionArticle>
            ))}
          </div>
        </div>
      </section>

      {service.highlights?.map((highlight) => (
        <section className="service-highlight" key={highlight.title}>
          <MotionArticle className="service-shell service-highlight__inner" {...revealProps}>
            <p className="service-kicker">Why Techliha</p>
            <h2>{highlight.title}</h2>
            <div>
              {highlight.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </MotionArticle>
        </section>
      ))}

      <section className="service-detail__cta">
        <MotionDiv className="service-shell service-detail__cta-inner" {...revealProps}>
          <div>
            <p className="service-kicker">Let&apos;s build</p>
            <h2>{service.ctaTitle}</h2>
          </div>
          <Link
            className="service-button service-button--light"
            to="/contact?topic=project"
          >
            {service.ctaLabel}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </MotionDiv>
      </section>
    </div>
  );
}
