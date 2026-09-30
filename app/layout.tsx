import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const headingFont = Space_Grotesk({ variable: "--font-heading", subsets: ["latin"] });
const bodyFont = Manrope({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://edgealphix.com"),
  title: { default: "EdgeAlphix | The company behind DigitalPlat One", template: "%s | EdgeAlphix" },
  description: "EdgeAlphix LLC builds DigitalPlat One and operates internet infrastructure for developers and teams.",
  openGraph: {
    type: "website",
    siteName: "EdgeAlphix",
    title: "EdgeAlphix | The company behind DigitalPlat One",
    description: "Domains, websites, forms, and analytics in one place. Built by EdgeAlphix LLC.",
    url: "https://edgealphix.com/",
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "EdgeAlphix and DigitalPlat One" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
