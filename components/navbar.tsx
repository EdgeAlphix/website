"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNav } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-width header-inner">
        <Link href="/" className="brand" aria-label="EdgeAlphix home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>EdgeAlphix<span className="brand-dot">.</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={!item.external && pathname === item.href ? "page" : undefined}
              className={!item.external && pathname === item.href ? "nav-link active" : "nav-link"}
            >
              {item.label}{item.external ? <span aria-hidden="true"> ↗</span> : null}
            </Link>
          ))}
        </nav>

        <a className="header-contact" href="mailto:contact@edgealphix.com">Contact <span aria-hidden="true">↗</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </div>
      <nav id="mobile-navigation" className={open ? "mobile-nav open" : "mobile-nav"} aria-label="Mobile navigation" inert={!open}>
        <div className="container-width mobile-nav-inner">
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={!item.external && pathname === item.href ? "page" : undefined}>
              {item.label}<span aria-hidden="true">{item.external ? "↗" : "→"}</span>
            </Link>
          ))}
          <a href="mailto:contact@edgealphix.com" onClick={() => setOpen(false)}>Contact <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}
