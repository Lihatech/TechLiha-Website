import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../../components/AutoBreadcrumb";

/* Animation */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const slideIn = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
export default function SapDetailPage() {
  return (
    <section className="technology-detail-page bg-white text-black">
      {/* ================= HERO ================= */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <Motion.div
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
              SAP ERP Solutions
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              SAP ERP enables organizations to integrate and manage core
              business processes across finance, supply chain, human resources,
              and operations. It provides real-time visibility, automation, and
              data-driven intelligence to support informed enterprise
              decision-making.
            </p>
          </Motion.div>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT - IMAGE */}
          <div className="w-full h-full">
            <img
              src="/images/techImage/SAP.png"
              alt="Enterprise SAP ERP"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* RIGHT - CONTENT (BG ONLY HERE) */}
          <div className="bg-[#FAF7F2] p-12 rounded-2xl">
            <Motion.h2
              className="text-3xl font-semibold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
            >
              Enterprise Resource Planning with SAP
            </Motion.h2>

            <p className="text-lg text-black/70 leading-relaxed mb-6">
              SAP ERP is designed to unify business operations within a single,
              integrated platform. By consolidating data and workflows across
              departments, SAP enables organizations to eliminate silos, improve
              efficiency, and maintain consistency across enterprise systems.
            </p>

            <p className="text-lg text-black/70 leading-relaxed">
              At Techliha, we implement SAP solutions that align technology
              with business strategy. Our focus is on delivering stable,
              scalable ERP platforms that support long-term operational growth
              and evolving enterprise requirements.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SAP SERVICES ================= */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Motion.h2
            className="text-3xl font-semibold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
          >
            SAP Implementation & Consulting Services
          </Motion.h2>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Our SAP services cover the complete ERP lifecycle, including
            business process analysis, system design, implementation,
            customization, and post-deployment support. We ensure SAP solutions
            are configured to reflect real-world business workflows and
            operational priorities.
          </p>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            SAP ERP supports critical enterprise functions such as financial
            management, supply chain operations, human capital management, and
            customer engagement. We help organizations leverage these
            capabilities to gain control, transparency, and operational
            resilience.
          </p>

          <p className="text-lg text-black/70 leading-relaxed">
            Our implementations emphasize performance optimization, data
            integrity, and system scalability, ensuring SAP platforms remain
            reliable as business complexity and transaction volumes increase.
          </p>
        </div>
      </div>

      {/* ================= BUSINESS VALUE ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <Motion.h2
          className="text-3xl font-semibold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn}
        >
          Business Value Delivered by SAP
        </Motion.h2>

        <p className="text-lg text-black/70 leading-relaxed mb-6">
          SAP ERP empowers organizations to streamline operations, automate
          repetitive processes, and gain real-time insights into enterprise
          performance. Centralized data management improves reporting accuracy
          and supports faster, more confident decision-making.
        </p>

        <p className="text-lg text-black/70 leading-relaxed">
          By enabling scalability and standardization, SAP helps businesses
          adapt to market changes, regulatory requirements, and expansion
          initiatives without disrupting core operations.
        </p>
      </div>

      {/* ================= IMPLEMENTATION APPROACH ================= */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Motion.h2
            className="text-3xl font-semibold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
          >
            Our SAP Implementation Approach
          </Motion.h2>

          <p className="text-lg text-white/75 leading-relaxed mb-6">
            Our SAP implementation approach begins with a deep understanding of
            business objectives and operational challenges. We design ERP
            architectures that ensure system stability, process alignment, and
            long-term maintainability.
          </p>

          <p className="text-lg text-white/75 leading-relaxed">
            Through structured configuration, rigorous testing, and
            comprehensive user training, we deliver SAP solutions that integrate
            seamlessly into enterprise environments and support continuous
            improvement.
          </p>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <Motion.h2
          className="text-3xl font-semibold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn}
        >
          Transform Enterprise Operations with SAP
        </Motion.h2>

        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Partner with Techliha to implement SAP ERP solutions that improve
          visibility, optimize operations, and support sustainable business
          growth.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4
          bg-gray-600 text-white rounded-full
          hover:bg-gray-700 transition"
        >
          Talk to Our SAP Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
