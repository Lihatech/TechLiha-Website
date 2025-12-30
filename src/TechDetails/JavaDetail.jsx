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
export default function JavaTechnology() {
  return (
    <section className="bg-white text-black">
      {/* ================= HERO ================= */}
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
              Java Solutions
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              At Liha Tech, we provide enterprise-grade Java development
              services designed to build secure, scalable, and high-performance
              applications. Java remains one of the most trusted technologies
              for mission-critical systems, offering stability, portability, and
              long-term maintainability across industries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src="data:image/jpeg;base64,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"
              alt="Enterprise Java Development"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Side Content */}
          <div className="lg:w-1/2 w-full bg-blue-50 p-8 rounded-lg shadow-md">
            <motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
              Enterprise Java Application Development
                        </motion.h2>


            <p className="text-lg text-black/70 leading-relaxed mb-6">
              Java has been the backbone of enterprise software for decades,
              powering large-scale business platforms, financial systems, and
              mission-critical applications. At Liha Tech, we leverage Java’s
              mature ecosystem to develop applications that are reliable,
              secure, and designed for long-term growth.
            </p>

            <p className="text-lg text-black/70 leading-relaxed">
              Our Java solutions are built with a strong focus on clean
              architecture, modular design, and performance optimization. This
              ensures that applications remain easy to maintain, scalable under
              heavy workloads, and adaptable to changing business requirements.
            </p>
          </div>
        </div>
      </div>

      {/* ================= JAVA SERVICES ================= */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
            Java Development Services
                      </motion.h2>


          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Liha Tech delivers end-to-end Java development services, covering
            the complete application lifecycle. From planning and system design
            to development, testing, and deployment, our team ensures
            high-quality outcomes at every stage.
          </p>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            We develop robust Java web applications, backend systems, and
            enterprise platforms that support complex workflows and high
            transaction volumes. Our solutions are designed to integrate
            seamlessly with databases, third-party services, and existing
            enterprise infrastructure.
          </p>

          <p className="text-lg text-black/70 leading-relaxed">
            Security and compliance are core aspects of our Java development
            approach. We follow industry best practices to protect sensitive
            data, ensure system integrity, and meet enterprise security
            standards.
          </p>
        </div>
      </div>

      {/* ================= USE CASES ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >Common Java Use Cases            </motion.h2>


        <p className="text-lg text-black/70 leading-relaxed mb-6">
          Java is widely used for building enterprise resource planning (ERP)
          systems, financial and banking platforms, and large-scale business
          applications. Its reliability and performance make it ideal for
          systems that require high availability and consistent processing.
        </p>

        <p className="text-lg text-black/70 leading-relaxed">
          Organizations also rely on Java for backend services, APIs, and
          distributed systems that support web and mobile applications. At Liha
          Tech, we design Java solutions that scale efficiently while
          maintaining stability and performance over time.
        </p>
      </div>

      {/* ================= DEVELOPMENT PROCESS ================= */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
            Our Java Development Approach
                      </motion.h2>


          <p className="text-lg text-white/75 leading-relaxed mb-6">
            Our development process begins with a thorough understanding of
            business requirements and technical objectives. We design Java
            architectures that align with long-term goals while ensuring
            performance, scalability, and security.
          </p>

          <p className="text-lg text-white/75 leading-relaxed">
            Through structured development, rigorous testing, and continuous
            support, Liha Tech ensures that Java applications remain reliable,
            efficient, and future-ready. Our focus is on delivering solutions
            that provide lasting business value.
          </p>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
          Build Enterprise Applications with Java
                    </motion.h2>


        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Partner with Liha Tech to develop secure, scalable Java applications
          designed to support long-term business success.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4
          bg-gray-600 text-white rounded-full
          hover:bg-gray-700 transition"
        >
          Talk to Our Java Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
