# Flamathon SEO Launch Checklist

- Confirm production domain: `https://flameathon.com`
- Submit sitemap after deployment: `https://flameathon.com/sitemap.xml`
- Verify these live endpoints:
  - `https://flameathon.com/`
  - `https://flameathon.com/resources`
  - `https://flameathon.com/resources/how-to-host-a-hot-sauce-challenge-safely`
  - `https://flameathon.com/reviews/thoughtfully-hot-sauce-challenge-10-pack`
  - `https://flameathon.com/robots.txt`
  - `https://flameathon.com/llms.txt`
- Confirm scheduled articles remain hidden until their publish dates.
- Confirm Amazon links include `tag=mitchellrusso-20`.
- Confirm external affiliate/source links open in a new tab with `rel="sponsored nofollow noreferrer"` for affiliate links.
- Review `route-indexation-matrix.md` before adding new public routes.
- Run `npm run lint`, `npm run build`, and `npm run test:seo` before pushing SEO changes.
- Confirm the Rybbit snippet is present with `data-site-id="59397d9e6976"`.
- Confirm Cloudflare and Vercel security headers are still present after deployment.
