import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Layers,
  Rocket,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function AndroidAppServicePage() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1920&q=80')",
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
              Android App Development
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              High-performance Android applications built with speed, stability,
              and scalability in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Overview ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              What We Deliver
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Native Android application development
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Pre-built reusable modules (up to 70%)
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Faster delivery with reduced development time
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Enterprise-grade performance & security
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== Capabilities ===== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12">
            Core Android Development Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-6"
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

      {/* ===== Delivery Approach ===== */}
      <section className="bg-white py-16 sm:py-20">
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
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16">
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
      </section>
    </>
  );
}
