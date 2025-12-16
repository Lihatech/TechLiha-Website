// src/pages/QaTestingServicePage.jsx
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Smartphone, Cpu, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function QaTestingServicePage() {
  return (
    <>
      {/* ===== Hero Section (unchanged) ===== */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <AutoBreadcrumb className="mb-5" />

            <p className="text-xs uppercase tracking-[0.3em] text-slate-300 font-semibold">
              Services
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
              QA & Testing Development
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Ensuring every software meets its requirements and user expectations with rigorously tested solutions
              that deliver perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Overview ===== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Cutting Costs, Minimizing Risks, Maximizing ROI
            </h2>
            <p className="text-slate-600 leading-relaxed">
              As a renowned Software Testing Company, our QA & Testing services are designed to reduce development
              costs, speed up time-to-market, and minimize technical and business risks, no matter the complexity
              of your requirements.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether desktop, mobile, or digital transformation applications, our software testing experts work
              with a focused approach to help clients maximize efficiency, improve time-to-market, and enhance ROI.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Augment the performance, reliability, and user-friendliness of your software with our distinctive QA services.
            </p>
          </motion.div>

          {/* Side card with highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Key Benefits
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Reduced cost of development
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Faster time-to-market
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Minimized technical and business risks
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Improved software performance and reliability
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== Core QA Capabilities (different layout: 2 columns instead of 4) ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 text-center">
            Core QA & Testing Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code size={22} />,
                title: "Functional Testing",
                text: "Ensure every feature works as intended and meets requirements.",
              },
              {
                icon: <Cpu size={22} />,
                title: "Performance Testing",
                text: "Optimize performance, load handling, and reliability under stress.",
              },
              {
                icon: <Smartphone size={22} />,
                title: "Mobile Testing",
                text: "Comprehensive testing across devices, OS, and resolutions.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: "Security & Compliance",
                text: "Protect sensitive data and maintain regulatory compliance.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-center sm:text-left">
            Ensure your software meets perfection standards
          </h3>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Talk to our QA experts <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </>
  );
}
