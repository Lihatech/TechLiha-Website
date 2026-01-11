import { Link, NavLink } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import icon2 from "../assets/icon.png";

export default function Footer() {
  return (
    <footer className="bg-stone-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* ABOUT + SOCIAL */}
          <div className="lg:col-span-2 flex flex-col">
            <img
              src={icon2}
              alt="Liha Tech Logo"
              className="h-12 object-contain mb-4"
            />
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 text-left sm:text-justify">
              We explore emerging technologies to drive future capabilities and
              create meaningful impact for businesses and students. Liha Tech
              stays ahead of the technology curve by investing in innovation,
              research, and industry-driven solutions that are reliable,
              scalable, and future-ready.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-3">
              <SocialIcon icon={FaFacebookF} bg="#1877F2" />
              <SocialIcon icon={FaLinkedinIn} bg="#0A66C2" />
              <SocialIcon icon={FaTwitter} bg="#1DA1F2" />
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <FooterLink to="/services/ai-data-science">
                AI & Data Science
              </FooterLink>
              <FooterLink to="/services/big-data">
                Big Data Solutions
              </FooterLink>
              <FooterLink to="/services/web">Web Development</FooterLink>
              <FooterLink to="/services/mobile">
                Mobile App Development
              </FooterLink>
              <FooterLink to="/services/cloud-migration">
                Cloud Migration
              </FooterLink>
              <FooterLink to="/services/devops">DevOps Services</FooterLink>
              <FooterLink to="/services/cyber-security">
                Cyber Security
              </FooterLink>
            </ul>
          </div>

          {/* TECHNOLOGIES */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4 uppercase tracking-wider text-sm">
              Technologies
            </h4>
            <ul className="space-y-2 text-sm">
              <FooterLink to="/tech/ai">AI Solutions</FooterLink>
              <FooterLink to="/tech/python">Python Solutions</FooterLink>
              <FooterLink to="/tech/java">Java Solutions</FooterLink>
              <FooterLink to="/tech/big-data">Big Data Solutions</FooterLink>
              <FooterLink to="/tech/php">PHP Solutions</FooterLink>
              <FooterLink to="/tech/angular">Angular Solutions</FooterLink>
              <FooterLink to="/tech/sap">SAP Solutions</FooterLink>
              <FooterLink to="/tech/devops">DevOps Solutions</FooterLink>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-slate-600" />
                <a
                  href="mailto:info@lihatech.com"
                  className="hover:text-slate-900 transition-colors duration-200"
                >
                  info@lihatech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-slate-600" />
                <a
                  href="tel:+919767037492"
                  className="hover:text-slate-900 transition-colors duration-200"
                >
                  +91 97670 37492
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-200 mt-14 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Liha Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------- Helpers ---------- */

function FooterLink({ to, children }) {
  return (
    <li>
      <NavLink
        to={to}
        className="inline-block hover:text-slate-900 transition-transform duration-200 hover:translate-x-1"
      >
        {children}
      </NavLink>
    </li>
  );
}

function SocialIcon({ icon: Icon, bg }) {
  return (
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full shadow hover:shadow-md transition-all duration-300"
      style={{ backgroundColor: bg, color: "#fff" }}
    >
      <Icon size={16} />
    </a>
  );
}
