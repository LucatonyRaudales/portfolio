# Tony R. Raudales — consulting portfolio

A responsive English-language portfolio for remote cloud, DevOps, web development, and security consulting. Built with the existing Next.js Pages Router, React, TypeScript, and Tailwind setup.

## Run locally

```sh
npm ci
npm run dev
```

## Production check

```sh
npm run build
npm run start
```

`npm run build` checks TypeScript and the configured Next.js lint rules before generating the production site. The npm lockfile is synchronized with the existing package manifest.

## Content and structure

- `pages/index.tsx`: commercial copy, nine project records, service descriptions, project filtering, accessible contribution disclosures, mobile navigation, and contact links.
- `styles/globals.css`: responsive visual system, focus styles, and reduced-motion support. Uses system fonts with no third-party font requests.
- `pages/_document.tsx`: document shell; page metadata belongs in the homepage Head.
- `public/`: retained portrait and project assets.
- `components/legacy/`: original portfolio components retained for reference, outside the public route directory.

Contact currently points to the existing LinkedIn profile. No new email address, booking service, backend form, analytics, or availability promise is invented. The résumé remains linked in the legacy introduction; the homepage is focused on consulting inquiries.

AWS certification and master's completion claims are omitted from the new homepage pending confirmation of their current status. Project contributions are based on the existing portfolio, without unverified outcome percentages or endorsements. Update these details only with accurate, publishable information.

## Verification

Check the homepage at desktop and mobile widths. Exercise all project filters, the show-all/show-fewer button, contribution disclosures, mobile menu open/close, and contact navigation. Confirm images load, internal anchors resolve, external links use the intended destination, and no horizontal overflow occurs.

## Deployment

The project retains its Next.js/Vercel setup. Review the pull-request preview before merging into the production branch. A framework/dependency major-version migration is separate from this visual and content redesign.
