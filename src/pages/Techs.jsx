import { motion } from "framer-motion";
import {
  SiPython,
  SiPhp,
  SiAngular,
  SiApachehadoop,
  SiSap,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cloud } from "lucide-react";

import SEO from "../config/SEO";

export default function Technologies() {

  const headerAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.2, 
      duration: 0.6, 
      ease: "easeOut" 
    },
  }),
};

  return (
    <>
      <SEO page="tech" />
      <section className="relative bg-white text-black overflow-hidden">
        {/* HERO */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative max-w-7xl mx-auto px-4 py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl space-y-4"
            >
              <motion.p
                custom={0}
                variants={headerAnimation}
                className="text-sm tracking-widest uppercase text-white/80"
              >
                Technologies
              </motion.p>

              <motion.h1
                custom={1}
                variants={headerAnimation}
                className="mt-4 text-4xl md:text-5xl font-semibold text-white"
              >
                Built on <span className="font-bold">Enterprise-Grade</span>{" "}
                Technologies
              </motion.h1>

              <motion.p
                custom={2}
                variants={headerAnimation}
                className="mt-4 text-white/80 text-lg"
              >
                At Liha Tech, we use proven technologies trusted by global
                enterprises to build scalable, secure, and future-ready digital
                solutions.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid gap-px bg-gray-200 md:grid-cols-2 lg:grid-cols-3">
            <TechCard
              title="Python Solutions"
              description="Highly versatile and enterprise-ready Python solutions including web applications, cloud platforms, PWAs, and intelligent systems built with clean, scalable, and maintainable code."
              icon={<SiPython className="w-10 h-10 text-yellow-500" />}
              to="/tech/python"
            />
            <TechCard
              title="Java Solutions"
              description="Robust and secure Java web and software applications designed for long-term stability, enterprise scalability, and mission-critical business operations."
              icon={<FaJava className="w-10 h-10 text-red-600" />}
              to="/tech/java"
            />
            <TechCard
              title="Big Data Engineering"
              description="Transform massive volumes of structured and unstructured data into actionable insights through advanced analytics, dashboards, and intelligent reporting."
              icon={<SiApachehadoop className="w-10 h-10 text-orange-500" />}
              to="/tech/big-data"
            />
            <TechCard
              title="PHP Solutions"
              description="Secure and scalable PHP and LAMP-based solutions for dynamic websites, e-commerce platforms, portals, and content management systems."
              icon={<SiPhp className="w-10 h-10 text-indigo-600" />}
              to="/tech/php"
            />
            <TechCard
              title="Angular Applications"
              description="High-performance, secure, and real-time single-page applications built using modern Angular frameworks and enterprise frontend best practices."
              icon={<SiAngular className="w-10 h-10 text-red-500" />}
              to="/tech/angular"
            />
            <TechCard
              title="SAP Solutions"
              description="End-to-end SAP consulting, implementation, and support services that enable intelligent ERP transformation and data-driven business operations."
              icon={<SiSap className="w-10 h-10 text-blue-600" />}
              to="/tech/sap"
            />
            <TechCard
              title="DevOps & Cloud Automation"
              description="Streamline your software delivery pipeline with automated CI/CD, monitoring, and cloud infrastructure solutions."
              icon={<Cloud className="w-10 h-10 text-blue-600" />}
              to="/tech/devops"
              featured
            />
          </div>
        </div>
      </section>
    </>
  );
}

function TechCard({ title, description, icon, to, featured }) {
  return (
    <Link
      to={to}
      className={`block ${featured ? "lg:col-span-3 md:col-span-2" : ""}`}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group bg-white p-10 min-h-[320px] flex flex-col justify-between
                   transition-colors duration-300 hover:bg-gray-50"
      >
        <div>
          <div className="mb-6">{icon}</div>
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-black/70 leading-relaxed">{description}</p>
        </div>

        <div className="flex justify-end mt-6">
          <span className="text-xl transition-transform group-hover:translate-x-2">
            →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
