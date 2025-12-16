import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Layers,
  Cpu,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function SAPTechnology() {
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
              SAP ERP Solutions
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              SAP ERP enables enterprises to integrate and manage all core
              business processes, delivering intelligence, automation, and
              end-to-end visibility for smarter decision-making.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ERP TRANSFORMATION FLOW */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-14">
          ERP Transformation Workflow
        </h2>

        <div className="grid md:grid-cols-4 gap-12">
          {[
            "Business Process Analysis",
            "ERP Module Selection",
            "Implementation & Customization",
            "Monitoring & Continuous Improvement",
          ].map((step, index) => (
            <FlowStep key={index} step={index + 1} title={step} />
          ))}
        </div>
      </div>

      {/* SAP MODULES */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-14">
            Key SAP Modules We Implement
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <ModuleCard
              icon={<Layers />}
              title="SAP Finance (FI)"
              text="Comprehensive financial management covering accounting, controlling, and reporting."
            />
            <ModuleCard
              icon={<Database />}
              title="SAP Supply Chain (SCM)"
              text="Optimized inventory, logistics, procurement, and production workflows."
            />
            <ModuleCard
              icon={<Cpu />}
              title="SAP Human Capital (HCM)"
              text="Manage HR processes, payroll, talent management, and employee lifecycle efficiently."
            />
            <ModuleCard
              icon={<Cloud />}
              title="SAP CRM"
              text="Customer engagement, sales, and service management for better business relationships."
            />
            <ModuleCard
              icon={<CheckCircle />}
              title="SAP Business Intelligence"
              text="Data-driven insights, dashboards, and predictive analytics for smarter decision-making."
            />
          </div>
        </div>
      </div>

      {/* BUSINESS IMPACT */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-14">Business Impact</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Enhanced operational efficiency",
            "Real-time insights & reporting",
            "Automated workflows",
            "Scalable business processes",
          ].map((item, index) => (
            <div
              key={index}
              className="border p-6 rounded-xl flex flex-col items-start gap-3"
            >
              <CheckCircle className="text-emerald-400 w-6 h-6" />
              <p className="text-black/70">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* IMPLEMENTATION METHODOLOGY */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-14">
            SAP Implementation Methodology
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Consultation & Requirement Gathering",
              "System Architecture Design",
              "Configuration & Integration",
              "Testing, Training & Deployment",
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
          Transform Your Enterprise with SAP
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Our SAP experts help you implement intelligent ERP solutions that
          optimize processes, improve visibility, and drive business growth.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
        >
          Talk to Our SAP Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

/* Components */

function FlowStep({ step, title }) {
  return (
    <div className="border p-8 rounded-2xl text-center">
      <div className="w-10 h-10 mx-auto flex items-center justify-center bg-emerald-600 rounded-full text-white font-semibold mb-4">
        {step}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

function ModuleCard({ icon, title, text }) {
  return (
    <div className="border bg-white p-8 rounded-2xl flex flex-col items-start gap-4">
      <div className="text-emerald-600">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-black/70">{text}</p>
    </div>
  );
}
