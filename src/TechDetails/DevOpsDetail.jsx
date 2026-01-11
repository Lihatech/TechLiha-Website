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
              src="/images/techImage/Devops.png"
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
