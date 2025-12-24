// src/pages/DevOpsServicePage.jsx
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Cloud, GitBranch } from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function DevOpsServicePage() {
  return (
    <>
      {/* ===== Hero Section (unchanged) ===== */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605902711622-cfb43c443f97?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <AutoBreadcrumb className="mb-5" />

            <p className="text-xs uppercase tracking-[0.3em] text-slate-300 font-semibold">
              Services
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
              DevOps Solutions
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Introducing security earlier into the application lifecycle and efficiently managing your infrastructure with modern DevOps practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Overview Section ===== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Secure, Efficient, Cloud-Native DevOps
            </h2>
            <p className="text-slate-600 leading-relaxed">
              With DevOps solutions from LihaTech, security is integrated early into your development lifecycle,
              minimizing vulnerabilities while aligning IT with business objectives.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Let our experts manage your infrastructure using modern DevOps tools and techniques, facilitate cloud
              migration, or build cloud-native applications. Achieve the benefits of running technology in the cloud
              while maintaining cost efficiency and business focus.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our DevOps specialists have helped hundreds of companies worldwide and are ready to optimize your workflow
              and infrastructure.
            </p>
          </motion.div>

          {/* Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              DevOps Advantages
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <ShieldCheck size={18} className="text-slate-900 mt-0.5" />
                Security integrated into development lifecycle
              </li>
              <li className="flex gap-3">
                <Cpu size={18} className="text-slate-900 mt-0.5" />
                Efficient infrastructure management
              </li>
              <li className="flex gap-3">
                <Cloud size={18} className="text-slate-900 mt-0.5" />
                Cloud migration and cloud-native solutions
              </li>
              <li className="flex gap-3">
                <GitBranch size={18} className="text-slate-900 mt-0.5" />
                Faster, automated CI/CD pipelines
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== Core DevOps Capabilities (horizontal cards) ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 text-center">
            Core DevOps Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cpu size={22} />,
                title: "Infrastructure Automation",
                text: "Automate server provisioning, configuration, and deployments.",
              },
              {
                icon: <Cloud size={22} />,
                title: "Cloud-Native Apps",
                text: "Build scalable, resilient applications for cloud environments.",
              },
              {
                icon: <GitBranch size={22} />,
                title: "CI/CD Pipelines",
                text: "Continuous integration and deployment for faster, safer releases.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: "Security & Compliance",
                text: "Integrate security into DevOps workflows and maintain compliance.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-center sm:text-left">
            Ready to implement secure, efficient DevOps practices?
          </h3>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Talk to our DevOps experts <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </>
  );
}
