import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../../components/AutoBreadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
const slideIn = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
export default function JavaDetailPage() {
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
              Java Solutions
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              At Techliha, we provide enterprise-grade Java development
              services designed to build secure, scalable, and high-performance
              applications. Java remains one of the most trusted technologies
              for mission-critical systems, offering stability, portability, and
              long-term maintainability across industries.
            </p>
          </Motion.div>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src="/images/techImage/java.png"
              alt="Enterprise Java Development"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Side Content */}
          <div className="lg:w-1/2 w-full bg-blue-50 p-8 rounded-lg shadow-md">
            <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
              Enterprise Java Application Development
                        </Motion.h2>


            <p className="text-lg text-black/70 leading-relaxed mb-6">
              Java has been the backbone of enterprise software for decades,
              powering large-scale business platforms, financial systems, and
              mission-critical applications. At Techliha, we leverage Java’s
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
          <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
            Java Development Services
                      </Motion.h2>


          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Techliha delivers end-to-end Java development services, covering
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
        <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >Common Java Use Cases            </Motion.h2>


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
          <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
            Our Java Development Approach
                      </Motion.h2>


          <p className="text-lg text-white/75 leading-relaxed mb-6">
            Our development process begins with a thorough understanding of
            business requirements and technical objectives. We design Java
            architectures that align with long-term goals while ensuring
            performance, scalability, and security.
          </p>

          <p className="text-lg text-white/75 leading-relaxed">
            Through structured development, rigorous testing, and continuous
            support, Techliha ensures that Java applications remain reliable,
            efficient, and future-ready. Our focus is on delivering solutions
            that provide lasting business value.
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
          Build Enterprise Applications with Java
                    </Motion.h2>


        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Partner with Techliha to develop secure, scalable Java applications
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
