import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/icon.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20"
            : "bg-white/30 backdrop-blur-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Company Logo" className="h-9 sm:h-10" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <NavItem to="/" scrolled={scrolled}>
            Home
          </NavItem>

          <NavDropdown
            label="Services"
            open={dropdown === "solutions"}
            onOpen={() => setDropdown("solutions")}
            onClose={() => setDropdown(null)}
            scrolled={scrolled}
          >
            <DropdownLink to="/services/web">Web Development</DropdownLink>
            <DropdownLink to="/services/cloud-migration">
              Cloud Migration Development
            </DropdownLink>
            <DropdownLink to="/services/aws">AWS Development</DropdownLink>
            <DropdownLink to="/services/qa-testing">
              QA & Testing Development
            </DropdownLink>
            <DropdownLink to="/services/enterprise-solutions">
              Enterprise Solutions Development
            </DropdownLink>
            <DropdownLink to="/services">View More</DropdownLink>
          </NavDropdown>

          <NavItem to="/tech" scrolled={scrolled}>
            Technologies
          </NavItem>
          <NavItem to="/about" scrolled={scrolled}>
            About
          </NavItem>
          <NavItem to="/contact" scrolled={scrolled}>
            Contact
          </NavItem>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden transition-colors duration-300 text-2xl ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/30 backdrop-blur-md border-t border-white/20"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col text-slate-800">
              <MobileLink to="/" close={() => setOpen(false)}>
                Home
              </MobileLink>
              <MobileLink to="/services" close={() => setOpen(false)}>
                Services
              </MobileLink>
              <MobileLink to="/tech" close={() => setOpen(false)}>
                Technologies
              </MobileLink>
              <MobileLink to="/about" close={() => setOpen(false)}>
                About Us
              </MobileLink>
              <MobileLink to="/contact" close={() => setOpen(false)}>
                Contact
              </MobileLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ---------------- Helpers ---------------- */

function NavItem({ to, children, scrolled }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative text-sm sm:text-base font-medium transition-colors duration-300
         ${scrolled ? "text-slate-900" : "text-white"}
         ${isActive ? "font-semibold" : ""}
         after:absolute after:left-0 after:-bottom-1 after:h-[1px]
         after:transition-all after:duration-300
         ${scrolled ? "after:bg-slate-900" : "after:bg-white"}
         ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
      }
    >
      {children}
    </NavLink>
  );
}

function NavDropdown({ label, open, onOpen, onClose, children, scrolled }) {
  return (
    <div onMouseEnter={onOpen} onMouseLeave={onClose} className="relative">
      <button
        className={`
          relative text-sm sm:text-base font-medium transition-colors duration-300
          flex items-center gap-1
          ${scrolled ? "text-slate-900" : "text-white"}
          after:absolute after:left-0 after:-bottom-1 after:h-[1px]
          after:transition-all after:duration-300
          ${scrolled ? "after:bg-slate-900" : "after:bg-white"}
          hover:after:w-full
        `}
      >
        {label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center"
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-10 left-0 w-64 sm:w-72 bg-white/90 backdrop-blur-md border border-slate-200 rounded-lg shadow-lg z-50"
          >
            <div className="py-2 flex flex-col">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className="block px-4 py-2 text-sm sm:text-base text-slate-700 hover:bg-slate-100 transition rounded-md"
    >
      {children}
    </NavLink>
  );
}

function MobileLink({ to, children, close }) {
  return (
    <NavLink
      to={to}
      onClick={close}
      className="block text-base font-medium px-4 py-2 rounded-md hover:bg-white/20 transition-colors"
    >
      {children}
    </NavLink>
  );
}
