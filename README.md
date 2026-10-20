# Ubud Yoga Centre — Next.js

Redesign of ubudyogacentre.com. It uses the original photography, logo and colour palette, set entirely in Marcellus to match the logo's typeface.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Edit content

All copy and data live in `content/`. No component changes are needed for routine updates.

| File | What it controls |
|---|---|
| `content/site.ts` | Address, phone, email, links, nav, reviews, YouTube IDs |
| `content/classes.ts` | The 12 classes. Each one becomes `/<slug>/` automatically. |
| `content/schedule.ts` | Weekly timetable (also feeds "Today" on the homepage and "When it runs" on class pages) |
| `content/pricing.ts` | Passes, FAQs, studio policy |
| `content/cafe.ts` | Menu and cafe photos |
| `content/events.ts` | Events. Each one becomes `/event/<slug>/`. |

## Images

`public/images/` holds right-sized WebP files (max 1920 px wide). Originals are kept in
`image-originals/`, which is excluded from git and Vercel.

To add or replace photos, drop the new files (JPG/PNG/WebP) into `public/images/`, then run:

```bash
node scripts/optimize-images.mjs   # converts to WebP, moves originals aside, updates references
node scripts/image-sizes.mjs       # refreshes content/image-sizes.json
```

Use photos without text baked in, and at least 2400 px wide for full-width heroes.

To re-sync from the live site: `npm run fetch-content`.

## Stack

Next.js 15 (App Router, fully static), Tailwind CSS v4 and Motion. All motion respects the visitor's reduced-motion setting.
