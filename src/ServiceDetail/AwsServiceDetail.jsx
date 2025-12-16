// src/pages/AwsServicePage.jsx
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, Server, Layers, CheckCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function AwsServicePage() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=1920&q=80')",
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
              AWS Development
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Cloud solutions built on Amazon Web Services including computing, storage, databases,
              analytics, and scalable application deployment. Enable your business to scale while
              minimizing infrastructure costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Overview ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Efficient, Scalable, and Cost-Effective Cloud Solutions
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              AWS enables businesses to move their applications to the cloud and manage them effortlessly
              at minimal cost. Reduce capital expenses and pay only for what you use while ensuring high
              availability and scalability.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              As a renowned Software Testing and Development Company, our AWS solutions enhance performance,
              reliability, and user experience. From desktop to mobile to enterprise applications, we provide
              full-stack cloud development, deployment, and QA services that optimize ROI and reduce time-to-market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              What We Deliver
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Cloud architecture design and deployment
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Scalable computing and storage solutions
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Database management and analytics integration
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                QA, testing, and optimized application deployment
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== Capabilities ===== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12">
            Core AWS Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cloud size={22} />,
                title: "Cloud Computing",
                text: "Deploy scalable applications using AWS EC2, Lambda, and auto-scaling.",
              },
              {
                icon: <Database size={22} />,
                title: "Database Services",
                text: "Managed relational and NoSQL databases with high availability.",
              },
              {
                icon: <Server size={22} />,
                title: "Server & Storage",
                text: "Efficient file storage, backup solutions, and secure server management.",
              },
              {
                icon: <Layers size={22} />,
                title: "Application Deployment",
                text: "Seamless CI/CD and automated deployment pipelines for faster release cycles.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Use Case ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Scalable, Reliable, and Cost-Effective Solutions
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Our AWS experts design architectures to optimize performance, reduce costs, and ensure
            high reliability. We leverage cloud-native solutions to meet business needs and accelerate
            digital transformation.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Ready to leverage AWS for your business?
          </h3>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Talk to our experts <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </>
  );
}
