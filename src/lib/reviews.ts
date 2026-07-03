export type ReviewProduct = {
  name: string;
  slug: string;
  image: string;
  bestFor: string;
  category: string;
  weight: string;
  capacity: string;
  summary: string;
  features: string[];
  pros: string[];
  cons: string[];
  amazon: string;
};

export type ProductDecision = {
  bestWhen: string[];
  considerAnotherWhen: string[];
  setupTip: string;
  searchIntent: string;
};

const tag = "mitchellrusso-20";
const amazonProduct = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${tag}`;
const amazonSearch = (query: string) => `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${tag}`;

const sauceImage = "https://images.unsplash.com/photo-1600175074948-6f6b7f72a5cf?auto=format&fit=crop&w=1200&q=80";
const wingsImage = "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=1200&q=80";
const ramenImage = "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80";
const chiliOilImage = "https://images.unsplash.com/photo-1604908554051-e477d644701e?auto=format&fit=crop&w=1200&q=80";
const grillImage = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80";
const milkImage = "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=1200&q=80";

export const reviewProducts: ReviewProduct[] = [
  {
    name: "Thoughtfully Hot Sauce Challenge 10 Pack",
    slug: "thoughtfully-hot-sauce-challenge-10-pack",
    image: sauceImage,
    bestFor: "Best mild-to-extreme party flight",
    category: "Hot Sauce Challenge Sets",
    weight: "Heat profile: mild to ghost pepper",
    capacity: "Verify current bottles, ingredients, and age guidance",
    summary: "A ready-made hot sauce challenge set for people who want a clear progression instead of jumping straight into superhot territory.",
    features: ["10-bottle format", "Mild-to-extreme lineup", "Gift-friendly packaging", "Good for wing nights", "Label checks required"],
    pros: ["Easy party format", "Lets tasters pace heat gradually", "Better for gifts than a single novelty sauce"],
    cons: ["Not for children", "Ingredients and exact flavors can change"],
    amazon: amazonProduct("B08STNKJNM"),
  },
  {
    name: "Premium Ghost Pepper and Carolina Reaper Gift Set",
    slug: "ghost-pepper-carolina-reaper-gift-set",
    image: sauceImage,
    bestFor: "Best superhot two-bottle sampler",
    category: "Superhot Sauces",
    weight: "Heat profile: ghost pepper and reaper",
    capacity: "Use tiny amounts and verify allergens",
    summary: "A compact gift set for experienced heat fans who want to compare two famous superhot pepper styles without buying a full shelf of sauces.",
    features: ["Two-bottle set", "Ghost pepper sauce", "Carolina Reaper sauce", "Collectible bottles", "Wing and taco use"],
    pros: ["Strong gift appeal", "Simple head-to-head comparison", "Good for controlled tastings"],
    cons: ["Too intense for beginners", "Superhot sauces demand careful serving"],
    amazon: amazonProduct("B08GYD8Q19"),
  },
  {
    name: "Ass Kickin' Hot Sauce Challenge Book",
    slug: "ass-kickin-hot-sauce-challenge-book",
    image: sauceImage,
    bestFor: "Best novelty challenge gift",
    category: "Hot Sauce Challenge Sets",
    weight: "Heat profile: staged novelty challenge",
    capacity: "Serve as drops, not dares",
    summary: "A book-style hot sauce challenge set built for gifting, game nights, and people who want the theater of a spicy progression.",
    features: ["12 small bottles", "Novelty book packaging", "Flavor variety", "Party format", "Small serving sizes"],
    pros: ["Memorable gift", "Good visual presentation", "Encourages comparison tasting"],
    cons: ["Novelty sets can vary in culinary depth", "Challenge framing needs responsible rules"],
    amazon: amazonProduct("B0100S716C"),
  },
  {
    name: "Fly By Jing Chili Crisp Starter Set",
    slug: "fly-by-jing-chili-crisp-starter-set",
    image: chiliOilImage,
    bestFor: "Best flavor-first chili crisp bundle",
    category: "Chili Crisp and Oils",
    weight: "Heat profile: savory, tingly, crunchy",
    capacity: "Verify sesame, soy, and nut cross-contact labeling",
    summary: "A premium chili crisp route for shoppers who care as much about texture, umami, and pantry usefulness as raw heat.",
    features: ["Multiple chili crisp styles", "Pantry-friendly jars", "Crunch and oil texture", "Noodle and dumpling use", "Giftable bundle"],
    pros: ["More culinary than stunt-focused", "Useful across many meals", "Good upgrade from basic hot sauce"],
    cons: ["Oil-based products need label checks", "Not the cheapest heat-per-ounce option"],
    amazon: amazonProduct("B0D5KG4DK6"),
  },
  {
    name: "SAUCE UP Extra Spicy Chili Crisp",
    slug: "sauce-up-extra-spicy-chili-crisp",
    image: chiliOilImage,
    bestFor: "Best single-jar extra spicy crisp",
    category: "Chili Crisp and Oils",
    weight: "Heat profile: crunchy, oily, extra spicy",
    capacity: "Check storage instructions and allergens",
    summary: "A single-jar option for people who want a bold chili crisp without committing to a larger bundle.",
    features: ["6 oz jar", "Crunchy texture", "Vegan positioning", "No MSG claim", "Made for topping meals"],
    pros: ["Easy pantry add-on", "Good for eggs, noodles, and bowls", "Flavor-first heat"],
    cons: ["Oil can separate", "Ingredient tolerance varies"],
    amazon: amazonProduct("B0B5XYFQ7H"),
  },
  {
    name: "KF Goodies Buldak Spicy Ramen Variety Box",
    slug: "buldak-spicy-ramen-variety-box",
    image: ramenImage,
    bestFor: "Best spicy ramen sampler",
    category: "Spicy Ramen",
    weight: "Heat profile: Korean spicy noodle variety",
    capacity: "Verify flavors, sodium, wheat, soy, and sesame",
    summary: "A variety box for spicy noodle fans who want to compare flavors and heat levels without buying full cases of each style.",
    features: ["Multiple Buldak-style flavors", "Individually sealed packs", "Gift box format", "Quick prep", "Flavor comparison"],
    pros: ["High search demand", "Good content category", "Easy comparison tasting"],
    cons: ["High sodium for many shoppers", "Common allergen ingredients need review"],
    amazon: amazonProduct("B0CVD2TVCH"),
  },
  {
    name: "Samyang Buldak Hot Chicken Ramen Variety Pack",
    slug: "samyang-buldak-hot-chicken-ramen-variety-pack",
    image: ramenImage,
    bestFor: "Best broad ramen heat flight",
    category: "Spicy Ramen",
    weight: "Heat profile: multiple Buldak flavors",
    capacity: "Verify pack count and flavor mix",
    summary: "A broader ramen flight for heat seekers who want to rank flavors, sauces, and spice levels across a familiar spicy noodle family.",
    features: ["Variety flavor pack", "Popular challenge format", "Shelf-stable", "Good for tasting notes", "Strong gift angle"],
    pros: ["Easy to serve in flights", "Good for content and parties", "Multiple heat experiences"],
    cons: ["Not ideal for low-sodium diets", "Ingredients vary by flavor"],
    amazon: amazonProduct("B0B1Z72SMJ"),
  },
  {
    name: "Elijah's Xtreme Hot Sauce Gift Pack",
    slug: "elijahs-xtreme-hot-sauce-gift-pack",
    image: wingsImage,
    bestFor: "Best flavor-forward hot sauce gift",
    category: "Gourmet Hot Sauce",
    weight: "Heat profile: mild to wild",
    capacity: "Compare current pack contents",
    summary: "A strong fit for shoppers who want a more culinary hot sauce gift set instead of pure challenge pain.",
    features: ["Sampler format", "Fruit and pepper blends", "Gift-ready", "Wing-friendly", "Flavor range"],
    pros: ["More versatile than novelty heat", "Good for cooks and grillers", "Works for repeat meals"],
    cons: ["Exact bundle can change", "Heat lovers may still want superhots"],
    amazon: amazonSearch("Elijah's Xtreme hot sauce gift pack"),
  },
  {
    name: "Spicy BBQ Rub and Wing Sauce Kit",
    slug: "spicy-bbq-rub-wing-sauce-kit",
    image: grillImage,
    bestFor: "Best grilling and wing-night category",
    category: "BBQ Heat",
    weight: "Heat profile: rubs, marinades, and wing sauces",
    capacity: "Check sugar, sodium, allergens, and serving size",
    summary: "A practical category for people who want heat that works on real food: wings, ribs, burgers, vegetables, tacos, and grilled chicken.",
    features: ["Dry rub options", "Wing sauces", "Marinade potential", "Party-friendly", "Heat layering"],
    pros: ["Broad use cases", "Good for BBQ shoppers", "Less stunt-oriented"],
    cons: ["Many products are high in sugar or sodium", "Heat claims are inconsistent"],
    amazon: amazonSearch("spicy BBQ rub wing sauce gift set"),
  },
  {
    name: "Spicy Tasting Recovery Pairings",
    slug: "spicy-tasting-recovery-pairings",
    image: milkImage,
    bestFor: "Best responsible tasting support",
    category: "Tasting Gear",
    weight: "Use case: palate relief and cleanup",
    capacity: "Plan before serving extreme heat",
    summary: "A tasting setup category for milk, yogurt, bread, gloves, tasting spoons, plates, napkins, and clear house rules before any spicy flight.",
    features: ["Dairy or non-dairy pairings", "Disposable tasting spoons", "Gloves", "Serving boards", "Napkins and cleanup"],
    pros: ["Encourages responsible hosting", "Useful for parties", "Reduces messy tasting setups"],
    cons: ["Not a substitute for medical care", "Allergen-friendly alternatives matter"],
    amazon: amazonSearch("hot sauce tasting spoons gloves milk powder party set"),
  },
];

export function getReviewProductBySlug(slug: string) {
  return reviewProducts.find((product) => product.slug === slug);
}

export function getProductDecision(product: ReviewProduct): ProductDecision {
  const category = product.category.toLowerCase();

  if (category.includes("superhot") || product.slug.includes("reaper") || product.slug.includes("challenge")) {
    return {
      bestWhen: ["You are buying for experienced heat fans.", "You will serve tiny portions and let people opt out.", "You want a structured tasting rather than reckless dares."],
      considerAnotherWhen: ["Children, people with relevant medical concerns, or spice-sensitive guests will be involved.", "The listing hides ingredients, allergen information, or pack contents."],
      setupTip: "Create house rules before tasting: small drops, no forced dares, water and food nearby, and stop if anyone feels unwell.",
      searchIntent: "hot sauce challenge set safe tasting guide",
    };
  }

  if (category.includes("ramen")) {
    return {
      bestWhen: ["You want a shelf-stable spicy food sampler.", "You will compare flavors as well as heat.", "You can verify sodium, wheat, soy, sesame, and flavor-specific allergens."],
      considerAnotherWhen: ["The shopper has food allergies or sodium restrictions.", "You want fresh-food heat rather than instant noodles."],
      setupTip: "Cook according to package instructions and split bowls for tastings instead of making one person finish an entire extreme pack.",
      searchIntent: "spicy ramen variety pack comparison",
    };
  }

  if (category.includes("chili crisp")) {
    return {
      bestWhen: ["You want heat with texture and pantry usefulness.", "You care about flavor, crunch, and meal versatility.", "You can verify oil, sesame, soy, peanut, or tree-nut labeling."],
      considerAnotherWhen: ["You dislike oil-based condiments.", "You need a clean-label allergen fit that the current listing does not clearly support."],
      setupTip: "Stir well, start with a small spoonful, and refrigerate or store exactly as the label requires.",
      searchIntent: "best chili crisp spicy oil gift set",
    };
  }

  return {
    bestWhen: ["You want practical spicy flavor for meals.", "You can verify ingredients and serving size.", "You prefer heat that works on food rather than pure novelty."],
    considerAnotherWhen: ["The product relies on vague extreme claims.", "Allergen, sodium, sugar, or ingredient details are unclear."],
    setupTip: "Taste on the side before coating a whole meal, then label heat levels for guests.",
    searchIntent: "spicy sauce gift set shopping guide",
  };
}

export function getRelatedProducts(product: ReviewProduct, limit = 3) {
  return reviewProducts
    .filter((candidate) => candidate.slug !== product.slug)
    .sort((a, b) => (a.category === product.category ? 0 : 1) - (b.category === product.category ? 0 : 1))
    .slice(0, limit);
}

export function getProductFaqs(product: ReviewProduct) {
  return [
    {
      question: `Who is ${product.name} best for?`,
      answer: `${product.name} is strongest for shoppers looking at ${product.bestFor.toLowerCase()}. Verify current ingredients, pack contents, seller details, and serving guidance before buying.`,
    },
    {
      question: `Does ${product.name} include an Amazon affiliate link?`,
      answer: "Yes. Flamathon may earn from qualifying purchases when readers use Amazon links. Product prices and availability can change.",
    },
    {
      question: `What should I check before serving ${product.name}?`,
      answer: "Check ingredient labels, allergens, heat level, sodium or sugar concerns, serving size, and whether every taster is comfortable opting out.",
    },
  ];
}
