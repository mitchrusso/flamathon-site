import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Minus, ShoppingBag } from "lucide-react";
import { bestGuides, getBestGuideBySlug, getBestGuideProducts } from "@/lib/best-guides";
import { absoluteUrl, jsonLd, siteName } from "@/lib/seo";

type BestGuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return bestGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: BestGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getBestGuideBySlug(slug);

  if (!guide) return { title: "Guide Not Found" };

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/best/${guide.slug}` },
    openGraph: {
      title: `${guide.title} | ${siteName}`,
      description: guide.description,
      url: absoluteUrl(`/best/${guide.slug}`),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.title} | ${siteName}`,
      description: guide.description,
    },
  };
}

export default async function BestGuidePage({ params }: BestGuidePageProps) {
  const { slug } = await params;
  const guide = getBestGuideBySlug(slug);

  if (!guide) notFound();

  const products = getBestGuideProducts(guide);
  const guideUrl = absoluteUrl(`/best/${guide.slug}`);
  const guideJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${guideUrl}#article`,
        headline: guide.title,
        description: guide.description,
        author: { "@id": absoluteUrl("/#organization") },
        publisher: { "@id": absoluteUrl("/#organization") },
        mainEntityOfPage: guideUrl,
        keywords: guide.keywords.join(", "),
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": `${guideUrl}#ranked-picks`,
        name: guide.title,
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/reviews/${product.slug}`),
          name: product.name,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Best Guides", item: absoluteUrl("/resources") },
          { "@type": "ListItem", position: 3, name: guide.title, item: guideUrl },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#18211f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(guideJsonLd)} />
      <section className="border-b border-[#dce5dc] bg-[#eef6ed]">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0e7a5f]">{guide.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#40514b]">{guide.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {guide.keywords.map((keyword) => (
              <span key={keyword} className="rounded-md bg-white px-3 py-2 text-xs font-bold text-[#40514b] shadow-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-10">
        <section className="rounded-lg border border-[#dce5dc] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">How to choose</h2>
          <p className="mt-4 text-base leading-8 text-[#4c5d56]">{guide.intro}</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {guide.criteria.map((criterion) => (
              <p key={criterion} className="flex gap-2 rounded-lg bg-[#f5fbf7] p-4 text-sm font-bold leading-6 text-[#40514b]">
                <Check className="mt-1 h-4 w-4 flex-none text-[#0e7a5f]" aria-hidden />
                {criterion}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-5">
          {products.map((product, index) => (
            <article key={product.slug} className="grid gap-5 rounded-lg border border-[#dce5dc] bg-white p-5 shadow-sm md:grid-cols-[220px_1fr]">
              <div className="flex h-56 items-center justify-center rounded-md bg-white p-3 ring-1 ring-[#edf1ed]">
                <Image src={product.image} alt={product.name} width={440} height={320} sizes="(min-width: 768px) 220px, 90vw" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#0e7a5f]">#{index + 1} pick - {product.bestFor}</p>
                <h2 className="mt-2 text-2xl font-black leading-tight">{product.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[#5d6d66]">{product.summary}</p>
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  {product.pros.slice(0, 2).map((pro) => (
                    <p key={pro} className="flex gap-2 text-sm leading-6 text-[#40514b]">
                      <Check className="mt-1 h-4 w-4 flex-none text-[#0e7a5f]" aria-hidden />
                      {pro}
                    </p>
                  ))}
                  <p className="flex gap-2 text-sm leading-6 text-[#7b4b2d]">
                    <Minus className="mt-1 h-4 w-4 flex-none text-[#b26b30]" aria-hidden />
                    {product.cons[0]}
                  </p>
                </div>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Link href={`/reviews/${product.slug}`} className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#cbd8cf] px-4 py-2 text-sm font-black hover:border-[#0e7a5f]">
                    Read checklist
                  </Link>
                  <a href={product.amazon} target="_blank" rel="sponsored nofollow noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#20292b] px-4 py-2 text-sm font-black text-white hover:bg-[#334044]">
                    Check Amazon
                    <ShoppingBag className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-lg border border-[#dce5dc] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Quick answers</h2>
          <div className="mt-5 grid gap-4">
            {guide.faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-[#e6ece5] bg-[#fbfcf8] p-4">
                <summary className="cursor-pointer font-black">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-[#5d6d66]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="mt-5 text-xs font-bold leading-6 text-[#5d6d66]">
          As an Amazon Associate, Flamathon may earn from qualifying purchases. Verify current ingredients, heat level, pack contents, seller details, prices, and availability before buying.
        </p>
      </div>
    </main>
  );
}
