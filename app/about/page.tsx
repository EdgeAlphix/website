import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { productUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description: "EdgeAlphix LLC builds DigitalPlat One, open-source software, and a global server network.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Company / EdgeAlphix LLC" title="We build software and run servers." description="DigitalPlat One is our main business. We also work on EdgeOS, EdgeTerm, EdgeIoT, and a server network across regions." asideTitle="At a glance" asideBody="Based in Anaheim, California. Led by founder Edward Hsing." />
      <section className="section-space container-width editorial-grid">
        <div><p className="section-label">01 / Our work</p><h2>Product, open source, and network.</h2></div>
        <div className="editorial-copy"><p>DigitalPlat One puts domains, sites, forms, and analytics in one workspace. EdgeOS is an independent kernel; EdgeTerm is a browser-based development workspace. EdgeIoT covers device software.</p><p>We run servers across regions and operate AS201243.</p><a href={productUrl} className="text-link">Explore DigitalPlat One <span aria-hidden="true">↗</span></a><br /><Link href="/projects" className="text-link">See open-source projects <span aria-hidden="true">→</span></Link></div>
      </section>
      <section className="section-space company-principles"><div className="container-width editorial-grid"><div><p className="section-label">02 / Separate organization</p><h2>DigitalPlat Foundation is independent.</h2></div><div className="editorial-copy"><p>Edward Hsing also founded DigitalPlat Foundation, Inc., an independent U.S. public charity. Its charitable and public-interest initiatives are separate from EdgeAlphix LLC&apos;s commercial operations.</p><p>EdgeAlphix develops and operates DigitalPlat One as a commercial product.</p></div></div></section>
      <CtaBanner />
    </>
  );
}
