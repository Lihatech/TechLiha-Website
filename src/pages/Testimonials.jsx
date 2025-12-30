import { motion } from "framer-motion";

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

export default function TestimonialsUnique() {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-tr from-indigo-600/20 to-pink-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-green-400/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50, rotate: -1 + i * 0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative bg-zinc-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute -top-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/20">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>

              <p className="mt-10 text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                "{t.message}"
              </p>

              <h4 className="text-white font-semibold text-base sm:text-lg md:text-xl">
                {t.name}
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base">
                {t.role}, {t.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
