import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { productUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description: "Meet EdgeAlphix LLC, the company building DigitalPlat One and operating internet infrastructure.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Company / EdgeAlphix LLC" title="We build useful internet products." description="EdgeAlphix is the operating company behind DigitalPlat One. We work across product, network, and systems engineering." asideTitle="At a glance" asideBody="Based in Anaheim, California. Led by founder Edward Hsing." />
      <section className="section-space container-width editorial-grid">
        <div><p className="section-label">01 / Why we exist</p><h2>The internet gets better when the tools are easier to use.</h2></div>
        <div className="editorial-copy"><p>DigitalPlat One brings domains, sites, forms, and analytics into a single workspace. It is our main business and the clearest expression of how we work: bring connected tasks together without hiding the underlying systems.</p><p>That work is informed by direct experience with routing, cloud environments, and open systems. We build products and operate infrastructure with attention to how they perform after launch.</p><a href={productUrl} className="text-link">Explore DigitalPlat One <span aria-hidden="true">↗</span></a></div>
      </section>
      <section className="section-space company-principles"><div className="container-width"><p className="section-label">02 / How we work</p><div className="principle-grid"><article><span>01</span><h3>Build for use.</h3><p>Start with a real job, then make the path from first step to finished result clear.</p></article><article><span>02</span><h3>Operate what we build.</h3><p>Product decisions should account for the network, systems, and people behind them.</p></article><article><span>03</span><h3>Keep it legible.</h3><p>Clear interfaces, direct language, and technology that can be understood over time.</p></article></div></div></section>
      <section className="section-space container-width editorial-grid"><div><p className="section-label">03 / Wider ecosystem</p><h2>Related work, distinct organizations.</h2></div><div className="editorial-copy"><p>Edward Hsing also founded DigitalPlat Foundation, Inc., an independent U.S. public charity. Its charitable and public-interest initiatives are separate from EdgeAlphix LLC&apos;s commercial operations.</p><p>EdgeAlphix develops and operates DigitalPlat One as a commercial product.</p><Link href="/projects" className="text-link">See other projects <span aria-hidden="true">→</span></Link></div></section>
      <CtaBanner />
    </>
  );
}
