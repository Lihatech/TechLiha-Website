import { NavLink, useLocation } from "react-router-dom";

export default function AutoBreadcrumb({
  className = "",
  activeClass = "text-slate-400",
}) {
  const location = useLocation();

  const segments = location.pathname
    .split("/")
    .filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");

    // Format label
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return { label, path };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-2 text-xs sm:text-sm text-slate-300 ${className}`}
    >
      <NavLink to="/" className="hover:text-white transition">
        Home
      </NavLink>

      {crumbs.map((crumb, index) => (
        <span key={crumb.path} className="flex items-center gap-2">
          <span className="opacity-60">/</span>

          {index === crumbs.length - 1 ? (
            <span className={activeClass}>
              {crumb.label}
            </span>
          ) : (
            <NavLink
              to={crumb.path}
              className="hover:text-white transition"
            >
              {crumb.label}
            </NavLink>
          )}
        </span>
      ))}
    </nav>
  );
}
