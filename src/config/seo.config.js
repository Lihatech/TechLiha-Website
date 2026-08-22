// src/config/seo.config.js

const SITE = {
  name: "Techliha",
  url: "https://lihatech.com",
  defaultImage: "https://lihatech.com/og-image.png",
  twitter: "@lihatech",
};

export const SEO_DATA = {
  home: {
    title: "Techliha | IT Services, Cloud, AI & Software Development Company",
    description:
      "Techliha is an IT services and technology consulting company delivering cloud, AI, data engineering, enterprise software, and cybersecurity solutions.",
    path: "/",
  },

  about: {
    title: "About Techliha | Trusted Technology Consulting Company",
    description:
      "Learn about Techliha, a technology consulting and engineering company focused on secure, scalable, and future-ready digital systems.",
    path: "/about",
  },

  services: {
    title: "IT Services | Cloud, AI & Software Development – Techliha",
    description:
      "Explore Techliha’s IT services including cloud migration, AI & data science, enterprise software development, DevOps, and cybersecurity.",
    path: "/services",
  },

  contact: {
    title: "Contact Techliha | Technology Consulting & IT Services",
    description:
      "Get in touch with Techliha to discuss your technology needs, consulting services, or digital transformation initiatives.",
    path: "/contact",
  },
};

export default SITE;
