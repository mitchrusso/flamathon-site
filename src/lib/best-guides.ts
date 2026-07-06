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
    title: "Best Ghost Pepper Sauces for Smoky Superhot Heat",
    slug: "best-ghost-pepper-sauces",
    eyebrow: "Ghost Pepper Guide",
    description: "Compare dedicated ghost pepper sauces by heat, smoke, fruit, wing-night fit, finishing-sauce use, serving caution, and repeat-use potential.",
    keywords: ["best ghost pepper sauce", "ghost pepper hot sauce", "ghost pepper wing sauce", "ghost pepper hot honey"],
    intro:
      "Ghost pepper sauce is a strong standalone category because shoppers search for it directly. The best ghost pepper picks are not just painfully hot; they give buyers a clear pepper identity, enough smoke or fruit to stay useful on food, and a responsible serving path for tiny portions.",
    criteria: ["Ghost pepper is clearly named", "Flavor profile goes beyond pain", "Small serving control", "Readable ingredient and allergen details", "Useful on wings, tacos, eggs, chili, fries, pizza, or grilled food"],
    productSlugs: [
      "yellowbird-classic-ghost-pepper-hot-sauce",
      "melindas-ghost-pepper-hot-sauce",
      "daves-gourmet-ghost-pepper-jolokia-sauce",
      "elijahs-xtreme-ghost-pepper-hot-sauce",
      "bravado-ghost-pepper-blueberry-hot-sauce",
      "melindas-creamy-ghost-pepper-wing-sauce",
      "melindas-ghost-pepper-black-truffle-hot-sauce",
      "melindas-ghost-hot-honey",
      "ghost-pepper-carolina-reaper-gift-set",
    ],
    faqs: [
      { question: "Is ghost pepper sauce beginner-friendly?", answer: "Usually no. Ghost pepper sauces are better for experienced heat fans or cooks using very small amounts." },
      { question: "What does ghost pepper sauce taste like?", answer: "Many ghost pepper sauces have a smoky or slow-building heat, but vinegar, fruit, garlic, sugar, extracts, and pepper concentration can change the experience dramatically." },
      { question: "What should I compare ghost pepper sauce against?", answer: "Compare it with habanero for a lower step and Carolina Reaper for a hotter step. That creates a more useful heat ladder." },
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
  {
    title: "Best Hot Honey for Pizza, Chicken, and BBQ",
    slug: "best-hot-honey-for-pizza-chicken-and-bbq",
    eyebrow: "Sweet Heat Guide",
    description: "Compare hot honey bottles and combo packs by heat level, drizzle control, gift value, and everyday food fit.",
    keywords: ["best hot honey", "hot honey for pizza", "hot honey for chicken"],
    intro:
      "Hot honey is one of Flamathon's best expansion categories because it is approachable, giftable, and useful on real food. The best picks make it easy to drizzle a controlled amount of sweet heat on pizza, chicken, BBQ, biscuits, cheese boards, roasted vegetables, and cocktails.",
    criteria: ["Clear original vs extra-hot option", "Easy squeeze or drizzle bottle", "Ingredient transparency", "Good everyday food fit", "Gift or combo-pack value"],
    productSlugs: ["mikes-hot-honey-original-extra-hot-combo", "spicy-bbq-rub-wing-sauce-kit", "kosmos-q-hot-dirty-bird-bbq-rub"],
    faqs: [
      { question: "Is hot honey a good gift?", answer: "Yes. It is easier to use than many extreme sauces and fits pizza, chicken, BBQ, cheese boards, biscuits, and cocktails." },
      { question: "Should I buy original or extra hot honey?", answer: "Original is safer for mixed groups. Extra hot is better for people who already like chili oil, hot sauce, or spicy BBQ." },
    ],
  },
  {
    title: "Best Hot Pepper Flakes and Powders for Serious Heat",
    slug: "best-hot-pepper-flakes-and-powders",
    eyebrow: "Pantry Fire Guide",
    description: "Choose pepper flakes and powders for pizza, eggs, ramen, BBQ, and cooking by pepper blend, heat level, and safe handling.",
    keywords: ["best hot pepper flakes", "ghost pepper flakes", "Carolina Reaper powder"],
    intro:
      "Dry pepper flakes and powders are repeat-use products for serious heat fans. They are stronger and less forgiving than a table sauce, but they can add clean pepper heat to pizza, eggs, ramen, chili, pasta, grilled vegetables, and BBQ rub blends.",
    criteria: ["Pepper varieties are named", "No vague filler-heavy blend", "Clear heat expectations", "Practical shaker format", "Safe handling and storage"],
    productSlugs: ["flatiron-pepper-co-four-pepper-blend", "ghost-pepper-carolina-reaper-gift-set", "spicy-tasting-recovery-pairings"],
    faqs: [
      { question: "Are superhot flakes safe to leave on the table?", answer: "Only if they are clearly labeled and kept away from children. Dry pepper dust can irritate eyes and skin." },
      { question: "What foods work best with hot pepper flakes?", answer: "Pizza, eggs, noodles, pasta, chili, grilled vegetables, tacos, and BBQ rub blends are strong fits." },
    ],
  },
  {
    title: "Best Spicy Pickles and Snacks for Heat-Loving Parties",
    slug: "best-spicy-pickles-and-snacks-for-parties",
    eyebrow: "Snack Board Guide",
    description: "Build spicy snack boards and BBQ sides with pickles, chips, nuts, jerky, and crunchy heat that people can opt into.",
    keywords: ["best spicy pickles", "spicy snack box", "hot chips variety pack"],
    intro:
      "Spicy snacks and pickles turn Flamathon from a bottle-only guide into a fuller party-shopping guide. They are useful for burgers, sandwiches, BBQ plates, tailgates, snack boards, and gift baskets when people want crunch and heat without another sauce bottle.",
    criteria: ["Clear heat level", "Crunch or snack value", "Sodium and sugar transparency", "Good party serving format", "Easy separation from mild snacks"],
    productSlugs: ["famous-daves-sweet-spicy-pickle-chips", "mikes-hot-honey-original-extra-hot-combo", "spicy-tasting-recovery-pairings"],
    faqs: [
      { question: "Are spicy pickles usually extreme?", answer: "Most are not superhot. They usually bring vinegar, sweetness, salt, crunch, and moderate heat." },
      { question: "How should I serve spicy snacks at a party?", answer: "Keep spicy snacks labeled and separate from mild snacks so guests can opt in without surprises." },
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
