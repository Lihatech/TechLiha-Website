import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  GraduationCap,
  Briefcase,
  Cpu,
  Cloud,
  Database,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "relative text-sm text-black-200 hover:text-sky-300 transition";

  const underline =
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full";

  const activeLink = "text-sky-400 after:w-full";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-slate-200/30"
          : "bg-white-900/20 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo only */}
        <div className="flex items-center">
          <img
            src="/src/assets/icon.png"
            alt="Liha Tech"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 relative">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${underline} ${isActive && activeLink}`
            }
          >
            Home
          </NavLink>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`${linkBase} ${underline} flex items-center gap-1`}
            >
              Services <ChevronDown size={14} />
            </button>

            {servicesOpen && (
              <Dropdown>
                <DropdownItem
                  icon={Code}
                  text="Web Development"
                  to="/services/web"
                />
                <DropdownItem
                  icon={GraduationCap}
                  text="IT Training"
                  to="/services/training"
                />
                <DropdownItem
                  icon={Briefcase}
                  text="Consulting"
                  to="/services/consulting"
                />
              </Dropdown>
            )}
          </div>

          {/* Technologies */}
          <div
            className="relative"
            onMouseEnter={() => setTechOpen(true)}
            onMouseLeave={() => setTechOpen(false)}
          >
            <button
              className={`${linkBase} ${underline} flex items-center gap-1`}
            >
              Technologies <ChevronDown size={14} />
            </button>

            {techOpen && (
              <Dropdown>
                <DropdownItem
                  icon={Cpu}
                  text="Frontend (React)"
                  to="/tech/frontend"
                />
                <DropdownItem
                  icon={Database}
                  text="Data Analytics"
                  to="/tech/data"
                />
                <DropdownItem
                  icon={Cloud}
                  text="Cloud & DevOps"
                  to="/tech/cloud"
                />
              </Dropdown>
            )}
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${underline} ${isActive && activeLink}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm shadow hover:shadow-sky-400/40 transition"
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-sky-950/90 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4 text-slate-200">
          <MobileLink to="/" setIsOpen={setIsOpen}>
            Home
          </MobileLink>

          <MobileSection title="Services">
            <MobileSubLink to="/services/web">Web Development</MobileSubLink>
            <MobileSubLink to="/services/training">IT Training</MobileSubLink>
            <MobileSubLink to="/services/consulting">Consulting</MobileSubLink>
          </MobileSection>

          <MobileSection title="Technologies">
            <MobileSubLink to="/tech/frontend">Frontend</MobileSubLink>
            <MobileSubLink to="/tech/data">Data Analytics</MobileSubLink>
            <MobileSubLink to="/tech/cloud">Cloud & DevOps</MobileSubLink>
          </MobileSection>

          <MobileLink to="/about" setIsOpen={setIsOpen}>
            About
          </MobileLink>

          <MobileLink
            to="/contact"
            setIsOpen={setIsOpen}
            className="block text-center bg-sky-500 text-white py-2 rounded-lg"
          >
            Contact
          </MobileLink>
        </div>
      </div>
    </header>
  );
}

/* ---------- Helpers ---------- */

function Dropdown({ children }) {
  return (
    <div className="absolute top-10 left-0 w-64 rounded-xl bg-sky-950/80 backdrop-blur-xl border border-white/10 shadow-xl p-2 animate-fadeIn">
      {children}
    </div>
  );
}

function DropdownItem({ icon, text, to }) {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/10 transition"
    >
      {React.createElement(icon, {
        size: 16,
        className: "text-sky-300",
      })}
      {text}
    </NavLink>
  );
}

function MobileLink({ to, setIsOpen, children, className = "" }) {
  return (
    <NavLink
      to={to}
      onClick={() => setIsOpen(false)}
      className={`block text-sm ${className}`}
    >
      {children}
    </NavLink>
  );
}

function MobileSection({ title, children }) {
  return (
    <div>
      <p className="text-sky-400 text-xs uppercase mb-2 tracking-wider">
        {title}
      </p>
      <div className="ml-3 space-y-2">{children}</div>
    </div>
  );
}

function MobileSubLink({ to, children }) {
  return (
    <NavLink to={to} className="block text-slate-300 text-sm">
      {children}
    </NavLink>
  );
}
