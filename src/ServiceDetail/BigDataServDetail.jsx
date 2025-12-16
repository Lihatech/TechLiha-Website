import { motion } from "framer-motion";
import { ArrowRight, Database, BarChart3, Cloud, Workflow, CheckCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";


export default function BigDataServicePage() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80')",
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
              Big Data Solutions
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Big Data doesn’t have to be a big mystery. Gain deep visibility into
              your business with scalable, intelligent data platforms.
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
              Turn Complex Data Into Business Intelligence
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Whether you’re an established data-driven organization needing
              additional expertise or a business struggling with large,
              unstructured datasets, our Big Data services help uncover insights
              that drive measurable outcomes.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Using modern cloud platforms, distributed computing, and advanced
              analytics tools, we design systems that process data efficiently
              and scale as your business grows.
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
                Scalable big data architectures
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Cloud & cluster computing solutions
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Advanced analytics & reporting
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-slate-900 mt-0.5" />
                Customer behavior & sentiment analysis
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== Capabilities ===== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12">
            Core Big Data Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Database size={22} />,
                title: "Large-Scale Data Processing",
                text: "Handle massive, messy, and unstructured datasets with distributed systems.",
              },
              {
                icon: <Cloud size={22} />,
                title: "Cloud-Native Platforms",
                text: "Efficient data pipelines using modern cloud and cluster technologies.",
              },
              {
                icon: <BarChart3 size={22} />,
                title: "Advanced Analytics",
                text: "Extract insights using statistical models and machine learning.",
              },
              {
                icon: <Workflow size={22} />,
                title: "Customer Intelligence",
                text: "Sentiment & behavior models to enhance customer communication.",
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
            Intelligent Customer Sentiment Models
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            We build machine learning models trained to detect attitude markers
            and customer sentiment. These systems alert your sales teams when
            negative emotions are detected and highlight the most influential
            features driving those changes using Gradient Boosting techniques.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Ready to unlock insights from your data?
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
