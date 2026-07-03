"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, Check, ClipboardCheck, Flame, Gift, Menu, ShieldCheck, ShoppingBag, Soup, Sparkles, Utensils, X } from "lucide-react";
import { comparisonPages } from "@/lib/comparisons";
import { reviewProducts } from "@/lib/reviews";
import { siteFaqs } from "@/lib/trust";
import { absoluteUrl, jsonLd, siteName } from "@/lib/seo";

const navItems = [
  { href: "#reviews", label: "Heat Picks" },
  { href: "#categories", label: "Categories" },
  { href: "#compare", label: "Compare" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const categoryGuides = [
  { title: "Challenge Sets", image: "https://images.unsplash.com/photo-1600175074948-6f6b7f72a5cf?auto=format&fit=crop&w=1200&q=80", href: "/resources/topics/hot-sauce-challenge-sets", copy: "Mild-to-wild flights, gift sets, bottle order, and responsible tasting rules." },
  { title: "Superhot Sauces", image: "https://images.unsplash.com/photo-1600175074948-6f6b7f72a5cf?auto=format&fit=crop&w=1200&q=80", href: "/resources/topics/superhot-sauces", copy: "Ghost pepper, Carolina Reaper, Scoville claims, tiny portions, and flavor balance." },
  { title: "Spicy Ramen", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80", href: "/resources/topics/spicy-ramen", copy: "Noodle flights, flavor rankings, sodium checks, allergens, and party serving ideas." },
  { title: "Chili Crisp", image: "https://images.unsplash.com/photo-1604908554051-e477d644701e?auto=format&fit=crop&w=1200&q=80", href: "/resources/topics/chili-crisp-and-oils", copy: "Crunchy chili oils, pantry gifts, sesame checks, storage, and weeknight uses." },
];

const quickMatchCards = [
  { title: "I want a party challenge", answer: "Start with staged hot sauce sets and clear opt-out rules.", href: "/resources/topics/hot-sauce-challenge-sets", icon: Flame },
  { title: "I need a spicy gift", answer: "Compare gift boxes by flavor variety, labels, and who will eat them.", href: "/resources/mild-to-wild-hot-sauce-gifts", icon: Gift },
  { title: "I love spicy ramen", answer: "Build a noodle flight with small bowls and allergen checks.", href: "/resources/topics/spicy-ramen", icon: Soup },
  { title: "I want real cooking heat", answer: "Use chili crisp, BBQ rubs, and sauces that work beyond dares.", href: "/resources/topics/bbq-heat", icon: Utensils },
];

const heatRules = [
  "Start lower than your ego says and let people opt out.",
  "Read allergen, sodium, sugar, and ingredient labels before serving.",
  "Serve tiny tasting portions, especially with ghost pepper and Reaper sauces.",
  "Keep spicy challenges flavor-focused, not pain-focused.",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const topProducts = reviewProducts.slice(0, 6);
  const pageJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl("/#webpage"), name: `${siteName} | Hot Sauce and Spicy Food Shopping Guide`, description: "Hot sauce challenge sets, superhot sauces, spicy ramen, chili crisp, BBQ heat, and safer tasting guides.", url: absoluteUrl("/") },
      { "@type": "ItemList", "@id": absoluteUrl("/#heat-picks"), name: "Flamathon spicy shopping picks", itemListElement: topProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: absoluteUrl(`/reviews/${product.slug}`), name: product.name })) },
      { "@type": "FAQPage", mainEntity: siteFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  }), [topProducts]);

  return (
    <main className="min-h-screen bg-[#f4f2ee] text-[#202625]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(pageJsonLd)} />
      <header className="sticky top-0 z-50 border-b border-[#e3d8ca] bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3" aria-label="Flamathon home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#f15a24] text-white"><Flame className="h-5 w-5" aria-hidden /></span>
            <span className="text-lg font-black tracking-tight">Flamathon</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-[#5f6966] lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="hover:text-[#b63a16]">{item.label}</a>)}
          </nav>
          <a href="#reviews" className="hidden min-h-11 items-center gap-2 rounded-md bg-[#202625] px-4 py-2 text-sm font-black text-white hover:bg-[#333b39] sm:inline-flex">
            <ShoppingBag className="h-4 w-4" aria-hidden /> Shop Heat Picks
          </a>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#e3d8ca] bg-white text-[#202625] lg:hidden" aria-label="Open menu" aria-expanded={menuOpen}>
            {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#e3d8ca] bg-[#fffaf2] px-5 py-4 lg:hidden">
            <nav className="grid gap-2 text-base font-black" aria-label="Mobile navigation">
              {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-md border border-[#e3d8ca] bg-white px-4 py-3">{item.label}</a>)}
            </nav>
          </div>
        )}
      </header>

      <section id="top" className="bg-[#fff3e6]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md border border-[#f2bf9c] bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#b63a16]"><Sparkles className="h-4 w-4" aria-hidden /> Hot sauce and spicy food shopping guide</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">Run the gauntlet of heat, flavor, and fire.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6966]">Flamathon helps heat seekers compare hot sauce challenge sets, superhot sauces, spicy ramen, chili crisp, BBQ heat, and tasting gear with safety-aware buying checklists.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#reviews" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#d94b1f] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-[#b63a16]">Explore heat picks <ArrowRight className="h-4 w-4" aria-hidden /></a>
              <Link href="/resources/how-to-host-a-hot-sauce-challenge-safely" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#e3d8ca] bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#202625] hover:border-[#d94b1f]">Safe tasting guide <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Amazon-tagged picks", "Safety sources linked", "Affiliate disclosure visible"].map((item) => (
                <div key={item} className="rounded-md border border-[#e3d8ca] bg-white px-3 py-3 text-sm font-black text-[#4b5754]">
                  <Check className="mb-2 h-4 w-4 text-[#d94b1f]" aria-hidden />{item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-[300px] items-center justify-center rounded-lg border border-[#e3d8ca] bg-white p-5 shadow-sm sm:h-[360px] lg:h-[420px]">
            <Image src="https://images.unsplash.com/photo-1600175074948-6f6b7f72a5cf?auto=format&fit=crop&w=1200&q=80" alt="Hot sauce bottles ready for tasting" width={1200} height={760} className="h-full w-full rounded-md object-cover" priority />
          </div>
        </div>
      </section>

      <section className="border-y border-[#e3d8ca] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b63a16]">Quick Match</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">What kind of heat are you shopping for?</h2>
            </div>
            <Link href="/faq" className="text-sm font-black text-[#d94b1f] hover:text-[#b63a16]">Read spicy FAQ</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickMatchCards.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-lg border border-[#e3d8ca] bg-[#fffaf2] p-5 shadow-sm hover:border-[#d94b1f]">
                <item.icon className="h-7 w-7 text-[#d94b1f]" aria-hidden />
                <h3 className="mt-4 text-lg font-black leading-tight group-hover:text-[#b63a16]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5f6966]">{item.answer}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#d94b1f]">See guide <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b63a16]">Heat Picks</p><h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Spicy products organized by how people actually use them.</h2></div>
          <Link href="/review-methodology" className="text-sm font-black text-[#d94b1f] hover:text-[#b63a16]">How we organize picks</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {topProducts.map((product, index) => (
            <article key={product.slug} className="rounded-lg border border-[#e3d8ca] bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3"><span className="rounded-md bg-[#fff0e7] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#b63a16]">#{index + 1} Heat Pick</span><span className="text-xs font-bold text-[#6d7774]">{product.category}</span></div>
              <div className="mt-4 flex h-56 items-center justify-center rounded-md bg-[#fffaf2] p-2"><Image src={product.image} alt={product.name} width={520} height={390} className="h-full w-full rounded-md object-cover" /></div>
              <h3 className="mt-5 text-xl font-black leading-tight">{product.name}</h3>
              <p className="mt-2 text-sm font-black text-[#d94b1f]">{product.bestFor}</p>
              <p className="mt-3 text-sm leading-6 text-[#5f6966]">{product.summary}</p>
              <div className="mt-4 grid gap-2 text-sm text-[#5f6966]">
                {product.pros.slice(0, 2).map((pro) => <p key={pro} className="flex gap-2"><Check className="mt-1 h-4 w-4 flex-none text-[#d94b1f]" aria-hidden />{pro}</p>)}
              </div>
              <div className="mt-5 flex gap-2"><Link href={`/reviews/${product.slug}`} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-[#e3d8ca] px-4 py-2 text-sm font-black hover:border-[#d94b1f]">Review</Link><a href={product.amazon} target="_blank" rel="sponsored nofollow noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md bg-[#202625] px-4 py-2 text-sm font-black text-white hover:bg-[#333b39]">Amazon</a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="categories" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b63a16]">Category guides</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Shop by the heat experience you want.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categoryGuides.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-lg border border-[#e3d8ca] bg-[#fffaf2] p-4 shadow-sm hover:border-[#d94b1f]">
                <div className="flex h-44 items-center justify-center rounded-md bg-white">
                  <Image src={item.image} alt={`${item.title} guide`} width={600} height={380} className="h-full w-full rounded-md object-cover" />
                </div>
                <h3 className="mt-4 text-xl font-black group-hover:text-[#b63a16]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f6966]">{item.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.75fr_1fr]">
        <div className="rounded-lg bg-[#202625] p-7 text-white">
          <BadgeCheck className="h-8 w-8 text-[#ffb38f]" aria-hidden />
          <h2 className="mt-5 text-3xl font-black leading-tight">Flamathon tasting rules.</h2>
          <div className="mt-6 grid gap-4">
            {heatRules.map((rule) => <p key={rule} className="flex gap-3 text-sm leading-6 text-[#f4eee7]"><Check className="mt-1 h-4 w-4 flex-none text-[#ffb38f]" aria-hidden />{rule}</p>)}
          </div>
        </div>
        <div className="grid gap-4">
          {comparisonPages.map((comparison) => (
            <Link key={comparison.slug} href={`/compare/${comparison.slug}`} className="rounded-lg border border-[#e3d8ca] bg-white p-5 shadow-sm hover:border-[#d94b1f]">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#b63a16]">Comparison</p>
              <h3 className="mt-2 text-2xl font-black">{comparison.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f6966]">{comparison.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#fff0e7] py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-5 md:grid-cols-3">
            {[{icon:ShieldCheck,title:"Safety-aware",copy:"Extreme capsaicin can create real discomfort. Keep tastings optional and small."},{icon:ClipboardCheck,title:"Label first",copy:"Check allergens, sodium, sugar, serving size, and current pack contents."},{icon:Flame,title:"Flavor over pain",copy:"The best spicy products are ones people want to use again after the challenge."}].map((item)=> <div key={item.title} className="rounded-lg border border-[#e3d8ca] bg-white p-6"><item.icon className="h-7 w-7 text-[#d94b1f]" aria-hidden /><h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#5f6966]">{item.copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b63a16]">FAQ</p>
        <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Common spicy shopping questions.</h2>
        <div className="mt-8 grid gap-4">
          {siteFaqs.slice(0, 8).map((faq) => <details key={faq.question} className="rounded-lg border border-[#e3d8ca] bg-white p-5"><summary className="cursor-pointer text-lg font-black">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-[#5f6966]">{faq.answer}</p></details>)}
        </div>
        <Link href="/faq" className="mt-6 inline-flex min-h-11 items-center rounded-md border border-[#e3d8ca] bg-white px-4 py-2 text-sm font-black text-[#202625] hover:border-[#d94b1f]">
          View full FAQ
        </Link>
      </section>

      <footer className="border-t border-[#e3d8ca] bg-[#fffaf2]">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-md bg-[#f15a24] text-white"><Flame className="h-5 w-5" aria-hidden /></span><span className="text-lg font-black">Flamathon</span></div><p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f6966]">Flamathon is a participant in the Amazon Services LLC Associates Program. We may earn from qualifying purchases. Spicy food content is general shopping information; always follow ingredient labels, serving instructions, and medical guidance when relevant.</p></div>
            <div className="grid grid-cols-2 gap-3 text-sm font-bold text-[#5f6966]">
              {[['Resources','/resources'],['FAQ','/faq'],['Contact Us','/contact'],['Editorial Policy','/editorial-policy'],['Review Methodology','/review-methodology'],['Safety Disclaimer','/safety-disclaimer'],['Privacy Policy','/privacy-policy'],['Cookie Policy','/cookie-policy'],['TOS','/terms-and-conditions'],['Accessibility','/accessibility-statement'],['Amazon Disclosure','/amazon-disclosure']].map(([label,href]) => <Link key={href} href={href} className="hover:text-[#b63a16]">{label}</Link>)}
            </div>
          </div>
          <p className="mt-8 border-t border-[#e3d8ca] pt-5 text-xs text-[#6d7774]">Copyright 2026 Flamathon.</p>
        </div>
      </footer>
    </main>
  );
}
