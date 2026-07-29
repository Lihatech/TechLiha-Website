import { ArrowRight, Check, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import {
  PageHero,
  Reveal,
} from "../components/MarketingPagePrimitives";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const subjectMap = {
    project: "New LihaTech project enquiry",
    training: "Agentic AI training enquiry",
    course: "Agentic AI course enquiry",
    internship: "Agentic AI internship enquiry",
  };
  const subject = subjectMap[topic] || "LihaTech enquiry";
  const emailHref = `mailto:info@lihatech.com?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <PageHero
        eyebrow="START A CONVERSATION"
        title="Tell us what should work"
        accent="smarter."
        copy="Share the problem, the people it affects, and what a better outcome would look like. We’ll help you identify a focused next step."
        actions={
          <>
            <a
              className="marketing-button marketing-button--primary"
              href={emailHref}
            >
              Email LihaTech <Mail size={17} />
            </a>
            <a
              className="marketing-button marketing-button--secondary"
              href="tel:+919767037492"
            >
              Call +91 97670 37492 <Phone size={17} />
            </a>
          </>
        }
        aside={
          <div className="contact-pulse">
            <Sparkles size={34} aria-hidden="true" />
            <span>OPEN TO NEW CONVERSATIONS</span>
          </div>
        }
      />
      <section className="marketing-section">
        <div className="marketing-shell contact-grid">
          <Reveal className="contact-card">
            <Mail size={24} />
            <p className="marketing-eyebrow">EMAIL</p>
            <h2>info@lihatech.com</h2>
            <p>Projects, partnerships, course enquiries, and internships.</p>
            <a href={emailHref}>
              Write to us <ArrowRight size={16} />
            </a>
          </Reveal>
          <Reveal className="contact-card">
            <Phone size={24} />
            <p className="marketing-eyebrow">PHONE</p>
            <h2>+91 97670 37492</h2>
            <p>Monday to Friday, 9:00 AM–6:00 PM IST.</p>
            <a href="tel:+919767037492">
              Call LihaTech <ArrowRight size={16} />
            </a>
          </Reveal>
          <Reveal className="contact-card">
            <MapPin size={24} />
            <p className="marketing-eyebrow">LOCATION</p>
            <h2>Pune, India</h2>
            <p>Working with businesses and learners worldwide.</p>
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
