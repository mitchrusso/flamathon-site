import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ClipboardList } from "lucide-react";
import { absoluteUrl, jsonLd } from "@/lib/seo";

const criteria = ["Heat level", "Flavor balance", "Aroma", "Texture or mouthfeel", "Food pairing", "Would use again"];
const hostChecklist = ["Label each sauce or ramen flavor before tasting.", "Serve tiny portions and keep participation optional.", "Keep plain food, dairy or alternatives, water, napkins, and trash nearby.", "Check allergens and sodium before serving packaged foods.", "Stop the tasting if anyone feels unwell."];

export const metadata: Metadata = {
  title: "Hot Sauce Tasting Scorecard",
  description: "A printable hot sauce tasting scorecard and hosting checklist for safer, flavor-first spicy food parties.",
  alternates: { canonical: "/hot-sauce-tasting-scorecard" },
  openGraph: {
    title: "Hot Sauce Tasting Scorecard | Flamathon",
    description: "A printable scorecard for hot sauce flights, spicy ramen tastings, and chili crisp comparisons.",
    url: absoluteUrl("/hot-sauce-tasting-scorecard"),
    type: "article",
  },
};

export default function HotSauceTastingScorecardPage() {
  const scorecardJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": absoluteUrl("/hot-sauce-tasting-scorecard#article"),
        headline: "Hot Sauce Tasting Scorecard",
        description: "A printable scorecard and hosting checklist for hot sauce flights and spicy food tastings.",
        author: { "@id": absoluteUrl("/#organization") },
        publisher: { "@id": absoluteUrl("/#organization") },
        mainEntityOfPage: absoluteUrl("/hot-sauce-tasting-scorecard"),
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#18211f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(scorecardJsonLd)} />
      <section className="border-b border-[#dce5dc] bg-[#eef6ed]">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0e7a5f]">Printable Party Tool</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Hot Sauce Tasting Scorecard</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#40514b]">
            Use this scorecard to turn a hot sauce challenge, ramen flight, or chili crisp tasting into a flavor-first comparison instead of a pain contest.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 lg:grid-cols-[1fr_300px]">
        <section className="rounded-lg border border-[#dce5dc] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <ClipboardList className="h-7 w-7 text-[#0e7a5f]" aria-hidden />
            <h2 className="text-2xl font-black">Score each sample from 1 to 5</h2>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-[#10231f] text-white">
                <tr>
                  <th className="px-4 py-3">Sample</th>
                  {criteria.map((criterion) => (
                    <th key={criterion} className="px-4 py-3">{criterion}</th>
                  ))}
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6].map((sample) => (
                  <tr key={sample} className="border-t border-[#e6ece5]">
                    <th className="px-4 py-5 font-black">#{sample}</th>
                    {criteria.map((criterion) => (
                      <td key={criterion} className="px-4 py-5 text-[#5d6d66]">1 2 3 4 5</td>
                    ))}
                    <td className="px-4 py-5 text-[#5d6d66]">________________</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-[#5d6d66]">
            Print this page or save it as a PDF from your browser. For mixed groups, score flavor and repeat-use separately from heat intensity.
          </p>
        </section>

        <aside className="rounded-lg border border-[#dce5dc] bg-white p-5 shadow-sm">
          <h2 className="text-xl font-black">Host checklist</h2>
          <div className="mt-4 grid gap-3">
            {hostChecklist.map((item) => (
              <p key={item} className="flex gap-2 text-sm leading-6 text-[#4c5d56]">
                <Check className="mt-1 h-4 w-4 flex-none text-[#0e7a5f]" aria-hidden />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-6 grid gap-2">
            <Link href="/best/best-hot-sauce-challenge-sets-for-parties" className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#cbd8cf] px-3 py-2 text-sm font-black hover:border-[#0e7a5f]">
              Best challenge sets
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/resources/how-to-host-a-hot-sauce-challenge-safely" className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#cbd8cf] px-3 py-2 text-sm font-black hover:border-[#0e7a5f]">
              Hosting guide
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
