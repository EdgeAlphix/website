import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { productUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "DigitalPlat One and systems projects from EdgeAlphix LLC.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects / What we build" title="Products first. Systems work beneath them." description="DigitalPlat One is our primary business. Our wider engineering work explores the software and infrastructure beneath internet services." asideTitle="Featured product" asideBody="DigitalPlat One connects domains, websites, forms, and analytics in one workspace." />
      <section className="section-space container-width project-feature"><div><p className="section-label">01 / Primary business</p><h2>DigitalPlat One</h2><p>Start with a domain, publish a site, collect responses, and understand visits. The product brings these steps into one Dashboard for developers and small teams.</p><a href={productUrl} className="button button-dark">Explore DigitalPlat One <span aria-hidden="true">↗</span></a></div><div className="project-feature-art" aria-hidden="true"><span>DOMAIN</span><span>PAGE</span><span>FORM</span><span>ANALYTICS</span></div></section>
      <section className="section-space container-width"><div className="section-topline"><p className="section-label">02 / Systems initiatives</p><span>Engineering work beyond the product</span></div><div className="line-list"><article><span>01</span><h3>EdgeOS</h3><p>An operating system project exploring a Unix-like kernel, userspace, and Linux-compatible execution.</p></article><article><span>02</span><h3>initd</h3><p>A lightweight init and service manager for Linux environments where operators need a smaller runtime.</p></article></div></section>
      <CtaBanner />
    </>
  );
}
