import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Cpu,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";


export default function JavaTechnology() {
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
              Java Development Services
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Java remains the backbone of mission-critical enterprise systems,
              offering unmatched stability, security, and long-term
              maintainability across industries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* WHY JAVA — TIMELINE */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-16">
          Why Enterprises Continue to Trust Java
        </h2>

        <div className="relative border-l border-gray-300 ml-4 space-y-16">
          <TimelineItem
            title="Proven Foundation"
            text="Java has powered enterprise software for decades, delivering reliability, portability, and performance at scale."
          />

          <TimelineItem
            title="Enterprise Evolution"
            text="With modern frameworks and architectures, Java continues to evolve while maintaining backward compatibility."
          />

          <TimelineItem
            title="Future-Ready Platforms"
            text="Java remains a preferred choice for cloud-native, microservices, and large-scale distributed systems."
          />
        </div>
      </div>

      {/* ENTERPRISE CAPABILITIES */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-16">
            Our Java Enterprise Capabilities
          </h2>

          <div className="relative border-l border-gray-300 ml-4 space-y-16">
            <TimelineCapability
              icon={<Server />}
              title="Java Web Applications"
              text="High-performance web platforms built using industry-proven Java frameworks and enterprise design patterns."
            />

            <TimelineCapability
              icon={<Layers />}
              title="Enterprise Architecture"
              text="Scalable, modular architectures designed for long-term maintainability and business growth."
            />

            <TimelineCapability
              icon={<Cpu />}
              title="Secure APIs & Integrations"
              text="Robust Java APIs enabling secure communication between enterprise systems and third-party platforms."
            />

            <TimelineCapability
              icon={<ShieldCheck />}
              title="Security & Compliance"
              text="Enterprise-grade security practices ensuring data protection, compliance, and system integrity."
            />
          </div>
        </div>
      </div>

      {/* INDUSTRY USE CASES */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-16">
          Java Use-Case Milestones
        </h2>

        <div className="relative border-l border-gray-300 ml-4 space-y-16">
          <TimelineItem
            title="Enterprise Resource Planning"
            text="Java-based ERP systems that streamline operations for organizations of all sizes."
          />

          <TimelineItem
            title="Financial & Banking Systems"
            text="High-security platforms handling large transaction volumes with reliability and precision."
          />

          <TimelineItem
            title="Large-Scale Business Platforms"
            text="Enterprise software serving thousands of users with complex workflows and integrations."
          />
        </div>
      </div>

      {/* DELIVERY TIMELINE */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-16">
            Our Java Development Lifecycle
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Requirement Analysis",
              "System Design",
              "Development & Testing",
              "Deployment & Support",
            ].map((step, index) => (
              <div
                key={index}
                className="border border-white/20 p-6 rounded-xl"
              >
                <span className="text-emerald-400 font-semibold">
                  Phase {index + 1}
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
          Build Reliable Enterprise Systems with Java
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Our Java developers deliver secure, scalable solutions designed for
          long-term success and enterprise stability.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
        >
          Talk to Our Java Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

/* Timeline Components */

function TimelineItem({ title, text }) {
  return (
    <div className="relative pl-10">
      <span className="absolute -left-3 top-1 w-6 h-6 bg-emerald-600 rounded-full" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-black/70">{text}</p>
    </div>
  );
}

function TimelineCapability({ icon, title, text }) {
  return (
    <div className="relative pl-10">
      <span className="absolute -left-3 top-1 w-6 h-6 bg-emerald-600 rounded-full" />
      <div className="flex gap-4 items-start">
        <div className="mt-1">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-black/70">{text}</p>
        </div>
      </div>
    </div>
  );
}
