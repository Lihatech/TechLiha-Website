import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Cpu,
  Cloud,
  Users,
  Target,
  Settings,
  Compass,
} from "lucide-react";

export default function AboutLihaTech() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-slate-400">
              About Liha Tech
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold text-white leading-tight">
              Engineering technology
              <span className="block text-slate-300 mt-2">
                with clarity, discipline & scale
              </span>
            </h1>

            <p className="mt-6 text-slate-300 text-base leading-relaxed">
              Liha Tech is a technology-driven company delivering secure,
              scalable, and enterprise-grade digital solutions. We help
              organizations build resilient systems that support growth,
              innovation, and long-term business success.
            </p>

            {/* Tagline */}
            <p className="mt-6 text-sm font-medium tracking-widest uppercase text-slate-400">
              Plan · Practice · Patience
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-medium text-slate-600">
                <Building2 className="w-4 h-4" />
                Company Overview
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-slate-900">
                Building systems businesses
                <span className="block mt-2">can depend on</span>
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                At Liha Tech, we design and engineer digital platforms that are
                secure, maintainable, and built to scale. From enterprise
                applications to cloud-native architectures, we focus on
                reliability and long-term performance.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Our approach is disciplined and outcome-driven. By aligning
                technology decisions with business objectives, we ensure that
                every solution delivers measurable value — today and in the
                future.
              </p>
            </div>

            {/* Right – Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Security by Design",
                  desc: "Security, compliance, and risk management built into every solution.",
                },
                {
                  icon: Cloud,
                  title: "Cloud & DevOps",
                  desc: "Modern, automated infrastructure optimized for scale and cost.",
                },
                {
                  icon: Cpu,
                  title: "AI & Data Platforms",
                  desc: "Intelligent systems that transform data into actionable insights.",
                },
                {
                  icon: Users,
                  title: "Client Partnership",
                  desc: "Transparent collaboration with a focus on long-term success.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h4 className="mt-4 font-medium text-slate-900">{title}</h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION STRIP ================= */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white"
          >
            <div className="flex flex-col items-start">
              <Target size={28} className="text-indigo-500" />
              <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                To empower organizations with dependable, secure, and
                future-ready technology that enables confident innovation and
                sustainable growth.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <Settings size={28} className="text-green-500" />
              <h3 className="mt-4 text-xl font-semibold">Our Approach</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                We plan carefully, engineer with discipline, and execute with
                precision — ensuring solutions are built right the first time.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <Compass size={28} className="text-yellow-500" />
              <h3 className="mt-4 text-xl font-semibold">Our Philosophy</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Plan with vision. Practice with consistency. Deliver with
                patience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
