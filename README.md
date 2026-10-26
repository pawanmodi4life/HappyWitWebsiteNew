<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/8aea37a2-cac2-4526-b8a1-d9576d3af41a

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Existing-site AEO build

The production build keeps the current one-page website and pre-renders the same
React app into `dist/index.html`. The browser hydrates that markup to activate the
existing services, map, leadership and planner interactions. No API key or external
service is used by this build step.

```sh
npm ci
npm run lint
npm run build
npm run preview
```

Deploy the full `dist` directory using `npm run build` (not a direct `vite build`).
The output contains the homepage, `robots.txt` and `sitemap.xml`. The sitemap lists
only the live homepage; it must not include fragment links or unpublished routes.

Before promoting a deployment, verify that the raw homepage HTML contains its H1,
business description, six buyer questions, contact information, one canonical link,
one meta description and the Organization JSON-LD. Confirm the robots and sitemap
URLs return 200 and that the interactive planner still works without hydration errors.

The Organization data intentionally excludes unverified ownership, awards, ratings,
clients and results. Visible FAQs help buyers; no FAQ rich-result or AI-citation
eligibility is claimed. Search Console and enquiry data are needed to measure any
effect after publication.
