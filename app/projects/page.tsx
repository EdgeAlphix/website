import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { edgeOsUrl, edgeTermUrl, productUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "EdgeOS, EdgeTerm, EdgeIoT, initd, and DigitalPlat One from EdgeAlphix LLC.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects / EdgeAlphix LLC" title="Open-source software and products." description="We work on EdgeOS, EdgeTerm, EdgeIoT, and initd. DigitalPlat One is our commercial product." asideTitle="Source code" asideBody="The EdgeOS kernel and EdgeTerm repositories are public. Follow their links below." />
      <section className="section-space container-width" id="open-source"><div className="section-topline"><p className="section-label">01 / Open-source projects</p><span>Kernel, developer tools, and devices</span></div><div className="line-list project-list">
        <article><span>01</span><h3>EdgeOS</h3><div><p>An independent Unix-like kernel for x86_64 and AArch64. It targets compatibility with existing Linux userspace.</p><a href={edgeOsUrl} className="text-link">View kernel source <span aria-hidden="true">↗</span></a></div></article>
        <article><span>02</span><h3>EdgeTerm</h3><div><p>A development workspace that runs code in the browser. It includes a terminal, filesystem, editor, and app preview.</p><a href={edgeTermUrl} className="text-link">View EdgeTerm source <span aria-hidden="true">↗</span></a></div></article>
        <article id="edgeiot"><span>03</span><h3>EdgeIoT</h3><div><p>Device firmware and local web interfaces.</p></div></article>
        <article><span>04</span><h3>initd</h3><div><p>An init and service manager for Linux environments.</p></div></article>
      </div></section>
      <section className="section-space container-width project-feature"><div><p className="section-label">02 / Commercial product</p><h2>DigitalPlat One</h2><p>Start with a domain, publish a site, collect responses, and understand visits. The product brings these steps into one Dashboard for developers and small teams.</p><a href={productUrl} className="button button-dark">Explore DigitalPlat One <span aria-hidden="true">↗</span></a></div><div className="project-feature-art" aria-hidden="true"><span>DOMAIN</span><span>PAGE</span><span>FORM</span><span>ANALYTICS</span></div></section>
      <CtaBanner />
    </>
  );
}
