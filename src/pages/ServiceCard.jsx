import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const services = [
  {
    icon: Brain,
    title: "AI & Data Science",
    desc: "Custom AI models, predictive analytics, and intelligent automation built for scale.",
    link: "/services/ai-data-science",
    color: "text-indigo-400",
    bgShape: "bg-gradient-to-br from-indigo-700/20 to-indigo-400/10",
  },
  {
    icon: Database,
    title: "Big Data Engineering",
    desc: "High-volume data pipelines, real-time processing, and enterprise data platforms.",
    link: "/services/big-data",
    color: "text-emerald-400",
    bgShape: "bg-gradient-to-br from-emerald-700/20 to-emerald-400/10",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Secure, scalable, and high-performance web applications for modern businesses.",
    link: "/services/web",
    color: "text-sky-400",
    bgShape: "bg-gradient-to-br from-sky-700/20 to-sky-400/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Robust Android and cross-platform apps designed for growth.",
    link: "/services/mobile",
    color: "text-violet-400",
    bgShape: "bg-gradient-to-br from-violet-700/20 to-violet-400/10",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Cloud migration, CI/CD pipelines, and DevOps automation for reliability.",
    link: "/services/cloud-migration",
    color: "text-cyan-400",
    bgShape: "bg-gradient-to-br from-cyan-700/20 to-cyan-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Risk assessments, compliance, and advanced threat protection solutions.",
    link: "/services/cyber-security",
    color: "text-rose-400",
    bgShape: "bg-gradient-to-br from-rose-700/20 to-rose-400/10",
  },
];

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Our Services
          </h1>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Enterprise-grade technology solutions designed to accelerate innovation, scalability, and security.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map(({ icon: Icon, title, desc, link, color, bgShape }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
              className="relative"
            >
              <NavLink
                to={link}
                aria-label={`View ${title} service`}
                className="group block h-full relative bg-zinc-900/80 border border-white/10 rounded-2xl p-6 sm:p-7 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {/* Background shape */}
                <div className={`absolute -top-8 -left-8 w-36 h-36 rounded-full ${bgShape} blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700`} />

                {/* Corner accent animation */}
                <span className="absolute inset-0 pointer-events-none">
                  <span className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:w-full transition-all duration-700" />
                  <span className="absolute top-0 right-0 w-[2px] h-0 bg-gradient-to-b from-transparent via-white/40 to-transparent group-hover:h-full transition-all duration-700" />
                </span>

                {/* Inner glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                {/* Icon with hover animation */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`mb-4 ${color}`}
                >
                  <Icon size={28} />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-medium mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-white">
                  Learn More →
                </span>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
