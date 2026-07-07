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

const thoughtfullyChallengeImage = "/images/products/thoughtfully-hot-sauce-challenge-10-pack-optimized.jpg";
const whoopAssGiftSetImage = "/images/products/ghost-pepper-carolina-reaper-gift-set.jpg";
const assKickinBookImage = "/images/products/ass-kickin-hot-sauce-challenge-book.jpg";
const flyByJingImage = "/images/products/fly-by-jing-chili-crisp-starter-set.jpg";
const sauceUpImage = "/images/products/sauce-up-extra-spicy-chili-crisp.jpg";
const kfGoodiesRamenImage = "/images/products/kf-goodies-buldak-spicy-ramen-variety-box.jpg";
const samyangRamenImage = "/images/products/samyang-buldak-hot-chicken-ramen-variety-pack.jpg";
const elijahsImage = "/images/products/elijahs-xtreme-hot-sauce-gift-pack.jpg";
const bbqRubImage = "/images/products/spicy-bbq-rub-wing-sauce-kit.jpg";
const tastingSuppliesImage = "/images/products/spicy-tasting-recovery-pairings-optimized.jpg";
const torchbearerImage = "https://www.torchbearersauces.com/cdn/shop/files/Best_Sellers_Mini_Bottle_8-Pack_600x.jpg?v=1763578196";
const melindasChallengeImage = "https://melindas.com/cdn/shop/files/Pepper-sauce-challenge-gift-set.png?v=1707325563";
const mikesHotHoneyImage = "https://mikeshothoney.com/cdn/shop/products/Combo12oz.jpg?v=1620069730";
const flatironFourPepperImage = "https://www.flatironpepper.com/cdn/shop/products/Crop_210623_FlatIronPepperCo_38_d9a635e9-8f78-4e13-91de-81a0e2d0e977.jpg?v=1625156633";
const kosmosHotRubImage = "https://kosmosq.com/cdn/shop/files/kosmo-s-q-barbecue-rubs-dirty-bird-hot-rub-1186367442_600x.png?v=1755715741";
const famousDavesPicklesImage = "https://famousbbq.com/wp-content/uploads/2025/04/Pickle-Chips-SweetSpicy-24oz_Final-copy-scaled.jpg";
const yellowbirdGhostImage = "https://www.yellowbirdfoods.com/cdn/shop/files/YB_9OZ_ORGANIC_GHOST-PEPPER_PDP-HEADER-1_V2_2x_59606460-c843-40e4-9a92-8f43e3747eb6.png?v=1701581315";
const melindasGhostImage = "https://melindas.com/cdn/shop/products/5ozbhutghost.png?v=1667166680";
const melindasGhostWingImage = "https://melindas.com/cdn/shop/products/GhostPepperSauce.png?v=1674072983";
const melindasGhostTruffleImage = "https://melindas.com/cdn/shop/files/Melindas_GhostTruffle_db1056a2-1436-4d00-bfc9-38f61631225b.png?v=1704994470";
const melindasGhostHotHoneyImage = "https://melindas.com/cdn/shop/files/Melindas-Ghost-Hot-Honey.png?v=1705017494";
const davesGhostImage = "https://davesgourmet.com/cdn/shop/products/DAGPHS.png?crop=center&height=1200&v=1747667306&width=1200";
const elijahsGhostImage = "https://elijahsxtreme.com/cdn/shop/files/elijahs-xtreme-ghost-pepper-hot-sauce.webp?v=1775753793";
const bravadoGhostBlueberryImage = "https://bravadospice.com/cdn/shop/files/Ghost_Blueberry_Hero_H1S.png?v=1762910949";

