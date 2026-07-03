import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CalendarDays, SearchCheck } from "lucide-react";
import { topicHubs } from "@/lib/hubs";
import { formatArticleDate, getNextScheduledArticle, getPublishedArticles, keywordPlan } from "@/lib/resources";
import { absoluteUrl, jsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Spicy Food Resources | Flamathon",
  description:
    "Hot sauce challenge guides, spicy ramen articles, chili crisp comparisons, BBQ heat tips, allergen checks, and safety-aware tasting resources.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Spicy Food Resources | Flamathon",
    description:
      "Hot sauce challenge guides, spicy ramen articles, chili crisp comparisons, BBQ heat tips, allergen checks, and safety-aware tasting resources.",
    url: absoluteUrl("/resources"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spicy Food Resources | Flamathon",
    description:
      "Hot sauce challenge guides, spicy ramen articles, chili crisp comparisons, BBQ heat tips, allergen checks, and safety-aware tasting resources.",
    images: ["/images/products/thoughtfully-hot-sauce-challenge-10-pack.jpg"],
  },
};

export default function ResourcesPage() {
  const publishedArticles = getPublishedArticles();
  const nextArticle = getNextScheduledArticle();
  const resourcesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/resources#webpage"),
        url: absoluteUrl("/resources"),
        name: "Spicy Food Resources",
        description:
          "Hot sauce challenge guides, spicy ramen articles, chili crisp comparisons, BBQ heat tips, allergen checks, and safety-aware tasting resources.",
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/resources#published-articles"),
        name: "Published Flamathon resource articles",
        itemListElement: publishedArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/resources/${article.slug}`),
          name: article.title,
        })),
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/resources#topic-hubs"),
        name: "Flamathon topic hubs",
        itemListElement: topicHubs.map((hub, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/resources/topics/${hub.slug}`),
          name: hub.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Resources",
            item: absoluteUrl("/resources"),
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#18211f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(resourcesJsonLd)} />
      <section className="border-b border-[#dce5dc] bg-[#eef6ed]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0e7a5f]">Spicy Food Resource Library</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            Helpful articles for heat seekers comparing hot sauce, spicy ramen, chili crisp, BBQ heat, party tasting gear, and safer serving ideas.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#40514b]">
            This section starts with the keyword plan, then releases one new article every weekday:
            with the first guide live now and the rest scheduled for weekdays through the next month.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="mb-8 flex items-center gap-3">
            <SearchCheck className="h-7 w-7 text-[#0e7a5f]" aria-hidden />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0e7a5f]">Keyword Plan</p>
              <h2 className="text-3xl font-black">Search topics to build from first.</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {keywordPlan.map((cluster) => (
              <article key={cluster.cluster} className="rounded-lg border border-[#dce5dc] bg-[#fbfcf8] p-5">
                <h3 className="text-lg font-black">{cluster.cluster}</h3>
                <ul className="mt-4 space-y-2">
                  {cluster.keywords.map((keyword) => (
                    <li key={keyword} className="text-sm leading-6 text-[#5d6d66]">
                      {keyword}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6]">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0e7a5f]">Topic Hubs</p>
            <h2 className="mt-3 text-3xl font-black">Explore spicy food buying topics.</h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-[#5d6d66]">
              These hub pages organize the core questions people ask before choosing challenge sets, superhot sauces, ramen flights, chili crisp, BBQ heat, and tasting supplies.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {topicHubs.map((hub) => (
              <Link key={hub.slug} href={`/resources/topics/${hub.slug}`} className="group rounded-lg border border-[#dce5dc] bg-white p-5 shadow-sm hover:border-[#0e7a5f]">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#0e7a5f]">{hub.eyebrow}</p>
                <h3 className="mt-3 text-xl font-black leading-tight group-hover:text-[#0e7a5f]">{hub.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5d6d66]">{hub.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#0e7a5f]">
                  Open guide <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="mb-8 flex items-center gap-3">
            <CalendarDays className="h-7 w-7 text-[#0e7a5f]" aria-hidden />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0e7a5f]">Editorial Schedule</p>
              <h2 className="text-3xl font-black">Published weekday articles.</h2>
            </div>
          </div>

          {publishedArticles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {publishedArticles.map((article) => (
                <article key={article.slug} className="flex h-full flex-col overflow-hidden rounded-lg border border-[#dce5dc] bg-white shadow-sm">
                  <div className="flex h-44 items-center justify-center border-b border-[#e6ece5] bg-white p-4">
                    <Image
                      src={article.image}
                      alt={`${article.title} resource image`}
                      width={640}
                      height={420}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-md bg-[#dff5eb] px-2 py-1 text-xs font-black uppercase tracking-[0.1em] text-[#0e7a5f]">
                        {article.category}
                      </span>
                      <span className="rounded-md bg-[#edf2ed] px-2 py-1 text-xs font-bold text-[#40514b]">
                        {formatArticleDate(article.publishDate)}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-black leading-tight">{article.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5d6d66]">{article.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.keywords.slice(0, 2).map((keyword) => (
                        <span key={keyword} className="rounded-md bg-[#f0f4ef] px-2 py-1 text-xs font-semibold text-[#40514b]">
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <Link href={`/resources/${article.slug}`} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-black text-[#0e7a5f]">
                      Read article
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-[#dce5dc] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-black">The resource library opens soon.</h3>
              <p className="mt-3 max-w-2xl text-base leading-8 text-[#5d6d66]">
                The first article is scheduled for {nextArticle ? formatArticleDate(nextArticle.publishDate) : "the next publishing cycle"}.
                New articles will appear here automatically on weekday publish dates.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
