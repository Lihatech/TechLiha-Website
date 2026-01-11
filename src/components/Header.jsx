import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/icon.png";

/* ---------------- Animations ---------------- */

const headerAnim = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const dropdownAnim = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const mobileMenuAnim = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const mobileLinks = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const mobileItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- Component ---------------- */

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdowntech, setDropdowntech] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        variants={headerAnim}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 inset-x-0 z-50 px-3 sm:px-6"
      >
        <div
          className="
            mx-auto max-w-7xl
            flex items-center justify-between
            px-4 sm:px-6 py-3
            rounded-2xl backdrop-blur-xl
            bg-white shadow-xl border border-slate-200
            transition-all duration-300
          "
        >
          {/* ================= LOGO ================= */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <motion.img
              src={logo}
              alt="Company Logo"
              className="h-9 sm:h-10 w-auto object-contain"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
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
              <motion.button
                whileHover={{ y: -1 }}
                className="flex items-center gap-1 font-medium text-slate-900"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    dropdown ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {dropdown && (
                  <motion.div
                    variants={dropdownAnim}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
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

            <div
              className="relative"
              onMouseEnter={() => setDropdowntech(true)}
              onMouseLeave={() => setDropdowntech(false)}
            >
              <motion.button
                whileHover={{ y: -1 }}
                className="flex items-center gap-1 font-medium text-slate-900"
              >
                Technologies
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    dropdowntech ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {dropdowntech && (
                  <motion.div
                    variants={dropdownAnim}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 w-[410px]
                    bg-white rounded-xl shadow-2xl
                    border border-slate-200 p-5"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <ServiceLink to="/tech/ai" title="AI Solutions" />
                      <ServiceLink to="/tech/python" title="Python Solutions" />
                      <ServiceLink
                        to="/tech/big-data"
                        title="Big Data Solutions"
                      />
                      <ServiceLink
                        to="/tech/java"
                        title="Java Solutions"
                      />
                      <ServiceLink
                        to="/tech/devops"
                        title="Devops Solutions"
                      />
                      <ServiceLink to="/tech" title="View All →" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="lg:hidden text-slate-900"
          >
            <Menu size={26} />
          </motion.button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuAnim}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg"
          >
            {/* Close */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={28} />
            </motion.button>

            {/* Links */}
            <motion.div
              variants={mobileLinks}
              initial="hidden"
              animate="visible"
              className="h-full flex flex-col
              justify-center items-center gap-7
              text-white text-xl"
            >
              <MobileItem to="/" close={setOpen}>Home</MobileItem>
              <MobileItem to="/services" close={setOpen}>Services</MobileItem>
              <MobileItem to="/tech" close={setOpen}>Technologies</MobileItem>
              <MobileItem to="/about" close={setOpen}>About</MobileItem>
              <MobileItem to="/contact" close={setOpen}>Contact</MobileItem>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- Components ---------------- */

function NavItem({ to, children }) {
  return (
    <NavLink to={to} className="relative px-1 group">
      {({ isActive }) => (
        <>
          <span
            className={`font-medium transition-colors ${
              isActive ? "text-slate-900" : "text-slate-700"
            }`}
          >
            {children}
          </span>

          {isActive && (
            <motion.span
              layoutId="active-nav-underline"
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-slate-900 rounded-full"
            />
          )}

          <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-slate-900/40 scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
        </>
      )}
    </NavLink>
  );
}

function ServiceLink({ to, title }) {
  return (
    <motion.div whileHover={{ y: -2 }}>
      <NavLink
        to={to}
        className="group p-3 rounded-lg border border-slate-200
        hover:border-black hover:bg-slate-50
        transition-all flex justify-between"
      >
        <span>{title}</span>
        <span className="opacity-0 group-hover:opacity-100 transition">→</span>
      </NavLink>
    </motion.div>
  );
}

function MobileItem({ to, children, close }) {
  return (
    <motion.div variants={mobileItem}>
      <NavLink to={to} onClick={() => close(false)}>
        {children}
      </NavLink>
    </motion.div>
  );
}
