export type ComparisonPage = {
  title: string;
  slug: string;
  description: string;
  image: string;
  keywords: string[];
  left: string;
  right: string;
  winner: string;
  rows: { label: string; left: string; right: string; note: string }[];
};

const challengeSetImage = "/images/products/thoughtfully-hot-sauce-challenge-10-pack-optimized.jpg";
const superhotSauceImage = "/images/products/ghost-pepper-carolina-reaper-gift-set.jpg";
const ramenImage = "/images/products/kf-goodies-buldak-spicy-ramen-variety-box.jpg";
const chiliOilImage = "/images/products/fly-by-jing-chili-crisp-starter-set.jpg";
const grillImage = "/images/products/spicy-bbq-rub-wing-sauce-kit.jpg";

export const comparisonPages: ComparisonPage[] = [
  {
    title: "Hot Sauce Challenge Set vs Gourmet Hot Sauce Flight",
    slug: "hot-sauce-challenge-set-vs-gourmet-flight",
    description: "Compare party-friendly heat ladders with flavor-first sauce samplers before buying a spicy gift.",
    image: challengeSetImage,
    keywords: ["hot sauce challenge set", "gourmet hot sauce gift set", "mild to wild hot sauce"],
    left: "Challenge set",
    right: "Gourmet flight",
    winner: "Choose a challenge set for party structure; choose a gourmet flight when flavor and repeat use matter more than novelty.",
    rows: [
      { label: "Best use", left: "Game night or tasting ladder", right: "Cooking, gifting, and repeat meals", note: "Both should be served with opt-out rules." },
      { label: "Heat style", left: "Often staged from mild to extreme", right: "Usually broader flavor range", note: "Read the current bottle list." },
      { label: "Main risk", left: "Dare behavior", right: "Overpaying for weak variety", note: "Avoid forced challenges." },
    ],
  },
  {
    title: "Ghost Pepper vs Carolina Reaper Sauce",
    slug: "ghost-pepper-vs-carolina-reaper-sauce",
    description: "Understand two famous superhot pepper styles before gifting or serving extreme hot sauce.",
    image: superhotSauceImage,
    keywords: ["ghost pepper sauce", "Carolina Reaper sauce", "superhot hot sauce"],
    left: "Ghost pepper",
    right: "Carolina Reaper",
    winner: "Both are advanced heat. Ghost pepper can feel smoky and slower-building; Reaper sauces are often chosen for maximum intensity.",
    rows: [
      { label: "Buyer fit", left: "Experienced heat fans", right: "Extreme heat collectors", note: "Neither is beginner-friendly." },
      { label: "Serving idea", left: "Tiny drops in chili or wings", right: "Toothpick-level tasting", note: "Avoid large spoonfuls." },
      { label: "Safety check", left: "Allergens and serving size", right: "Medical comfort and opt-out", note: "Stop if anyone feels unwell." },
    ],
  },
  {
    title: "Spicy Ramen Variety Pack vs Hot Sauce Flight",
    slug: "spicy-ramen-variety-pack-vs-hot-sauce-flight",
    description: "Choose between a meal-based spicy challenge and a sauce-based tasting flight.",
    image: ramenImage,
    keywords: ["spicy ramen variety pack", "hot sauce flight", "spicy food challenge"],
    left: "Spicy ramen variety",
    right: "Hot sauce flight",
    winner: "Ramen is better for full meal tastings; hot sauce flights are easier to portion and control.",
    rows: [
      { label: "Portion control", left: "Harder if served as full packs", right: "Easy to serve drops", note: "Split ramen into small tasting bowls." },
      { label: "Ingredient checks", left: "Wheat, soy, sesame, sodium", right: "Vinegar, pepper, preservatives, allergens", note: "Labels matter on both." },
      { label: "Party setup", left: "Needs cooking and bowls", right: "Needs spoons, plates, and food base", note: "Plan cleanup." },
    ],
  },
  {
    title: "Chili Crisp vs Traditional Hot Sauce",
    slug: "chili-crisp-vs-traditional-hot-sauce",
    description: "Compare crunchy chili oil with pourable vinegar-based sauces for pantry use, gifts, and weeknight meals.",
    image: chiliOilImage,
    keywords: ["chili crisp vs hot sauce", "best chili crisp", "spicy condiment gift"],
    left: "Chili crisp",
    right: "Traditional hot sauce",
    winner: "Chili crisp wins for texture and meal finishing; hot sauce wins for wing nights, tacos, and easy heat control.",
    rows: [
      { label: "Texture", left: "Crunchy oil and aromatics", right: "Pourable sauce", note: "Stir chili crisp before serving." },
      { label: "Allergen watch", left: "Sesame, soy, peanuts, tree nuts possible", right: "Varies by sauce", note: "Always read labels." },
      { label: "Best foods", left: "Noodles, rice, eggs, dumplings", right: "Wings, tacos, pizza, BBQ", note: "Both can be pantry staples." },
    ],
  },
  {
    title: "Spicy BBQ Rub vs Wing Sauce",
    slug: "spicy-bbq-rub-vs-wing-sauce",
    description: "Compare dry heat and sauced heat for grilling, smoking, wings, ribs, and party platters.",
    image: grillImage,
    keywords: ["spicy BBQ rub", "spicy wing sauce", "hot BBQ sauce"],
    left: "Dry rub",
    right: "Wing sauce",
    winner: "Use rubs when you want bark and layered seasoning; use sauces when you want glossy heat and easy table control.",
    rows: [
      { label: "Cooking role", left: "Before cooking", right: "During or after cooking", note: "Avoid cross-contamination with raw meat." },
      { label: "Heat control", left: "Harder to reduce after cooking", right: "Can serve on the side", note: "Side sauce is safer for mixed groups." },
      { label: "Label watch", left: "Salt, sugar, allergens", right: "Sugar, vinegar, preservatives", note: "Check both." },
    ],
  },
];

export function getComparisonBySlug(slug: string) {
  return comparisonPages.find((page) => page.slug === slug);
}
