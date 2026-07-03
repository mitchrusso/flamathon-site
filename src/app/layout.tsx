import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
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
    images: [{ url: "/images/flamathon-night-food-festival.png", width: 1672, height: 941, alt: "Nighttime outdoor spicy food festival with people eating and celebrating" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Flamathon | Hot Sauce and Spicy Food Shopping Guide", description: defaultDescription, images: ["/images/flamathon-night-food-festival.png"] },
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
      logo: absoluteUrl("/images/flamathon-night-food-festival.png"),
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
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/resources?query={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning><body className="min-h-full flex flex-col" suppressHydrationWarning><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteJsonLd)} /><SiteHeader />{children}</body></html>;
}
