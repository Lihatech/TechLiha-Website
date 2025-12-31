// src/pages/ServicesPage.jsx
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, Cloud, Code2, CheckCircle } from "lucide-react";

import { FaAndroid, FaShieldAlt, FaAws } from "react-icons/fa";
import { SiReact, SiPython, SiApachehadoop } from "react-icons/si";

import SEO from "../config/SEO";

const MotionLink = motion(NavLink);

export default function ServicesPage() {
  return (
    <>
      <SEO page="services" />

      {/* ================= HERO ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 max-w-4xl leading-tight"
          >
            Technology Services Built for Scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-3xl"
          >
            We architect, build, and secure enterprise-grade systems that power
            mission-critical business operations.
          </motion.p>
        </div>
      </section>

      {/* ================= BENTO GRID ================= */}
      <section className="bg-slate-50 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
            <ServiceCard
              to="/services/ai-data-science"
              title="AI & Data Science"
              desc="Machine learning, predictive analytics, and intelligent automation built on enterprise data."
              icon={<SiPython />}
              hoverColor="#4f46e5" // indigo-600
              className="lg:col-span-4 lg:row-span-2"
            />

            <ServiceCard
              to="/services/cloud-migration"
              title="Cloud Migration"
              desc="Legacy modernization with cloud-native architecture and automation."
              icon={<Cloud />}
              hoverColor="#0284c7" // sky-600
              className="lg:col-span-2"
            />

            <ServiceCard
              to="/services/aws"
              title="AWS Solutions"
              desc="Secure and scalable solutions built on Amazon Web Services."
              icon={<FaAws />}
              hoverColor="#f97316" // orange-500
              className="lg:col-span-2"
            />

            <ServiceCard
              to="/services/web"
              title="Web Development"
              desc="High-performance web platforms using modern frameworks."
              icon={<SiReact />}
              hoverColor="#06b6d4" // cyan-500
              className="lg:col-span-3"
            />

            <ServiceCard
              to="/services/mobile"
              title="Android Development"
              desc="Enterprise-grade Android applications."
              icon={<FaAndroid />}
              hoverColor="#16a34a" // green-600
              className="lg:col-span-3"
            />

            <ServiceCard
              to="/services/big-data"
              title="Big Data Engineering"
              desc="Scalable data platforms and pipelines."
              icon={<SiApachehadoop />}
              hoverColor="#ca8a04" // yellow-600
              className="lg:col-span-2"
            />

            <ServiceCard
              to="/services/qa-testing"
              title="QA & Testing"
              desc="Reliability, performance, and security assurance."
              icon={<CheckCircle />}
              hoverColor="#059669" // emerald-600
              className="lg:col-span-2"
            />

            <ServiceCard
              to="/services/enterprise-solutions"
              title="Enterprise Solutions"
              desc="Custom systems aligned with business strategy."
              icon={<Code2 />}
              hoverColor="#7c3aed" // violet-600
              className="lg:col-span-2"
            />

            <ServiceCard
              to="/services/cyber-security"
              title="Cyber Security"
              desc="Protection against modern cyber threats."
              icon={<FaShieldAlt />}
              hoverColor="#dc2626" // red-600
              className="lg:col-span-6"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= CARD ================= */
function ServiceCard({ to, title, desc, icon, className, hoverColor }) {
  const iconVariants = {
    initial: { color: "#0f172a" }, // slate-900
    hover: { color: hoverColor },
  };

  return (
    <MotionLink
      to={to}
      initial="initial"
      whileHover="hover"
      whileInView="initial"
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`
        group
        relative
        p-6 sm:p-8
        rounded-2xl sm:rounded-3xl
        bg-white
        border
        shadow-sm
        hover:shadow-lg
        transition-all
        flex flex-col justify-between
        min-h-[220px]
        md:hover:-translate-y-1
        ${className}
      `}
    >
      <div>
        {/* ICON reacts to CARD hover */}
        <motion.div
          variants={iconVariants}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-2xl sm:text-3xl"
        >
          {icon}
        </motion.div>

        <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
        Explore
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </MotionLink>
  );
}
