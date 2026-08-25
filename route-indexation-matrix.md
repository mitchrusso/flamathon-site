# Flamathon Route Indexation Matrix

Production domain: `https://flameathon.com`

| Route pattern | Role | Index? | Sitemap? | Canonical pattern | Notes |
| --- | --- | --- | --- | --- | --- |
| `/` | Home, brand/entity, top affiliate picks | Yes | Yes | `/` | Primary conversion path to reviews and Amazon CTAs. |
| `/reviews/[slug]` | Individual buying checklist | Yes | Yes | `/reviews/[slug]` | Uses Article, FAQPage, and BreadcrumbList JSON-LD. Avoids Product schema because price, offers, ratings, and availability are retailer-controlled. |
| `/best/[slug]` | High-intent ranked guide | Yes | Yes | `/best/[slug]` | Uses Article, ItemList, FAQPage, and BreadcrumbList JSON-LD. |
| `/compare/[slug]` | Comparison intent page | Yes | Yes | `/compare/[slug]` | Uses WebPage and BreadcrumbList JSON-LD. |
| `/resources` | Resource/article hub | Yes | Yes | `/resources` | Searchable hub for published articles, topic hubs, glossary, and best guides. |
| `/resources/[slug]` | Published educational article | Yes when published | Yes when published | `/resources/[slug]` | Future articles return 404 and stay out of sitemap until published. |
| `/resources/topics/[slug]` | Topic hub | Yes | Yes | `/resources/topics/[slug]` | Supports topical authority and internal linking to guides/articles. |
| `/glossary` | Definitions and entity clarification | Yes | Yes | `/glossary` | Uses CollectionPage and DefinedTermSet JSON-LD. |
| `/hot-sauce-tasting-scorecard` | Utility lead-support page | Yes | Yes | `/hot-sauce-tasting-scorecard` | Searchable printable tool. |
| `/faq` | General FAQ and rich answer support | Yes | Yes | `/faq` | Uses FAQPage JSON-LD. |
| `/about` | Brand trust/entity page | Yes | Yes | `/about` | Defines site purpose and audience. |
| `/editorial-policy` | Trust policy | Yes | Yes | `/editorial-policy` | Important for affiliate transparency and AI-search context. |
| `/review-methodology` | Trust policy | Yes | Yes | `/review-methodology` | Explains ranking and review criteria. |
| `/safety-disclaimer` | Trust/safety page | Yes | Yes | `/safety-disclaimer` | Required context for spicy-food safety topics. |
| `/amazon-disclosure` | Affiliate disclosure | Yes | Yes | `/amazon-disclosure` | Supports compliance and trust. |
| `/privacy-policy` | Legal/privacy page | Yes | Yes | `/privacy-policy` | Linked from footer. |
| `/cookie-policy` | Legal/privacy page | Yes | Yes | `/cookie-policy` | Linked from footer. |
| `/terms-and-conditions` | Legal terms | Yes | Yes | `/terms-and-conditions` | Linked from footer. |
| `/accessibility-statement` | Accessibility trust page | Yes | Yes | `/accessibility-statement` | Linked from footer. |
| `/contact` | Contact/conversion support | Yes | Yes | `/contact` | Contact form uses Resend environment variables. |
| `/robots.txt` | Utility discovery | No page index | No | N/A | Allows crawling and points to sitemap. |
| `/sitemap.xml` | Utility discovery | No page index | N/A | N/A | Includes public, indexable, published URLs only. |
| `/llms.txt` | AI/GEO discovery | No page index | No | N/A | Factual summary for AI crawlers and agents. |
| `/.well-known/security.txt` and `/security.txt` | Security contact/trust | No page index | No | N/A | Returns public vulnerability disclosure contact. |
| blocked scan paths such as `/.env`, `/.git`, `/wp-admin`, `*.php` | Abuse mitigation | No | No | N/A | `src/proxy.ts` returns 404 with `X-Robots-Tag: noindex, nofollow`. |
