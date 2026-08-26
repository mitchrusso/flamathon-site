import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/resources",
  "/resources/how-to-host-a-hot-sauce-challenge-safely",
  "/resources/topics/ghost-pepper-sauces",
  "/best/best-ghost-pepper-sauces",
  "/reviews/yellowbird-classic-ghost-pepper-hot-sauce",
  "/compare/ghost-pepper-vs-carolina-reaper-sauce",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/amazon-disclosure",
];

test.describe("SEO route health", () => {
  for (const route of routes) {
    test(`${route} returns useful indexable HTML`, async ({ page }) => {
      const response = await page.goto(route);

      expect(response?.status()).toBe(200);
      await expect(page.locator("h1").first()).toBeVisible();
      await expect(page).toHaveTitle(/.+/);

      const description = await page.getAttribute('meta[name="description"]', "content");
      expect(description?.trim().length).toBeGreaterThan(50);

      const canonical = await page.getAttribute('link[rel="canonical"]', "href");
      if (route === "/") {
        expect(["https://flameathon.com", "https://flameathon.com/"]).toContain(canonical);
      } else {
        expect(canonical).toBe(`https://flameathon.com${route}`);
      }
    });
  }

  test("discovery files are public and aligned", async ({ request }) => {
    for (const route of ["/robots.txt", "/sitemap.xml", "/llms.txt", "/.well-known/security.txt", "/security.txt"]) {
      const response = await request.get(route);
      expect(response.status(), route).toBe(200);
    }

    const robots = await (await request.get("/robots.txt")).text();
    const sitemap = await (await request.get("/sitemap.xml")).text();
    const llms = await (await request.get("/llms.txt")).text();

    expect(robots).toContain("https://flameathon.com/sitemap.xml");
    expect(sitemap).toContain("https://flameathon.com/resources/how-to-host-a-hot-sauce-challenge-safely");
    expect(llms).toContain("Flamathon is an affiliate shopping and research guide");
  });

  test("structured data avoids unsupported product-rich-result requirements", async ({ page }) => {
    await page.goto("/reviews/yellowbird-classic-ghost-pepper-hot-sauce");

    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(jsonLd.join("\n")).toContain('"Article"');
    expect(jsonLd.join("\n")).toContain('"FAQPage"');
    expect(jsonLd.join("\n")).not.toContain('"Product"');
  });

  test("Amazon links use the Flameathon affiliate tag and safe external attributes", async ({ page }) => {
    await page.goto("/");

    const amazonLinks = page.locator('a[href*="amazon.com"]');
    const count = await amazonLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let index = 0; index < Math.min(count, 10); index += 1) {
      const link = amazonLinks.nth(index);
      await expect(link).toHaveAttribute("href", /[?&]tag=mitchellrusso-20/);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /sponsored/);
      await expect(link).toHaveAttribute("rel", /nofollow/);
      await expect(link).toHaveAttribute("rel", /noreferrer/);
    }
  });

  test("high-intent topic hubs expose category-specific heat picks", async ({ page }) => {
    await page.goto("/resources/topics/ghost-pepper-sauces");
    await expect(page.getByRole("heading", { name: "Start with products in this category." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Yellowbird Classic Ghost Pepper Hot Sauce" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Dave's Gourmet Ghost Pepper Naga Jolokia Hot Sauce" })).toBeVisible();

    const amazonLinks = page.locator('a[href*="amazon.com"]');
    await expect(amazonLinks.first()).toHaveAttribute("target", "_blank");
    await expect(amazonLinks.first()).toHaveAttribute("rel", /sponsored/);
    await expect(amazonLinks.first()).toHaveAttribute("href", /[?&]tag=mitchellrusso-20/);

    await page.goto("/resources/topics/hot-honey");
    await expect(page.getByRole("heading", { name: "Mike's Hot Honey Original and Extra Hot Combo" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Melinda's Ghost Hot Honey" })).toBeVisible();
  });

  test("analytics snippet is present in rendered HTML", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('script[src="https://app.rybbit.io/api/script.js"]')).toHaveAttribute("data-site-id", "59397d9e6976");
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("hamburger menu exposes primary navigation", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();

    const mobileNavigation = page.getByRole("navigation", { name: "Mobile navigation" });
    await expect(mobileNavigation).toBeVisible();
    await expect(mobileNavigation.getByRole("link", { name: "Resources" })).toBeVisible();
    await expect(mobileNavigation.getByRole("link", { name: "Contact" })).toBeVisible();
  });
});
