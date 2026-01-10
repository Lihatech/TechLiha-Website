import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AIDevelopmentTechnology() {
  return (
    <section className="bg-white text-black">
      {/* ================= HERO ================= */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <AutoBreadcrumb className="mb-5" />

            <p className="uppercase tracking-widest text-sm text-white/70">
              Technology
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
              AI Development Solutions
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Artificial intelligence enables organizations to automate
              decision-making, uncover deep insights, and build intelligent
              digital systems. We design and develop enterprise-grade AI
              solutions that are scalable, secure, and production-ready.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT — IMAGE */}
          <div className="w-full h-full">
            <img
              src="data:image/jpeg;base64,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"
              alt="Enterprise AI Development"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="bg-[#FAF7F2] p-12 rounded-2xl">
            <motion.h2
              className="text-3xl font-semibold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
            >
              Enterprise AI Application Development
            </motion.h2>

            <p className="text-lg text-black/70 leading-relaxed mb-6">
              AI has become a core driver of modern enterprise transformation.
              From intelligent automation to predictive intelligence, AI systems
              help organizations operate faster, smarter, and more efficiently.
            </p>

            <p className="text-lg text-black/70 leading-relaxed">
              At Liha Tech, we build AI solutions focused on scalability,
              explainability, and long-term reliability. Our architectures are
              designed to integrate seamlessly with existing enterprise systems
              while supporting future innovation.
            </p>
          </div>
        </div>
      </div>

      {/* ================= AI SERVICES ================= */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.h2
            className="text-3xl font-semibold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
          >
            AI Development Services
          </motion.h2>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Our AI development services cover the full lifecycle — from strategy
            and data preparation to model development, deployment, and ongoing
            optimization. We build intelligent systems aligned with real
            business objectives.
          </p>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            We specialize in machine learning systems, intelligent automation,
            predictive analytics, computer vision, and natural language
            processing for enterprise environments.
          </p>

          <p className="text-lg text-black/70 leading-relaxed">
            Every AI solution we deliver is built with a strong focus on
            security, governance, scalability, and production readiness.
          </p>
        </div>
      </div>

      {/* ================= AI USE CASES ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn}
        >
          Common AI Use Cases
        </motion.h2>

        <p className="text-lg text-black/70 leading-relaxed mb-6">
          AI solutions are widely adopted across industries to enhance decision
          quality, automate workflows, and improve customer experiences. Our
          systems support both operational intelligence and strategic planning.
        </p>

        <p className="text-lg text-black/70 leading-relaxed">
          Typical use cases include predictive analytics, intelligent
          recommendation systems, fraud detection, demand forecasting,
          conversational AI, and anomaly detection.
        </p>
      </div>

      {/* ================= APPROACH ================= */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.h2
            className="text-3xl font-semibold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
          >
            Our AI Development Approach
          </motion.h2>

          <p className="text-lg text-white/75 leading-relaxed mb-6">
            Our AI development approach begins with a deep understanding of
            business challenges and data readiness. We design architectures
            that balance model accuracy, system performance, and operational
            stability.
          </p>

          <p className="text-lg text-white/75 leading-relaxed">
            Through structured experimentation, rigorous validation, and
            continuous optimization, we deliver AI systems that provide
            measurable business value and long-term reliability.
          </p>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn}
        >
          Build Intelligent AI Solutions
        </motion.h2>

        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Partner with Liha Tech to develop scalable, secure AI solutions that
          transform data into intelligent business outcomes.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4
          bg-gray-600 text-white rounded-full
          hover:bg-gray-700 transition"
        >
          Talk to Our AI Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
