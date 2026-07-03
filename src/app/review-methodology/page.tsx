import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Review Methodology",
  description: "How Flamathon organizes hot sauce and spicy food reviews, buying guides, comparisons, and resource content.",
  alternates: { canonical: "/review-methodology" },
};

const criteria = [
  { title: "Heat and flavor fit", body: "Products are organized by heat level, flavor style, serving situation, and whether they work for cooking, gifting, or tasting." },
  { title: "Label and serving checks", body: "We look for clear ingredients, allergen concerns, serving-size expectations, storage instructions, and common misuse risks before recommending a category." },
  { title: "Responsible tasting", body: "We encourage small portions, opt-out rules, and flavor-first comparisons, especially with superhot sauces and spicy challenge products." },
  { title: "Food usability", body: "Good spicy products should work on real meals, not only as a pain stunt. Repeat use matters." },
  { title: "Buyer verification", body: "Readers are encouraged to confirm current price, ingredients, availability, pack contents, return policy, and seller details with the retailer or manufacturer." },
];

export default function ReviewMethodologyPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]">
      <article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#a3421f]">Back to Flamathon</Link>
        <h1 className="mt-8 text-4xl font-black">Review Methodology</h1>
        <p className="mt-6 text-base leading-8 text-[#536166]">Flamathon reviews and organizes products through practical spicy-food buying decisions: who the product is for, how it will be served, what label checks matter, and what shoppers should verify before purchasing.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {criteria.map((item) => <section key={item.title} className="rounded-lg border border-[#ddd5c7] bg-[#f3f4f6] p-5"><h2 className="text-xl font-black">{item.title}</h2><p className="mt-3 text-base leading-8 text-[#536166]">{item.body}</p></section>)}
        </div>
      </article>
    </main>
  );
}
