import { motion } from "framer-motion";
import {
  Cloud,
  ArrowRight,
  ShieldCheck,
  ServerCog,
  LineChart,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function CloudServiceDetail() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cloud.webp')" }}

        />
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <AutoBreadcrumb className="mb-5" />

            <p className="text-xs font-semibold text-slate-300 uppercase tracking-[0.25em]">
              Cloud Services
            </p>

            <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-white leading-tight">
              Cloud Migration & Infrastructure
              <span className="block text-slate-300">
                Built for Scale, Security & Automation
              </span>
            </h1>

            <p className="mt-6 text-slate-300 leading-relaxed max-w-2xl">
              We help organizations transition from legacy infrastructure to
              secure, scalable cloud environments that support modern digital
              operations and long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="bg-slate-50 pt-24 pb-24">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* ===== MAIN CONTENT ===== */}
          <motion.div
            variants={fadeLeft}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Cloud Migration Development
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Our cloud migration services help enterprises move seamlessly from
              legacy systems to modern cloud platforms. As digitization
              accelerates, businesses must adopt cloud infrastructure to deliver
              faster, more reliable, and scalable services.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Cloud migration replaces traditional data silos with a unified,
              scalable infrastructure where data can be stored, accessed, and
              managed securely—improving availability and operational
              flexibility.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Our cloud experts design and deploy infrastructure using
              Infrastructure as Code (IaC), enabling fully automated
              environments, reducing maintenance costs, and increasing system
              reliability.
            </p>

            {/* ===== CAPABILITIES ===== */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid sm:grid-cols-2 gap-6"
            >
              <Capability
                icon={ServerCog}
                title="Infrastructure as Code"
                desc="Automated, version-controlled infrastructure for consistency and speed."
              />
              <Capability
                icon={ShieldCheck}
                title="Security & Compliance"
                desc="Secure cloud environments designed to meet enterprise compliance needs."
              />
              <Capability
                icon={Cloud}
                title="Scalable Architecture"
                desc="Cloud-native designs that grow seamlessly with your business."
              />
              <Capability
                icon={LineChart}
                title="Cost Optimization"
                desc="Efficient resource management to reduce operational expenses."
              />
            </motion.div>
          </motion.div>

          {/* ===== SIDEBAR ===== */}
          <motion.aside
            variants={fadeRight}
            className="bg-white border border-slate-200 rounded-xl p-8 h-fit"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Why Choose Our Cloud Services
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Proven cloud migration expertise</li>
              <li>• Fully automated infrastructure</li>
              <li>• Reduced maintenance & operational costs</li>
              <li>• Secure, scalable cloud environments</li>
            </ul>

            <NavLink
              to="/contact"
              className="
                mt-8 inline-flex items-center justify-center gap-2
                w-full px-5 py-3
                text-sm font-medium
                text-white bg-slate-900
                rounded-lg
                hover:bg-slate-800
                transition
              "
            >
              Talk to a Cloud Expert <ArrowRight size={16} />
            </NavLink>
          </motion.aside>
        </motion.div>
      </section>
    </>
  );
}

/* ================= CAPABILITY CARD ================= */
function Capability({ icon, title, desc }) {
  const Icon = icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex gap-4 bg-white border border-slate-200 rounded-lg p-5"
    >
      <div className="p-2 rounded-md bg-slate-900 text-white h-fit">
        <Icon size={18} />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-slate-900">
          {title}
        </h4>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
