import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import {
  PageHero,
  Reveal,
} from "../components/MarketingPagePrimitives";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const subjectMap = {
    project: "New Techliha project enquiry",
    training: "Agentic AI training enquiry",
    course: "Agentic AI course enquiry",
  };
  const subject = subjectMap[topic] || "Techliha enquiry";
  const emailHref = `mailto:info@lihatech.com?subject=${encodeURIComponent(subject)}`;
  const backLink =
    topic === "project"
      ? { to: "/services", label: "Back to services" }
      : ["training", "course"].includes(topic)
        ? { to: "/training", label: "Back to training" }
        : { to: "/", label: "Back to home" };

  return (
    <>
      <PageHero
        eyebrow="START A CONVERSATION"
        title="Tell us what should work"
        accent="smarter."
        copy="Share the problem, the people it affects, and what a better outcome would look like. We’ll help you identify a focused next step."
        backLink={backLink}
        actions={
          <>
            <a
              className="marketing-button marketing-button--primary"
              href={emailHref}
            >
              Email Techliha <Mail size={17} />
            </a>
            <a
              className="marketing-button marketing-button--secondary"
              href="tel:+919172743364"
            >
              Call +91 9172743364 <Phone size={17} />
            </a>
          </>
        }
      />
      <section className="marketing-section">
        <div className="marketing-shell contact-grid">
          <Reveal className="contact-card" delay={0} interactive>
            <Mail size={24} />
            <p className="marketing-eyebrow">EMAIL</p>
            <h2>info@lihatech.com</h2>
            <p>Projects, partnerships, and course enquiries.</p>
            <a href={emailHref}>
              Write to us <ArrowRight size={16} />
            </a>
          </Reveal>
          <Reveal className="contact-card" delay={0.045} interactive>
            <Phone size={24} />
            <p className="marketing-eyebrow">PHONE</p>
            <h2>+91 9172743364</h2>
            <p>Monday to Friday, 9:00 AM–6:00 PM IST.</p>
            <a href="tel:+919172743364">
              Call Techliha <ArrowRight size={16} />
            </a>
          </Reveal>
          <Reveal className="contact-card" delay={0.09} interactive>
            <MapPin size={24} />
            <p className="marketing-eyebrow">LOCATION</p>
            <h2>Kolhapur, Maharashtra</h2>
            <p>
              3rd Floor, DRS Group Tower, 2851/A, Subhash Road, B Ward,
              Jawahar Nagar, Kolhapur 416012.
            </p>
            <a
              href="https://share.google/DXyxnxlz308kCO12w"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
      <section className="marketing-section marketing-section--mist">
        <div className="marketing-shell contact-brief">
          <Reveal>
            <p className="marketing-eyebrow">A USEFUL FIRST MESSAGE</p>
            <h2>Four details help us respond well.</h2>
          </Reveal>
          <Reveal>
            <ul>
              <li>
                <Check size={18} /> What you want to improve or learn
              </li>
              <li>
                <Check size={18} /> Who the users or participants are
              </li>
              <li>
                <Check size={18} /> Your preferred timing
              </li>
              <li>
                <Check size={18} /> What a successful outcome means to you
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
