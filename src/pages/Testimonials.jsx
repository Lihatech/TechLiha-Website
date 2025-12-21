import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    company: "FinTech Corp",
    role: "CTO",
    message:
      "LIHA Tech delivered an exceptional solution that exceeded our expectations. Highly recommend their team!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jane Smith",
    company: "HealthPlus",
    role: "Product Manager",
    message:
      "Professional, timely, and innovative. The project was delivered seamlessly with excellent support.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Mark Wilson",
    company: "EduSmart",
    role: "CEO",
    message:
      "The AI-driven solutions provided by LIHA Tech transformed our workflow. Truly remarkable results!",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Lisa Brown",
    company: "SaaSify",
    role: "Lead Developer",
    message:
      "Efficient, responsive, and high-quality solutions. LIHA Tech is our go-to tech partner!",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 sm:mb-14 px-2 sm:px-0"
        >
          What Our Clients Say
        </motion.h2>

        {/* Carousel */}
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-800/80 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) setCurrent((prev) => (prev + 1) % testimonials.length);
                if (info.offset.x > 50) setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              }}
            >
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4"
              />
              <p className="text-zinc-300 text-sm sm:text-base md:text-lg mb-4 px-2 sm:px-0">
                "{testimonials[current].message}"
              </p>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                ))}
              </div>
              <h4 className="font-semibold text-white text-sm sm:text-base md:text-lg">{testimonials[current].name}</h4>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base">
                {testimonials[current].role}, {testimonials[current].company}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition ${
                  idx === current ? "bg-white" : "bg-white/40"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
