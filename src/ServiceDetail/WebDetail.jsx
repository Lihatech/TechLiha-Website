import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function WebDevelopmentService() {
  return (
    <>
      {/* ================= Hero Section ================= */}
      <section
        className="relative pt-28 sm:pt-32 pb-20 bg-slate-900"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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

      {/* ================= Content Section ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2"
          >
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
                CodeNucleus Solutions is a leading web and mobile design and
                development company delivering scalable web development
                solutions across industries. Our team brings over a decade of
                experience in building robust, high-performing digital
                platforms.
              </p>

              <p>
                We specialize in complete web development lifecycles — from
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-slate-50 border border-slate-200 rounded-xl p-8 h-fit"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-5">
              What We Deliver
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-slate-900 mt-0.5" />
                Scalable enterprise web platforms
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-slate-900 mt-0.5" />
                Secure and compliant development practices
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-slate-900 mt-0.5" />
                End-to-end delivery from concept to launch
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-slate-900 mt-0.5" />
                Long-term maintenance and support
              </li>
            </ul>

            <NavLink
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 w-full justify-center text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition py-3 rounded-md"
            >
              Talk to an Expert <ArrowRight size={16} />
            </NavLink>
          </motion.aside>
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-semibold text-white"
          >
            Ready to build an enterprise-grade web platform?
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
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
