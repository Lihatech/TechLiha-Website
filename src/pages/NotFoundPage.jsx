import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl sm:text-8xl font-semibold tracking-tight"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-2xl sm:text-3xl font-medium"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-zinc-400 text-sm sm:text-base"
        >
          The page you’re looking for doesn’t exist or has been moved.
          Please check the URL or navigate back to a valid section.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-zinc-200 transition"
          >
            <Home className="w-4 h-4" />
            Go to Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-xl font-medium text-white hover:bg-white/10 transition"
          >
            <Mail className="w-4 h-4" />
            Contact Support
          </Link>
        </motion.div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back
          </button>
        </motion.div>
      </div>
    </section>
  );
}
