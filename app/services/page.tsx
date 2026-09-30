import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { serviceGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Network, platform, and systems engineering services from EdgeAlphix LLC.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services / Engineering" title="For work that needs a direct operator." description="Alongside DigitalPlat One, EdgeAlphix works with teams on defined network, platform, and systems problems." asideTitle="How to begin" asideBody="Tell us what you run, what needs to change, and where your current constraints are." />
      <section className="section-space container-width"><div className="section-topline"><p className="section-label">01 / Areas of work</p><span>Scoped technical engagements</span></div><div className="line-list service-list">{serviceGroups.map((group) => <article key={group.number}><span>{group.number}</span><div><h2>{group.title}</h2><p>{group.description}</p></div><small>{group.detail}</small></article>)}</div></section>
      <section className="section-space company-principles"><div className="container-width editorial-grid"><div><p className="section-label">02 / Working style</p><h2>Start with the system in front of you.</h2></div><div className="editorial-copy"><p>We begin with the actual architecture, operating constraints, and intended result. From there, we define work that can be built, reviewed, and maintained.</p><a href="mailto:contact@edgealphix.com" className="text-link">Discuss a project <span aria-hidden="true">↗</span></a></div></div></section>
      <CtaBanner />
    </>
  );
}
