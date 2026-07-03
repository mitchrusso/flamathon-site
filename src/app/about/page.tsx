import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Flamathon, a hot sauce and spicy food shopping guide for heat seekers.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#18211f]">
      <article className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#0e7a5f]">
          Back to Flamathon
        </Link>
        <h1 className="mt-8 text-4xl font-black">About Flamathon</h1>
        <p className="mt-6 text-base leading-8 text-[#5d6d66]">
          Flamathon helps heat seekers compare hot sauce challenge sets, superhot sauces, spicy ramen, chili crisp, BBQ heat, party tasting gear, and spicy gifts.
        </p>
        <p className="mt-4 text-base leading-8 text-[#5d6d66]">
          The site was created for people who want heat and flavor without reckless dares: clear buying checklists, ingredient reminders, allergen awareness, and plain-English next steps before purchase.
        </p>
      </article>
    </main>
  );
}
