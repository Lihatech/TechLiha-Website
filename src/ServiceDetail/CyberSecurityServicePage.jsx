import { motion } from "framer-motion";
import { ShieldCheck, Lock, Bug, Eye, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

/* ================= ANIMATIONS ================= */
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

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function CyberSecurityServicePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cyber.webp')" }}

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

            <p className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
              Cyber Security Solutions
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Enterprise-Grade Protection
              <span className="block text-slate-300 mt-2">
                Securing Systems, Data & Trust
              </span>
            </h1>

            <p className="mt-6 text-slate-300 text-base leading-relaxed">
              We help organizations protect their digital assets against malware,
              ransomware, phishing, and evolving cyber threats  ensuring long-term
              security and business continuity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="bg-white py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left Text */}
          <motion.div variants={fadeLeft}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Secure Every Layer of Your Technology
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Regardless of whether you are running existing software or building
              new digital platforms, cyber security must be embedded at every level.
              A single vulnerability can expose sensitive data, disrupt operations,
              and damage customer trust.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              LihaTech partners with organizations at every stage of their technology
              journey to proactively identify risks, strengthen defenses, and build
              resilient systems.
            </p>
          </motion.div>

          {/* Right Capabilities */}
          <motion.div
            variants={fadeRight}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Bug,
                title: "Threat Prevention",
                desc: "Protection against malware, ransomware, spyware, and viruses.",
              },
              {
                icon: Lock,
                title: "Data & Access Security",
                desc: "Safeguarding sensitive data and preventing unauthorized access.",
              },
              {
                icon: Eye,
                title: "Security Gap Analysis",
                desc: "Deep visibility into vulnerabilities across systems and applications.",
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Defense",
                desc: "Protection against phishing, DDoS, and advanced cyber attacks.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="border border-slate-200 rounded-xl p-6 transition-all hover:shadow-lg"
              >
                <div className="p-3 rounded-md bg-slate-900 text-white w-fit mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===== SECURITY FRAMEWORK ===== */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold text-slate-900"
          >
            Visibility Into Your Security Posture
          </motion.h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Our team has developed a unique security analysis framework that helps
            organizations clearly understand their software systems, identify potential
            security gaps, and prioritize remediation.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Instead of generic reports, we provide actionable insights that empower
            teams to strengthen security with confidence.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Your Shield Against Cyber Threats
          </h2>

          <p className="mt-5 text-slate-300 leading-relaxed">
            Partner with LihaTech to protect your systems, customers, and reputation
            with enterprise-grade cyber security.
          </p>

          <NavLink
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-slate-900 rounded-lg font-medium hover:bg-slate-800 transition"
          >
            Talk to Our Security Experts <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </>
  );
}
