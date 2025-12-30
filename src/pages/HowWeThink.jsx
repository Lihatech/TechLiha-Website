import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, TrendingUp, Layers, Users, ChevronDown } from "lucide-react";

const principles = [
  {
    icon: Briefcase,
    title: "Business-Driven Approach",
    desc: "We start with your business objectives and ROI in mind. Every technical solution is aligned with tangible value.",
  },
  {
    icon: TrendingUp,
    title: "Designed for Scale",
    desc: "Our architectures anticipate growth, performance demands, and future evolution to ensure long-term sustainability.",
  },
  {
    icon: Layers,
    title: "Simplicity & Clarity",
    desc: "Well-structured, maintainable systems outperform over-engineered complexity — reducing risk and increasing agility.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    desc: "We view client relationships as long-term partnerships, ensuring knowledge transfer, support, and measurable success.",
  },
];

export default function HowWeThink() {
  const [active, setActive] = useState(null);

  const headerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — Accordion */}
          <div>
            <motion.div
              variants={headerAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-xl mb-10 sm:mb-14"
            >
              <span className="block text-xs tracking-widest uppercase text-zinc-400 mb-3">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                How We Think
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
                At LIHA Tech, strategic thinking drives every engineering decision. Our methodology combines deep technical expertise with business insight to deliver solutions that scale, perform, and create lasting impact.
              </p>
            </motion.div>

            <div className="relative pl-6 sm:pl-8 space-y-4">
              <span className="absolute left-2.5 sm:left-3 top-0 bottom-0 w-px bg-white/10" />

              {principles.map(({ icon: Icon, title, desc }, i) => {
                const isOpen = active === i;
                return (
                  <div key={title} className="relative">
                    <button
                      onClick={() => setActive(isOpen ? null : i)}
                      className="w-full flex items-start gap-4 sm:gap-5 text-left"
                    >
                      <motion.div
                        animate={{
                          scale: isOpen ? 1.05 : 1,
                          y: isOpen ? -2 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center flex-shrink-0
                          ${isOpen
                            ? "bg-white text-black border-white"
                            : "bg-zinc-900 border-white/10 text-zinc-200"
                          }`}
                      >
                        <Icon size={18} />
                      </motion.div>

                      <div className="flex-1 flex items-center justify-between">
                        <h3 className="text-sm sm:text-base md:text-lg font-medium pr-3">
                          {title}
                        </h3>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown size={18} className="text-zinc-400" />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}
                          className="pl-[56px] sm:pl-[68px] pr-2 sm:pr-4"
                        >
                          <p className="mt-3 text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg text-justify">
                            {desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                alt="Strategic thinking"
                className="
                  object-cover w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[460px]
                  grayscale
                  group-hover:grayscale-0
                  group-hover:scale-105
                  transition-all duration-700 ease-out
                "
              />
              <div className="
                absolute inset-0
                bg-gradient-to-tr from-black/60 via-black/30 to-transparent
                group-hover:from-black/40 group-hover:via-black/20
                transition-all duration-700
              " />
            </div>

            <div className="absolute -bottom-6 left-6 bg-zinc-900 border border-white/10 rounded-xl px-4 py-2">
              <p className="text-xs sm:text-sm text-zinc-300">
                Engineering • Strategy • Execution
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
