import Link from "next/link";
import { footerLinks, productUrl } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-width footer-main">
        <div className="footer-lead">
          <p className="section-label">EdgeAlphix LLC</p>
          <h2>From domain<br />to audience.</h2>
          <p>We build DigitalPlat One and operate the infrastructure behind our work.</p>
          <a href={productUrl} className="text-link">Explore DigitalPlat One <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-list">
          <h3>Explore</h3>
          {footerLinks.company.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-list">
          <h3>Contact</h3>
          <a href="mailto:contact@edgealphix.com">General inquiries</a>
          <a href="mailto:peering@edgealphix.com">Peering</a>
          <p>EdgeAlphix LLC<br />Anaheim, CA 92802<br />United States</p>
        </div>
      </div>
      <div className="container-width footer-legal">
        <span>© {new Date().getFullYear()} EdgeAlphix LLC</span>
        <div>{footerLinks.legal.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
      </div>
    </footer>
  );
}
