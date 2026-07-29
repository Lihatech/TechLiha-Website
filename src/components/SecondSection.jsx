import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Braces, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const offerings = [
  {
    number: "01",
    label: "Build",
    title: "Development",
    copy: "From AI solutions and custom software to websites and digital tools, we create technology designed around real business needs.",
    items: ["AI solutions", "Custom software", "Websites", "Digital tools"],
    href: "/solutions",
    linkLabel: "Explore development services",
    icon: Braces,
  },
  {
    number: "02",
    label: "Learn",
    title: "Teaching",
    copy: "Through our online and offline Agentic AI course and internship, learners build practical skills through guided, hands-on work.",
    items: ["Agentic AI course", "Online & offline", "Internship"],
    href: "/training",
    linkLabel: "Explore Agentic AI learning",
    icon: GraduationCap,
  },
];

export default function SecondSection({ revealed = true }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sky-offering-grid",
          start: "top 84%",
          once: true,
        },
      });

      timeline
        .from(".sky-offering-card", {
          autoAlpha: 0,
          y: 38,
          scale: 0.96,
          rotationX: 4,
          transformOrigin: "50% 100%",
          stagger: 0.14,
          duration: 0.56,
          ease: "power2.out",
          clearProps: "transform",
        })
        .from(
          ".sky-about-panel",
          {
            autoAlpha: 0,
            y: 26,
            duration: 0.46,
            ease: "power2.out",
            clearProps: "transform",
          },
          "-=0.18",
        );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`sky-second ${revealed ? "sky-second--revealed" : "sky-second--locked"}`}
      id="what-we-build"
      aria-labelledby="sky-second-title"
    >
      <div className="sky-second__inner">
        <header className="sky-second__header">
          <p className="sky-second__eyebrow">WHAT WE DO</p>
          <h2 id="sky-second-title">
            Technology that moves businesses and people forward.
          </h2>
          <p className="sky-second__copy">
            LihaTech brings development and learning together. We build practical digital
            solutions for businesses and help aspiring professionals develop real-world
            technology skills.
          </p>
        </header>

        <div className="sky-offering-grid">
          {offerings.map((offering) => {
            const Icon = offering.icon;

            return (
              <article className="sky-offering-card" key={offering.title}>
                <div className="sky-offering-card__top">
                  <span>{offering.number}</span>
                  <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <p className="sky-offering-card__label">{offering.label}</p>
                <h3>{offering.title}</h3>
                <p className="sky-offering-card__copy">{offering.copy}</p>
                <ul aria-label={`${offering.title} includes`}>
                  {offering.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={offering.href}>
                  {offering.linkLabel}
                  <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>

        <aside className="sky-about-panel" aria-labelledby="sky-about-title">
          <p className="sky-about-panel__eyebrow">ABOUT LIHATECH</p>
          <div>
            <h3 id="sky-about-title">
              We build <span className="sky-about-panel__accent">technology—</span>and the{" "}
              <span className="sky-about-panel__accent">people</span> who will shape its future.
            </h3>
            <p>
              LihaTech is a technology and learning company focused on creating meaningful
              digital solutions and practical Agentic AI learning. We work with businesses
              to turn ideas into useful products while helping aspiring professionals build
              skills through our course, internship, and real-world experience.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
