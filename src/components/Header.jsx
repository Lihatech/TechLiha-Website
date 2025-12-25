import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/icon.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 inset-x-0 z-50 px-3 sm:px-6"
      >
        <div
          className={`mx-auto max-w-7xl
          flex items-center justify-between
          px-4 sm:px-6 py-3
          rounded-2xl backdrop-blur-xl
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/90 shadow-xl border border-slate-200"
              : "bg-white/70 border border-white/40"
          }`}
        >
          {/* ================= LOGO ================= */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <motion.img
              src={logo}
              alt="Company Logo"
              className="h-9 sm:h-10 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <span className="hidden sm:block font-semibold text-slate-900 text-sm">
            
            </span>
          </NavLink>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavItem to="/">Home</NavItem>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <button className="flex items-center gap-1 font-medium text-slate-900">
                Services
                <ChevronDown
                  size={14}
                  className={`transition ${
                    dropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 left-0 w-[460px]
                    bg-white rounded-xl shadow-2xl
                    border border-slate-200 p-5"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <ServiceLink to="/services/web" title="Web Development" />
                      <ServiceLink to="/services/aws" title="AWS Development" />
                      <ServiceLink
                        to="/services/cloud-migration"
                        title="Cloud Migration"
                      />
                      <ServiceLink
                        to="/services/qa-testing"
                        title="QA & Testing"
                      />
                      <ServiceLink
                        to="/services/enterprise-solutions"
                        title="Enterprise Solutions"
                      />
                      <ServiceLink to="/services" title="View All →" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavItem to="/tech">Technologies</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-slate-900"
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg"
          >
            {/* Close */}
            <div className="absolute top-6 right-6">
              <button onClick={() => setOpen(false)} className="text-white">
                <X size={28} />
              </button>
            </div>

            {/* Menu */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="h-full flex flex-col
              justify-center items-center gap-7
              text-white text-xl"
            >
              <MobileLink to="/" close={setOpen}>Home</MobileLink>
              <MobileLink to="/services" close={setOpen}>Services</MobileLink>
              <MobileLink to="/tech" close={setOpen}>Technologies</MobileLink>
              <MobileLink to="/about" close={setOpen}>About</MobileLink>
              <MobileLink to="/contact" close={setOpen}>Contact</MobileLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= COMPONENTS ================= */

function NavItem({ to, children }) {
  return (
    <NavLink to={to} className="relative px-1">
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.span
              layoutId="nav-pill"
              className="absolute -inset-2 rounded-full bg-black/10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative font-medium text-slate-900">
            {children}
          </span>
        </>
      )}
    </NavLink>
  );
}

function ServiceLink({ to, title }) {
  return (
    <NavLink
      to={to}
      className="p-3 rounded-lg border border-slate-200
      hover:border-black hover:bg-slate-50 transition"
    >
      {title}
    </NavLink>
  );
}

function MobileLink({ to, children, close }) {
  return (
    <NavLink
      to={to}
      onClick={() => close(false)}
      className="font-medium hover:opacity-70 transition"
    >
      {children}
    </NavLink>
  );
}
