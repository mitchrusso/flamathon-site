import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for using Flamathon reviews, buying guides, resource articles, and affiliate links.",
  alternates: { canonical: "/terms-and-conditions" },
};

const sections = [
  { title: "Use of this site", body: "Flamathon provides general information, product comparisons, buying guides, resource articles, and affiliate shopping links related to hot sauce, spicy ramen, chili crisp, BBQ heat, spicy gifts, and tasting supplies." },
  { title: "No professional advice", body: "Content on this site is for general informational purposes only. It is not medical, dietary, allergy, legal, manufacturer, or professional advice. Always follow current labels, ingredient statements, serving instructions, and relevant medical guidance." },
  { title: "Affiliate links", body: "Flamathon participates in affiliate programs, including the Amazon Services LLC Associates Program. We may earn commissions from qualifying purchases made through affiliate links on this site, at no additional cost to you." },
  { title: "Product information", body: "Product details, availability, prices, ratings, accessories, and specifications can change. Verify current information directly with the retailer or manufacturer before buying or using a product." },
  { title: "Third-party websites", body: "This site links to third-party websites. We are not responsible for their content, policies, pricing, fulfillment, product claims, or safety instructions." },
  { title: "Limitation of liability", body: "To the fullest extent allowed by law, Flamathon is not liable for damages arising from your use of the site, reliance on site content, third-party websites, product purchases, product use, installation decisions, or safety outcomes." },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]">
      <article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#a3421f]">Back to Flamathon</Link>
        <h1 className="mt-8 text-4xl font-black">Terms and Conditions</h1>
        <p className="mt-6 text-base leading-8 text-[#536166]">These Terms and Conditions govern your use of Flamathon. If you do not agree with these terms, please do not use this website.</p>
        <div className="mt-8 space-y-6">
          {sections.map((section) => <section key={section.title}><h2 className="text-2xl font-black">{section.title}</h2><p className="mt-3 text-base leading-8 text-[#536166]">{section.body}</p></section>)}
        </div>
      </article>
    </main>
  );
}
