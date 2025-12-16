import { motion } from "framer-motion";
import { LayoutGrid, Cpu, Layers, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function AngularTechnology() {
  return (
    <section className="bg-white text-black">
      {/* HERO */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <AutoBreadcrumb className="mb-5" />

            <p className="uppercase tracking-widest text-sm text-white/70">
              Technology
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
              Angular Development Services
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Angular enables us to build secure, high-performance, and
              maintainable single-page applications using a structured,
              component-driven approach.
            </p>
          </motion.div>
        </div>
      </div>

      {/* COMPONENT HIERARCHY */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-14">
          Component-Driven Architecture
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <ComponentBlock
            title="UI Components"
            description="Reusable UI elements such as buttons, forms, and data tables."
          />

          <ComponentBlock
            title="Feature Modules"
            description="Grouped components handling specific business functionality."
          />

          <ComponentBlock
            title="Enterprise Applications"
            description="Scalable, maintainable SPAs built on modular architecture."
          />
        </div>
      </div>

      {/* CORE CAPABILITIES */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-14">
            Angular UX Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityCard
              icon={<LayoutGrid />}
              title="Single-Page Applications"
              text="Fast, responsive SPAs delivering seamless user experiences with real-time interactions."
            />

            <CapabilityCard
              icon={<Cpu />}
              title="Enterprise Frontend Systems"
              text="Robust frontend architectures designed to support complex enterprise workflows."
            />

            <CapabilityCard
              icon={<Settings />}
              title="Long-Term Maintenance"
              text="Stable applications with ongoing support, upgrades, and performance optimization."
            />
          </div>
        </div>
      </div>

      {/* UX USE CASES */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-14">
          Enterprise UX Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <UXUseCase title="Real-Time Dashboards">
            Live dashboards providing instant insights and data updates.
          </UXUseCase>

          <UXUseCase title="Business Portals">
            Secure portals with role-based access and complex workflows.
          </UXUseCase>

          <UXUseCase title="Customer-Facing Applications">
            High-performance applications designed for usability and engagement.
          </UXUseCase>

          <UXUseCase title="Internal Enterprise Tools">
            Efficient tools improving productivity and operational efficiency.
          </UXUseCase>
        </div>
      </div>

      {/* LIFECYCLE & SUPPORT */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-14">
            Angular Application Lifecycle
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "UX Planning & Architecture",
              "Component Development",
              "Testing & Optimization",
              "Support & Maintenance",
            ].map((step, index) => (
              <div
                key={index}
                className="border border-white/20 p-6 rounded-xl"
              >
                <span className="text-emerald-400 font-semibold">
                  Stage {index + 1}
                </span>
                <p className="mt-3">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Build High-Performance Angular Applications
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Our Angular developers deliver secure, scalable, and user-focused
          applications backed by modern frontend best practices.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
        >
          Talk to Our Angular Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

/* Components */

function ComponentBlock({ title, description }) {
  return (
    <div className="border p-8 rounded-2xl">
      <Layers className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/70">{description}</p>
    </div>
  );
}

function CapabilityCard({ icon, title, text }) {
  return (
    <div className="bg-white p-8 rounded-2xl border">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/70">{text}</p>
    </div>
  );
}

function UXUseCase({ title, children }) {
  return (
    <div className="border p-8 rounded-2xl">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/70">{children}</p>
    </div>
  );
}
