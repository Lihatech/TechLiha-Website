import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        const percent = docHeight
          ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
          : 0;

        setProgress(percent);
        setVisible(scrollTop > 300);

        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, y: 32, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed bottom-6 right-6 z-50
            w-12 h-12 rounded-full
            bg-slate-900 text-white
            flex items-center justify-center
            shadow-lg
            hover:bg-slate-800
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-slate-400
            will-change-transform
          "
        >
          {/* Progress Ring */}
          <svg
            className="absolute inset-0 rotate-[-90deg]"
            viewBox="0 0 44 44"
            aria-hidden="true"
          >
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="transparent"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="3"
            />
            <motion.circle
              cx="22"
              cy="22"
              r={radius}
              fill="transparent"
              stroke="white"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transition={{ duration: 0.15, ease: "linear" }}
            />
          </svg>

          {/* Icon */}
          <ArrowUp size={18} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
