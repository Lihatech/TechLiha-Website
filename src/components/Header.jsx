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
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-slate-200" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Company Logo" className="h-9" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <NavItem to="/">Home</NavItem>

          <NavDropdown
            label="Services"
            open={dropdown === "solutions"}
            onOpen={() => setDropdown("solutions")}
            onClose={() => setDropdown(null)}
          >
            <DropdownLink to="/services/web">Web Developementt</DropdownLink>
            {/* <DropdownLink to="/services/enterprise">
              Enterprise Software
            </DropdownLink> */}
            <DropdownLink to="/services/cloud">Cloud Migration Development</DropdownLink>
            <DropdownLink to="/services">View More</DropdownLink>
          </NavDropdown>

          {/* <NavDropdown
            label="Technologies"
            open={dropdown === "industries"}
            onOpen={() => setDropdown("industries")}
            onClose={() => setDropdown(null)}
          >
            <DropdownLink to="/tech/python">Python</DropdownLink>
            <DropdownLink to="/tech/java">Java</DropdownLink>
            <DropdownLink to="/tech/education">Education</DropdownLink>
            <DropdownLink to="/tech">View More</DropdownLink>
          </NavDropdown> */}

          <NavItem to="/tech">Technologies</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        {/* CTA */}

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-slate-900"
        >
          {open ? <X /> : <Menu />}
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
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-6 py-6 space-y-4 text-slate-800">
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

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative text-sm font-medium transition-colors duration-200
         ${isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}
         after:absolute after:left-0 after:-bottom-1
         after:h-[1px] after:bg-slate-700
         after:transition-all after:duration-300
         ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
      }
    >
      {children}
    </NavLink>
  );
}

function NavDropdown({ label, open, onOpen, onClose, children }) {
  return (
    <div onMouseEnter={onOpen} onMouseLeave={onClose} className="relative">
      <button
        className="
    relative text-sm font-medium text-slate-600
    hover:text-slate-900 transition-colors duration-200
    after:absolute after:left-0 after:-bottom-1
    after:h-[1px] after:w-0 after:bg-slate-700
    after:transition-all after:duration-300
    hover:after:w-full
    flex items-center gap-1
  "
      >
        {label}
        <ChevronDown size={14} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-10 left-0 w-64 bg-white border border-slate-200 rounded-lg shadow-lg"
          >
            <div className="py-2">{children}</div>
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
      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition"
    >
      {children}
    </NavLink>
  );
}

function MobileLink({ to, children, close }) {
  return (
    <NavLink to={to} onClick={close} className="block text-sm font-medium">
      {children}
    </NavLink>
  );
}
