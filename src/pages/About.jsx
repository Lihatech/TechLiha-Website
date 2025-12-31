import { motion } from "framer-motion";
import { Building2, Target, Settings, Compass } from "lucide-react";

import StatsSection from "./StatsSection";
import Testimonials from "./Testimonials";
import SEO from "../config/SEO";

/* Animation helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutLihaTech() {
  return (
    <>
      <SEO page="about" />
      {/* ================= HERO ================= */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: "url('/images/about.webp')" }}

        />
        <div className="absolute inset-0 bg-slate-900/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-slate-400">
              About Liha Tech
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Engineering technology
              <span className="block text-slate-300 mt-2">
                that businesses trust to scale
              </span>
            </h1>

            <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed text-left sm:text-justify">
              Liha Tech is a technology consulting and engineering company
              focused on building secure, scalable, and future-ready digital
              systems. We partner with organizations to transform complex ideas
              into dependable technology platforms that support long-term
              growth, operational stability, and business confidence.
            </p>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed text-left sm:text-justify">
              Our approach emphasizes thoughtful planning, disciplined
              engineering practices, and patience in execution—ensuring that
              every solution we deliver is reliable today and adaptable for the
              future.
            </p>

            <p className="mt-6 text-xs tracking-widest uppercase text-slate-400">
              Plan · Practice · Patience
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 border rounded-full px-4 py-1">
              <Building2 size={14} /> Who We Are
            </span>

            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
              A technology partner, not just a service provider
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed text-left sm:text-justify">
              Liha Tech was founded with a clear purpose—to help organizations
              build technology systems that last. We believe true success comes
              from long-term reliability, not short-term delivery.
            </p>

            <p className="mt-6 text-slate-600 leading-relaxed text-left sm:text-justify">
              Our team works closely with startups, growing businesses, and
              enterprises to ensure every technology decision aligns with real
              business objectives, operational realities, and future ambitions.
            </p>

            <p className="mt-6 text-slate-600 leading-relaxed text-left sm:text-justify">
              By combining architectural clarity with engineering discipline, we
              help businesses reduce complexity, minimize risk, and confidently
              scale their digital capabilities.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/images/teamabout.webp"
            loading="lazy"
            decoding="async"
            alt="Team collaboration"
            className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/images/tableabout.webp"
            loading="lazy"
            decoding="async"
            alt="Professional team"
            className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover rounded-2xl"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
              Why Choose Liha Tech
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed text-left sm:text-justify">
              Choosing Liha Tech means partnering with a team that values
              reliability, transparency, and long-term success. We focus on
              building systems that reduce operational risk, improve stability,
              and support confident business growth.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed text-left sm:text-justify">
              Our clients trust us because we take the time to understand their
              challenges, design solutions with care, and remain committed well
              beyond initial delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 text-white">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To empower organizations with dependable, secure, and future-ready technology solutions that support sustainable growth and long-term confidence.",
            },
            {
              icon: Settings,
              title: "Our Approach",
              text: "We follow a disciplined approach built on careful planning, strong engineering practices, and continuous improvement throughout every engagement.",
            },
            {
              icon: Compass,
              title: "Our Philosophy",
              text: "Plan with vision. Practice with consistency. Deliver with patience. We believe meaningful technology success is built steadily over time.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Icon size={28} />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-slate-300 leading-relaxed text-left sm:text-justify">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <StatsSection />
      <Testimonials />
    </>
  );
}
