import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  ShieldCheck,
  LineChart,
  Layers,
  CheckCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ================= PAGE ================= */

export default function AIDataScienceServicePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: "url('/images/ai.webp')" }}

        />
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <AutoBreadcrumb className="mb-5" />

            <p className="text-xs uppercase tracking-[0.3em] text-slate-300 font-semibold">
              Services
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
              AI & Data Science Development
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Enterprise-grade artificial intelligence and machine learning
              solutions designed to deliver real business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-16 sm:py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeLeft}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Practical AI That Solves Real Problems
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Artificial intelligence and machine learning are often perceived
              as expensive and complex. Our approach focuses on delivering
              measurable outcomes through full-cycle AI development — from
              curated training datasets to production-ready models.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We work closely with enterprises to design intelligent systems
              that uncover insights, automate decision-making, enhance security,
              and unlock the value hidden within existing data.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              What We Deliver
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              {[
                "Full-cycle AI & ML solution development",
                "Pre-built & custom training datasets",
                "Production-ready models & deployment",
                "Industry-specific AI implementations",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12"
          >
            Core AI & Data Science Capabilities
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <LineChart size={22} />,
                title: "Predictive Analytics",
                text: "Forecast trends and outcomes using advanced statistical and ML models.",
              },
              {
                icon: <Cpu size={22} />,
                title: "Machine Learning Systems",
                text: "Custom algorithms built for scalability, accuracy, and performance.",
              },
              {
                icon: <Layers size={22} />,
                title: "Feature Engineering",
                text: "Extract meaningful features to improve model intelligence and accuracy.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: "Intelligent Security",
                text: "AI-driven security and anomaly detection solutions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-16 sm:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Industries We Empower
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Our AI & data science solutions have powered innovation across
            finance, insurance, healthcare, high-tech, and communications —
            helping organizations gain competitive advantage through
            intelligence.
          </p>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-slate-900 py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Ready to build intelligent systems with AI?
          </h3>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Talk to our experts <ArrowRight size={18} />
          </NavLink>
        </div>
      </motion.section>
    </>
  );
}
