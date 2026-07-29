import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const AnimatedMenu = motion.div;

const navItems = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Work", to: "/work" },
  { label: "Technology", to: "/technology" },
  { label: "Training", to: "/training" },
  { label: "About", to: "/about" },
];

function Brand() {
  return (
    <Link className="site-brand" to="/" aria-label="LihaTech home">
      <img src="/images/lihatech-logo-official.png" alt="" />
      <span>
        <b>LihaTech</b>
        <small>Plan. Practice. Patience</small>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="site-shell site-header__inner">
          <Brand />
          <nav className="site-header__nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => (isActive ? "is-active" : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link className="site-header__cta" to="/contact">
            Start a Project <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            className="site-header__menu"
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <AnimatedMenu
            className="site-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="site-mobile-menu__top">
              <Brand />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X aria-hidden="true" />
              </button>
            </div>
            <nav>
              {navItems.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/contact" onClick={() => setOpen(false)}>
                <span>0{navItems.length + 1}</span>
                Contact
              </NavLink>
            </nav>
          </AnimatedMenu>
        )}
      </AnimatePresence>
    </>
  );
}
