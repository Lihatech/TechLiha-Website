import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Layers,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../../components/AutoBreadcrumb";

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

export default function MobileAppDetailPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/android.webp')" }}

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
              Android App Development
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              High-performance Android applications built with speed, stability,
              and scalability in mind.
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
              Mobility Solutions Built for Speed & Quality
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Android application development demands deep technical expertise
              and a strong understanding of performance, usability, and
              scalability. We deliver advanced mobility solutions using modern
              development tools and proven engineering practices.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              By combining years of experience with reusable in-house modules,
              we significantly reduce development effort while maintaining
              enterprise-grade quality and reliability.
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
                "Native Android application development",
                "Pre-built reusable modules (up to 70%)",
                "Faster delivery with reduced development time",
                "Enterprise-grade performance & security",
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
            Core Android Development Capabilities
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
                icon: <Smartphone size={22} />,
                title: "Native Android Apps",
                text: "High-performance apps built with modern Android frameworks.",
              },
              {
                icon: <Layers size={22} />,
                title: "Reusable Modules",
                text: "Pre-built components accelerating up to 70% of development.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: "Quality & Security",
                text: "Rigorous testing to ensure reliability and data protection.",
              },
              {
                icon: <Clock size={22} />,
                title: "Rapid Time-to-Market",
                text: "Optimized delivery cycles for faster product launches.",
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

      {/* ================= DELIVERY APPROACH ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-16 sm:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Faster Delivery Without Compromising Quality
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Our in-house Android modules account for up to 70% of application
            development, allowing us to drastically reduce coding time. The
            remaining functionality is custom-built to meet your exact business
            requirements, enabling quicker launches compared to traditional
            development approaches.
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
            Ready to launch your Android application?
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
