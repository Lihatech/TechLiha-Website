import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../../components/AutoBreadcrumb";

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

export default function AiDetailPage() {
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
              src="/images/techImage/AI-sol.png"
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
            Our AI development services cover the full lifecycle from strategy
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
            business challenges and data readiness. We design architectures that
            balance model accuracy, system performance, and operational
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
