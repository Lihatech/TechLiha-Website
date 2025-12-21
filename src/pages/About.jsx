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
  CheckCircle,
  Workflow,
  Briefcase,
} from "lucide-react";

export default function AboutLihaTech() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-slate-400">
              About Liha Tech
            </p>

            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Engineering technology
              <span className="block text-slate-300 mt-2">
                that businesses trust to scale
              </span>
            </h1>

            <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              Liha Tech is a technology consulting and engineering company focused
              on building secure, scalable, and future-ready digital systems. We
              help organizations transform complex ideas into reliable
              technology platforms that support long-term growth, operational
              stability, and business confidence.
            </p>

            <p className="mt-6 text-xs sm:text-sm tracking-widest uppercase text-slate-400">
              Plan · Practice · Patience
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 border rounded-full px-4 py-1">
              <Building2 size={14} /> Who We Are
            </span>

            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
              A technology partner, not just a service provider
            </h2>

            <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
              Liha Tech was founded with a clear purpose — to help organizations
              build technology systems that last. We prioritize architectural
              clarity, engineering discipline, and long-term reliability over
              short-term delivery.
            </p>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our team collaborates closely with startups, growing businesses,
              and enterprises to ensure technology decisions align with real
              business objectives.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team collaboration"
              className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
            What We Do
          </h2>

          <p className="mt-6 max-w-3xl text-slate-600 text-sm sm:text-base leading-relaxed">
            We deliver end-to-end technology services that enable businesses to
            modernize infrastructure, build digital platforms, and operate
            securely at scale.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                desc: "Cloud-native architectures and DevOps automation for performance and cost efficiency.",
              },
              {
                icon: Cpu,
                title: "AI & Data Engineering",
                desc: "Data platforms and intelligent systems that deliver actionable insights.",
              },
              {
                icon: ShieldCheck,
                title: "Cybersecurity",
                desc: "Secure system design and compliance-ready solutions.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border rounded-2xl p-6">
                <Icon size={22} className="text-slate-900" />
                <h4 className="mt-4 font-medium text-slate-900">{title}</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
              How We Work
            </h2>

            <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our approach is structured, transparent, and outcome-driven. We
              design systems with scalability, security, and long-term evolution
              in mind.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Understand business goals",
                "Design scalable architecture",
                "Build with engineering discipline",
                "Support and evolve continuously",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={18} />
                  <p className="text-slate-600 text-sm sm:text-base">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Work process"
              className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Professional team"
            className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover rounded-2xl"
          />

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
              Why Choose Liha Tech
            </h2>

            <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
              Choosing Liha Tech means partnering with a team that prioritizes
              reliability, transparency, and long-term value. We help clients
              reduce risk, improve stability, and confidently scale operations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 text-white">
          <div>
            <Target className="text-indigo-500" size={28} />
            <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              To empower organizations with dependable, secure, and future-ready
              technology.
            </p>
          </div>

          <div>
            <Settings className="text-green-500" size={28} />
            <h3 className="mt-4 text-xl font-semibold">Our Approach</h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Careful planning and disciplined execution.
            </p>
          </div>

          <div>
            <Compass className="text-yellow-500" size={28} />
            <h3 className="mt-4 text-xl font-semibold">Our Philosophy</h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Plan with vision. Practice with consistency. Deliver with patience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
