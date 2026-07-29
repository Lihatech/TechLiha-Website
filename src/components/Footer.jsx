import { Link } from "react-router-dom";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Solutions", "/solutions"],
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
      ["Internship", "/training/internship"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__main">
        <div className="site-footer__about">
          <Link className="site-brand" to="/" aria-label="LihaTech home">
            <img src="/images/lihatech-logo-official.png" alt="" />
            <span>
              <b>LihaTech</b>
              <small>Plan. Practice. Patience</small>
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
          <a href="tel:+919767037492">+91 97670 37492</a>
          <span>
            Pune, India
            <br />
            Working worldwide
          </span>
        </div>
      </div>
      <div className="site-shell site-footer__bottom">
        <span>© {new Date().getFullYear()} LIHATECH. ALL RIGHTS RESERVED.</span>
        <span>PLAN · PRACTICE · PATIENCE</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
