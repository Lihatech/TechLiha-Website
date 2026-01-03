import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Gajana Bhole",
    role: "Director",
    company: "VimDigitech, Pune",
    message:
      "LIHA Tech demonstrated strong technical expertise and professionalism. The collaboration was smooth and results were delivered as promised.",
  },
  {
    name: "Komal Deshmukh",
    role: "Founder",
    company: "CodeNucleus Solutions, Pune",
    message:
      "Working with LIHA Tech was a great experience. Their team understands business needs and delivers scalable, reliable solutions.",
  },
  {
    name: "Sushant C.",
    role: "HR",
    company: "Deloitte, Hyderabad",
    message:
      "The team showed excellent coordination and timely delivery. Their approach and communication were highly professional.",
  },
  {
    name: "Shahabaj H.",
    role: "Founder",
    company: "Maharashtra Academy",
    message:
      "LIHA Tech provided quality solutions with great attention to detail. Highly recommended for long-term technology partnerships.",
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8
              shadow-sm hover:shadow-lg flex flex-col text-center
              hover:-translate-y-1 transition-all duration-500"
            >
              <p className="text-zinc-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                “{t.message}”
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
``