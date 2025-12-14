import { motion } from "framer-motion";

export default function RouteLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Spinner */}
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-black/80 border-t-transparent mx-auto"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />

        {/* Subtle divider */}
        <div className="w-8 h-px bg-black/20 mx-auto my-5" />

        {/* Text */}
        <p className="text-xs uppercase tracking-widest text-black/60">
          Loading
        </p>
      </div>
    </div>
  );
}
