export type ResourceArticle = {
  title: string;
  slug: string;
  publishDate: string;
  category: string;
  image: string;
  excerpt: string;
  keywords: string[];
  sections: { heading: string; body: { text: string; sourceIds: string[] }[] }[];
  sourceIds: string[];
  takeaway: string;
};

export const keywordPlan = [
  { cluster: "Hot sauce challenge sets", keywords: ["hot sauce challenge set", "mild to wild hot sauce", "hot sauce gift set", "spicy challenge kit"] },
  { cluster: "Superhot sauces", keywords: ["ghost pepper sauce", "Carolina Reaper sauce", "superhot hot sauce", "Scoville scale hot sauce"] },
  { cluster: "Spicy ramen", keywords: ["spicy ramen variety pack", "Buldak ramen challenge", "hot noodle sampler", "spicy ramen gift"] },
  { cluster: "Chili crisp and oils", keywords: ["best chili crisp", "spicy chili oil", "chili crisp gift set", "chili crisp vs hot sauce"] },
  { cluster: "BBQ and wings", keywords: ["spicy BBQ rub", "hot wing sauce", "spicy grilling sauce", "wing night hot sauce"] },
  { cluster: "Safety and hosting", keywords: ["hot sauce tasting party", "capsaicin safety", "spicy food allergy labels", "hot sauce challenge rules"] },
];

const images = {
  sauce: "https://images.unsplash.com/photo-1700619773778-f02b45ca0616?auto=format&fit=crop&w=1200&q=80",
  wings: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=1200&q=80",
  ramen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
  chili: "https://images.unsplash.com/photo-1700619773778-f02b45ca0616?auto=format&fit=crop&w=1200&q=80",
  grill: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  party: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
};

