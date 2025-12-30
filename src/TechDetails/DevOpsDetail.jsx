import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

/* Animation Variants */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 }, // slide from left
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DevOpsTechnology() {
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
              DevOps & Cloud Automation
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Seamless collaboration, continuous delivery, frictionless systems,
              and faster time-to-market with DevOps solutions. At LIHA TECH, we
              provide reliable DevOps practices that ensure agile delivery for
              software-driven innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      {/* DEVOPS SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src="data:image/png;base64,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"
              alt="Accelerate Software Delivery with DevOps"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Side Content */}
          <div className="lg:w-1/2 w-full bg-purple-50 p-8 rounded-lg shadow-md">
            <motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >
              Accelerate Software Delivery with DevOps
                        </motion.h2>


            <p className="text-lg text-black/70 leading-relaxed mb-6">
              DevOps bridges the gap between software development and IT
              operations, enabling organizations to produce high-velocity
              software solutions while improving operational performance. Our
              DevOps methodology focuses on optimizing processes, selecting the
              right tools, and fostering a culture of collaboration across
              teams.
            </p>

            <p className="text-lg text-black/70 leading-relaxed mb-6">
              By implementing DevOps practices, we remove bottlenecks in
              software development and delivery. Our approach ensures that
              development, testing, and deployment processes are streamlined,
              automated, and scalable to meet evolving enterprise requirements.
            </p>

            <p className="text-lg text-black/70 leading-relaxed">
              LIHA TECH DevOps experts work closely with your teams to establish
              continuous integration, continuous delivery (CI/CD),
              infrastructure as code, automated monitoring, and rapid feedback
              mechanisms. This approach enables organizations to release quality
              software faster, with fewer errors, and with full visibility into
              operations.
            </p>
          </div>
        </div>
      </div>

      {/* ================= METHODOLOGY ================= */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.h2
                  className="text-3xl font-semibold mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideIn}
                >Our DevOps Approach            </motion.h2>


          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Our methodology revolves around establishing the right processes
            first and then choosing the most effective tools to deliver advanced
            software solutions. We emphasize culture, automation, measurement,
            and sharing (CAMS) principles to ensure sustainable DevOps adoption.
          </p>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Key focus areas include:
          </p>

          <ul className="list-disc list-inside text-lg text-black/70 space-y-2 mb-6">
            <li>Continuous Integration and Continuous Delivery (CI/CD)</li>
            <li>Automated testing and deployment pipelines</li>
            <li>Infrastructure as Code (IaC) and cloud automation</li>
            <li>Monitoring, logging, and proactive incident response</li>
            <li>Collaboration and communication between Dev and Ops teams</li>
          </ul>

          <p className="text-lg text-black/70 leading-relaxed">
            By combining the right culture, processes, and tools, LIHA TECH ensures
            that software delivery is faster, reliable, and aligned with
            business objectives.
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
          Drive Agile Innovation with LIHA TECH DevOps
                    </motion.h2>


        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Partner with LIHA TECH to implement DevOps solutions that accelerate
          software delivery, improve collaboration, and ensure operational
          excellence.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4
          bg-gray-600 text-white rounded-full
          hover:bg-gray-700 transition"
        >
          Talk to Our DevOps Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
