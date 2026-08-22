import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
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
import { services } from "../data/services";
import "../styles/service-pages.css";

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

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="services-page">
      <section className="service-catalog-hero">
        <MotionDiv
          className="service-shell service-catalog-hero__content"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <p className="service-kicker">Services</p>
          <h1>Technology Services Built for Scale</h1>
          <p>
            We architect, build, and secure enterprise-grade systems that
            power mission-critical business operations.
          </p>
          <div className="service-catalog-hero__actions">
            <Link
              className="service-button service-button--primary"
              to="/contact?topic=project"
            >
              Discuss your project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              className="service-button service-button--secondary"
              href="#service-catalog"
            >
              Explore services
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </MotionDiv>
      </section>

      <section className="service-catalog" id="service-catalog">
        <div className="service-shell">
          <MotionDiv
            className="service-catalog__heading"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="service-kicker">What we deliver</p>
            <h2>Specialist capability. One accountable team.</h2>
          </MotionDiv>

          <div className="service-card-grid">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon] ?? Code2;
              return (
                <MotionDiv
                  className="service-card-motion"
                  key={service.slug}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.14 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.4,
                    delay: shouldReduceMotion ? 0 : index * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link className="service-card" to={service.path}>
                    <span className="service-card__top">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span className="service-card__icon">
                        <Icon size={24} aria-hidden="true" />
                      </span>
                    </span>
                    <h3>{service.cardTitle}</h3>
                    <p>{service.cardSummary}</p>
                    <span className="service-card__link">
                      Explore service
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      <section className="service-detail__cta">
        <MotionDiv
          className="service-shell service-detail__cta-inner"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <p className="service-kicker">Start a conversation</p>
            <h2>Build the system your business needs next.</h2>
          </div>
          <Link
            className="service-button service-button--light"
            to="/contact?topic=project"
          >
            Discuss your project
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </MotionDiv>
      </section>
    </div>
  );
}