const articlePlan = [
  ["How to Host a Hot Sauce Challenge Safely", "how-to-host-a-hot-sauce-challenge-safely", "2026-07-03", "Safety and Hosting", images.party, ["hot sauce challenge rules", "hot sauce tasting party", "capsaicin safety"]],
  ["Best Hot Sauce Challenge Set Features to Compare", "best-hot-sauce-challenge-set-features", "2026-07-06", "Hot Sauce Challenge Sets", images.sauce, ["hot sauce challenge set", "mild to wild hot sauce", "hot sauce gift set"]],
  ["Ghost Pepper vs Carolina Reaper: What Buyers Should Know", "ghost-pepper-vs-carolina-reaper", "2026-07-07", "Superhot Sauces", images.sauce, ["ghost pepper sauce", "Carolina Reaper sauce", "superhot hot sauce"]],
  ["How to Read Scoville Ratings Without Getting Fooled", "how-to-read-scoville-ratings", "2026-07-08", "Superhot Sauces", images.sauce, ["Scoville scale hot sauce", "pepper heat scale", "hot sauce heat levels"]],
  ["Spicy Ramen Variety Pack Guide", "spicy-ramen-variety-pack-guide", "2026-07-09", "Spicy Ramen", images.ramen, ["spicy ramen variety pack", "Buldak ramen challenge", "hot noodle sampler"]],
  ["How to Run a Spicy Noodle Flight", "how-to-run-a-spicy-noodle-flight", "2026-07-10", "Spicy Ramen", images.ramen, ["spicy ramen challenge", "spicy noodle flight", "ramen tasting party"]],
  ["Chili Crisp Buying Guide", "chili-crisp-buying-guide", "2026-07-13", "Chili Crisp and Oils", images.chili, ["best chili crisp", "spicy chili oil", "chili crisp gift set"]],
  ["Chili Crisp vs Hot Sauce", "chili-crisp-vs-hot-sauce", "2026-07-14", "Chili Crisp and Oils", images.chili, ["chili crisp vs hot sauce", "spicy condiment", "chili oil"]],
  ["Spicy BBQ Rub vs Wing Sauce", "spicy-bbq-rub-vs-wing-sauce", "2026-07-15", "BBQ and Wings", images.grill, ["spicy BBQ rub", "hot wing sauce", "spicy grilling sauce"]],
  ["Best Wing Night Hot Sauce Setup", "best-wing-night-hot-sauce-setup", "2026-07-16", "BBQ and Wings", images.wings, ["wing night hot sauce", "hot sauce tasting party", "spicy wing sauce"]],
  ["Food Safety for Spicy Wing Night", "food-safety-for-spicy-wing-night", "2026-07-17", "BBQ and Wings", images.wings, ["food safety for wings", "spicy wing night", "party food safety"]],
  ["Allergen Checks for Spicy Snacks", "allergen-checks-for-spicy-snacks", "2026-07-20", "Safety and Hosting", images.party, ["spicy food allergy labels", "food allergen labels", "sesame allergen"]],
  ["Capsaicin Safety for Spicy Food Fans", "capsaicin-safety-for-spicy-food-fans", "2026-07-21", "Safety and Hosting", images.sauce, ["capsaicin safety", "hot sauce challenge safety", "spicy food reaction"]],
  ["What to Serve With Hot Sauce Flights", "what-to-serve-with-hot-sauce-flights", "2026-07-22", "Safety and Hosting", images.party, ["hot sauce tasting foods", "hot sauce flight pairings", "spicy challenge recovery"]],
  ["Mild to Wild Hot Sauce Gifts", "mild-to-wild-hot-sauce-gifts", "2026-07-23", "Hot Sauce Challenge Sets", images.sauce, ["mild to wild hot sauce", "hot sauce gift set", "spicy gifts"]],
  ["Best Spicy Gifts for Heat Seekers", "best-spicy-gifts-for-heat-seekers", "2026-07-24", "Hot Sauce Challenge Sets", images.sauce, ["spicy gifts", "hot sauce gift set", "spicy ramen gift"]],
  ["Hot Sauce Gift Set Labels: What to Verify", "hot-sauce-gift-set-labels", "2026-07-27", "Hot Sauce Challenge Sets", images.sauce, ["hot sauce gift set", "hot sauce ingredients", "hot sauce label"]],
  ["Beginner Hot Sauce Flight Before Superhots", "beginner-hot-sauce-flight-before-superhots", "2026-07-28", "Superhot Sauces", images.sauce, ["beginner hot sauce", "hot sauce flight", "superhot sauce beginner"]],
  ["Chili Oil Storage and Serving Tips", "chili-oil-storage-and-serving-tips", "2026-07-29", "Chili Crisp and Oils", images.chili, ["chili oil storage", "chili crisp serving", "spicy chili oil"]],
  ["Spicy Pantry Staples for Weeknight Cooking", "spicy-pantry-staples-weeknight-cooking", "2026-07-30", "Chili Crisp and Oils", images.chili, ["spicy pantry staples", "best chili crisp", "hot sauce pantry"]],
  ["How to Build a Heat Ladder for Friends", "how-to-build-a-heat-ladder-for-friends", "2026-07-31", "Safety and Hosting", images.party, ["heat ladder", "hot sauce tasting party", "mild to wild hot sauce"]],
  ["Extreme Hot Sauce Red Flags", "extreme-hot-sauce-red-flags", "2026-08-03", "Superhot Sauces", images.sauce, ["extreme hot sauce", "hot sauce challenge safety", "superhot hot sauce"]],
] as const;

const categorySources: Record<string, string[]> = {
  "Safety and Hosting": ["poison-control-capsaicin", "nationwide-one-chip", "fda-food-allergies", "fsis-big-nine"],
  "Hot Sauce Challenge Sets": ["poison-control-capsaicin", "datassential-spicy", "imarc-hot-sauce", "fda-food-allergies"],
  "Superhot Sauces": ["poison-control-capsaicin", "pepper-joe-scoville", "nationwide-one-chip", "fda-food-allergies"],
  "Spicy Ramen": ["fda-food-allergies", "fsis-big-nine", "foodsafety-four-steps", "datassential-spicy"],
  "Chili Crisp and Oils": ["fda-food-allergies", "fda-sesame", "fsis-big-nine", "datassential-spicy"],
  "BBQ and Wings": ["cdc-food-safety", "foodsafety-four-steps", "fda-food-allergies", "fsis-big-nine"],
};

function paragraph(text: string, sourceIds: string[]) {
  return { text, sourceIds };
}

