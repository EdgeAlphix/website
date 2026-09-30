import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { productSteps, productUrl } from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <section className="home-hero container-width">
        <div className="home-hero-copy">
          <p className="section-label"><span className="label-line" /> EdgeAlphix LLC / DigitalPlat One</p>
          <h1>We build <em>DigitalPlat One.</em></h1>
          <p className="hero-description">DigitalPlat One is EdgeAlphix LLC&apos;s primary business. It brings domains, websites, forms, and analytics into one workspace.</p>
          <div className="hero-actions">
            <a href={productUrl} className="button button-dark">Explore DigitalPlat One <span aria-hidden="true">↗</span></a>
            <Link href="/infrastructure" className="text-link">Our infrastructure <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-system" role="img" aria-label="DigitalPlat One connects domains, websites, forms, and analytics in one workspace">
          <div className="system-head"><span className="system-symbol">✳</span><span>DIGITALPLAT / ONE</span><span className="system-head-right">A connected workspace</span></div>
          <div className="system-stage">
            <div className="system-grid" aria-hidden="true" />
            <div className="system-orbit orbit-one" aria-hidden="true" />
            <div className="system-orbit orbit-two" aria-hidden="true" />
            <div className="system-core"><span>ONE</span><small>FROM IDEA TO AUDIENCE</small></div>
            <span className="system-point point-domains">01 / DOMAINS</span>
            <span className="system-point point-pages">02 / PAGES</span>
            <span className="system-point point-forms">03 / FORMS</span>
            <span className="system-point point-analytics">04 / ANALYTICS</span>
          </div>
          <div className="system-foot"><span>DEFINE → PUBLISH → UNDERSTAND</span><span>EDGEALPHIX LLC · 2026</span></div>
        </div>
        <div className="hero-index"><span>01 / 04</span><span>PRODUCT · INFRASTRUCTURE · ENGINEERING</span></div>
      </section>

      <section className="product-intro section-space" id="digitalplat-one">
        <div className="container-width">
          <div className="section-topline"><p className="section-label">01 / Our primary business</p><span>Built for developers and small teams</span></div>
          <div className="intro-grid">
            <h2>From your first domain to your first visitors.</h2>
            <div><p>Starting a presence online should feel like one continuous task. DigitalPlat One brings the essential steps together, with room to add more tools as you grow.</p><a href={productUrl} className="text-link">See the full platform <span aria-hidden="true">↗</span></a></div>
          </div>
          <ol className="product-path">
            {productSteps.map((step) => <li key={step.number}><span className="step-number">{step.number}</span><h3>{step.name}</h3><p>{step.description}</p><span className="step-arrow" aria-hidden="true">↗</span></li>)}
          </ol>
        </div>
      </section>

      <section className="platform-section section-space">
        <div className="container-width platform-grid">
          <div className="platform-copy"><p className="section-label">02 / The operating company</p><h2>Software with an operator behind it.</h2><p>EdgeAlphix develops DigitalPlat One and works across the network and systems layers that support internet products. Product decisions and infrastructure operations belong in the same conversation.</p><Link href="/about" className="text-link">About EdgeAlphix <span aria-hidden="true">→</span></Link></div>
          <div className="platform-lines" aria-label="EdgeAlphix areas of work">
            <div><span>01</span><strong>DigitalPlat One</strong><small>Product</small></div>
            <div><span>02</span><strong>Network operations</strong><small>Infrastructure</small></div>
            <div><span>03</span><strong>Systems engineering</strong><small>Research & build</small></div>
          </div>
        </div>
      </section>

      <section className="infrastructure-teaser section-space">
        <div className="container-width infrastructure-teaser-grid">
          <div><p className="section-label">03 / Beyond the product</p><h2>A public network. A clear operating identity.</h2></div>
          <div><p>EdgeAlphix operates AS201243 and publishes its peering posture. Our infrastructure work spans routing, cloud environments, and software built for operators.</p><Link href="/infrastructure" className="text-link">Explore infrastructure <span aria-hidden="true">→</span></Link></div>
        </div>
        <div className="container-width proof-strip"><span>AS201243</span><span>PUBLIC NETWORK IDENTITY</span><span>PEERING & ROUTING</span></div>
      </section>

      <section className="work-section section-space">
        <div className="container-width">
          <div className="section-topline"><p className="section-label">04 / More from EdgeAlphix</p><span>Focused engineering work</span></div>
          <div className="work-grid">
            <Link href="/services"><span>01 / SERVICES</span><h3>Infrastructure work with people who operate it.</h3><p>Network, platform, and systems engineering for teams with specific technical needs.</p><b aria-hidden="true">↗</b></Link>
            <Link href="/projects"><span>02 / PROJECTS</span><h3>Open systems built from practical problems.</h3><p>Explore work on operating systems, service management, and developer tools.</p><b aria-hidden="true">↗</b></Link>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
