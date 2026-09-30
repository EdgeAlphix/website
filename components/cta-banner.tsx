import { productUrl } from "@/lib/content";

export function CtaBanner() {
  return (
    <section className="closing-cta">
      <div className="container-width closing-cta-inner">
        <p className="section-label">What comes next</p>
        <h2>Get your website<br />online.</h2>
        <p>Find a domain, publish a site, collect responses, and understand visits.</p>
        <div className="cta-actions">
          <a className="button button-dark" href={productUrl}>Explore DigitalPlat One <span aria-hidden="true">↗</span></a>
          <a className="button button-light" href="mailto:contact@edgealphix.com">Talk to EdgeAlphix <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
