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
              src="data:image/jpeg;base64,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"
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
                >Business Impact            </motion.h2>

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
