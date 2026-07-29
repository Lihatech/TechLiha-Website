import partsMonitoring1 from "../assets/projects/parts-monitoring/1.webp";
import partsMonitoring2 from "../assets/projects/parts-monitoring/2.webp";
import partsMonitoring3 from "../assets/projects/parts-monitoring/3.webp";
import partsMonitoring4 from "../assets/projects/parts-monitoring/4.webp";
import partsMonitoring5 from "../assets/projects/parts-monitoring/5.webp";
import perfumeChatbot1 from "../assets/projects/perfume-chatbot/1.webp";
import perfumeChatbot2 from "../assets/projects/perfume-chatbot/2.webp";
import perfumeChatbot3 from "../assets/projects/perfume-chatbot/3.webp";
import whatsappBot1 from "../assets/projects/whatsapp-bot/1.webp";
import whatsappBot2 from "../assets/projects/whatsapp-bot/2.webp";
import whatsappBot3 from "../assets/projects/whatsapp-bot/3.webp";
import whatsappBot4 from "../assets/projects/whatsapp-bot/4.webp";
import whatsappBot5 from "../assets/projects/whatsapp-bot/5.webp";

export const projects = [
  {
    number: "01",
    eyebrow: "WHATSAPP AUTOMATION",
    title: "Twin_AI Commerce Assistant",
    copy: "One intelligent WhatsApp assistant for customer support, product discovery, targeted campaigns, order journeys, and business insights.",
    outcome:
      "A complete customer journey available through the channel people already use.",
    tags: ["Meta WhatsApp API", "RAG", "24/7 support"],
    images: [
      { src: whatsappBot1, width: 900, height: 1187 },
      { src: whatsappBot2, width: 900, height: 1187 },
      { src: whatsappBot3, width: 900, height: 1187 },
      { src: whatsappBot4, width: 900, height: 1187 },
      { src: whatsappBot5, width: 900, height: 1350 },
    ],
  },
  {
    number: "02",
    eyebrow: "CONVERSATIONAL COMMERCE",
    title: "AI Fragrance Consultant",
    copy: "A conversational shopping assistant that understands natural language and turns each customer request into a personalized fragrance recommendation.",
    outcome:
      "Natural product discovery shaped around preferences, context, and intent.",
    tags: ["Recommendations", "Context memory", "Product search"],
    images: [
      { src: perfumeChatbot1, width: 900, height: 1125 },
      { src: perfumeChatbot2, width: 900, height: 1187 },
      { src: perfumeChatbot3, width: 900, height: 1125 },
    ],
  },
  {
    number: "03",
    eyebrow: "INDUSTRIAL AI",
    title: "AI Parts Identification",
    copy: "An AI-powered inspection system that helps CNC operators identify, verify, and log tooling in seconds using intelligent OCR.",
    outcome:
      "Faster inspections, fewer production errors, and complete traceability.",
    tags: ["AI OCR", "Tool verification", "Quality logging"],
    images: [
      { src: partsMonitoring1, width: 900, height: 1125 },
      { src: partsMonitoring2, width: 900, height: 1125 },
      { src: partsMonitoring3, width: 900, height: 1125 },
      { src: partsMonitoring4, width: 900, height: 1350 },
      { src: partsMonitoring5, width: 900, height: 1125 },
    ],
  },
];

export const technologies = [
  {
    title: "Artificial Intelligence",
    copy: "Agentic workflows, retrieval, computer vision, natural language systems, and intelligent automation.",
    href: "/tech/ai",
    label: "AI",
  },
  {
    title: "Python",
    copy: "Production APIs, automation, data systems, and AI services built for clear maintenance and scale.",
    href: "/tech/python",
    label: "PY",
  },
  {
    title: "Java",
    copy: "Robust enterprise applications and service architectures for long-term stability.",
    href: "/tech/java",
    label: "JV",
  },
  {
    title: "Big Data",
    copy: "Scalable processing and analytics foundations for high-volume business information.",
    href: "/tech/big-data",
    label: "BD",
  },
  {
    title: "Angular",
    copy: "Structured, high-performance web applications for complex product workflows.",
    href: "/tech/angular",
    label: "NG",
  },
  {
    title: "Cloud & DevOps",
    copy: "Automated delivery, infrastructure, monitoring, and operational resilience.",
    href: "/tech/devops",
    label: "DO",
  },
];
