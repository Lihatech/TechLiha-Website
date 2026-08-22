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

export default function PhpDetailPage() {
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
              PHP Web Development
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              PHP continues to be a reliable and widely adopted technology for
              building dynamic, database-driven web applications. Its
              flexibility, mature ecosystem, and cost efficiency make it a
              strong choice for businesses seeking stable and scalable web
              solutions.
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
              src="/images/techImage/Php.png"
              alt="Enterprise PHP Development"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Side Content */}
          <div className="lg:w-1/2 w-full bg-gray-50 p-8 rounded-lg shadow-md">
            <Motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
              PHP Solutions 
                        </Motion.h2>


            <p className="text-lg text-black/70 leading-relaxed mb-6">
              PHP has played a foundational role in web application development
              for decades, powering a wide range of business platforms, content
              management systems, and e-commerce applications. Its ability to
              integrate seamlessly with databases and web servers makes it well
              suited for enterprise environments.
            </p>

            <p className="text-lg text-black/70 leading-relaxed">
              At Techliha, we build PHP applications with a strong focus on
              clean code, maintainable architecture, and long-term scalability.
              Our solutions are designed to support growing traffic, evolving
              business needs, and integration with existing systems.
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
            PHP Development Services
                      </Motion.h2>


          <p className="text-lg text-black/70 leading-relaxed mb-6">
            We offer end-to-end PHP development services covering application
            design, development, testing, deployment, and ongoing support. Our
            team develops custom PHP web applications tailored to specific
            business workflows and operational requirements.
          </p>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Our PHP solutions include content management systems, e-commerce
            platforms, and enterprise web portals that require reliable
            performance and structured data handling. We follow proven
            development practices to ensure consistency, stability, and
            maintainability.
          </p>

          <p className="text-lg text-black/70 leading-relaxed">
            Performance optimization and security are integral to our PHP
            development approach. We ensure applications are built to handle
            high user activity while protecting sensitive business and customer
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
                >Common PHP Use Cases            </Motion.h2>


        <p className="text-lg text-black/70 leading-relaxed mb-6">
          PHP is commonly used for developing enterprise portals, content-driven
          websites, and e-commerce platforms that require flexible content
          management and database-driven functionality. Its adaptability allows
          businesses to launch and evolve digital platforms efficiently.
        </p>

        <p className="text-lg text-black/70 leading-relaxed">
          Organizations also rely on PHP for internal business applications,
          dashboards, and web-based tools that support operational workflows.
          Our PHP solutions are designed to remain reliable, scalable, and easy
          to enhance over time.
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
            Our PHP Development Approach
                      </Motion.h2>


          <p className="text-lg text-white/75 leading-relaxed mb-6">
            Our PHP development process begins with a detailed understanding of
            business objectives and technical requirements. We design
            application architectures that prioritize stability, scalability,
            and ease of maintenance.
          </p>

          <p className="text-lg text-white/75 leading-relaxed">
            Through structured development, rigorous testing, and continuous
            support, Techliha delivers PHP applications that provide long-term
            value and dependable performance for enterprise environments.
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
          Build Scalable Web Applications with PHP
                    </Motion.h2>


        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Partner with Techliha to develop secure, reliable PHP applications
          designed to support business growth and operational efficiency.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4
          bg-gray-600 text-white rounded-full
          hover:bg-gray-700 transition"
        >
          Talk to Our PHP Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
