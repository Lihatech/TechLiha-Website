import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

/* Animation */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PHPTechnology() {
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
              PHP Web Development
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              PHP continues to be a reliable and widely adopted technology for
              building dynamic, database-driven web applications. Its
              flexibility, mature ecosystem, and cost efficiency make it a
              strong choice for businesses seeking stable and scalable web
              solutions.
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
              alt="Enterprise PHP Development"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Side Content */}
          <div className="lg:w-1/2 w-full bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6">
              Enterprise PHP Application Development
            </h2>

            <p className="text-lg text-black/70 leading-relaxed mb-6">
              PHP has played a foundational role in web application development
              for decades, powering a wide range of business platforms, content
              management systems, and e-commerce applications. Its ability to
              integrate seamlessly with databases and web servers makes it well
              suited for enterprise environments.
            </p>

            <p className="text-lg text-black/70 leading-relaxed">
              At Liha Tech, we build PHP applications with a strong focus on
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
          <h2 className="text-3xl font-semibold mb-6">
            PHP Development Services
          </h2>

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
        <h2 className="text-3xl font-semibold mb-6">Common PHP Use Cases</h2>

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
          <h2 className="text-3xl font-semibold mb-6">
            Our PHP Development Approach
          </h2>

          <p className="text-lg text-white/75 leading-relaxed mb-6">
            Our PHP development process begins with a detailed understanding of
            business objectives and technical requirements. We design
            application architectures that prioritize stability, scalability,
            and ease of maintenance.
          </p>

          <p className="text-lg text-white/75 leading-relaxed">
            Through structured development, rigorous testing, and continuous
            support, Liha Tech delivers PHP applications that provide long-term
            value and dependable performance for enterprise environments.
          </p>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Build Scalable Web Applications with PHP
        </h2>

        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Partner with Liha Tech to develop secure, reliable PHP applications
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
