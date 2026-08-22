import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const AnimatedMenu = motion.div;

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Technology", to: "/technology" },
  { label: "Training", to: "/training" },
  { label: "About", to: "/about" },
];

function Brand({ onClick }) {
  return (
    <Link className="site-brand" to="/" aria-label="Techliha home" onClick={onClick}>
      <img src="/images/lihatech-logo-official.png" alt="" />
      <span>
        <b>Techliha</b>
        <small>Plan • Practice • Patience</small>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    const desktopQuery = window.matchMedia("(min-width: 1081px)");
    const menuButton = menuButtonRef.current;
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    const keepFocusInMenu = (event) => {
      if (event.key !== "Tab") return;
      const focusable = menuRef.current?.querySelectorAll(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const closeOnDesktop = (event) => {
      if (event.matches) setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("keydown", keepFocusInMenu);
    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("keydown", keepFocusInMenu);
      desktopQuery.removeEventListener("change", closeOnDesktop);
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
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
            ref={menuButtonRef}
            className="site-header__menu"
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <AnimatedMenu
            ref={menuRef}
            id="site-mobile-navigation"
            className="site-mobile-menu"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="site-mobile-menu__top">
              <Brand onClick={() => setOpen(false)} />
              <button
                ref={closeButtonRef}
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
