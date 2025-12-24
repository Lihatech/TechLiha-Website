import { NavLink, useLocation } from "react-router-dom";

export default function AutoBreadcrumb({
  className = "",
  activeClass = "text-slate-900 dark:text-white font-medium",
}) {
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return { label, path };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-sm text-slate-500 dark:text-slate-400 ${className}`}
    >
      <NavLink
        to="/"
        className="hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        Home
      </NavLink>

      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <div key={crumb.path} className="flex items-center">
            <span className="mx-3 text-slate-300 dark:text-slate-600">
              /
            </span>

            {isLast ? (
              <span className={activeClass}>
                {crumb.label}
              </span>
            ) : (
              <NavLink
                to={crumb.path}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {crumb.label}
              </NavLink>
            )}
          </div>
        );
      })}
    </nav>
  );
}
