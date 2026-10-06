import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const headingFont = Space_Grotesk({ variable: "--font-heading", subsets: ["latin"] });
const bodyFont = Manrope({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://edgealphix.com"),
  title: { default: "EdgeAlphix | Open-source software, products, and network", template: "%s | EdgeAlphix" },
  description: "EdgeAlphix LLC builds EdgeOS, EdgeTerm, EdgeIoT, and DigitalPlat One, and runs servers across regions.",
  openGraph: {
    type: "website",
    siteName: "EdgeAlphix",
    title: "EdgeAlphix | Open-source software, products, and network",
    description: "EdgeOS, EdgeTerm, EdgeIoT, DigitalPlat One, and the EdgeAlphix server network.",
    url: "https://edgealphix.com/",
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "EdgeAlphix software and network" }],
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