export const reviewProducts: ReviewProduct[] = [
  {
    name: "Thoughtfully Hot Sauce Challenge 10 Pack",
    slug: "thoughtfully-hot-sauce-challenge-10-pack",
    image: thoughtfullyChallengeImage,
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
    image: whoopAssGiftSetImage,
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
    image: assKickinBookImage,
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
    image: flyByJingImage,
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
    image: sauceUpImage,
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
    image: kfGoodiesRamenImage,
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
    image: samyangRamenImage,
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
    image: elijahsImage,
    bestFor: "Best flavor-forward hot sauce gift",
    category: "Gourmet Hot Sauce",
    weight: "Heat profile: mild to wild",
    capacity: "Compare current pack contents",
    summary: "A strong fit for shoppers who want a more culinary hot sauce gift set instead of pure challenge pain.",
    features: ["Sampler format", "Fruit and pepper blends", "Gift-ready", "Wing-friendly", "Flavor range"],
    pros: ["More versatile than novelty heat", "Good for cooks and grillers", "Works for repeat meals"],
    cons: ["Exact bundle can change", "Heat lovers may still want superhots"],
    amazon: amazonProduct("B09G9HD2N5"),
  },
  {
    name: "Thoughtfully Gourmet Wild Western BBQ Sauce and Rubs Gift Set",
    slug: "spicy-bbq-rub-wing-sauce-kit",
    image: bbqRubImage,
    bestFor: "Best grilling and wing-night gift set",
    category: "BBQ Heat",
    weight: "Heat profile: rubs, marinades, and wing sauces",
    capacity: "Check sugar, sodium, allergens, and serving size",
    summary: "A practical BBQ sauce and rub set for people who want heat that works on real food: wings, ribs, burgers, vegetables, tacos, and grilled chicken.",
    features: ["Dry rub options", "BBQ sauce format", "Marinade potential", "Party-friendly", "Heat layering"],
    pros: ["Broad use cases", "Good for BBQ shoppers", "Less stunt-oriented"],
    cons: ["Many products are high in sugar or sodium", "Heat claims are inconsistent"],
    amazon: amazonProduct("B0B1QWLWZM"),
  },
  {
    name: "RimCereal Hot Sauce Tasting Party Cups and Spoons",
    slug: "spicy-tasting-recovery-pairings",
    image: tastingSuppliesImage,
    bestFor: "Best responsible tasting support",
    category: "Tasting Gear",
    weight: "Use case: palate relief and cleanup",
    capacity: "Plan before serving extreme heat",
    summary: "A practical party-supply kit for people who want small tasting portions, cleaner serving, and a more organized hot sauce flight.",
    features: ["Disposable tasting cups", "Small tasting spoons", "Party-friendly layout", "Useful for sauce flights", "Cleanup support"],
    pros: ["Encourages small portions", "Useful for parties", "Reduces messy tasting setups"],
    cons: ["Not a substitute for food-safety planning", "Hosts still need allergen-friendly alternatives"],
    amazon: amazonProduct("B0DZMLFW63"),
  },
  {
    name: "Torchbearer Sauces Best Sellers Mini Bottle Pack",
    slug: "torchbearer-best-sellers-mini-bottle-pack",
    image: torchbearerImage,
    bestFor: "Best flavor-forward mini hot sauce flight",
    category: "Gourmet Hot Sauce",
    weight: "Heat profile: mild through superhot",
    capacity: "Verify current bottle lineup and pepper labels",
    summary: "A more culinary tasting set for people who want respected hot sauce flavors in small bottles rather than a pure pain challenge.",
    features: ["Mini bottle format", "Includes milder and hotter sauces", "Gift-ready", "Recognizable specialty brand", "Good for wing and pizza tastings"],
    pros: ["Better flavor range than many novelty kits", "Small bottles help portion control", "Strong gift and party fit"],
    cons: ["Bottle lineup can change", "Still too intense at the top end for beginners"],
    amazon: amazonProduct("B07STX34WD"),
  },
  {
    name: "Melinda's Pepper Sauce Challenge Collection",
    slug: "melindas-pepper-sauce-challenge-collection",
    image: melindasChallengeImage,
    bestFor: "Best recognizable mild-to-superhot brand ladder",
    category: "Hot Sauce Challenge Sets",
    weight: "Heat profile: jalapeno to scorpion pepper",
    capacity: "Check current sauces, ingredients, and Scoville claims",
    summary: "A six-bottle challenge collection that lets tasters climb from approachable pepper sauces into much hotter territory with a brand people recognize.",
    features: ["Six 5 oz bottles", "Jalapeno through scorpion pepper", "Clear gift set format", "Useful after tasting", "Good for sauce-by-sauce notes"],
    pros: ["Known hot sauce brand", "Useful bottle sizes", "Better repeat-use potential than tiny novelty bottles"],
    cons: ["Superhot end needs tiny servings", "Challenge language still needs host rules"],
    amazon: amazonProduct("B09GGDLHSZ"),
  },
  {
    name: "Yellowbird Classic Ghost Pepper Hot Sauce",
    slug: "yellowbird-classic-ghost-pepper-hot-sauce",
    image: yellowbirdGhostImage,
    bestFor: "Best everyday squeeze-bottle ghost sauce",
    category: "Ghost Pepper Sauces",
    weight: "Heat profile: smoky ghost pepper condiment",
    capacity: "9.8 oz bottle; verify current ingredients and seller",
    summary: "A practical ghost pepper bottle for people who want smoky heat on tacos, eggs, burgers, bowls, grilled food, and party plates without buying a novelty challenge box.",
    features: ["Squeeze-bottle format", "Ghost pepper identity", "Tomato-garlic style base", "Good everyday condiment use", "Made-for-food positioning"],
    pros: ["Easy portion control", "More useful after the tasting night", "Strong fit for tacos, eggs, and burgers"],
    cons: ["Still too hot for mixed groups", "Current formula and seller details should be checked"],
    amazon: amazonProduct("B06XX4R3GX"),
  },
  {
    name: "Melinda's Ghost Pepper Hot Sauce",
    slug: "melindas-ghost-pepper-hot-sauce",
    image: melindasGhostImage,
    bestFor: "Best classic ghost pepper bottle",
    category: "Ghost Pepper Sauces",
    weight: "Heat profile: Bhut Jolokia with vegetable base",
    capacity: "5 oz bottle; verify current label and heat level",
    summary: "A straightforward ghost pepper sauce for experienced heat fans who want the pepper named clearly and enough savory base to use tiny amounts on real food.",
    features: ["Ghost pepper label focus", "Fresh-ingredient style positioning", "5 oz bottle", "Works as drops or thin streaks", "Good benchmark bottle"],
    pros: ["Clear category fit", "Easy to compare against habanero or reaper", "Useful for small-dose cooking"],
    cons: ["Not beginner-friendly", "Needs clear warnings at parties"],
    amazon: amazonProduct("B0F5X83BXB"),
  },
  {
    name: "Dave's Gourmet Ghost Pepper Naga Jolokia Hot Sauce",
    slug: "daves-gourmet-ghost-pepper-jolokia-sauce",
    image: davesGhostImage,
    bestFor: "Best intense drop-at-a-time ghost sauce",
    category: "Ghost Pepper Sauces",
    weight: "Heat profile: intense Naga Jolokia heat",
    capacity: "5 oz bottle; use very small amounts",
    summary: "A long-running extreme-heat pick for people who want a hotter, more caution-heavy ghost pepper bottle for wings, stews, chili, and tiny tasting drops.",
    features: ["Naga Jolokia naming", "Extreme-heat positioning", "5 oz bottle", "Drip-style use", "Good for chili and stew dosing"],
    pros: ["Strong ghost pepper identity", "Useful when a little heat should go far", "Recognizable extreme-sauce brand"],
    cons: ["Too intense for beginners", "Easy to overuse without portion rules"],
    amazon: amazonProduct("B001PQTYN2"),
  },
  {
    name: "Elijah's Xtreme Ghost Pepper Hot Sauce",
    slug: "elijahs-xtreme-ghost-pepper-hot-sauce",
    image: elijahsGhostImage,
    bestFor: "Best balanced ghost pepper gift bottle",
    category: "Ghost Pepper Sauces",
    weight: "Heat profile: ghost, habanero, garlic, lime",
    capacity: "5 oz bottle; verify current ingredients",
    summary: "A ghost pepper bottle that leans into flavor notes like garlic, lime, and fruit alongside serious heat, making it better for gift buyers who want more than raw burn.",
    features: ["Ghost and habanero pepper blend", "Garlic and lime flavor lane", "Gift-friendly bottle", "Food-first use", "Award-positioned brand"],
    pros: ["More flavor-forward than many stunt sauces", "Good for wings and grilled food", "Strong standalone review candidate"],
    cons: ["Still an advanced heat level", "Fruit/garlic profile may not fit every dish"],
    amazon: amazonProduct("B00OG1OUSM"),
  },
  {
    name: "Bravado Spice Ghost Pepper and Blueberry Hot Sauce",
    slug: "bravado-ghost-pepper-blueberry-hot-sauce",
    image: bravadoGhostBlueberryImage,
    bestFor: "Best fruit-forward ghost pepper sauce",
    category: "Ghost Pepper Sauces",
    weight: "Heat profile: sweet-tart berry with ghost pepper",
    capacity: "5 oz bottle; verify current ingredients",
    summary: "A distinctive ghost pepper sauce for shoppers who want fruit contrast instead of only vinegar and fire. It fits grilled chicken, vegetables, breakfast plates, and tasting flights.",
    features: ["Blueberry and ghost pepper pairing", "Fruit-forward flavor", "Small bottle format", "Good contrast sauce", "Works in comparison content"],
    pros: ["Memorable flavor lane", "Useful for food pairings", "Breaks up a shelf of similar red sauces"],
    cons: ["Fruit profile is not for every heat fan", "Still needs tiny tasting portions"],
    amazon: amazonProduct("B00XZZRI1Q"),
  },
  {
    name: "Melinda's Creamy Style Ghost Pepper Wing Sauce",
    slug: "melindas-creamy-ghost-pepper-wing-sauce",
    image: melindasGhostWingImage,
    bestFor: "Best ghost pepper wing sauce",
    category: "Ghost Pepper Wing Sauce",
    weight: "Heat profile: creamy ghost pepper wing heat",
    capacity: "12 oz bottle; verify current nutrition and allergens",
    summary: "A sauce for buyers who specifically want wings, wraps, sandwiches, shrimp, or chicken instead of a tiny-drop tasting bottle.",
    features: ["Wing-sauce format", "Ghost pepper plus supporting peppers", "Creamy-style texture", "Larger bottle", "Good for coating food"],
    pros: ["More obvious meal use", "Better for wing-night intent", "Larger format than tiny hot sauce bottles"],
    cons: ["Coating wings can make heat harder to control", "Check allergens and nutrition before serving"],
    amazon: amazonSearch("Melinda's Creamy Ghost Pepper Wing Sauce"),
  },
  {
    name: "Melinda's Ghost Pepper Black Truffle Hot Sauce",
    slug: "melindas-ghost-pepper-black-truffle-hot-sauce",
    image: melindasGhostTruffleImage,
    bestFor: "Best rich ghost pepper finishing sauce",
    category: "Ghost Pepper Sauces",
    weight: "Heat profile: ghost pepper with black truffle",
    capacity: "12 oz bottle; verify current ingredients",
    summary: "A richer ghost pepper option for fries, burgers, eggs, pizza, pasta, fried chicken, and shoppers who want a premium savory angle.",
    features: ["Black truffle flavor lane", "Ghost pepper heat", "Larger bottle", "Finishing-sauce use", "Good for fries and burgers"],
    pros: ["Distinctive premium positioning", "Useful beyond party challenges", "Adds variety to the Ghost Pepper page"],
    cons: ["Truffle flavor is polarizing", "Not the cleanest pick for simple pepper comparison"],
    amazon: amazonProduct("B0CJDW347Q"),
  },
  {
    name: "Melinda's Ghost Hot Honey",
    slug: "melindas-ghost-hot-honey",
    image: melindasGhostHotHoneyImage,
    bestFor: "Best sweet ghost pepper drizzle",
    category: "Ghost Hot Honey",
    weight: "Heat profile: honey sweetness with ghost pepper",
    capacity: "12 oz bottle; verify honey and sugar details",
    summary: "A crossover pick for pizza, fried chicken, BBQ, cheese boards, marinades, and people who want ghost pepper heat in a sweet drizzle rather than a vinegar sauce.",
    features: ["Hot honey format", "Ghost pepper infusion", "Squeeze or drizzle use", "Pizza and chicken pairing", "Giftable pantry angle"],
    pros: ["Expands beyond standard hot sauce", "Approachable serving format", "Strong recipe and party fit"],
    cons: ["Not vegan", "Added sugar and honey may not fit every buyer"],
    amazon: amazonSearch("Melinda's Ghost Hot Honey"),
  },
  {
    name: "Mike's Hot Honey Original and Extra Hot Combo",
    slug: "mikes-hot-honey-original-extra-hot-combo",
    image: mikesHotHoneyImage,
    bestFor: "Best sweet-heat pantry upgrade",
    category: "Hot Honey",
    weight: "Heat profile: sweet chili honey",
    capacity: "Verify honey source, bottle size, and dietary fit",
    summary: "A mainstream sweet-heat option for pizza, fried chicken, BBQ, cheese boards, cocktails, and people who want heat without a challenge format.",
    features: ["Original and hotter option", "Squeeze bottle format", "Pizza and chicken use", "Giftable pantry staple", "Easy drizzle control"],
    pros: ["Very broad food fit", "Good entry point for mild heat fans", "Supports many recipe/article angles"],
    cons: ["Not vegan", "Honey and sugar content may not fit every shopper"],
    amazon: amazonSearch("Mike's Hot Honey Original Extra Hot Combo"),
  },
  {
    name: "Flatiron Pepper Co Four Pepper Blend",
    slug: "flatiron-pepper-co-four-pepper-blend",
    image: flatironFourPepperImage,
    bestFor: "Best upgrade from ordinary red pepper flakes",
    category: "Pepper Flakes and Powders",
    weight: "Heat profile: arbol, ghost, habanero, jalapeno",
    capacity: "Use sparingly and keep away from eyes",
    summary: "A practical pantry product for people who want serious pepper flavor on pizza, eggs, ramen, pasta, grilled vegetables, and BBQ without opening a sauce bottle.",
    features: ["Dry pepper flake blend", "No sauce refrigeration", "Easy sprinkle format", "Everyday cooking use", "Stronger than standard flakes"],
    pros: ["Repeat-use pantry item", "Good for cooks and pizza fans", "Small amount goes a long way"],
    cons: ["Dry pepper dust can irritate eyes and skin", "Not ideal for shared tables without warnings"],
    amazon: amazonProduct("B075X2RFXM"),
  },
  {
    name: "Kosmos Q Hot Dirty Bird BBQ Rub",
    slug: "kosmos-q-hot-dirty-bird-bbq-rub",
    image: kosmosHotRubImage,
    bestFor: "Best spicy poultry and wing rub",
    category: "BBQ Heat",
    weight: "Heat profile: spicy-sweet BBQ seasoning",
    capacity: "Check sodium, sugar, and serving size",
    summary: "A grill-friendly rub for wings, chicken, turkey, pork, and smoked party food when people want heat built into the cook instead of only bottled sauce.",
    features: ["Dry BBQ rub", "Poultry-forward", "Works before grilling or smoking", "Sweet heat profile", "Useful for wing-night guides"],
    pros: ["Good BBQ category depth", "Pairs naturally with sauce recommendations", "Useful beyond one tasting event"],
    cons: ["Dry rubs can be sodium-heavy", "Heat level depends on quantity used"],
    amazon: amazonProduct("B00XZ1O4LW"),
  },
  {
    name: "Famous Dave's Sweet 'n Spicy Pickle Chips",
    slug: "famous-daves-sweet-spicy-pickle-chips",
    image: famousDavesPicklesImage,
    bestFor: "Best spicy sandwich and BBQ side",
    category: "Spicy Pickles and Snacks",
    weight: "Heat profile: sweet pickle heat",
    capacity: "Verify jar size, sugar, sodium, and spice level",
    summary: "A snack-and-side category that fits BBQ parties, burgers, sandwiches, and heat lovers who want something crunchy instead of another sauce.",
    features: ["Pickle chip format", "Sweet-spicy profile", "BBQ and burger pairing", "Party snack use", "Shelf-stable before opening"],
    pros: ["Good adjacent category", "Easy party food pairing", "Adds texture and snack intent"],
    cons: ["Sodium and sugar need label checks", "Heat is milder than superhot sauces"],
    amazon: amazonProduct("B0D2ZSGR6P"),
  },
];

