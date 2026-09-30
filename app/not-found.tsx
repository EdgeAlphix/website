import Link from "next/link";

export default function NotFound() {
  return <section className="container-width not-found"><p className="section-label">404 / Page not found</p><h1>This page has moved out of view.</h1><p>Try the homepage or explore the infrastructure behind EdgeAlphix.</p><div className="cta-actions"><Link href="/" className="button button-dark">Go home <span aria-hidden="true">→</span></Link><Link href="/infrastructure" className="text-link">Infrastructure <span aria-hidden="true">→</span></Link></div></section>;
}
