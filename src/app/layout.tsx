import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { absoluteUrl, defaultDescription, jsonLd, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Flamathon | Hot Sauce and Spicy Food Shopping Guide", template: `%s | ${siteName}` },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "hot sauce challenge set",
    "spicy food gifts",
    "ghost pepper sauce",
    "Carolina Reaper sauce",
    "spicy ramen variety pack",
    "best chili crisp",
    "hot sauce gift set",
    "spicy BBQ rub",
  ],
  category: "Food and Drink",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Flamathon | Hot Sauce and Spicy Food Shopping Guide",
    description: defaultDescription,
    url: siteUrl,
    siteName,
    images: [{ url: "https://images.unsplash.com/photo-1760783320455-f7092d00fade?auto=format&fit=crop&w=1600&q=80", width: 1600, height: 1000, alt: "Friends dining outdoors under string lights at night" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Flamathon | Hot Sauce and Spicy Food Shopping Guide", description: defaultDescription, images: ["https://images.unsplash.com/photo-1760783320455-f7092d00fade?auto=format&fit=crop&w=1600&q=80"] },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteName,
      url: siteUrl,
      description: defaultDescription,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteName,
      url: siteUrl,
      description: defaultDescription,
      publisher: { "@id": absoluteUrl("/#organization") },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning><body className="min-h-full flex flex-col" suppressHydrationWarning><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteJsonLd)} />{children}</body></html>;
}
