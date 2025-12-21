import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;

      setProgress(scrollPercent);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50
                     w-12 h-12 rounded-full
                     bg-slate-900 text-white
                     flex items-center justify-center
                     shadow-lg
                     hover:bg-slate-800
                     focus:outline-none"
        >
          {/* SVG Progress Ring */}
          <svg
            className="absolute w-full h-full rotate-[-90deg]"
            viewBox="0 0 44 44"
          >
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="transparent"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="3"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="transparent"
              stroke="white"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Icon */}
          <ArrowUp size={18} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
