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
    if (inView) {
      stats.forEach((stat, idx) => {
        let start = 0;
        const end = stat.number;
        const duration = 1500; // total animation time in ms
        const increment = end / (duration / 30);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[idx] = Math.floor(start);
            return newCounts;
          });
        }, 30);
      });
    }
  }, [inView]);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-black via-zinc-900 to-black text-white border-t border-white/10">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
        {stats.map(({ icon: Icon, label, color, suffix }, idx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex flex-col items-center justify-center gap-2"
          >
            <Icon className={`${color} w-10 h-10 sm:w-12 sm:h-12 mb-2`} />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              {counts[idx]}{suffix}
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base mt-1">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