function articleSections(title: string, category: string, keywords: readonly string[]) {
  const sources = categorySources[category] ?? ["poison-control-capsaicin", "fda-food-allergies"];
  const keywordText = keywords.map((keyword) => `"${keyword}"`).join(", ");

  return [
    {
      heading: "The buying question behind the search",
      body: [
        paragraph(`${title} starts with a real shopping problem: people want heat, flavor, and gift value, but they also need to avoid reckless dares, unclear ingredients, and products that are wrong for the group being served. Searchers using ${keywordText} are usually trying to choose something fun without creating a bad night.`, sources.slice(0, 2)),
        paragraph("Spicy food is a strong trend, and hot sauce remains a broad gift and pantry category, but popularity does not remove the need for label reading and sensible serving. Extreme capsaicin products deserve extra caution because discomfort can escalate quickly for some people.", ["datassential-spicy", "imarc-hot-sauce", "poison-control-capsaicin"]),
      ],
    },
    {
      heading: "What to compare before buying",
      body: [
        paragraph(`For ${category.toLowerCase()}, compare heat range, flavor notes, bottle or pack size, ingredient transparency, allergens, sodium or sugar, serving instructions, and whether the product is built for cooking, gifting, or tasting. A product photo is not enough; the label and current seller details matter.`, sources.slice(0, 3)),
        paragraph("Look for a progression that lets tasters stop early. Mild-to-wild sets, small spoon tastings, side sauces, and shared tasting notes create a better experience than rules that require finishing an extreme product.", ["poison-control-capsaicin", "nationwide-one-chip"]),
      ],
    },
    {
      heading: "Safety and label checks",
      body: [
        paragraph("Before serving spicy products, check whether anyone has food allergies, reflux issues, pregnancy concerns, medication interactions, or past reactions to very spicy foods. The FDA and USDA identify major allergen categories that can appear in packaged foods, sauces, ramen, crisps, rubs, and snacks.", ["fda-food-allergies", "fsis-big-nine", "fda-sesame"]),
        paragraph("For cooked party foods such as wings, ribs, and grilled meats, keep normal food-safety habits in place: clean hands and surfaces, separate raw foods, cook to proper temperatures, and chill leftovers promptly.", ["cdc-food-safety", "foodsafety-four-steps"]),
      ],
    },
    {
      heading: "How Flamathon would set it up",
      body: [
        paragraph("Use tiny portions, clear labels, plain foods, napkins, gloves for superhot handling, and dairy or non-dairy relief options. Let every person opt out without teasing. If someone reports chest pain, trouble breathing, severe vomiting, or other concerning symptoms, stop the tasting and seek appropriate medical help.", ["poison-control-capsaicin", "nationwide-one-chip"]),
        paragraph("The best spicy buy is the one people would happily use again. Flavor, balance, and repeat meals matter more than the highest possible heat claim.", sources.slice(0, 2)),
      ],
    },
  ];
}

export const resourceArticles: ResourceArticle[] = articlePlan.map(([title, slug, publishDate, category, image, keywords]) => {
  const sourceIds = [...new Set(categorySources[category] ?? ["poison-control-capsaicin", "fda-food-allergies"])];
  return {
    title,
    slug,
    publishDate,
    category,
    image,
    excerpt: `A practical Flamathon guide to ${keywords[0]}, with heat-level checks, label warnings, serving ideas, and references.`,
    keywords: [...keywords],
    sections: articleSections(title, category, keywords),
    sourceIds,
    takeaway: "The best spicy purchase balances heat, flavor, label clarity, serving control, and the comfort level of the people eating it.",
  };
});

export function getArticleBySlug(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}

export function isArticlePublished(article: ResourceArticle, now = new Date()) {
  return new Date(`${article.publishDate}T00:00:00`) <= now;
}

export function getPublishedArticles(now = new Date()) {
  return resourceArticles.filter((article) => isArticlePublished(article, now));
}

export function getNextScheduledArticle(now = new Date()) {
  return resourceArticles
    .filter((article) => !isArticlePublished(article, now))
    .sort((a, b) => a.publishDate.localeCompare(b.publishDate))[0];
}

export function getRelatedArticles(article: ResourceArticle, limit = 3) {
  return getPublishedArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .sort((a, b) => (a.category === article.category ? 0 : 1) - (b.category === article.category ? 0 : 1))
    .slice(0, limit);
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
