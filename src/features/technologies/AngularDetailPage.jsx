import { motion as Motion } from "framer-motion";
import {
  Layers,
  Cpu,
  ShieldCheck,
  Workflow,
  BarChart3,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../../components/AutoBreadcrumb";

const slideIn = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function AngularDetailPage() {
  return (
    <section className="technology-detail-page bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <div className="relative bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <AutoBreadcrumb className="mb-6" />

            <Motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="uppercase tracking-wider text-sm text-white/60"
            >
              Technology
            </Motion.p>

            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-4xl md:text-5xl font-semibold leading-tight"
            >
              Angular Application
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 text-lg text-white/75 leading-relaxed"
            >
              At Techliha, we build scalable, secure, and high-performance
              Angular applications for enterprises and growing businesses. Our
              approach focuses on structured architecture, long-term
              maintainability, and seamless user experiences.
            </Motion.p>
          </Motion.div>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* IMAGE */}
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-100 rounded-3xl -z-10 translate-x-4 translate-y-4" />
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Enterprise Angular Development"
                  loading="lazy"
                  decoding="async"
                  className="rounded-3xl shadow-lg object-cover w-full h-[420px]"
                />
              </div>

              {/* CONTENT */}
              <div className="max-w-5xl">
                <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
                  Why Angular for Enterprise Applications
                </Motion.h2>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Angular is a powerful frontend framework designed for building
                  complex, large-scale web applications. Its component-driven
                  architecture, strong typing, and built-in tooling make it an
                  ideal choice for enterprise-grade systems that demand
                  stability, scalability, and long-term performance.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed">
                  At Techliha, we leverage Angular to create applications that
                  are easy to maintain, highly testable, and capable of
                  supporting evolving business requirements. Our focus is on
                  clean code, predictable architecture, and delivering
                  sustainable long-term value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CORE CAPABILITIES ================= */}
      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
           <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
            Core Angular Capabilities
          </Motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            <Capability
              icon={<Layers />}
              title="Component-Based Architecture"
              text="Reusable and modular components that ensure consistency,
              scalability, and easier maintenance across the application."
            />

            <Capability
              icon={<Cpu />}
              title="High-Performance SPAs"
              text="Fast and responsive single-page applications optimized
              for real-time interactions and smooth user experiences."
            />

            <Capability
              icon={<ShieldCheck />}
              title="Enterprise-Grade Security"
              text="Secure application structures with role-based access,
              data validation, and long-term support strategies."
            />
          </div>
        </div>
      </div>

      {/* ================= USE CASES ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
         <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
          Business & Enterprise Use Cases
        </Motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <UseCase
            icon={<BarChart3 />}
            title="Real-Time Dashboards"
            text="Interactive dashboards that present live data, analytics,
            and performance metrics for informed decision-making."
          />

          <UseCase
            icon={<Workflow />}
            title="Business & Admin Portals"
            text="Secure portals with complex workflows, approvals, and
            role-based access control."
          />

          <UseCase
            icon={<Settings />}
            title="Internal Enterprise Tools"
            text="Custom tools that improve operational efficiency,
            automation, and internal productivity."
          />

          <UseCase
            icon={<Layers />}
            title="Customer-Facing Applications"
            text="Scalable applications designed for usability,
            responsiveness, and long-term engagement."
          />
        </div>
      </div>

      {/* ================= DEVELOPMENT LIFECYCLE ================= */}
      <div className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
            Our Angular Development Process
          </Motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              step="01"
              title="Planning & Architecture"
              text="Understanding business goals and designing a scalable,
              future-ready Angular architecture."
            />

            <ProcessStep
              step="02"
              title="Component Development"
              text="Building clean, reusable components aligned with best
              practices and performance standards."
            />

            <ProcessStep
              step="03"
              title="Testing & Optimization"
              text="Ensuring application stability, security, and performance
              through rigorous testing."
            />

            <ProcessStep
              step="04"
              title="Support & Maintenance"
              text="Continuous updates, monitoring, and enhancements to keep
              applications reliable over time."
            />
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Build Scalable Angular Applications with Techliha
        </h2>

        <p className="text-slate-700 max-w-2xl mx-auto mb-10">
          Our Angular experts deliver structured, secure, and high-performance
          applications tailored to enterprise and business needs.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full
          bg-gray-600 text-white font-medium
          hover:bg-gray-700 transition"
        >
          Talk to Our Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Capability({ icon, title, text }) {
  return (
    <div className="bg-white border rounded-2xl p-8">
      <div className="mb-5 text-emerald-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function UseCase({ icon, title, text }) {
  return (
    <div className="border rounded-2xl p-8">
      <div className="mb-4 text-emerald-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function ProcessStep({ step, title, text }) {
  return (
    <div className="border border-white/20 rounded-2xl p-6">
      <span className="text-emerald-400 font-semibold text-sm">
        Step {step}
      </span>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/70 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
