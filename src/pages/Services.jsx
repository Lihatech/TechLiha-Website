// src/pages/ServicesPage.jsx
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, Code2, Cloud } from "lucide-react";

import { FaAndroid, FaShieldAlt } from "react-icons/fa";
import { SiReact, SiPython, SiApachehadoop } from "react-icons/si";
import { CheckCircle } from "lucide-react";
import AWSIcon from "react-aws-icons/dist/aws/logo/AWS";

import SEO from "../config/SEO";

const MotionLink = motion(NavLink);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const services = [
  {
    to: "/services/ai-data-science",
    title: "AI & Data Science Development services",
    desc: "End-to-end AI and machine learning solutions including predictive systems, preventative algorithms, and industry-specific intelligence built on enterprise data.",
    icon: <SiPython size={24} />,
    color: "text-yellow-500",
  },
  {
    to: "/services/big-data",
    title: "Big Data Solutions services",
    desc: "Scalable big data platforms for processing large, messy, and unstructured datasets using modern cloud and cluster computing technologies.",
    icon: <SiApachehadoop size={24} />,
    color: "text-orange-600",
  },
  {
    to: "/services/web",
    title: "Web Development services",
    desc: "Comprehensive web development services covering design, development, testing, and deployment using modern frameworks and enterprise architectures.",
    icon: <SiReact size={24} />,
    color: "text-blue-500",
  },
  {
    to: "/services/mobile",
    title: "Android App Development services",
    desc: "Enterprise-grade Android applications built with reusable modules, faster delivery cycles, and secure, scalable mobile architectures.",
    icon: <FaAndroid size={24} />,
    color: "text-green-500",
  },
  {
    to: "/services/cloud-migration",
    title: "Cloud Migration & Development services",
    desc: "Migration of legacy systems to modern cloud infrastructures with infrastructure-as-code, automation, and reduced operational costs.",
    icon: <Cloud size={24} />,
    color: "text-sky-500",
  },
  {
    to: "/services/aws",
    title: "AWS Development services",
    desc: "Cloud solutions built on Amazon Web Services including computing, storage, databases, analytics, and scalable application deployment.",
    icon: <AWSIcon size={24} />,
    color: "text-orange-600",
  },
  {
    to: "/services/qa-testing",
    title: "QA & Testing Services",
    desc: "Quality assurance and testing services designed to reduce development cost, speed up delivery, and improve software reliability and performance.",
    icon: <CheckCircle size={24} />,
    color: "text-indigo-500",
  },
  {
    to: "/services/enterprise-solutions",
    title: "Enterprise Solutions Development services",
    desc: "Strategic enterprise solutions that align business objectives with modern technologies through process automation and system integration.",
    icon: <Code2 size={24} />,
    color: "text-purple-500",
  },
  {
    to: "/services/cyber-security",
    title: "Cyber Security Solutions services",
    desc: "Enterprise-grade protection against malware, ransomware, phishing, DDoS attacks, and security vulnerabilities across systems.",
    icon: <FaShieldAlt size={24} />,
    color: "text-rose-500",
  },
  {
    to: "/services/devops",
    title: "DevOps Services",
    desc: "DevOps practices that integrate security early, automate infrastructure, support cloud-native development, and improve deployment reliability.",
    icon: <Cloud size={24} />,
    color: "text-teal-500",
    featured: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEO page="services" />
      {/* ===== Small Hero Background Section ===== */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-full sm:max-w-2xl lg:max-w-3xl"
          >
            <p className="text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-[0.25em]">
              Our Services
            </p>
            <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
              Enterprise Technology Solutions
              <span className="block text-slate-300 mt-1">
                Built for Scale, Security & Performance
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-full sm:max-w-2xl">
              We help organizations design, modernize, and operate
              mission-critical digital systems with reliability and long-term
              vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-slate-200">
            {services.map((item, i) => (
              <MotionLink
                key={i}
                to={item.to}
                variants={cardVariants}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className={`
  group relative
  p-6 sm:p-8 lg:p-10
  border-b border-slate-200
  hover:bg-slate-50
  transition-colors
  focus:outline-none

  ${item.featured ? "lg:col-span-3 sm:col-span-2" : ""}
  
  ${
    !item.featured
      ? `
    sm:border-r
    lg:[&:nth-child(3n)]:border-r-0
    sm:[&:nth-child(2n)]:border-r-0
    lg:[&:nth-child(2n)]:border-r
  `
      : ""
  }
`}
              >
                {/* Icon */}
                <div className={`mb-5 ${item.color} group-hover:${item.color}`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-sm text-slate-600 leading-relaxed max-w-none sm:max-w-sm">
                  {item.desc}
                </p>

                {/* Arrow */}
                <div
                  className={`
                    mt-6 sm:absolute sm:bottom-8 sm:right-8
                    inline-flex items-center gap-2
                    text-sm font-medium transition-colors
                    group-hover:${item.color}
                  `}
                >
                  <span className="sm:hidden">Explore</span>
                  <ArrowRight size={16} />
                </div>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
