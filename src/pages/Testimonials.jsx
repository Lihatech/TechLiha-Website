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
    <section className="py-20 sm:py-28 bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-50 text-zinc-900 relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-tr from-indigo-300/30 to-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-gradient-to-tr from-cyan-300/30 to-emerald-300/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-zinc-900"
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
              className="relative bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8
           shadow-sm hover:shadow-lg flex flex-col items-center text-center
           hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute -top-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-zinc-200 bg-white">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-10 text-zinc-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                "{t.message}"
              </p>

              <h4 className="text-zinc-900 font-semibold text-base sm:text-lg md:text-xl">
                {t.name}
              </h4>
              <p className="text-zinc-500 text-xs sm:text-sm md:text-base">
                {t.role}, {t.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
