export const productUrl = "https://digitalplat.one/";
export const edgeOsUrl = "https://github.com/EdgeOS-Project/kernel";
export const edgeTermUrl = "https://github.com/EdwardLab/EdgeTerm";
export const peeringDbUrl = "https://www.peeringdb.com/asn/201243";

export const siteNav = [
  { href: productUrl, label: "DigitalPlat One", external: true },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "Company" },
];

export const productSteps = [
  {
    number: "01",
    name: "Domains",
    description: "Find a name, register it, and manage DNS in one place.",
  },
  {
    number: "02",
    name: "Pages",
    description: "Build, preview, and publish a website connected to your domain.",
  },
  {
    number: "03",
    name: "Forms",
    description: "Collect responses and route them through notifications or webhooks.",
  },
  {
    number: "04",
    name: "Analytics",
    description: "See visits, sources, and events after your site goes live.",
  },
];

export const serviceGroups = [
  {
    number: "01",
    title: "Network and cloud",
    description: "Architecture and operations for routing, hosting, and distributed infrastructure.",
    detail: "Peering, traffic policy, regional deployments, and the tooling needed to run them.",
  },
  {
    number: "02",
    title: "Platform engineering",
    description: "Software that makes infrastructure easier to operate and integrate.",
    detail: "Backend services, control surfaces, developer workflows, and production readiness.",
  },
  {
    number: "03",
    title: "Systems work",
    description: "Low-level engineering for runtimes, compatibility, and open systems.",
    detail: "Practical implementation and long-term maintenance, grounded in real operating needs.",
  },
];

export const footerLinks = {
  company: [
    { href: productUrl, label: "DigitalPlat One" },
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "Company" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms and Conditions" },
    { href: "/sales-terms-and-conditions", label: "Sales Terms and Conditions" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/do-not-sell-or-share-my-personal-information", label: "Do Not Sell or Share My Personal Information" },
    { href: "/acceptable-use-policy", label: "Acceptable Use Policy" },
    { href: "/law-enforcement-and-subpoena-policy", label: "Law Enforcement & Subpoena Policy" },
    { href: "/us-sanctions-compliance-policy", label: "U.S. Sanctions Compliance Policy" },
    { href: "/cookie-policy", label: "Cookie Policy" },
    { href: "/peering-policy", label: "Peering Policy" },
  ],
};
