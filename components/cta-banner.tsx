import { productUrl } from "@/lib/content";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="closing-cta">
      <div className="container-width closing-cta-inner">
        <p className="section-label">Explore EdgeAlphix</p>
        <h2>Products and<br />open source.</h2>
        <p>Browse EdgeOS, EdgeTerm, and EdgeIoT, or use DigitalPlat One.</p>
        <div className="cta-actions">
          <Link className="button button-dark" href="/projects">Explore open source <span aria-hidden="true">→</span></Link>
          <a className="button button-light" href={productUrl}>DigitalPlat One <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
