import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, Code2, Cloud } from "lucide-react";

const MotionLink = motion(NavLink);

export default function ServicesPage() {
  return (
    <>
      {/* ===== Small Hero Background Section ===== */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1920&q=80')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/75" />

        {/* Content */}
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
      <section className="bg-slate-50 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* ================= Service 1 ================= */}
          <MotionLink
            to="/services/web"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="
              group block
              bg-white border border-slate-200 rounded-xl
              p-6 sm:p-8 lg:p-10
              cursor-pointer
              transition-all
              hover:shadow-xl
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-slate-900
            "
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5 sm:mb-6">
              <div className="p-3 rounded-md bg-slate-900 text-white w-fit">
                <Code2 size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Enterprise Web Development
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We engineer robust web platforms that support complex business
              workflows, high traffic, and strict security requirements.
              Designed for reliability and long-term maintainability.
            </p>

            <ul className="mt-5 sm:mt-6 space-y-2 text-sm text-slate-600">
              <li>• Modular and scalable architecture</li>
              <li>• Security, compliance, and performance optimization</li>
              <li>• Integration with enterprise systems</li>
            </ul>

            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:gap-3 transition-all">
              Learn more <ArrowRight size={16} />
            </div>
          </MotionLink>

          {/* ================= Service 2 ================= */}
          <MotionLink
            to="/services/cloud"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="
              group block
              bg-white border border-slate-200 rounded-xl
              p-6 sm:p-8 lg:p-10
              cursor-pointer
              transition-all
              hover:shadow-xl
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-slate-900
            "
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5 sm:mb-6">
              <div className="p-3 rounded-md bg-slate-900 text-white w-fit">
                <Cloud size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Cloud & Infrastructure Solutions
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We modernize enterprise infrastructure through secure cloud
              migration, automation, and operational optimization to support
              business continuity and growth.
            </p>

            <ul className="mt-5 sm:mt-6 space-y-2 text-sm text-slate-600">
              <li>• Cloud migration and modernization</li>
              <li>• DevOps automation and CI/CD pipelines</li>
              <li>• Monitoring, cost optimization, and reliability</li>
            </ul>

            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:gap-3 transition-all">
              Learn more <ArrowRight size={16} />
            </div>
          </MotionLink>
        </div>
      </section>
    </>
  );
}
