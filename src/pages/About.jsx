import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lightbulb,
  Building2,
  Cpu,
  Cloud,
  Users,
} from "lucide-react";

export default function AboutLihaTech() {
  return (
    <section className="relative bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-1 text-xs font-medium text-black/70">
            <Building2 className="w-4 h-4" />
            About Liha Tech
          </span>

          <p className="mt-6 text-xs sm:text-sm font-semibold tracking-widest uppercase text-black">
            Plan · Practice · Patience
          </p>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Engineering digital excellence with{" "}
            <span className="font-bold">clarity & purpose</span>
          </h2>

          <p className="mt-6 text-black/70 text-sm sm:text-base md:text-lg leading-relaxed">
            Liha Tech is a technology partner focused on building secure,
            scalable, and enterprise-grade digital systems. We work closely with
            organizations to modernize platforms, strengthen operations, and
            enable long-term growth through reliable technology.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left – Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-black/70 text-sm sm:text-base leading-relaxed">
              Our expertise spans enterprise software engineering, cloud & DevOps,
              AI and data platforms, cybersecurity, and scalable web and mobile
              applications. Every engagement is guided by performance,
              maintainability, and security at scale.
            </p>

            <p className="text-black/70 text-sm sm:text-base leading-relaxed">
              We take a disciplined, outcome-driven approach. By aligning
              technology decisions with business priorities, we ensure systems
              are built not just for today’s needs, but for long-term resilience
              and adaptability.
            </p>

            {/* Capability List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Enterprise Security",
                  desc: "Built with governance, compliance, and risk management in mind.",
                },
                {
                  icon: Cloud,
                  title: "Cloud & DevOps",
                  desc: "Modern, automated infrastructure for reliability and scale.",
                },
                {
                  icon: Cpu,
                  title: "AI & Data Platforms",
                  desc: "Data-driven systems that support intelligent decision-making.",
                },
                {
                  icon: Users,
                  title: "Client-Focused Delivery",
                  desc: "Collaborative partnerships with measurable business outcomes.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{title}</h4>
                    <p className="mt-1 text-sm text-black/70">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – Mission / Principle Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-black/10 bg-white p-10 shadow-sm"
          >
            <Lightbulb className="w-8 h-8" />

            <h3 className="mt-6 text-xl sm:text-2xl font-semibold">
              Our Mission
            </h3>

            <p className="mt-4 text-black/70 text-sm sm:text-base leading-relaxed">
              To empower organizations with dependable, secure, and future-ready
              technology—enabling them to innovate with confidence, operate with
              efficiency, and scale sustainably in an evolving digital
              landscape.
            </p>

            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-black/60">
                Guiding Principle
              </p>
              <p className="mt-2 text-sm font-medium">
                Build less. Build right. Build for the long term.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
