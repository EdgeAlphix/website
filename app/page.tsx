import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { edgeOsUrl, edgeTermUrl, productSteps, productUrl } from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <section className="home-hero container-width">
        <div className="home-hero-copy">
          <p className="section-label"><span className="label-line" /> EdgeAlphix LLC / Software &amp; Network</p>
          <h1>We build software and <em>run servers.</em></h1>
          <p className="hero-description">Our work includes the open-source EdgeOS, EdgeTerm, and EdgeIoT projects, DigitalPlat One, and servers in multiple regions.</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-dark">Explore open source <span aria-hidden="true">→</span></Link>
            <a href={productUrl} className="button button-light">DigitalPlat One <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-system" role="img" aria-label="EdgeAlphix work includes EdgeOS, EdgeTerm, EdgeIoT, and DigitalPlat One">
          <div className="system-head"><span className="system-symbol">✳</span><span>EDGEALPHIX / SOFTWARE</span><span className="system-head-right">Open source · Product · Network</span></div>
          <div className="system-stage">
            <div className="system-grid" aria-hidden="true" />
            <div className="system-orbit orbit-one" aria-hidden="true" />
            <div className="system-orbit orbit-two" aria-hidden="true" />
            <div className="system-core"><span>EA</span><small>SOFTWARE + NETWORK</small></div>
            <span className="system-point point-os">01 / EDGEOS</span>
            <span className="system-point point-term">02 / EDGETERM</span>
            <span className="system-point point-iot">03 / EDGEIOT</span>
            <span className="system-point point-one">04 / DIGITALPLAT ONE</span>
          </div>
          <div className="system-foot"><span>OPEN SOURCE · PRODUCT · NETWORK</span><span>EDGEALPHIX LLC · 2026</span></div>
        </div>
        <div className="hero-index"><span>01 / 04</span><span>OPEN SOURCE · PRODUCT · NETWORK</span></div>
      </section>

      <section className="work-section section-space" id="open-source">
        <div className="container-width">
          <div className="section-topline"><p className="section-label">01 / Open-source software</p><span>Code and projects</span></div>
          <div className="work-grid">
            <a href={edgeOsUrl}><span>01 / KERNEL</span><h3>EdgeOS</h3><p>An independent Unix-like kernel for x86_64 and AArch64, built for Linux userspace compatibility.</p><b aria-hidden="true">↗</b></a>
            <a href={edgeTermUrl}><span>02 / WORKSPACE</span><h3>EdgeTerm</h3><p>A browser-based development workspace with a terminal, files, editor, and app previews.</p><b aria-hidden="true">↗</b></a>
            <Link href="/projects#edgeiot"><span>03 / DEVICES</span><h3>EdgeIoT</h3><p>Device firmware and local interfaces. See the current project overview.</p><b aria-hidden="true">↗</b></Link>
          </div>
        </div>
      </section>

      <section className="product-intro section-space" id="digitalplat-one">
        <div className="container-width">
          <div className="section-topline"><p className="section-label">02 / DigitalPlat One</p><span>Our commercial product</span></div>
          <div className="intro-grid">
            <h2>From your first domain to your first visitors.</h2>
            <div><p>Register a domain, publish a site, collect form responses, and check visits from one workspace.</p><a href={productUrl} className="text-link">See DigitalPlat One <span aria-hidden="true">↗</span></a></div>
          </div>
          <ol className="product-path">
            {productSteps.map((step) => <li key={step.number}><span className="step-number">{step.number}</span><h3>{step.name}</h3><p>{step.description}</p><span className="step-arrow" aria-hidden="true">↗</span></li>)}
          </ol>
        </div>
      </section>

      <section className="infrastructure-teaser section-space">
        <div className="container-width infrastructure-teaser-grid">
          <div><p className="section-label">03 / Network</p><h2>Servers in multiple regions.</h2></div>
          <div><p>EdgeAlphix operates AS201243 for routing and peering. We publish our peering policy and keep a direct contact for network operators.</p><Link href="/infrastructure" className="text-link">Explore the network <span aria-hidden="true">→</span></Link></div>
        </div>
        <div className="container-width proof-strip"><span>AS201243</span><span>OPEN PEERING</span><span>GLOBAL SERVERS</span></div>
      </section>

      <section className="platform-section section-space">
        <div className="container-width platform-grid">
          <div className="platform-copy"><p className="section-label">04 / EdgeAlphix LLC</p><h2>Products, source code, and servers.</h2><p>We build EdgeOS, EdgeTerm, EdgeIoT, and DigitalPlat One, and operate a server network across regions.</p><Link href="/about" className="text-link">About EdgeAlphix <span aria-hidden="true">→</span></Link></div>
          <div className="platform-lines" aria-label="EdgeAlphix areas of work">
            <div><span>01</span><strong>EdgeOS · EdgeTerm · EdgeIoT</strong><small>Open source</small></div>
            <div><span>02</span><strong>DigitalPlat One</strong><small>Product</small></div>
            <div><span>03</span><strong>Global server network</strong><small>AS201243</small></div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
