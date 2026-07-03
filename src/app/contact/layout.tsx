import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Flamathon with questions about spicy food safety guides, product categories, affiliate links, safer-shopping topics, or resource articles.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
