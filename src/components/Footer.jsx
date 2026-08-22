import { Link } from "react-router-dom";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Services", "/services"],
      ["Selected work", "/work"],
      ["Technology", "/technology"],
      ["Agentic AI training", "/training"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Agentic AI course", "/training/course"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__main">
        <div className="site-footer__about">
          <Link className="site-brand" to="/" aria-label="Techliha home">
            <img src="/images/lihatech-logo-official.png" alt="" />
            <span>
              <b>Techliha</b>
              <small>Plan • Practice • Patience</small>
            </span>
          </Link>
          <p>
            Practical, reliable, future-ready technology for businesses and
            people ready to move forward.
          </p>
        </div>
        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={`${group.title} links`}>
            <b>{group.title}</b>
            {group.links.map(([label, to]) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </nav>
        ))}
        <div className="site-footer__contact">
          <b>Contact</b>
          <a href="mailto:info@lihatech.com">info@lihatech.com</a>
          <a href="tel:+919172743364">+91 9172743364</a>
          <a
            href="https://www.instagram.com/techliha?igsh=aDUzMm5qN2R3aTAw"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/lihatech/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>
            Kolhapur, Maharashtra
            <br />
            Working worldwide
          </span>
        </div>
      </div>
      <div className="site-shell site-footer__bottom">
        <span>© {new Date().getFullYear()} Techliha. ALL RIGHTS RESERVED.</span>
        <span>PLAN · PRACTICE · PATIENCE</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