export function getReviewProductBySlug(slug: string) {
  return reviewProducts.find((product) => product.slug === slug);
}

export function getProductDecision(product: ReviewProduct): ProductDecision {
  const category = product.category.toLowerCase();

  if (category.includes("ghost") || product.slug.includes("ghost-pepper")) {
    return {
      bestWhen: ["You are shopping for experienced heat fans.", "You want a clear ghost pepper identity rather than a vague extreme sauce.", "You will serve drops, thin streaks, or clearly labeled side portions."],
      considerAnotherWhen: ["The group includes spice-sensitive guests or children.", "The listing does not make ingredients, allergens, or bottle size clear.", "You need a mild table sauce for everyone."],
      setupTip: "Build a tasting ladder: habanero first, ghost pepper second, and Reaper only if people still want to continue.",
      searchIntent: "best ghost pepper sauce smoky hot sauce",
    };
  }

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

  if (category.includes("hot honey")) {
    return {
      bestWhen: ["You want sweet heat for pizza, chicken, BBQ, cheese boards, or cocktails.", "You are buying for people who like flavor more than extreme challenges.", "You can verify honey, sugar, and ingredient details."],
      considerAnotherWhen: ["The shopper avoids honey or added sugars.", "You need an extremely hot product rather than a versatile drizzle."],
      setupTip: "Serve hot honey on the side first, then drizzle lightly once you know how sweet and spicy the dish should be.",
      searchIntent: "best hot honey for pizza chicken bbq",
    };
  }

  if (category.includes("pepper flakes") || category.includes("powders")) {
    return {
      bestWhen: ["You want repeat-use pantry heat for pizza, eggs, noodles, pasta, or grilling.", "You prefer dry seasoning over oil or vinegar-based sauces.", "You can keep the flakes clearly labeled for guests."],
      considerAnotherWhen: ["Children may handle the shaker unsupervised.", "You need a mild table condiment for mixed groups."],
      setupTip: "Use dry pepper flakes sparingly and avoid touching your eyes after handling superhot blends.",
      searchIntent: "best hot pepper flakes ghost pepper pizza",
    };
  }

  if (category.includes("pickles") || category.includes("snacks")) {
    return {
      bestWhen: ["You want crunchy spicy sides for burgers, BBQ plates, sandwiches, or snack boards.", "You are building a party spread rather than a sauce flight.", "You can verify sodium, sugar, and serving size."],
      considerAnotherWhen: ["The shopper avoids pickled foods, vinegar, sodium, or added sugar.", "You need superhot intensity."],
      setupTip: "Serve spicy pickles separately from mild sides so guests can choose their own heat level.",
      searchIntent: "best spicy pickles for burgers bbq",
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
