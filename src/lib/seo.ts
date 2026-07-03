export const siteUrl = "https://flamathon.com";
export const siteName = "Flamathon";
export const defaultDescription =
  "A spicy food and hot sauce shopping guide for heat seekers comparing hot sauce challenge sets, chili crisp, spicy ramen, BBQ heat, and safer tasting gear.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
