import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Cpu, Headphones } from "lucide-react";
import { useInView } from "react-intersection-observer";

const stats = [
  { icon: CheckCircle, number: 50, label: "Successful Projects", color: "text-green-400", suffix: "+" },
  { icon: Users, number: 20, label: "Enterprise Clients", color: "text-blue-400", suffix: "+" },
  { icon: Cpu, number: 10, label: "Core Technologies", color: "text-indigo-400", suffix: "+" },
  { icon: Headphones, number: 24, label: "Technical Support", color: "text-yellow-400", suffix: "×7" },
];

export default function StatsCounter() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const duration = 1500;

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCounts(stats.map((stat) => Math.floor(stat.number * progress)));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [inView]);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-black via-zinc-900 to-black text-white border-t border-white/10">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center"
      >
        {stats.map(({ icon: Icon, label, color, suffix }, idx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative flex flex-col items-center justify-center gap-2 cursor-pointer group p-4 rounded-xl"
          >
            {/* Hover glow background */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-white/10 to-white/0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl pointer-events-none" />

            <Icon className={`${color} w-10 h-10 sm:w-12 sm:h-12 mb-2 transition-transform duration-500 group-hover:scale-125`} />
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white transition-transform duration-500 group-hover:translate-y-[-2px]">
              {counts[idx]}
              {suffix}
            </h3>
            
            <p className="text-zinc-400 text-sm sm:text-base mt-1">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
