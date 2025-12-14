import { motion } from "framer-motion";
import { Code2, Cpu, Layers, Server } from "lucide-react";

export default function Technologies() {
  return (
    <section className="relative bg-white text-black overflow-hidden">
      {/* HERO BACKGROUND */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/80">
              Technologies
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Built on proven,{" "}
              <span className="font-bold">enterprise-grade</span> foundations
            </h1>

            <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
              At Liha Tech, we focus on technologies that scale reliably, perform
              consistently, and stand the test of time. Our stack is intentionally
              focused on platforms trusted by global enterprises.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CONTENT BELOW HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Technologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Python */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-black/10 p-8"
          >
            <div className="flex items-center gap-4">
              <Code2 className="w-8 h-8" />
              <h2 className="text-2xl font-semibold">Python</h2>
            </div>

            <p className="mt-4 text-black/70 text-sm sm:text-base leading-relaxed">
              Python is our go-to technology for building flexible, data-driven,
              and intelligent systems that scale across industries.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Cpu className="w-5 h-5" />
                <p className="text-sm text-black/70">
                  AI & Machine Learning systems
                </p>
              </div>
              <div className="flex gap-3">
                <Layers className="w-5 h-5" />
                <p className="text-sm text-black/70">
                  Enterprise web applications
                </p>
              </div>
              <div className="flex gap-3">
                <Server className="w-5 h-5" />
                <p className="text-sm text-black/70">
                  Cloud-native backends & APIs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Java */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-black/10 p-8"
          >
            <div className="flex items-center gap-4">
              <Layers className="w-8 h-8" />
              <h2 className="text-2xl font-semibold">Java</h2>
            </div>

            <p className="mt-4 text-black/70 text-sm sm:text-base leading-relaxed">
              Java powers mission-critical platforms where stability, security,
              and long-term maintainability are essential.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Server className="w-5 h-5" />
                <p className="text-sm text-black/70">
                  High-performance backend systems
                </p>
              </div>
              <div className="flex gap-3">
                <Layers className="w-5 h-5" />
                <p className="text-sm text-black/70">
                  Enterprise-grade architectures
                </p>
              </div>
              <div className="flex gap-3">
                <Cpu className="w-5 h-5" />
                <p className="text-sm text-black/70">
                  Secure and scalable APIs
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 max-w-3xl"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-black">
            Our Approach
          </p>
          <p className="mt-4 text-black/70 text-sm sm:text-base leading-relaxed">
            We deliberately keep our technology stack focused. Mastery over
            proven platforms allows us to deliver predictable outcomes,
            stronger security, and long-term value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
