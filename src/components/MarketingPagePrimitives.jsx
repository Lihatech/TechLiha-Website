import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/marketing-pages.css";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({ children, className = "" }) {
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

export function PageHero({ eyebrow, title, accent, copy, actions, aside }) {
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
