import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Infrastructure",
  description: "Explore EdgeAlphix network operations, AS201243, routing, peering, and systems engineering.",
  alternates: { canonical: "/infrastructure" },
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHero eyebrow="Infrastructure / Operations" title="Infrastructure with an operating identity." description="EdgeAlphix builds products and works directly at the network and systems layers. AS201243 is our public network identity." asideTitle="Network identity" asideBody="AS201243. Published peering policy and direct contact for network operators." />
      <section className="section-space container-width editorial-grid"><div><p className="section-label">01 / Network</p><h2>Routing you can identify.</h2></div><div className="editorial-copy"><p>Our autonomous system gives EdgeAlphix a public presence in the routing ecosystem. Operators can reach us directly for peering and network coordination.</p><a href="mailto:peering@edgealphix.com" className="text-link">peering@edgealphix.com <span aria-hidden="true">↗</span></a></div></section>
      <section className="section-space infrastructure-table"><div className="container-width"><p className="section-label">02 / Operating layers</p><div className="line-list"><article><span>01</span><h3>Network operations</h3><p>Routing, peering, traffic policy, and the systems that make them observable.</p></article><article><span>02</span><h3>Cloud environments</h3><p>Deployment architecture, hosting, and the tooling used to run services.</p></article><article><span>03</span><h3>Systems software</h3><p>Runtime and compatibility work informed by practical infrastructure needs.</p></article></div></div></section>
      <section className="section-space container-width editorial-grid"><div><p className="section-label">03 / Working together</p><h2>Talk to the people responsible for the stack.</h2></div><div className="editorial-copy"><p>We welcome focused conversations about peering, platform architecture, and systems engineering.</p><Link href="/services" className="text-link">Explore services <span aria-hidden="true">→</span></Link></div></section>
      <CtaBanner />
    </>
  );
}
