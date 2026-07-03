import { reviewProducts, type ReviewProduct } from "@/lib/reviews";

export type BestGuide = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  keywords: string[];
  intro: string;
  criteria: string[];
  productSlugs: string[];
  faqs: { question: string; answer: string }[];
};

export const bestGuides: BestGuide[] = [
  {
    title: "Best Hot Sauce Challenge Sets for Parties",
    slug: "best-hot-sauce-challenge-sets-for-parties",
    eyebrow: "Party Challenge Guide",
    description: "Compare hot sauce challenge sets by heat ladder, serving control, gift value, and responsible tasting setup.",
    keywords: ["best hot sauce challenge set", "hot sauce challenge set for party", "mild to wild hot sauce"],
    intro:
      "The best hot sauce challenge set is not simply the hottest box. It gives hosts a clear order, small serving options, label details, and enough variety that people can compare flavor before the heat takes over.",
    criteria: ["Clear mild-to-wild progression", "Gift-ready presentation", "Tiny serving control", "Readable labels and ingredient checks", "Easy pairing with wings, tacos, or plain foods"],
    productSlugs: ["thoughtfully-hot-sauce-challenge-10-pack", "ass-kickin-hot-sauce-challenge-book", "ghost-pepper-carolina-reaper-gift-set"],
    faqs: [
      { question: "What makes a hot sauce challenge set party-friendly?", answer: "A party-friendly set has a clear tasting order, small bottle or spoon portions, readable labels, and enough milder sauces that beginners are not pushed straight into extreme heat." },
      { question: "Should every guest try the hottest sauce?", answer: "No. A good host keeps the tasting optional, uses tiny servings, and makes it easy for anyone to stop." },
    ],
  },
  {
    title: "Best Superhot Sauces for Experienced Heat Seekers",
    slug: "best-superhot-sauces-for-experienced-heat-seekers",
    eyebrow: "Ghost Pepper and Reaper",
    description: "Choose superhot sauces by pepper style, flavor balance, serving caution, and gift fit.",
    keywords: ["best superhot hot sauce", "ghost pepper sauce", "Carolina Reaper sauce"],
    intro:
      "Superhot sauce shopping should start with restraint. Ghost pepper, Carolina Reaper, and similar sauces can be fun for experienced heat fans, but the better picks still offer flavor, clear labeling, and serving guidance.",
    criteria: ["Pepper identity is clear", "Flavor beyond raw pain", "Tiny serving suitability", "Strong warning and label clarity", "Useful on real food in small amounts"],
    productSlugs: ["ghost-pepper-carolina-reaper-gift-set", "elijahs-xtreme-hot-sauce-gift-pack", "thoughtfully-hot-sauce-challenge-10-pack"],
    faqs: [
      { question: "Are superhot sauces good for beginners?", answer: "Usually no. Beginners should start with lower-heat sauces before moving to ghost pepper or Carolina Reaper products." },
      { question: "Is a higher Scoville number always better?", answer: "No. Sauce formulation, pepper concentration, vinegar, sugar, and food pairing all change how heat feels." },
    ],
  },
  {
    title: "Best Spicy Ramen Variety Packs for Heat Flights",
    slug: "best-spicy-ramen-variety-packs-for-heat-flights",
    eyebrow: "Spicy Noodle Guide",
    description: "Compare spicy ramen variety packs by flavor range, sodium/allergen checks, party serving style, and heat progression.",
    keywords: ["best spicy ramen variety pack", "Buldak ramen variety pack", "spicy ramen challenge"],
    intro:
      "Spicy ramen works best as a flight when each pack is split into small tasting bowls. That keeps the focus on flavor, texture, and heat progression instead of forcing one person to finish a whole bowl.",
    criteria: ["Varied flavor lineup", "Small-bowl tasting potential", "Clear allergen and sodium checks", "Shelf-stable gift value", "Easy ranking format"],
    productSlugs: ["buldak-spicy-ramen-variety-box", "samyang-buldak-hot-chicken-ramen-variety-pack", "spicy-tasting-recovery-pairings"],
    faqs: [
      { question: "How should I serve spicy ramen at a party?", answer: "Cook according to the package, split each flavor into small bowls, label the flavors, and let people stop before the heat stops being fun." },
      { question: "What labels matter most for spicy ramen?", answer: "Check sodium, wheat, soy, sesame, milk, egg, fish, shellfish, and flavor-specific allergen details." },
    ],
  },
  {
    title: "Best Chili Crisp Gifts and Pantry Picks",
    slug: "best-chili-crisp-gifts-and-pantry-picks",
    eyebrow: "Crunchy Heat",
    description: "Find chili crisp and spicy chili oil picks by texture, pantry usefulness, allergens, storage, and gift appeal.",
    keywords: ["best chili crisp gift", "best chili crisp", "spicy chili oil gift"],
    intro:
      "Chili crisp is one of the easiest ways to give heat that people actually use after the novelty wears off. The best picks balance crunch, oil, pepper, aromatics, and label transparency.",
    criteria: ["Crunch and aroma", "Meal versatility", "Storage instructions", "Sesame/soy/nut allergen clarity", "Giftable packaging"],
    productSlugs: ["fly-by-jing-chili-crisp-starter-set", "sauce-up-extra-spicy-chili-crisp", "elijahs-xtreme-hot-sauce-gift-pack"],
    faqs: [
      { question: "Is chili crisp the same as hot sauce?", answer: "No. Chili crisp is usually oil-based and textured, while hot sauce is usually pourable and vinegar-forward." },
      { question: "What foods work well with chili crisp?", answer: "Noodles, rice bowls, eggs, dumplings, roasted vegetables, pizza, grilled meat, and tofu are common uses." },
    ],
  },
];

export function getBestGuideBySlug(slug: string) {
  return bestGuides.find((guide) => guide.slug === slug);
}

export function getBestGuideProducts(guide: BestGuide): ReviewProduct[] {
  return guide.productSlugs
    .map((slug) => reviewProducts.find((product) => product.slug === slug))
    .filter((product): product is ReviewProduct => Boolean(product));
}
