import { productUrl } from "@/lib/content";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="closing-cta">
      <div className="container-width closing-cta-inner">
        <p className="section-label">Explore EdgeAlphix</p>
        <h2>Products and<br />open source.</h2>
        <p>Use DigitalPlat One, or read about EdgeOS, EdgeTerm, and EdgeIoT.</p>
        <div className="cta-actions">
          <a className="button button-dark" href={productUrl}>Explore DigitalPlat One <span aria-hidden="true">↗</span></a>
          <Link className="button button-light" href="/projects">See the projects <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
