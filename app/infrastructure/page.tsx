import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { peeringDbUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Infrastructure",
  description: "EdgeAlphix servers across regions, AS201243, routing, and open peering.",
  alternates: { canonical: "/infrastructure" },
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHero eyebrow="Infrastructure / Network" title="Servers across regions. AS201243." description="EdgeAlphix runs servers in multiple regions and operates AS201243 for routing and peering." asideTitle="Peering" asideBody="Open peering policy. Current locations are listed on PeeringDB." />
      <section className="section-space container-width editorial-grid"><div><p className="section-label">01 / AS201243</p><h2>Routing and peering.</h2></div><div className="editorial-copy"><p>Network operators can contact us directly about peering. We publish our policy and maintain a public PeeringDB record.</p><a href={peeringDbUrl} className="text-link">View PeeringDB record <span aria-hidden="true">↗</span></a><br /><a href="mailto:peering@edgealphix.com" className="text-link">peering@edgealphix.com <span aria-hidden="true">↗</span></a></div></section>
      <section className="section-space infrastructure-table"><div className="container-width"><p className="section-label">02 / Infrastructure work</p><div className="line-list"><article><span>01</span><h3>Global servers</h3><p>Servers in multiple regions for the services we operate.</p></article><article><span>02</span><h3>Network operations</h3><p>Routing, peering, traffic policy, and network monitoring.</p></article><article><span>03</span><h3>Systems software</h3><p>Tools for deploying and operating services, including open-source projects.</p></article></div></div></section>
      <section className="section-space container-width editorial-grid"><div><p className="section-label">03 / Services</p><h2>Work with our engineers.</h2></div><div className="editorial-copy"><p>Contact us about peering, hosting architecture, or systems software.</p><Link href="/services" className="text-link">See services <span aria-hidden="true">→</span></Link></div></section>
      <CtaBanner />
    </>
  );
}
