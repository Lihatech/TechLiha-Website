import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Testimonials from "./Testimonials";
import StatsSection from "./StatsSection";
import Hero from "./Hero";
import ServiceCard from "./ServiceCard";
import HowWeThink from "./HowWeThink";
import SEO from "../config/SEO";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };
const headerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const labelReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const titleReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const lineReveal = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <SEO page="/" />
      <div>
        <Hero />
      </div>

      {/* ================= SERVICES ================= */}

      <ServiceCard />

      <section className="py-16 sm:py-20 lg:py-28 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 md:order-1"
            >
              {/* Section label (optional but premium) */}
              <motion.div
                variants={headerGroup}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Section label */}
                <motion.span
                  variants={labelReveal}
                  className="block text-xs tracking-widest uppercase text-zinc-400 mb-3"
                >
                  About Us
                </motion.span>

                {/* Decorative line */}
                <motion.span
                  variants={lineReveal}
                  className="block h-px w-12 bg-white/40 mb-4 origin-left"
                />

                {/* Heading */}
                <motion.h2
                  variants={titleReveal}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5"
                >
                  About LIHA Tech
                </motion.h2>
              </motion.div>

              <p
                className="
    text-zinc-300
    text-sm sm:text-base md:text-lg
    leading-relaxed
    mb-5
    max-w-xl
    text-justify
    hyphens-auto
  "
              >
                At LIHA Tech, we understand the evolving demands of modern
                technology and the challenges businesses face in a fast-changing
                digital landscape. Our team of experienced engineers and
                technology specialists delivers practical, reliable, and
                future-ready IT solutions.
              </p>

              <p
                className="
    text-zinc-400
    text-xs sm:text-sm md:text-base
    leading-relaxed
    max-w-xl
    text-justify
    hyphens-auto
  "
              >
                We partner with organizations worldwide to design and implement
                systems that improve operational efficiency, strengthen
                security, and enable sustainable growth. From enterprise
                software and cloud infrastructure to AI-driven data solutions
                and cybersecurity, LIHA Tech provides the expertise and insight
                to support your business goals.
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-1 md:order-2"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
                  alt="LIHA Tech team collaboration"
                  className="
              w-full
              h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px]
              object-cover
              grayscale
              group-hover:grayscale-0
              group-hover:scale-[1.04]
              transition-transform transition-filter
              duration-700 ease-out
            "
                />

                {/* Subtle overlay for contrast */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* ================= WHY CHOOSE US ================= */}
      <HowWeThink />

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

      <Testimonials />
    </>
  );
}
