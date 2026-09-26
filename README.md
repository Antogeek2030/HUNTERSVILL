# Huntersville AC Repair Experts

Astro + Cloudflare static site for a local AC repair business in Huntersville, NC.

Frontend structure and layout inspired by modern local service business sites (hero, services grid, testimonials, CTA, contact with map).

## Location

**16517 Northcross Dr, Huntersville, NC 28078, USA**

Map embed is included on the Contact page (OpenStreetMap + Google Maps links).

## Getting Started

```bash
npm install
npm run dev
```

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run deploy` | Deploy to Cloudflare Workers |

## Project Structure

- `src/pages/index.astro` — Home (hero, services, testimonials, CTA)
- `src/pages/contact.astro` — Contact form + map pinpointing the address
- `src/pages/service-areas.astro` — Service areas
- `src/pages/services/*` — Individual service pages
- `src/pages/blog/*` — Blog (from starter)
- `src/components/` — Header, Footer, BaseHead
- `src/consts.ts` — Site title, phone, address, coordinates

## Notes

- Phone number is a placeholder: `(704) 555-0199`
- Contact form is front-end only (demo alert); wire to your form backend or Cloudflare Workers as needed
- Keep blog content and Cloudflare adapter as-is from the starter
