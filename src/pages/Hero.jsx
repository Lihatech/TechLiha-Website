import { NavLink } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

/* ---------------- Animations ---------------- */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const typingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};
const typingChar = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

// Social panel animation
const socialContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const socialItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const isInView = useInView(ref, { once: false, margin: "-50% 0px -50% 0px" });

  // Track window width for responsive behaviors
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "12%"]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "-8%"]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, isMobile ? 1 : 0]
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-white flex items-center"
    >
      {/* Background Image */}
      <motion.img
        src="/images/home.webp"
        loading="lazy"
        decoding="async"
        alt="LIHA Tech"
        style={{ y: bgY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Gradient Sweep */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-fuchsia-500/10"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 14, ease: "linear", repeat: Infinity }}
        />
      )}

      {/* Glow Orbs */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-fuchsia-500/20 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Left Social Panel with stagger animation */}
      {!isMobile && isInView && (
        <motion.div
          className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center z-20 space-y-6"
          variants={socialContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://www.linkedin.com/company/liha-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:translate-x-1"
            style={{ color: "white" }}
            variants={socialItem}
          >
            <FaLinkedin size={22} className="hover:text-[#0A66C2]" />
          </motion.a>
          <motion.a
            href="https://twitter.com/liha-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:translate-x-1"
            style={{ color: "white" }}
            variants={socialItem}
          >
            <FaTwitter size={22} className="hover:text-[#1DA1F2]" />
          </motion.a>
          <motion.a
            href="https://facebook.com/liha-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:translate-x-1"
            style={{ color: "white" }}
            variants={socialItem}
          >
            <FaFacebook size={22} className="hover:text-[#1877F2]" />
          </motion.a>
          <motion.div
            className="w-px h-12 sm:h-16 bg-white/30 mx-auto"
            variants={socialItem}
          ></motion.div>
          <motion.a
            href="mailto:info@lihatech.com"
            className="text-white text-sm transition-colors hover:text-cyan-400"
            style={{ writingMode: "vertical-rl" }}
            variants={socialItem}
          >
            info@lihatech.com
          </motion.a>
        </motion.div>
      )}

      {/* Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 sm:px-12 md:px-16 lg:px-24 flex flex-col items-start text-left max-w-full md:max-w-5xl"
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
        >
          Driving Digital
          <motion.span
            variants={typingContainer}
            initial="hidden"
            animate="visible"
            className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 font-light mt-2 text-lg sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {"Transformation for Businesses".split("").map((char, i) => (
              <motion.span key={i} variants={typingChar}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-4 sm:mt-5 text-zinc-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-full"
        >
          LIHA Tech delivers scalable software solutions, AI-powered platforms,
          and cloud-native systems that accelerate growth with security and
          reliability.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
            <NavLink
              to="/services"
              className="relative flex justify-center px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white text-black rounded-full font-medium overflow-hidden"
            >
              <span className="relative z-10">View Services</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-fuchsia-300 opacity-0 hover:opacity-20 transition-opacity" />
            </NavLink>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
            <NavLink
              to="/contact"
              className="flex justify-center px-5 sm:px-7 py-2.5 sm:py-3.5 border border-white/30 text-white rounded-full hover:bg-white/10 transition"
            >
              Get Consultation
            </NavLink>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-9 sm:w-6 sm:h-10 border border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
