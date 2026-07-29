import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../../components/AutoBreadcrumb";
import {
  Layout,
  Server,
  ShieldCheck,
  Gauge,
  Smartphone,
  Cloud,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function WebDevelopmentDetailPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative pt-28 sm:pt-32 pb-20 bg-slate-900"
        style={{ backgroundImage: "url('/images/web.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="max-w-3xl"
          >
            <AutoBreadcrumb className="mb-5" />
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Services
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
              Web Development
            </h1>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Scalable, secure, and future-ready web platforms engineered for
              enterprise environments and long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTENT & SIDEBAR ===== */}
      <section className="bg-white py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Content */}
          <motion.div variants={fadeLeft} className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-md bg-slate-900 text-white">
                <Code2 size={20} />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Service Overview
              </h2>
            </div>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                LihaTech is a leading web and mobile design and development
                company delivering scalable web development solutions across
                industries. Our team brings over a decade of experience in
                building robust, high-performing digital platforms.
              </p>
              <p>
                We specialize in complete web development lifecycles from
                strategy and design to development, testing, and deployment. Our
                developers stay ahead of evolving technologies and enterprise
                trends to deliver future-proof solutions.
              </p>
              <p>
                With expertise across modern and traditional technologies such
                as Laravel, Angular, Java, Drupal, Magento, and more, we ensure
                your digital presence truly reflects your brand while meeting
                strict enterprise requirements.
              </p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            variants={fadeRight}
            className="bg-slate-50 border border-slate-200 rounded-xl p-8 h-fit"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-5">
              What We Deliver
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "Scalable enterprise web platforms",
                "Secure and compliant development practices",
                "End-to-end delivery from concept to launch",
                "Long-term maintenance and support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-slate-900 mt-0.5" />{" "}
                  {item}
                </li>
              ))}
            </ul>
            <NavLink
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 w-full justify-center text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition py-3 rounded-md"
            >
              Talk to an Expert <ArrowRight size={16} />
            </NavLink>
          </motion.aside>
        </motion.div>
      </section>

      {/* ===== CORE WEB DEVELOPMENT CAPABILITIES ===== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12"
          >
            Core Web Development Capabilities
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Layout size={22} />,
                title: "Frontend Engineering",
                text: "High-performance, accessible user interfaces built with modern frameworks and design systems.",
              },
              {
                icon: <Server size={22} />,
                title: "Backend & API Development",
                text: "Robust, scalable backend architectures and secure APIs designed for enterprise workloads.",
              },
              {
                icon: <Smartphone size={22} />,
                title: "Responsive & Cross-Platform",
                text: "Mobile-first, responsive web applications optimized across devices and browsers.",
              },
              {
                icon: <Gauge size={22} />,
                title: "Performance Optimization",
                text: "Speed, scalability, and reliability improvements through modern tooling and best practices.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: "Security & Compliance",
                text: "Secure coding practices, data protection, and compliance with enterprise standards.",
              },
              {
                icon: <Cloud size={22} />,
                title: "Cloud-Native Deployment",
                text: "CI/CD pipelines, containerization, and cloud-ready deployments for long-term scalability.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white"
          >
            Ready to build an enterprise-grade web platform?
          </motion.h3>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6"
          >
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
            >
              Get Started <ArrowRight size={16} />
            </NavLink>
          </motion.div>
        </div>
      </section>
    </>
  );
}
