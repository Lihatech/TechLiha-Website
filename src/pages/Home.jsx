import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Award,
  Lock,
  TrendingUp,
  Briefcase,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-black via-zinc-900/90 to-zinc-800/80">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1950&q=80"
          alt="LIHA Tech"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-snug">
              Building Scalable
              <span className="block text-zinc-400 font-light mt-2">
                Digital Solutions
              </span>
            </h1>

            <p className="mt-6 text-zinc-300 text-base sm:text-lg md:text-xl">
              LIHA Tech delivers enterprise-grade software, AI-driven systems,
              and cloud solutions for modern businesses.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <NavLink
                to="/services"
                className="px-6 sm:px-7 py-3.5 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition"
              >
                View Services
              </NavLink>

              <NavLink
                to="/contact"
                className="px-6 sm:px-7 py-3.5 border border-white/30 text-white rounded-full hover:bg-white/10 transition"
              >
                Get Consultation
              </NavLink>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="py-8 sm:py-10 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 text-center text-zinc-400 text-xs sm:text-sm">
          <span>FinTech</span>
          <span>Healthcare</span>
          <span>EdTech</span>
          <span>SaaS</span>
          <span>E-Commerce</span>
          <span>Enterprises</span>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 sm:mb-14"
          >
            Our Core Services
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                icon: Brain,
                title: "AI & Data Science",
                desc: "Intelligent systems that automate and optimize decision-making.",
                link: "/services/ai-data-science",
                color: "text-indigo-400",
              },
              {
                icon: Database,
                title: "Big Data Solutions",
                desc: "Scalable platforms to process and analyze massive datasets.",
                link: "/services/big-data",
                color: "text-green-400",
              },
              {
                icon: Globe,
                title: "Web Development",
                desc: "Secure and high-performance enterprise web applications.",
                link: "/services/web",
                color: "text-blue-400",
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                desc: "Enterprise-grade Android apps built for scale.",
                link: "/services/mobile",
                color: "text-purple-400",
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                desc: "Cloud migration, CI/CD automation, and DevOps excellence.",
                link: "/services/cloud-migration",
                color: "text-cyan-400",
              },
              {
                icon: ShieldCheck,
                title: "Cyber Security",
                desc: "Advanced security solutions protecting critical systems.",
                link: "/services/cyber-security",
                color: "text-red-400",
              },
            ].map(({ icon: Icon, title, desc, link, color }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-zinc-900/80 border border-white/10 rounded-2xl p-5 sm:p-6 hover:shadow-2xl transition"
              >
                <Icon className={`${color} mb-3 sm:mb-4`} size={28} />
                <h3 className="font-medium text-lg sm:text-xl mb-1 sm:mb-2">
                  {title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base">{desc}</p>

                <NavLink
                  to={link}
                  className="inline-block mt-3 sm:mt-4 text-sm sm:text-base text-white font-medium hover:underline"
                >
                  Learn More →
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 sm:mb-14"
          >
            Why LIHA Tech
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10"
          >
            {[
              {
                icon: Award,
                title: "Enterprise Experience",
                desc: "Proven delivery of complex IT systems.",
                color: "text-yellow-400",
              },
              {
                icon: TrendingUp,
                title: "Certified Engineers",
                desc: "Highly skilled and certified professionals.",
                color: "text-green-400",
              },
              {
                icon: Lock,
                title: "Security First",
                desc: "Robust, secure, scalable architectures.",
                color: "text-red-400",
              },
              {
                icon: Briefcase,
                title: "Cost Effective",
                desc: "Enterprise quality without enterprise cost.",
                color: "text-blue-400",
              },
            ].map(({ icon: Icon, title, desc, color }) => (
              <motion.div key={title} variants={fadeUp}>
                <div
                  className={`inline-flex p-4 sm:p-5 bg-zinc-800 rounded-full mb-3 sm:mb-4 ${color}`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="font-medium text-lg sm:text-xl">{title}</h3>
                <p className="text-zinc-400 text-sm sm:text-base mt-1 sm:mt-2">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-black via-zinc-900 to-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
          {[
            ["50+", "Projects Delivered"],
            ["10+", "Technologies"],
            ["5+", "Years Experience"],
            ["24×7", "Support"],
          ].map(([num, label]) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                {num}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white text-center px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6"
        >
          Ready to Build Your Next Product?
        </motion.h2>

        <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">
          Let’s discuss your requirements and create something scalable.
        </p>

        <NavLink
          to="/contact"
          className="inline-block px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition"
        >
          Get Free Consultation
        </NavLink>
      </section>
    </>
  );
}
