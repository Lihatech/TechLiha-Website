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
export default function PythonDetailPage() {
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
              Python Solutions
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Python is a powerful and versatile programming language widely
              used for building scalable web applications, data-driven
              platforms, and intelligent enterprise systems. Its simplicity and
              flexibility enable organizations to develop robust software
              solutions with long-term maintainability.
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
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
              alt="Enterprise Python Development"
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
              Enterprise Python Application Development
                        </Motion.h2>


            <p className="text-lg text-black/70 leading-relaxed mb-6">
              Python has become a preferred choice for enterprises due to its
              clean syntax, extensive ecosystem, and ability to support a wide
              range of application types. From business websites to complex
              enterprise platforms, Python enables rapid development without
              compromising performance or security.
            </p>

            <p className="text-lg text-black/70 leading-relaxed">
              At Techliha, we design and develop Python applications that focus
              on scalability, code clarity, and architectural consistency. Our
              solutions are built to evolve with business needs while remaining
              stable and easy to maintain over time.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
            Python Development Services
                      </Motion.h2>


          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Our Python development services cover the full software lifecycle,
            including planning, architecture design, development, testing, and
            deployment. We build custom Python solutions aligned with specific
            business workflows and operational objectives.
          </p>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Python is particularly effective for developing data-intensive
            applications, automation systems, and enterprise platforms that
            require integration with multiple services. Our development approach
            ensures consistent performance and long-term reliability.
          </p>

          <p className="text-lg text-black/70 leading-relaxed">
            Security, performance optimization, and scalability are integral to
            every Python solution we deliver. We follow best practices to ensure
            applications can handle growth while protecting sensitive business
            data.
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
                >Common Python Use Cases            </Motion.h2>


        <p className="text-lg text-black/70 leading-relaxed mb-6">
          Python is widely used for enterprise web platforms, internal business
          applications, and data-driven systems. Its adaptability allows
          organizations to implement solutions ranging from customer-facing
          platforms to operational dashboards.
        </p>

        <p className="text-lg text-black/70 leading-relaxed">
          Businesses also rely on Python for automation, analytics, and
          integration-driven applications that improve efficiency and support
          informed decision-making across departments.
        </p>
      </div>

      {/* ================= APPROACH ================= */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
            Our Python Development Approach
                      </Motion.h2>


          <p className="text-lg text-white/75 leading-relaxed mb-6">
            Our Python development process begins with a clear understanding of
            business requirements and technical goals. We design architectures
            that prioritize scalability, maintainability, and operational
            stability.
          </p>

          <p className="text-lg text-white/75 leading-relaxed">
            Through structured development practices, thorough testing, and
            ongoing support, Techliha delivers Python applications that provide
            long-term value and dependable enterprise performance.
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
          Build Reliable Python Solutions
                    </Motion.h2>


        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Partner with Techliha to develop scalable, secure Python applications
          designed to support your business growth and operational goals.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4
          bg-gray-600 text-white rounded-full
          hover:bg-gray-700 transition"
        >
          Talk to Our Python Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
