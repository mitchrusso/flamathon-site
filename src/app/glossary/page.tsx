import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { glossaryTerms } from "@/lib/glossary";
import { absoluteUrl, jsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Spicy Food Glossary",
  description: "Plain-English definitions for Scoville scale, capsaicin, ghost pepper, Carolina Reaper, chili crisp, extract sauce, and hot sauce tasting terms.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "Spicy Food Glossary | Flamathon",
    description: "Plain-English definitions for spicy food shoppers comparing heat, flavor, and safety-aware tasting.",
    url: absoluteUrl("/glossary"),
    type: "website",
  },
};

export default function GlossaryPage() {
  const glossaryJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/glossary#webpage"),
        url: absoluteUrl("/glossary"),
        name: "Spicy Food Glossary",
        description: "Definitions for spicy food and hot sauce shopping terms.",
        inLanguage: "en-US",
      },
      {
        "@type": "DefinedTermSet",
        name: "Flamathon spicy food glossary",
        hasDefinedTerm: glossaryTerms.map((term) => ({
          "@type": "DefinedTerm",
          name: term.term,
          description: term.shortDefinition,
          url: absoluteUrl(`/glossary#${term.slug}`),
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#18211f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(glossaryJsonLd)} />
      <section className="border-b border-[#dce5dc] bg-[#eef6ed]">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0e7a5f]">Spicy Food Glossary</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Plain-English heat terms for smarter spicy shopping.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#40514b]">
            Use these definitions to compare hot sauce challenge sets, superhot sauces, chili crisp, spicy ramen, and tasting gear without getting fooled by vague heat claims.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="grid gap-5">
          {glossaryTerms.map((term) => (
            <article id={term.slug} key={term.slug} className="rounded-lg border border-[#dce5dc] bg-white p-6 shadow-sm scroll-mt-28">
              <h2 className="text-2xl font-black">{term.term}</h2>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-[#0e7a5f]">{term.shortDefinition}</p>
              <p className="mt-4 text-base leading-8 text-[#4c5d56]">{term.definition}</p>
              <p className="mt-4 rounded-lg bg-[#fff8f1] p-4 text-sm font-bold leading-7 text-[#7b4b2d]">
                Buyer note: {term.buyerNote}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {term.relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#cbd8cf] px-3 py-2 text-sm font-black hover:border-[#0e7a5f]">
                    {link.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
