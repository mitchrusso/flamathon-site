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

const heroImage = "https://images.unsplash.com/photo-1760783320455-f7092d00fade?auto=format&fit=crop&w=1600&q=80";
const sauceImage = "https://images.unsplash.com/photo-1700619773778-f02b45ca0616?auto=format&fit=crop&w=1200&q=80";

const categoryGuides = [
  { title: "Challenge Sets", image: sauceImage, href: "/resources/topics/hot-sauce-challenge-sets", copy: "Mild-to-wild flights, gift sets, bottle order, and responsible tasting rules." },
  { title: "Superhot Sauces", image: sauceImage, href: "/resources/topics/superhot-sauces", copy: "Ghost pepper, Carolina Reaper, Scoville claims, tiny portions, and flavor balance." },
  { title: "Spicy Ramen", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80", href: "/resources/topics/spicy-ramen", copy: "Noodle flights, flavor rankings, sodium checks, allergens, and party serving ideas." },
  { title: "Chili Crisp", image: sauceImage, href: "/resources/topics/chili-crisp-and-oils", copy: "Crunchy chili oils, pantry gifts, sesame checks, storage, and weeknight uses." },
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
    <main className="min-h-screen bg-[#f3f4f6] text-[#1b2321]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(pageJsonLd)} />
      <header className="sticky top-0 z-50 border-b border-[#26342f] bg-[#111817]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3" aria-label="Flamathon home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#e4461c] text-white"><Flame className="h-5 w-5" aria-hidden /></span>
            <span className="text-lg font-black tracking-tight">Flamathon</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-[#cbd5d1] lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="hover:text-[#ffb199]">{item.label}</a>)}
          </nav>
          <a href="#reviews" className="hidden min-h-11 items-center gap-2 rounded-md bg-[#e4461c] px-4 py-2 text-sm font-black text-white hover:bg-[#b93213] sm:inline-flex">
            <ShoppingBag className="h-4 w-4" aria-hidden /> Shop Heat Picks
          </a>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#34443f] bg-[#1b2421] text-white lg:hidden" aria-label="Open menu" aria-expanded={menuOpen}>
            {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#26342f] bg-[#111817] px-5 py-4 lg:hidden">
            <nav className="grid gap-2 text-base font-black" aria-label="Mobile navigation">
              {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-md border border-[#34443f] bg-[#1b2421] px-4 py-3 text-white">{item.label}</a>)}
            </nav>
          </div>
        )}
      </header>

      <section id="top" className="relative isolate min-h-[720px] overflow-hidden bg-[#101614] text-white">
        <Image src={heroImage} alt="Friends dining outdoors under string lights at night" fill sizes="100vw" className="absolute inset-0 -z-20 object-cover" priority />
        <div className="absolute inset-0 -z-10 bg-[#07100d]/25" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/35 to-black/5" aria-hidden />
        <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-5 py-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#ffd1c2] backdrop-blur"><Sparkles className="h-4 w-4" aria-hidden /> Hot sauce and spicy food shopping guide</p>
            <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-normal text-white drop-shadow-xl sm:text-6xl lg:text-7xl">Run the gauntlet of heat, flavor, and fire.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 drop-shadow">Flamathon helps heat seekers compare hot sauce challenge sets, superhot sauces, spicy ramen, chili crisp, BBQ heat, and tasting gear with safety-aware buying checklists.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#reviews" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#e4461c] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-black/30 hover:bg-[#b93213]">Explore heat picks <ArrowRight className="h-4 w-4" aria-hidden /></a>
              <Link href="/resources/how-to-host-a-hot-sauce-challenge-safely" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/35 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur hover:border-[#ffb199]">Safe tasting guide <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Amazon-tagged picks", "Safety sources linked", "Affiliate disclosure visible"].map((item) => (
                <div key={item} className="rounded-md border border-white/20 bg-black/35 px-3 py-3 text-sm font-black text-white backdrop-blur">
                  <Check className="mb-2 h-4 w-4 text-[#ffb199]" aria-hidden />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7ded9] bg-white">
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
              <Link key={item.title} href={item.href} className="group rounded-lg border border-[#d7ded9] bg-[#f8faf8] p-5 shadow-sm hover:border-[#e4461c]">
                <item.icon className="h-7 w-7 text-[#e4461c]" aria-hidden />
                <h3 className="mt-4 text-lg font-black leading-tight group-hover:text-[#b93213]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5f6966]">{item.answer}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#e4461c]">See guide <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b63a16]">Heat Picks</p><h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Spicy products organized by how people actually use them.</h2></div>
          <Link href="/review-methodology" className="text-sm font-black text-[#e4461c] hover:text-[#b93213]">How we organize picks</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {topProducts.map((product, index) => (
            <article key={product.slug} className="rounded-lg border border-[#d7ded9] bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3"><span className="rounded-md bg-[#ffe8df] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#b93213]">#{index + 1} Heat Pick</span><span className="text-xs font-bold text-[#6d7774]">{product.category}</span></div>
              <div className="mt-4 flex h-56 items-center justify-center overflow-hidden rounded-md bg-[#eef1ed]"><Image src={product.image} alt={product.name} width={520} height={390} className="h-full w-full rounded-md object-cover" /></div>
              <h3 className="mt-5 text-xl font-black leading-tight">{product.name}</h3>
              <p className="mt-2 text-sm font-black text-[#e4461c]">{product.bestFor}</p>
              <p className="mt-3 text-sm leading-6 text-[#5f6966]">{product.summary}</p>
              <div className="mt-4 grid gap-2 text-sm text-[#5f6966]">
                {product.pros.slice(0, 2).map((pro) => <p key={pro} className="flex gap-2"><Check className="mt-1 h-4 w-4 flex-none text-[#e4461c]" aria-hidden />{pro}</p>)}
              </div>
              <div className="mt-5 flex gap-2"><Link href={`/reviews/${product.slug}`} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-[#d7ded9] px-4 py-2 text-sm font-black hover:border-[#e4461c]">Review</Link><a href={product.amazon} target="_blank" rel="sponsored nofollow noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md bg-[#111817] px-4 py-2 text-sm font-black text-white hover:bg-[#26342f]">Amazon</a></div>
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
              <Link key={item.title} href={item.href} className="group rounded-lg border border-[#d7ded9] bg-[#f8faf8] p-4 shadow-sm hover:border-[#e4461c]">
                <div className="flex h-44 items-center justify-center rounded-md bg-white">
                  <Image src={item.image} alt={`${item.title} guide`} width={600} height={380} className="h-full w-full rounded-md object-cover" />
                </div>
                <h3 className="mt-4 text-xl font-black group-hover:text-[#b93213]">{item.title}</h3>
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
            <Link key={comparison.slug} href={`/compare/${comparison.slug}`} className="rounded-lg border border-[#d7ded9] bg-white p-5 shadow-sm hover:border-[#e4461c]">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#b63a16]">Comparison</p>
              <h3 className="mt-2 text-2xl font-black">{comparison.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f6966]">{comparison.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#eef1ed] py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-5 md:grid-cols-3">
            {[{icon:ShieldCheck,title:"Safety-aware",copy:"Extreme capsaicin can create real discomfort. Keep tastings optional and small."},{icon:ClipboardCheck,title:"Label first",copy:"Check allergens, sodium, sugar, serving size, and current pack contents."},{icon:Flame,title:"Flavor over pain",copy:"The best spicy products are ones people want to use again after the challenge."}].map((item)=> <div key={item.title} className="rounded-lg border border-[#d7ded9] bg-white p-6"><item.icon className="h-7 w-7 text-[#e4461c]" aria-hidden /><h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#5f6966]">{item.copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b63a16]">FAQ</p>
        <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Common spicy shopping questions.</h2>
        <div className="mt-8 grid gap-4">
          {siteFaqs.slice(0, 8).map((faq) => <details key={faq.question} className="rounded-lg border border-[#d7ded9] bg-white p-5"><summary className="cursor-pointer text-lg font-black">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-[#5f6966]">{faq.answer}</p></details>)}
        </div>
        <Link href="/faq" className="mt-6 inline-flex min-h-11 items-center rounded-md border border-[#d7ded9] bg-white px-4 py-2 text-sm font-black text-[#202625] hover:border-[#e4461c]">
          View full FAQ
        </Link>
      </section>

      <footer className="border-t border-[#26342f] bg-[#111817] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-md bg-[#e4461c] text-white"><Flame className="h-5 w-5" aria-hidden /></span><span className="text-lg font-black">Flamathon</span></div><p className="mt-4 max-w-2xl text-sm leading-7 text-[#c7d2ce]">Flamathon is a participant in the Amazon Services LLC Associates Program. We may earn from qualifying purchases. Spicy food content is general shopping information; always follow ingredient labels, serving instructions, and medical guidance when relevant.</p></div>
            <div className="grid grid-cols-2 gap-3 text-sm font-bold text-[#c7d2ce]">
              {[['Resources','/resources'],['FAQ','/faq'],['Contact Us','/contact'],['Editorial Policy','/editorial-policy'],['Review Methodology','/review-methodology'],['Safety Disclaimer','/safety-disclaimer'],['Privacy Policy','/privacy-policy'],['Cookie Policy','/cookie-policy'],['TOS','/terms-and-conditions'],['Accessibility','/accessibility-statement'],['Amazon Disclosure','/amazon-disclosure']].map(([label,href]) => <Link key={href} href={href} className="hover:text-[#ffb199]">{label}</Link>)}
            </div>
          </div>
          <p className="mt-8 border-t border-[#26342f] pt-5 text-xs text-[#91a19b]">Copyright 2026 Flamathon.</p>
        </div>
      </footer>
    </main>
  );
}
