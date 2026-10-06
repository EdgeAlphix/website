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
          <h1>We build products and <em>open-source software.</em></h1>
          <p className="hero-description">DigitalPlat One brings domains, sites, forms, and analytics together. EdgeOS, EdgeTerm, and EdgeIoT are our open-source projects. We also run servers in multiple regions.</p>
          <div className="hero-actions">
            <a href={productUrl} className="button button-dark">DigitalPlat One <span aria-hidden="true">↗</span></a>
            <Link href="/projects" className="button button-dark">Open-source projects <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-system" role="img" aria-label="EdgeAlphix work includes EdgeOS, EdgeTerm, EdgeIoT, and DigitalPlat One">
          <div className="system-head"><span className="system-symbol">✳</span><span>EDGEALPHIX / SOFTWARE</span><span className="system-head-right">Product · Open source · Network</span></div>
          <div className="system-stage">
            <div className="system-grid" aria-hidden="true" />
            <div className="system-orbit orbit-one" aria-hidden="true" />
            <div className="system-orbit orbit-two" aria-hidden="true" />
            <div className="system-core"><span>EA</span><small>SOFTWARE + NETWORK</small></div>
            <span className="system-point point-os">01 / DIGITALPLAT ONE</span>
            <span className="system-point point-term">02 / EDGEOS</span>
            <span className="system-point point-iot">03 / EDGETERM</span>
            <span className="system-point point-one">04 / EDGEIOT</span>
          </div>
          <div className="system-foot"><span>PRODUCT · OPEN SOURCE · NETWORK</span><span>EDGEALPHIX LLC · 2026</span></div>
        </div>
        <div className="hero-index"><span>01 / 03</span><span>PRODUCT · OPEN SOURCE · NETWORK</span></div>
      </section>

      <section className="focus-section section-space">
        <div className="container-width">
          <div className="section-topline"><p className="section-label">01 / What we build</p><span>Product and open source</span></div>
          <div className="focus-grid">
            <article id="digitalplat-one">
              <p className="section-label">Product</p>
              <h2>DigitalPlat One</h2>
              <p>Register a domain, publish a site, collect form responses, and check visits from one workspace.</p>
              <a href={productUrl} className="text-link">Visit DigitalPlat One <span aria-hidden="true">↗</span></a>
              <ol className="focus-list">
                {productSteps.map((step) => <li key={step.number}><strong>{step.name}</strong><span>{step.description}</span></li>)}
              </ol>
            </article>
            <article id="open-source">
              <p className="section-label">Open source</p>
              <h2>EdgeOS, EdgeTerm, EdgeIoT</h2>
              <p>Our open-source work covers a kernel, a browser-based development workspace, and device software.</p>
              <Link href="/projects" className="text-link">Browse open-source projects <span aria-hidden="true">→</span></Link>
              <div className="focus-list">
                <a href={edgeOsUrl}><strong>EdgeOS</strong><span>Unix-like kernel for x86_64 and AArch64</span><b aria-hidden="true">↗</b></a>
                <a href={edgeTermUrl}><strong>EdgeTerm</strong><span>Terminal, files, editor, and app preview in the browser</span><b aria-hidden="true">↗</b></a>
                <Link href="/projects#edgeiot"><strong>EdgeIoT</strong><span>Device firmware and local web interfaces</span><b aria-hidden="true">→</b></Link>
                <Link href="/projects#initd"><strong>initd</strong><span>Init and service manager for Linux</span><b aria-hidden="true">→</b></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="infrastructure-teaser section-space">
        <div className="container-width infrastructure-teaser-grid">
          <div><p className="section-label">02 / Network</p><h2>Servers in multiple regions.</h2></div>
          <div><p>EdgeAlphix operates AS201243 for routing and peering. We publish our peering policy and keep a direct contact for network operators.</p><Link href="/infrastructure" className="text-link">Explore the network <span aria-hidden="true">→</span></Link></div>
        </div>
        <div className="container-width proof-strip"><span>AS201243</span><span>OPEN PEERING</span><span>GLOBAL SERVERS</span></div>
      </section>

      <section className="platform-section section-space">
        <div className="container-width platform-grid">
          <div className="platform-copy"><p className="section-label">03 / EdgeAlphix LLC</p><h2>Products, source code, and servers.</h2><p>We build DigitalPlat One, EdgeOS, EdgeTerm, and EdgeIoT, and operate a server network across regions.</p><Link href="/about" className="text-link">About EdgeAlphix <span aria-hidden="true">→</span></Link></div>
          <div className="platform-lines" aria-label="EdgeAlphix areas of work">
            <div><span>01</span><strong>DigitalPlat One</strong><small>Product</small></div>
            <div><span>02</span><strong>EdgeOS · EdgeTerm · EdgeIoT</strong><small>Open source</small></div>
            <div><span>03</span><strong>Global server network</strong><small>AS201243</small></div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
