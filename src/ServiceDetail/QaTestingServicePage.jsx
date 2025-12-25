import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Smartphone, Cpu, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function QaTestingServicePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
            <AutoBreadcrumb className="mb-5" />
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300 font-semibold">Services</p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
              QA & Testing Development
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Ensuring every software meets its requirements and user expectations with rigorously tested solutions that deliver perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {/* Left Text */}
          <motion.div variants={fadeLeft} className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Cutting Costs, Minimizing Risks, Maximizing ROI</h2>
            <p className="text-slate-600 leading-relaxed">
              Our QA & Testing services reduce development costs, speed up time-to-market, and minimize technical and business risks.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether desktop, mobile, or digital transformation apps, our software testing experts maximize efficiency and enhance ROI.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Augment the performance, reliability, and user-friendliness of your software with our distinctive QA services.
            </p>
          </motion.div>

          {/* Right Key Benefits */}
          <motion.div variants={fadeRight} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Key Benefits</h3>
            <ul className="space-y-4 text-sm text-slate-700">
              {["Reduced cost of development", "Faster time-to-market", "Minimized technical and business risks", "Improved software performance and reliability"].map((text, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle size={18} className="text-slate-900 mt-0.5" /> {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== CORE QA CAPABILITIES ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 text-center">Core QA & Testing Capabilities</h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: <Code size={22} />, title: "Functional Testing", text: "Ensure every feature works as intended and meets requirements." },
              { icon: <Cpu size={22} />, title: "Performance Testing", text: "Optimize performance, load handling, and reliability under stress." },
              { icon: <Smartphone size={22} />, title: "Mobile Testing", text: "Comprehensive testing across devices, OS, and resolutions." },
              { icon: <ShieldCheck size={22} />, title: "Security & Compliance", text: "Protect sensitive data and maintain regulatory compliance." },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-center sm:text-left">Ensure your software meets perfection standards</h3>
          <NavLink to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
            Talk to our QA experts <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </>
  );
}
