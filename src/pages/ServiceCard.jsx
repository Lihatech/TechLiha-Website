import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Brain,
  Database,
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

/* ---------------- ANIMATIONS ---------------- */

const headline = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- DATA ---------------- */

const headerWrap = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const lineReveal = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const services = [
  {
    icon: Brain,
    title: "AI & Data Science",
    desc: "Production-grade AI systems that turn raw data into predictive intelligence and automation.",
    points: ["Custom ML models", "NLP & Computer Vision", "MLOps & deployment"],
    link: "/services/ai-data-science",
    color: "text-indigo-400",
  },
  {
    icon: Database,
    title: "Big Data Engineering",
    desc: "Scalable data platforms designed to handle massive volume, velocity, and complexity.",
    points: [
      "Streaming pipelines",
      "Enterprise data lakes",
      "Analytics-ready architecture",
    ],
    link: "/services/big-data",
    color: "text-emerald-400",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Secure, SEO-optimized web platforms built for performance and long-term growth.",
    points: [
      "Modern frontend stacks",
      "Backend APIs",
      "Performance optimization",
    ],
    link: "/services/web",
    color: "text-sky-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Robust mobile apps focused on UX, performance, and enterprise security.",
    points: [
      "Android & cross-platform",
      "Clean UI systems",
      "Secure integrations",
    ],
    link: "/services/mobile",
    color: "text-violet-400",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Cloud-native infrastructure with automation that ensures reliability and scale.",
    points: [
      "AWS & cloud migration",
      "CI/CD pipelines",
      "Container orchestration",
    ],
    link: "/services/cloud-migration",
    color: "text-cyan-400",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "End-to-end security covering audits, compliance, and proactive threat defense.",
    points: [
      "Risk assessments",
      "Compliance frameworks",
      "Penetration testing",
    ],
    link: "/services/cyber-security",
    color: "text-rose-400",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function ServicesNarrative() {
  return (
    <section className="bg-white text-zinc-900 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={headerWrap}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          {/* Section line */}
          <motion.span
            variants={lineReveal}
            className="block h-px w-16 bg-zinc-300 mb-6 origin-left"
          />

          <motion.h2
            variants={textReveal}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            What We Do
          </motion.h2>

          <motion.p
            variants={textReveal}
            className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed"
          >
            We design and engineer digital systems that help enterprises move
            faster, scale smarter, and stay secure.
          </motion.p>
        </motion.div>

        {/* Services */}
        <div className="space-y-14">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="group border border-zinc-200 rounded-2xl bg-white
           hover:bg-zinc-50 transition-colors"
              >
                <div className="grid md:grid-cols-12 gap-8 p-6 sm:p-8 md:p-10">
                  {/* LEFT – Identity */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 18,
                        }}
                        className={`w-12 h-12 rounded-xl bg-zinc-100
flex items-center justify-center ${service.color}`}
                      >
                        <Icon size={22} />
                      </motion.div>

                      <h3 className="text-xl sm:text-2xl font-semibold">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* RIGHT – Details */}
                  <div className="md:col-span-8 flex flex-col justify-between">
                    <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-zinc-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <NavLink
                      to={service.link}
                      className="inline-flex items-center gap-2 text-sm font-medium
           text-zinc-900 hover:text-cyan-600 transition-colors w-fit"
                    >
                      View Service <ArrowRight size={16} />
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
