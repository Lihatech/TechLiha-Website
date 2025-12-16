import { motion } from "framer-motion";
import {
  Cpu,
  Layers,
  Server,
  Database,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function PythonTechnology() {
  return (
    <section className="bg-white text-black">
      {/* HERO */}
      <div className="relative bg-slate-900 text-white">
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
              Python Development Services
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Python is an extraordinarily versatile and enterprise-ready
              programming language used to build scalable web applications,
              intelligent systems, and high-performance platforms that drive
              real business growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* WHY PYTHON */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Why Python for Enterprise Solutions?
          </h2>
          <p className="text-black/70 leading-relaxed mb-6">
            Python offers a unique balance of simplicity, flexibility, and
            performance. Its clean syntax, object-oriented approach, automated
            memory management, and extensive ecosystem make it a top choice for
            enterprise-grade software development.
          </p>
          <p className="text-black/70 leading-relaxed">
            From deeply customized websites and cloud platforms to enterprise
            applications and progressive web apps, Python enables faster
            development cycles without compromising security or scalability.
          </p>
        </div>

        <div className="space-y-4">
          {[
            "Readable and maintainable codebase",
            "Rapid development with proven frameworks",
            "Enterprise scalability and performance",
            "Strong support for data, AI, and automation",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-1" />
              <p className="text-black/70">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CORE CAPABILITIES */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-12">
            Our Python Development Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <Capability
              icon={<Layers />}
              title="Python Web Development"
              text="Dynamic websites, enterprise platforms, cloud applications, content management systems, and PWAs tailored to complex business workflows."
            />

            <Capability
              icon={<Cpu />}
              title="Python Machine Learning"
              text="Implementation of predictive machine-learning engines using data analysis and scientific computing libraries for intelligent decision-making."
            />

            <Capability
              icon={<Server />}
              title="Python Enterprise Solutions"
              text="High-performing, scalable Python web and mobile applications designed to meet specific enterprise and operational requirements."
            />
          </div>
        </div>
      </div>

      {/* USE CASES */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-12">Enterprise Use Cases</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <UseCase title="Enterprise Web Platforms">
            Secure, scalable business platforms used by SMEs and large
            enterprises to manage workflows, data, and operations.
          </UseCase>

          <UseCase title="Data-Driven Applications">
            Analytics-heavy applications that leverage Python’s strength in data
            processing, automation, and intelligent insights.
          </UseCase>

          <UseCase title="Cloud-Native Solutions">
            Python-powered cloud applications optimized for performance,
            scalability, and reliability.
          </UseCase>

          <UseCase title="Automation & Integrations">
            Automated systems that reduce operational overhead and improve
            efficiency across business processes.
          </UseCase>
        </div>
      </div>

      {/* PROCESS */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-12">
            Our Python Development Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Requirement Analysis",
              "Architecture & Planning",
              "Development & Testing",
              "Deployment & Support",
            ].map((step, index) => (
              <div
                key={index}
                className="border border-white/20 p-6 rounded-xl"
              >
                <span className="text-emerald-400 font-semibold">
                  Step {index + 1}
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
          Build Scalable Python Solutions with Confidence
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Our Python developers stay laser-focused on delivering results-driven
          solutions that align technology with your business objectives.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
        >
          Talk to Our Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

function Capability({ icon, title, text }) {
  return (
    <div className="bg-white p-8 rounded-2xl border">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/70">{text}</p>
    </div>
  );
}

function UseCase({ title, children }) {
  return (
    <div className="border p-8 rounded-2xl">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/70">{children}</p>
    </div>
  );
}
