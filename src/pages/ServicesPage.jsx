import {
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
        </MotionDiv>
      </section>

      <section className="service-catalog">
        <div className="service-shell">
          <div className="service-catalog__heading">
            <p className="service-kicker">What we deliver</p>
            <h2>Specialist capability. One accountable team.</h2>
          </div>

          <div className="service-card-grid">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon] ?? Code2;
              return (
                <Link
                  className="service-card"
                  to={service.path}
                  key={service.slug}
                >
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="service-detail__cta">
        <div className="service-shell service-detail__cta-inner">
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
        </div>
      </section>
    </div>
  );
}
