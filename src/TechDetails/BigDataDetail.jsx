import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 }, // slide from left
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BigDataTechnology() {
  return (
    <section className="bg-white text-black">
      {/* HERO */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <AutoBreadcrumb className="mb-5" />
            <p className="uppercase tracking-widest text-sm text-white/70">
              Technology
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
              Big Data Development
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Liha Tech designs and implements Big Data analytics solutions that
              transform large volumes of raw data into actionable business
              intelligence. Our platforms prioritize reliability, scalability,
              and clarity, empowering organizations to make informed decisions
              with confidence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src="https://subtlesolutions.in/wp-content/uploads/2025/04/big-data-1024x576.webp"
              alt="Enterprise Big Data Solutions"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Side Content */}
          <div className="lg:w-1/2 w-full bg-green-50 p-8 rounded-lg shadow-md">
            <motion.h2
              className="text-3xl font-semibold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
            >
              Big Data Engineering
            </motion.h2>

            <p className="text-lg text-black/70 leading-relaxed mb-6">
              Our Big Data solutions capture, process, and analyze data from
              multiple sources, delivering insights that improve operational
              efficiency, customer engagement, and strategic planning. We ensure
              consistent, high-quality data across all analytics workflows.
            </p>

            <p className="text-lg text-black/70 leading-relaxed">
              By leveraging scalable architectures, automated data pipelines,
              and advanced analytics, we help enterprises turn complex datasets
              into practical insights that drive business growth.
            </p>
          </div>
        </div>
      </div>

      {/* CAPABILITIES */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.h2
            className="text-3xl font-semibold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
          >
            Core Analytics Capabilities
          </motion.h2>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Our analytics capabilities include structured and unstructured data
            management, real-time monitoring, predictive analytics, and
            visualization. We design solutions that help organizations identify
            trends, detect anomalies, and make strategic, data-driven decisions.
          </p>
          <p className="text-lg text-black/70 leading-relaxed">
            We support enterprises in building dashboards, reports, and
            automated systems that consolidate data into a single source of
            truth, ensuring clarity and confidence in every business decision.
          </p>
        </div>
      </div>

      {/* BUSINESS IMPACT */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn}
        >
          Business Impact{" "}
        </motion.h2>

        <p className="text-lg text-black/70 leading-relaxed mb-6">
          Our Big Data solutions accelerate decision-making, enhance operational
          efficiency, and provide deeper insights into customers and markets. By
          enabling data-driven strategies, organizations can respond faster to
          opportunities and challenges.
        </p>
        <p className="text-lg text-black/70 leading-relaxed">
          The results include improved productivity, enhanced business agility,
          and the ability to scale analytics as organizational data grows.
        </p>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn}
        >
          Unlock the Value of Your Data
        </motion.h2>

        <p className="text-black/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Liha Tech helps organizations convert complex data into actionable
          insights, enabling measurable business outcomes and strategic growth.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
        >
          Talk to Our Data Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
