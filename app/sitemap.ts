import type { MetadataRoute } from "next";
import { footerLinks } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about", "/infrastructure", "/services", "/projects", ...footerLinks.legal.map((item) => item.href)];
  return paths.map((path) => ({ url: `https://edgealphix.com${path}` }));
}
