import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Testimonials from "./Testimonials";
import StatsSection from "./StatsSection";
import Hero from "./Hero";
import ServiceCard from "./ServiceCard";
import HowWeThink from "./HowWeThink";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}

      <div>
        <Hero />
      </div>

      {/* ================= SERVICES ================= */}

      <ServiceCard />

      <section className="py-14 sm:py-20 lg:py-28 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 md:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
                About LIHA Tech
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 max-w-xl">
                LIHA Tech is a technology-driven IT services company
                specializing in enterprise-grade software, AI & data solutions,
                cloud infrastructure, and cybersecurity. We partner with
                businesses globally to enable digital transformation and
                scalable growth.
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                Our team of certified engineers, architects, and consultants
                deliver solutions that are secure, innovative, and tailored to
                client needs. With over 10 years of experience, we have
                completed 50+ projects across multiple industries.
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 md:order-2"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
                  alt="About LIHA Tech"
                  className="
              w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px]
              object-cover
              grayscale
              group-hover:grayscale-0
              group-hover:scale-105
              transition-all duration-700 ease-out
            "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-700" />
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
