import { motion, useReducedMotion } from "framer-motion";

const MotionContainer = motion.div;

const variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -8,
  },
};

export default function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionContainer
      variants={variants}
      initial={shouldReduceMotion ? false : "initial"}
      animate={shouldReduceMotion ? undefined : "animate"}
      exit={shouldReduceMotion ? undefined : "exit"}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.25,
        ease: "easeInOut",
      }}
    >
      {children}
    </MotionContainer>
  );
}
