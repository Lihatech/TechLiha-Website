import { motion } from "framer-motion";
import {
  Server,
  Database,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function PHPTechnology() {
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
              PHP Web Development Services
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              PHP remains a powerful foundation for secure, scalable, and
              cost-effective web applications, especially when built on
              enterprise-grade architectures like LAMP.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ARCHITECTURE BLUEPRINT */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-14">
          LAMP Architecture Blueprint
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <StackLayer
            title="Linux"
            text="Stable operating system forming the foundation of scalable and secure PHP deployments."
          />
          <StackLayer
            title="Apache"
            text="Reliable web server handling HTTP requests and routing traffic efficiently."
          />
          <StackLayer
            title="MySQL"
            text="Robust relational database enabling fast, structured data storage and retrieval."
          />
          <StackLayer
            title="PHP"
            text="Dynamic server-side scripting language powering business logic and application workflows."
          />
        </div>
      </div>

      {/* CORE CAPABILITIES */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-14">
            Core PHP Development Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ArchitectureBlock
              icon={<Layers />}
              title="Custom PHP Applications"
              text="Tailored web applications aligned with specific business workflows and operational requirements."
            />

            <ArchitectureBlock
              icon={<Server />}
              title="E-Commerce & CMS Solutions"
              text="Scalable e-commerce platforms and content management systems built on proven PHP frameworks."
            />

            <ArchitectureBlock
              icon={<Database />}
              title="LAMP Stack Development"
              text="End-to-end LAMP-based solutions optimized for performance, security, and reliability."
            />
          </div>
        </div>
      </div>

      {/* ENTERPRISE USE CASES */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-14">
          Architecture-Driven Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <UseCaseBlock title="Enterprise Portals">
            Secure portals for managing internal workflows, user roles, and
            data-driven processes.
          </UseCaseBlock>

          <UseCaseBlock title="E-Commerce Platforms">
            High-availability online stores supporting complex catalogs,
            payments, and integrations.
          </UseCaseBlock>

          <UseCaseBlock title="Content Management Systems">
            Flexible CMS platforms enabling non-technical teams to manage
            content efficiently.
          </UseCaseBlock>

          <UseCaseBlock title="Business Web Applications">
            PHP-powered platforms supporting enterprise-scale business
            operations.
          </UseCaseBlock>
        </div>
      </div>

      {/* SECURITY & SCALABILITY */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-14">
            Security & Scalability by Design
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Secure authentication & authorization",
              "Optimized database performance",
              "Scalable server architecture",
              "Enterprise-grade data protection",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-white/20 p-6 rounded-xl"
              >
                <ShieldCheck className="mb-3 text-emerald-400" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Build Robust Web Systems with PHP
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Our PHP developers deliver secure, scalable, and high-performance
          applications backed by proven architectural practices.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
        >
          Talk to Our PHP Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

/* Components */

function StackLayer({ title, text }) {
  return (
    <div className="border p-8 rounded-2xl text-center">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/70">{text}</p>
    </div>
  );
}

function ArchitectureBlock({ icon, title, text }) {
  return (
    <div className="bg-white p-8 rounded-2xl border">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/70">{text}</p>
    </div>
  );
}

function UseCaseBlock({ title, children }) {
  return (
    <div className="border p-8 rounded-2xl">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/70">{children}</p>
    </div>
  );
}
