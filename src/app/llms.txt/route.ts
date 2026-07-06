const siteUrl = "https://flameathon.com";

export function GET() {
  const body = `# Flamathon

Flamathon is an affiliate shopping and research guide for people comparing hot sauce challenge sets, superhot sauces, spicy ramen, chili crisp, BBQ heat, spicy gifts, and tasting supplies.

## Primary Pages
- Home and top picks: ${siteUrl}/
- Resource library: ${siteUrl}/resources
- FAQ: ${siteUrl}/faq
- Best hot sauce challenge sets: ${siteUrl}/best/best-hot-sauce-challenge-sets-for-parties
- Best ghost pepper sauces: ${siteUrl}/best/best-ghost-pepper-sauces
- Ghost pepper sauce category: ${siteUrl}/resources/topics/ghost-pepper-sauces
- Spicy glossary: ${siteUrl}/glossary
- Hot sauce tasting scorecard: ${siteUrl}/hot-sauce-tasting-scorecard
- Review methodology: ${siteUrl}/review-methodology
- Editorial policy: ${siteUrl}/editorial-policy
- Safety disclaimer: ${siteUrl}/safety-disclaimer
- Amazon affiliate disclosure: ${siteUrl}/amazon-disclosure
- Sitemap: ${siteUrl}/sitemap.xml

## Main Content Areas
- Hot sauce challenge sets, mild-to-wild flights, and spicy gifts
- Ghost pepper sauces, Carolina Reaper sauces, and superhot sauce comparisons
- Spicy ramen, chili crisp, BBQ rubs, wing sauces, and tasting supplies
- Safety-aware citations from Poison Control, FDA, USDA FSIS, CDC, FoodSafety.gov, and trend/market sources

## Important Notes
- Flamathon does not sell products directly.
- The site uses Amazon affiliate links and may earn from qualifying purchases.
- Product prices, availability, accessories, ratings, and specs can change; users should verify current details with the retailer and manufacturer.
- Spicy food content is general information and does not replace medical, dietary, allergy, legal, manufacturer, or other professional guidance.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
