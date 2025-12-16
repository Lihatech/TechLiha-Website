// src/pages/EnterpriseServicePage.jsx
import { motion } from "framer-motion";
import { ArrowRight, Layers, Users, Cpu, Database, CheckCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function EnterpriseServicePage() {
  return (
    <>
      {/* ===== Hero Section (unchanged) ===== */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531497865142-ef0f7d5ff3c6?auto=format&fit=crop&w=1920&q=80')",
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
              Enterprise Solutions Development
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              In today’s fast-moving era, organizations need the right balance between evolving technology and business objectives. Transform your enterprise effectively with our strategic technology approach.
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
              Strategic Enterprise Transformation
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We work closely with customers to understand how their enterprise functions and the processes they follow.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Based on this, we select the right technology platforms and packages to automate and optimize operations, ensuring a smooth transformation aligned with business objectives.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our experience with multiple Fortune 500 companies gives us the insights and expertise required to overcome enterprise challenges efficiently.
            </p>
          </motion.div>

          {/* Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Our Enterprise Edge
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Tailored technology solutions for enterprise needs
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Automation of business processes
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Deep understanding of enterprise operations
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Experience with Fortune 500 clients
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== Core Capabilities (unique icon style & layout) ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 text-center">
            Core Enterprise Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Layers size={22} />,
                title: "Process Automation",
                text: "Streamline and automate complex business processes for efficiency.",
              },
              {
                icon: <Users size={22} />,
                title: "Collaboration & Integration",
                text: "Enable seamless communication between teams and departments.",
              },
              {
                icon: <Cpu size={22} />,
                title: "Scalable Infrastructure",
                text: "Build resilient, scalable IT systems to support enterprise growth.",
              },
              {
                icon: <Database size={22} />,
                title: "Data-Driven Insights",
                text: "Leverage analytics and data management for informed decisions.",
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
            Ready to transform your enterprise with strategic technology solutions?
          </h3>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Talk to our experts <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </>
  );
}
