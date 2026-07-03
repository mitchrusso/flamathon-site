export type GlossaryTerm = {
  term: string;
  slug: string;
  shortDefinition: string;
  definition: string;
  buyerNote: string;
  relatedLinks: { label: string; href: string }[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Scoville Scale",
    slug: "scoville-scale",
    shortDefinition: "A rough heat scale used to describe pepper pungency.",
    definition:
      "The Scoville scale is a common way to describe pepper heat, but sauce heat depends on formulation, dilution, serving size, and the food it is served with.",
    buyerNote: "Use Scoville claims as a starting point, not as the only buying criterion.",
    relatedLinks: [
      { label: "How to Read Scoville Ratings", href: "/resources/how-to-read-scoville-ratings" },
      { label: "Ghost Pepper vs Carolina Reaper", href: "/compare/ghost-pepper-vs-carolina-reaper-sauce" },
    ],
  },
  {
    term: "Capsaicin",
    slug: "capsaicin",
    shortDefinition: "The compound that creates the burning sensation in peppers.",
    definition:
      "Capsaicin binds to heat and pain receptors, which is why spicy foods can feel hot even when they are not physically hot in temperature.",
    buyerNote: "Extreme capsaicin products deserve tiny servings, opt-out rules, and extra caution around children, allergies, and medical concerns.",
    relatedLinks: [
      { label: "Capsaicin Safety", href: "/resources/capsaicin-safety-for-spicy-food-fans" },
      { label: "Tasting Gear and Recovery", href: "/resources/topics/tasting-gear-and-recovery" },
    ],
  },
  {
    term: "Ghost Pepper",
    slug: "ghost-pepper",
    shortDefinition: "A famous superhot pepper often used in extreme sauces.",
    definition:
      "Ghost pepper sauces are typically aimed at experienced heat fans. Their eating experience varies widely depending on fruit, vinegar, extract, and pepper concentration.",
    buyerNote: "Buy ghost pepper sauces for controlled tastings and cooking in small amounts, not forced dares.",
    relatedLinks: [
      { label: "Superhot Sauces", href: "/resources/topics/superhot-sauces" },
      { label: "Best Superhot Sauces", href: "/best/best-superhot-sauces-for-experienced-heat-seekers" },
    ],
  },
  {
    term: "Carolina Reaper",
    slug: "carolina-reaper",
    shortDefinition: "A superhot pepper often associated with maximum-intensity sauces.",
    definition:
      "Carolina Reaper sauces are often chosen by extreme heat collectors, but flavor and label clarity still matter more than shock value.",
    buyerNote: "Treat Reaper sauces as advanced products and verify ingredient details before serving.",
    relatedLinks: [
      { label: "Ghost Pepper vs Carolina Reaper", href: "/compare/ghost-pepper-vs-carolina-reaper-sauce" },
      { label: "Extreme Hot Sauce Red Flags", href: "/resources/extreme-hot-sauce-red-flags" },
    ],
  },
  {
    term: "Chili Crisp",
    slug: "chili-crisp",
    shortDefinition: "A crunchy, oil-based spicy condiment.",
    definition:
      "Chili crisp combines chili oil with crunchy aromatics and seasonings. It is usually more texture-driven and meal-friendly than a pure challenge sauce.",
    buyerNote: "Check sesame, soy, peanut, tree nut, and storage instructions before buying.",
    relatedLinks: [
      { label: "Chili Crisp Buying Guide", href: "/resources/chili-crisp-buying-guide" },
      { label: "Best Chili Crisp Gifts", href: "/best/best-chili-crisp-gifts-and-pantry-picks" },
    ],
  },
  {
    term: "Mild-to-Wild Flight",
    slug: "mild-to-wild-flight",
    shortDefinition: "A tasting sequence that gradually increases heat.",
    definition:
      "A mild-to-wild flight helps a group compare sauces in a structured order. It is better than jumping straight into extreme heat because tasters can stop when they reach their limit.",
    buyerNote: "Look for challenge sets with clear bottle order, readable labels, and smaller serving options.",
    relatedLinks: [
      { label: "Best Challenge Sets", href: "/best/best-hot-sauce-challenge-sets-for-parties" },
      { label: "Host a Hot Sauce Challenge Safely", href: "/resources/how-to-host-a-hot-sauce-challenge-safely" },
    ],
  },
  {
    term: "Extract Sauce",
    slug: "extract-sauce",
    shortDefinition: "A sauce that may use concentrated capsaicin extract.",
    definition:
      "Extract sauces can feel harsh and unusually intense because they rely on concentrated heat rather than whole-pepper flavor alone.",
    buyerNote: "Avoid extract-heavy products for casual guests unless the label and serving rules are very clear.",
    relatedLinks: [
      { label: "Extreme Hot Sauce Red Flags", href: "/resources/extreme-hot-sauce-red-flags" },
      { label: "Superhot Sauces", href: "/resources/topics/superhot-sauces" },
    ],
  },
  {
    term: "Palate Reset",
    slug: "palate-reset",
    shortDefinition: "A break or food pairing that helps tasters recover between spicy samples.",
    definition:
      "A palate reset can include plain rice, bread, dairy or non-dairy alternatives, mild foods, and time. It helps keep a tasting focused on comparison instead of endurance.",
    buyerNote: "Plan recovery foods before opening superhot sauces or spicy ramen packs.",
    relatedLinks: [
      { label: "What to Serve With Hot Sauce Flights", href: "/resources/what-to-serve-with-hot-sauce-flights" },
      { label: "Tasting Scorecard", href: "/hot-sauce-tasting-scorecard" },
    ],
  },
];

export function getGlossaryTermBySlug(slug: string) {
  return glossaryTerms.find((term) => term.slug === slug);
}
