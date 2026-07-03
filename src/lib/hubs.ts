export type TopicHub = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  image: string;
  keywords: string[];
  sections: { heading: string; body: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedArticleSlugs: string[];
};

const sauceImage = "https://images.unsplash.com/photo-1700619773778-f02b45ca0616?auto=format&fit=crop&w=1200&q=80";
const ramenImage = "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80";
const chiliOilImage = "https://images.unsplash.com/photo-1700619773778-f02b45ca0616?auto=format&fit=crop&w=1200&q=80";
const grillImage = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80";
const partyImage = "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80";

export const topicHubs: TopicHub[] = [
  {
    title: "Hot Sauce Challenge Sets",
    slug: "hot-sauce-challenge-sets",
    eyebrow: "Mild to Wild",
    description: "Choose hot sauce challenge kits by heat ladder, label clarity, serving rules, and gift value.",
    image: sauceImage,
    keywords: ["hot sauce challenge set", "mild to wild hot sauce", "hot sauce gift set"],
    relatedArticleSlugs: ["how-to-host-a-hot-sauce-challenge-safely", "best-hot-sauce-challenge-set-features", "ghost-pepper-vs-carolina-reaper"],
    sections: [
      { heading: "The goal is progression, not punishment", body: ["A good hot sauce challenge set lets people compare flavor and heat gradually. Avoid rules that pressure people to finish extreme sauces or ignore discomfort.", "Look for clear bottle order, ingredient labels, and serving ideas that keep portions tiny."] },
      { heading: "Gift sets need label checks", body: ["Novelty packaging is fun, but the useful details are pepper type, allergens, sodium, vinegar base, bottle size, and whether the set is meant for adults.", "Treat every challenge kit as optional tasting, not a dare."] },
    ],
    faqs: [
      { question: "Are hot sauce challenge sets safe?", answer: "They can be served responsibly in tiny amounts, but extreme capsaicin can cause serious discomfort and some people should avoid it." },
      { question: "What should I buy with a challenge set?", answer: "Plain food, spoons, gloves, napkins, milk or alternatives, and a clear opt-out rule." },
    ],
  },
  {
    title: "Superhot Sauces",
    slug: "superhot-sauces",
    eyebrow: "Ghost Pepper and Reaper",
    description: "Compare ghost pepper, Carolina Reaper, scorpion pepper, and other superhot sauces by flavor and responsible serving.",
    image: sauceImage,
    keywords: ["ghost pepper sauce", "Carolina Reaper sauce", "superhot hot sauce"],
    relatedArticleSlugs: ["ghost-pepper-vs-carolina-reaper", "how-to-read-scoville-ratings", "capsaicin-safety-for-spicy-food-fans"],
    sections: [
      { heading: "Superhot is a category for experienced eaters", body: ["Ghost pepper and Carolina Reaper sauces are not beginner condiments. Use tiny amounts, avoid children, and let guests decide their own limits.", "Flavor still matters: vinegar balance, fruit, garlic, smoke, and sweetness can make a superhot sauce more useful."] },
      { heading: "Scoville numbers are only a rough guide", body: ["A sauce's perceived heat depends on pepper concentration, extract use, fat, acid, sugar, and the food it is served on.", "Do not assume a lower number always feels mild or that a higher number is appropriate for a party."] },
    ],
    faqs: [
      { question: "Is Carolina Reaper hotter than ghost pepper?", answer: "Generally yes, but sauce formulation changes the eating experience." },
      { question: "Should beginners start with superhot sauce?", answer: "No. Start with jalapeno, cayenne, or habanero-style sauces first." },
    ],
  },
  {
    title: "Spicy Ramen",
    slug: "spicy-ramen",
    eyebrow: "Noodle Flights",
    description: "Shop spicy ramen variety packs by flavor, heat, sodium, allergens, and party-friendly serving size.",
    image: ramenImage,
    keywords: ["spicy ramen variety pack", "Buldak ramen challenge", "hot noodle sampler"],
    relatedArticleSlugs: ["spicy-ramen-variety-pack-guide", "how-to-run-a-spicy-noodle-flight", "allergen-checks-for-spicy-snacks"],
    sections: [
      { heading: "Ramen is a meal, not a drop", body: ["Spicy ramen challenges can become intense because the portion is large. Split packs into small tasting bowls for comparison instead of making one person finish a full bowl.", "Check sodium, wheat, soy, sesame, and flavor-specific ingredients before serving."] },
      { heading: "Flavor ranking beats pain ranking", body: ["The best ramen content asks which flavor is most balanced, which sauce coats best, and which heat level people would actually eat again.", "Keep dairy or non-dairy relief nearby and let tasters stop."] },
    ],
    faqs: [
      { question: "Is spicy ramen good for challenge content?", answer: "Yes, if served in small portions and framed around flavor comparison rather than endurance." },
      { question: "What allergens are common in ramen?", answer: "Wheat, soy, sesame, milk, shellfish, fish, and egg can appear depending on flavor and brand." },
    ],
  },
  {
    title: "Chili Crisp and Oils",
    slug: "chili-crisp-and-oils",
    eyebrow: "Crunch and Heat",
    description: "Compare chili crisp, chili oil, salsa macha, and crunchy spicy condiments for everyday meals.",
    image: chiliOilImage,
    keywords: ["best chili crisp", "spicy chili oil", "chili crisp gift set"],
    relatedArticleSlugs: ["chili-crisp-buying-guide", "chili-crisp-vs-hot-sauce", "allergen-checks-for-spicy-snacks"],
    sections: [
      { heading: "Texture changes the whole category", body: ["Chili crisp is not just hot sauce in oil. Crunch, aromatics, pepper flakes, and savory ingredients make it a finishing condiment for noodles, rice, eggs, vegetables, and dumplings.", "Because ingredients vary widely, label checks are especially important."] },
      { heading: "Watch oil, storage, and allergens", body: ["Some crisps contain sesame, soy, peanuts, tree nuts, or other allergens. Storage instructions also vary by brand.", "Stir before serving and start with a small spoonful."] },
    ],
    faqs: [
      { question: "Is chili crisp always very hot?", answer: "No. Many chili crisps are more savory than extreme, while extra-spicy versions can be intense." },
      { question: "How do I use chili crisp?", answer: "Try it on noodles, dumplings, eggs, rice bowls, pizza, roasted vegetables, or grilled meat." },
    ],
  },
  {
    title: "BBQ Heat",
    slug: "bbq-heat",
    eyebrow: "Grill and Wing Night",
    description: "Shop spicy BBQ rubs, wing sauces, marinades, and table sauces by flavor, sugar, salt, and serving control.",
    image: grillImage,
    keywords: ["spicy BBQ rub", "hot wing sauce", "spicy grilling sauce"],
    relatedArticleSlugs: ["spicy-bbq-rub-vs-wing-sauce", "best-wing-night-hot-sauce-setup", "food-safety-for-spicy-wing-night"],
    sections: [
      { heading: "Heat behaves differently on the grill", body: ["Dry rubs cook into the surface; sauces can be brushed, tossed, or served on the side. Side serving is better for mixed groups because each person controls heat.", "Raw meat handling still matters even when the theme is hot sauce."] },
      { heading: "Flavor balance matters", body: ["Look for smoke, vinegar, garlic, fruit, molasses, mustard, and pepper balance. Heat without flavor gets old fast.", "Check sugar and sodium if the sauce will be used heavily."] },
    ],
    faqs: [
      { question: "Should wing sauce be served on the side?", answer: "For mixed groups, yes. It lets heat lovers add more while spice-sensitive guests still eat comfortably." },
      { question: "Can dry rubs be very spicy?", answer: "Yes. Pepper powders and extracts can make rubs intense, and salt levels can climb quickly." },
    ],
  },
  {
    title: "Tasting Gear and Recovery",
    slug: "tasting-gear-and-recovery",
    eyebrow: "Host Better",
    description: "Build a responsible spicy tasting setup with spoons, gloves, plain foods, dairy or alternatives, labels, and cleanup.",
    image: partyImage,
    keywords: ["hot sauce tasting party", "spicy challenge recovery", "hot sauce tasting spoons"],
    relatedArticleSlugs: ["how-to-host-a-hot-sauce-challenge-safely", "what-to-serve-with-hot-sauce-flights", "capsaicin-safety-for-spicy-food-fans"],
    sections: [
      { heading: "Plan the room before the heat", body: ["A good tasting setup includes tiny portions, water, plain food, dairy or non-dairy relief, trash, napkins, gloves for superhots, and a visible heat order.", "The most important gear is social: no pressure, no forced finishing, no filming people who want to stop."] },
      { heading: "Recovery is not a stunt", body: ["Milk, yogurt, bread, rice, and fatty foods can help many tasters feel better, but serious reactions are not entertainment.", "If someone has chest pain, breathing trouble, severe vomiting, or other concerning symptoms, seek medical help."] },
    ],
    faqs: [
      { question: "Does water stop hot sauce burn?", answer: "Water may not help much because capsaicin is oil-soluble. Dairy or fatty foods often work better for many people." },
      { question: "Should people wear gloves?", answer: "For superhot sauces or powders, gloves can prevent accidental eye or skin exposure." },
    ],
  },
];

export function getTopicHubBySlug(slug: string) {
  return topicHubs.find((hub) => hub.slug === slug);
}
