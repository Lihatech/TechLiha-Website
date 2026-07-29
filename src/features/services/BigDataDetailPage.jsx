import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  BarChart3,
  Cloud,
  Workflow,
  CheckCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../../components/AutoBreadcrumb";

/* ================= ANIMATIONS ================= */
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

export default function BigDataDetailPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bigdata.webp')" }}

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
              Big Data Solutions
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Big Data doesn’t have to be complex. Unlock powerful insights and
              gain full visibility into your business with scalable, intelligent
              data platforms.
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
              Turn Complex Data Into Business Intelligence
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Whether you’re an established data-driven organization or a
              business overwhelmed by massive unstructured datasets, our Big
              Data solutions help extract insights that drive measurable
              outcomes.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Using modern cloud platforms, distributed computing, and advanced
              analytics tools, we design scalable systems that grow alongside
              your business.
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
                "Scalable big data architectures",
                "Cloud & cluster computing solutions",
                "Advanced analytics & reporting",
                "Customer behavior & sentiment analysis",
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
            Core Big Data Capabilities
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
                icon: <Database size={22} />,
                title: "Large-Scale Data Processing",
                text: "Handle massive, unstructured datasets using distributed systems.",
              },
              {
                icon: <Cloud size={22} />,
                title: "Cloud-Native Platforms",
                text: "Efficient pipelines built on modern cloud and cluster technologies.",
              },
              {
                icon: <BarChart3 size={22} />,
                title: "Advanced Analytics",
                text: "Actionable insights using statistical models and machine learning.",
              },
              {
                icon: <Workflow size={22} />,
                title: "Customer Intelligence",
                text: "Sentiment and behavior modeling to enhance engagement.",
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

      {/* ================= USE CASE ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-16 sm:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Intelligent Customer Sentiment Models
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            We build machine learning models that detect customer sentiment and
            attitude markers in real time. These insights alert sales teams to
            negative signals and highlight influential factors using Gradient
            Boosting and advanced analytics techniques.
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
            Ready to unlock insights from your data?
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
