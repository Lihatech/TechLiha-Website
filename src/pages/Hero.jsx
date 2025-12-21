import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center">
      {/* Background image with slow parallax */}
      <motion.img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="LIHA Tech"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Animated gradient light sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-fuchsia-500/10"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 14,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Soft glow orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-semibold text-white leading-tight"
        >
          Driving Digital
          <span className="block text-zinc-400 font-light mt-2">
            Transformation for Businesses
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-zinc-300 text-lg max-w-2xl"
        >
          LIHA Tech delivers scalable software solutions, AI-powered platforms,
          and cloud-native systems that accelerate growth with security and
          reliability.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <NavLink
            to="/services"
            className="px-7 py-3.5 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition"
          >
            View Services
          </NavLink>

          <NavLink
            to="/contact"
            className="px-7 py-3.5 border border-white/30 text-white rounded-full hover:bg-white/10 transition"
          >
            Get Consultation
          </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
