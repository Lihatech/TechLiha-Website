// src/seo/seo.config.js

const SITE = {
  name: "Liha Tech",
  url: "https://www.lihatech.com",
  defaultImage: "https://www.lihatech.com/og-image.png",
  twitter: "@lihatech",
};

export const SEO_DATA = {
  home: {
    title: "Liha Tech | IT Services, Cloud, AI & Software Development Company",
    description:
      "Liha Tech is an IT services and technology consulting company delivering cloud, AI, data engineering, enterprise software, and cybersecurity solutions.",
    path: "/",
  },

  about: {
    title: "About Liha Tech | Trusted Technology Consulting Company",
    description:
      "Learn about Liha Tech, a technology consulting and engineering company focused on secure, scalable, and future-ready digital systems.",
    path: "/about",
  },

  services: {
    title: "IT Services | Cloud, AI & Software Development – Liha Tech",
    description:
      "Explore Liha Tech’s IT services including cloud migration, AI & data science, enterprise software development, DevOps, and cybersecurity.",
    path: "/services",
  },

  contact: {
    title: "Contact Liha Tech | Technology Consulting & IT Services",
    description:
      "Get in touch with Liha Tech to discuss your technology needs, consulting services, or digital transformation initiatives.",
    path: "/contact",
  },
};

export default SITE;
