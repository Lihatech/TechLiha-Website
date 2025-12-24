import { NavLink } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Mail, Phone } from "lucide-react";

import icon2 from "../assets/icon.png";

export default function Footer() {
  return (
    <footer className="bg-stone-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* ABOUT + SOCIAL */}
          <div className="lg:col-span-2">
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
            <div className="mt-6">
              <div className="flex gap-3">
                <SocialIcon
                  icon={Facebook}
                  bg="bg-[#1877F2]"
                  text="text-white"
                />
                <SocialIcon
                  icon={Linkedin}
                  bg="bg-[#0A66C2]"
                  text="text-white"
                />
                <SocialIcon
                  icon={Twitter}
                  bg="bg-[#1DA1F2]"
                  text="text-white"
                />
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Services</h4>
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
            <h4 className="text-slate-900 font-semibold mb-4">Technologies</h4>

            <ul className="space-y-2 text-sm">
              <FooterLink to="/tech/python">Python Development</FooterLink>

              <FooterLink to="/tech/java">Java Development</FooterLink>

              <FooterLink to="/tech/big-data">Big Data Analytics</FooterLink>

              <FooterLink to="/tech/php">PHP Development</FooterLink>

              <FooterLink to="/tech/angular">Angular Development</FooterLink>

              <FooterLink to="/tech/sap">SAP Development</FooterLink>
              
              <FooterLink to="/tech/devops">DevOps Development</FooterLink>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:info@liha.tech"
                  className="hover:text-gray-500 transition"
                >
                  info@liha.tech
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+911234567890"
                  className="hover:text-gray-500 transition"
                >
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate/10 mt-14 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Liha Tech. All rights reserved.
          <span className="block mt-2 text-xs text-slate-500">
            Made with ♥ by Liha Tech
          </span>
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
        className="inline-block hover:text-gray-500 transition
                   hover:translate-x-1 duration-200"
      >
        {children}
      </NavLink>
    </li>
  );
}

function SocialIcon({ icon: Icon, bg, text }) {
  return (
    <a
      href="#"
      className={`w-9 h-9 flex items-center justify-center rounded-full
                 ${bg} ${text}
                 hover:opacity-90 hover:-translate-y-0.5
                 transition-all duration-300`}
    >
      <Icon size={16} />
    </a>
  );
}
