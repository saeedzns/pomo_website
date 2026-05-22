# Pomodorum Website

Modern bilingual website for Pomodorum, a restaurant/pizzeria in Rome.

## Tech stack

- Astro
- TypeScript
- Tailwind CSS
- Local JSON menu data

## Run locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

## Menu editing

Menu content lives in:

- `src/data/menu.it.json`
- `src/data/menu.en.json`

Each category contains `items`. Prices can stay `null` until confirmed by the owner.

```json
{
  "id": "margherita",
  "name": "Margherita",
  "description": "Pomodoro, mozzarella, basilico",
  "price": 8.5,
  "allergens": ["glutine", "latte"],
  "tags": ["vegetariano"]
}
```

Use `null` for unknown prices:

```json
"price": null
```

## Business information to confirm

- Opening hours
- Exact full menu items, descriptions, allergens, and prices
- WhatsApp number, if any
- Instagram/Facebook links, if any
- Google review URL, if a direct review link is preferred
- Real restaurant, food, drink, and location photos
- Production domain before deployment

## Deployment

This project can be deployed to Vercel, Netlify, or Cloudflare Pages.

Recommended build settings:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
