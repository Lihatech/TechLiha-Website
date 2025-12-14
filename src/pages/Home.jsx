import { Typewriter } from "react-simple-typewriter";
import {
  Brain,
  Database,
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Bug,
  Briefcase,
  Cpu,
  Award,
  Lock,
  TrendingUp,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

/* ---------- Scroll Hook ---------- */
function useInView() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, show];
}

export default function Home() {
  const [servicesRef, servicesVisible] = useInView();
  const [whyRef, whyVisible] = useInView();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center">
        <img
          src="../assets/hero-bg.jpg"
          alt="IT Solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-sky-950/70 backdrop-blur-sm"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <Typewriter
              words={[
                "Enterprise IT Solutions",
                "AI & Data Science Services",
                "Professional IT Training",
                "Digital Transformation Experts",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            We help students grow with modern technology,
            enterprise-grade solutions, and industry-focused training.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/services"
              className="px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        ref={servicesRef}
        className={`py-20 bg-slate-50 transition-all duration-700
  ${
    servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                desc: "Custom AI and machine learning solutions that transform raw data into intelligent insights and predictive models for real business challenges.",
                link: "/services/ai-ml",
              },
              {
                icon: Database,
                title: "Big Data Solutions",
                desc: "End-to-end big data engineering, analytics, and visualization solutions to uncover patterns, trends, and actionable intelligence.",
                link: "/services/big-data",
              },
              {
                icon: Globe,
                title: "Web Development",
                desc: "High-performance, scalable, and secure web applications designed to reflect your brand and drive business growth.",
                link: "/services/web",
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                desc: "Robust Android and cross-platform mobile applications with optimized performance, UX, and faster time-to-market.",
                link: "/services/mobile",
              },
              {
                icon: Cloud,
                title: "Cloud & AWS",
                desc: "Cloud migration, AWS development, and cost-optimized infrastructure that scales with your business needs.",
                link: "/services/cloud",
              },
              {
                icon: Cpu,
                title: "DevOps Services",
                desc: "CI/CD pipelines, automation, monitoring, and DevSecOps practices to improve deployment speed and system reliability.",
                link: "/services/devops",
              },
              {
                icon: ShieldCheck,
                title: "Cyber Security",
                desc: "Advanced security solutions protecting your systems from data breaches, malware, phishing, and cyber threats.",
                link: "/services/cyber-security",
              },
              {
                icon: Bug,
                title: "QA & Testing",
                desc: "Comprehensive software testing services ensuring performance, reliability, usability, and compliance.",
                link: "/services/testing",
              },
              {
                icon: Briefcase,
                title: "Enterprise Solutions",
                desc: "Custom enterprise-grade software solutions built to support large-scale operations and complex business workflows.",
                link: "/services/enterprise",
              },
            ].map(({ icon: IconComp, title, desc, link }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-xl shadow transition-all duration-300
hover:-translate-y-1 hover:shadow-xl flex flex-col"
              >
                <IconComp className="text-sky-500 mb-4" size={28} />

                <h3 className="font-semibold text-lg mb-2">{title}</h3>

                <p className="text-slate-600 text-sm flex-grow">{desc}</p>

                <NavLink
                  to={link}
                  className="mt-4 text-sky-500 text-sm font-medium hover:underline"
                >
                  Learn More →
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
  ref={whyRef}
  className={`py-16 sm:py-20 bg-sky-950 text-white transition-all duration-700
    ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12">
      Why Choose Liha Tech
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
      {[
        {
          icon: Award,
          title: "Enterprise Experience",
          desc: "Proven track record delivering IT solutions to businesses across industries.",
        },
        {
          icon: TrendingUp,
          title: "Certified Professionals",
          desc: "Our team consists of highly skilled and certified IT experts.",
        },
        {
          icon: Lock,
          title: "Secure & Scalable Systems",
          desc: "Robust, secure, and scalable systems tailored for business growth.",
        },
        {
          icon: Briefcase,
          title: "Cost Effective Solutions",
          desc: "Providing premium IT solutions that fit your budget.",
        },
      ].map(({ icon: Icon, title, desc }) => (
        <div key={title} className="flex flex-col items-center text-center px-4 sm:px-2 lg:px-0">
          <div className="bg-sky-700 rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
            <Icon size={28} className="sm:text-white" />
          </div>
          <h3 className="font-semibold text-lg sm:text-xl md:text-lg mb-1 sm:mb-2">{title}</h3>
          <p className="text-slate-300 text-sm sm:text-base">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
