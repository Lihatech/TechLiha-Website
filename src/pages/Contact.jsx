import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Clock,
  ArrowRight,
  Building2,
} from "lucide-react";

export default function ContactEnterprise() {
  return (
    <section className="relative bg-white text-slate-900">
      {/* subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20 sm:pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-medium text-slate-600">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            Enterprise Contact
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Let’s discuss your <span className="text-indigo-600">next project</span>
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Connect with our team for enterprise solutions, partnerships, or
            large-scale product development. We typically respond within one
            business day.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-semibold">Contact Sales</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Share your requirements and timelines.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  placeholder="Full name"
                  className="h-12 rounded-lg border border-slate-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <input
                  placeholder="Work email"
                  type="email"
                  className="h-12 rounded-lg border border-slate-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <input
                placeholder="Company / Organization"
                className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />

              <textarea
                rows={5}
                placeholder="Describe your project or inquiry"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />

              <button
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-500 transition"
              >
                Submit Request
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
                <Building2 className="w-5 h-5 text-indigo-600" />
                Corporate Office
              </h3>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
                <p className="text-sm sm:text-base text-slate-600">
                  123 Innovation Park,<br /> Bengaluru, India
                </p>
              </div>

              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-indigo-600 mt-1" />
                <p className="text-sm sm:text-base text-slate-600">
                  +91 98765 43210
                </p>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-indigo-600 mt-1" />
                <p className="text-sm sm:text-base text-slate-600">
                  enterprise@yourcompany.com
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3 text-sm sm:text-base text-slate-600">
                <Clock className="w-4 h-4" />
                Mon–Fri · 9:00 AM – 6:00 PM IST
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-500">
                Secure communication · NDA available on request
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
