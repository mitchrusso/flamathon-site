import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety Disclaimer",
  description: "Important safety disclaimer for Flamathon buying guides, reviews, and resource articles.",
  alternates: { canonical: "/safety-disclaimer" },
};

export default function SafetyDisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]">
      <article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#a3421f]">Back to Flamathon</Link>
        <h1 className="mt-8 text-4xl font-black">Safety Disclaimer</h1>
        <p className="mt-6 text-base leading-8 text-[#536166]">Flamathon provides general buying information about hot sauce, spicy ramen, chili crisp, BBQ heat, spicy gifts, and tasting supplies. It is not medical, dietary, allergy, legal, manufacturer, or professional advice.</p>
        <p className="mt-4 text-base leading-8 text-[#536166]">People differ in spice tolerance, allergies, health conditions, medications, and comfort with capsaicin. A product that is fun for one group may be wrong for another if the heat level, ingredients, or serving context does not match.</p>
        <p className="mt-4 text-base leading-8 text-[#536166]">Before purchase or use, verify product specifications, age ranges, fit limits, certifications, warnings, recalls, included parts, warranty, return policy, and compatibility directly with the retailer or manufacturer.</p>
      </article>
    </main>
  );
}
