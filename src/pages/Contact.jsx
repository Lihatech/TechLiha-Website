import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Building2 } from "lucide-react";
import SEO from "../config/SEO";

export default function ContactPage() {
  return (
    <>
      <SEO page="contact" />
      <section className="bg-black text-white overflow-hidden">
        {/* ================= HERO ================= */}
        <div className="relative h-[70vh] sm:h-[75vh] lg:h-[80vh] flex items-center pt-20">
          {" "}
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/teamabout.webp')" }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />
          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 py-24 sm:py-32">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl leading-tight"
              >
                Let’s Talk About Your
                <span className="block text-zinc-400 font-light mt-2 sm:mt-3">
                  Next Digital Solution
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-5 sm:mt-6 max-w-xl sm:max-w-2xl text-zinc-300 text-sm sm:text-base md:text-lg"
              >
                Connect with LIHA Tech for scalable software solutions,
                enterprise systems, and digital transformation services.
              </motion.p>
            </div>
          </div>
        </div>
        {/* ================= CONTACT INFO CARDS ================= */}
        <div className="relative -mt-12 sm:-mt-16 pb-24 sm:pb-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                icon: Building2,
                title: "Company",
                value: "LIHA Tech Solutions Pvt. Ltd.",
              },
              {
                icon: MapPin,
                title: "Office",
                value: "Bengaluru, Karnataka, India",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+91 98765 43210",
              },
              {
                icon: Mail,
                title: "Email",
                value: "contact@lihatech.com",
              },
            ].map(({ icon: Icon, title, value }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-300 mb-3 sm:mb-4" />
                <h3 className="text-xs sm:text-sm text-zinc-400 uppercase tracking-wide">
                  {title}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-medium leading-snug">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* ================= BUSINESS HOURS STRIP ================= */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-zinc-400">
            <Clock className="w-5 h-5 flex-shrink-0" />
            <p className="text-xs sm:text-sm">
              Business Hours: Monday – Friday · 9:00 AM – 6:00 PM IST
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
