# Pomodorum Restaurant Website — AI Agent TODO

## Goal

Build and deploy a modern, fast, mobile-first website for **Pomodorum**, a restaurant/pizzeria in Rome, replacing or improving the current digital-menu-only experience.

The website must help customers quickly understand:

- Where the restaurant is
- What it sells
- How to see the menu
- How to call / navigate / contact
- Why they should choose this restaurant
- How to leave a review or open the Google profile

This is not only a visual website. It should be useful for real customers, tourists, and staff.

---

## Reference Links

Use these as source references during development:

- Current menu website: https://www.leggimenu.it/menu/pomodorum
- Google business / address link: https://share.google/0A8mAU2wUWbzrzJQD

Known public info from current site:

- Restaurant name: **Pomodorum**
- Address shown on menu site: **Via Cavour 153, Roma, 00184, RM**
- Phone shown on menu site: **+39 0683978285**
- Current menu categories include:
  - Pasta
  - Pinse Rosse
  - Insalate
  - Bevande
  - Dessert
- Current menu supports multiple languages:
  - English
  - Italian
  - Spanish
  - French
  - German
  - Polish

Before final deployment, verify all business information with the owner.

---

## Recommended Stack

Use this stack unless there is a strong reason not to:

- Framework: **Astro**
- Styling: **Tailwind CSS**
- Language: **TypeScript**
- Data storage for menu: local JSON or YAML files
- Hosting: **Vercel**, **Netlify**, or **Cloudflare Pages**
- Forms: no backend at first; use phone, WhatsApp, email, and Google Maps links
- Images: optimized local images in `public/images` or `src/assets`

Reason:
Astro is fast, simple, SEO-friendly, and perfect for a restaurant website. Do not overbuild with a heavy backend in version 1.

---

## Important Rule

Do not create a complicated system in version 1.

Version 1 should be:

- Beautiful
- Fast
- Easy to update
- Mobile-friendly
- Bilingual at minimum: Italian + English
- Deployed online

Do not add online payment, login, full CMS, admin dashboard, or inventory backend yet.

---

# Phase 1 — Project Setup

## 1. Create the project

- [ ] Create a new Astro project.
- [ ] Add Tailwind CSS.
- [ ] Add TypeScript support.
- [ ] Set up clean folder structure.
- [ ] Add ESLint / Prettier if reasonable.
- [ ] Create a Git repository.
- [ ] Make the first commit.

Suggested structure:

```txt
pomodorum-website/
  public/
    images/
    favicon/
  src/
    components/
      layout/
      sections/
      ui/
    data/
      menu.it.json
      menu.en.json
      site.ts
    layouts/
      BaseLayout.astro
    pages/
      index.astro
      menu.astro
      gallery.astro
      about.astro
      contact.astro
      it/
        index.astro
        menu.astro
      en/
        index.astro
        menu.astro
    styles/
      global.css
  astro.config.mjs
  tailwind.config.mjs
  package.json
  README.md
```

---

# Phase 2 — Site Identity and Content

## 2. Create central site configuration

Create `src/data/site.ts`.

It should contain:

- [ ] Restaurant name
- [ ] Short tagline
- [ ] Address
- [ ] Phone number
- [ ] Google Maps link
- [ ] Current menu link
- [ ] Opening hours placeholder
- [ ] Social links placeholder
- [ ] SEO title
- [ ] SEO description
- [ ] Default language
- [ ] Supported languages

Example:

```ts
export const site = {
  name: "Pomodorum",
  taglineIt: "Pizzeria e cucina italiana nel cuore di Roma",
  taglineEn: "Italian pizza and cuisine in the heart of Rome",
  address: "Via Cavour 153, Roma, 00184, RM",
  phone: "+39 0683978285",
  googleMapsUrl: "https://share.google/0A8mAU2wUWbzrzJQD",
  currentMenuUrl: "https://www.leggimenu.it/menu/pomodorum",
  whatsappUrl: "",
  instagramUrl: "",
  facebookUrl: "",
  openingHours: {
    it: "Da verificare",
    en: "To be confirmed"
  }
};
```

Important:

- [ ] Do not invent opening hours.
- [ ] Do not invent WhatsApp/social links.
- [ ] Add placeholders only if exact data is missing.
- [ ] Add TODO comments where owner confirmation is needed.

---

# Phase 3 — Pages to Build

## 3. Home page

Build a strong homepage.

Sections:

### Hero section

- [ ] Large restaurant name
- [ ] Short headline
- [ ] Short subtitle
- [ ] Primary CTA: “Vedi il menù” / “View menu”
- [ ] Secondary CTA: “Indicazioni” / “Get directions”
- [ ] Background image or warm gradient placeholder
- [ ] Mobile-first design

Suggested Italian copy:

```txt
Pomodorum
Pinsa, pasta e sapori italiani nel cuore di Roma.
Scopri il nostro menù, raggiungici in Via Cavour o chiamaci per informazioni.
```

Suggested English copy:

```txt
Pomodorum
Pinsa, pasta, and Italian flavors in the heart of Rome.
Explore our menu, find us on Via Cavour, or call us for information.
```

### Quick action buttons

- [ ] Call button
- [ ] Google Maps button
- [ ] Menu button
- [ ] Review button / Google profile button

### Menu highlights

- [ ] Show cards for Pasta, Pinse Rosse, Insalate, Bevande, Fritti
- [ ] Each card links to menu section


### Why visit us

- [ ] Central Rome location
- [ ] Fast and clear digital menu
- [ ] Italian food and drinks
- [ ] Tourist-friendly language support
- [ ] Free WIFI
- [ ] about 10 min food ready
- [ ] affordable price for a delicious experience

### Location preview

- [ ] Address
- [ ] Google Maps embed or button
- [ ] “Near Termini / Colosseum area / Cavour / Monti” only if verified; otherwise do not claim exact landmarks.

### Footer

- [ ] Address
- [ ] Phone
- [ ] Menu link
- [ ] Google Maps link
- [ ] Social placeholders

---

## 4. Menu page

The website must have its own clean menu page, inspiring from Leggimenu.

Build menu data files:

- [ ] `src/data/menu.it.json`
- [ ] `src/data/menu.en.json`

Initial categories:

```json
[
  {
    "category": "Pasta",
    "items": []
  },
  {
    "category": "Pinse Rosse",
    "items": []
  },
  {
    "category": "Insalate",
    "items": []
  },
  {
    "category": "Bevande",
    "items": []
  },
  {
    "category": "Fritti",
    "items": []
  }
]
```

Menu page requirements:

- [ ] Category navigation at top
- [ ] Search/filter input
- [ ] Clean item cards
- [ ] Price field
- [ ] Description field
- [ ] Allergens field
- [ ] Vegetarian/spicy/popular tags if data exists
- [ ] Button linking to current full menu website
- [ ] Owner-friendly JSON data format
- [ ] No fake menu items unless clearly marked as placeholder

For drinks, include placeholders from visible inventory only if exact menu price is known. Otherwise mark price as `null` and display “Ask staff” or hide price until confirmed.

Visible drink product examples from photos:

- Still water
- Grazia sparkling water
- Coca-Cola
- Sprite
- Fanta
- San Benedetto tea
- San Pellegrino cans
- Red Bull
- Peroni
- Birra Moretti
- Prosecco
- Spritz
- White wine
- Red wine

Important:

- [ ] Do not publish prices without owner confirmation.
- [ ] If using current menu prices, verify them manually from the website.

---

## 5. Gallery page

Build a gallery page that can use real photos later.

- [ ] Create responsive masonry/grid gallery
- [ ] Add categories:
  - Food
  - Drinks
  - Restaurant
  - Location
- [ ] Use placeholder images until real restaurant photos are provided
- [ ] Optimize images
- [ ] Add alt text
- [ ] Make layout work well on mobile

Do not use low-quality or misleading stock photos in the final version unless the owner approves.

---

## 6. About page

Build a simple and trustworthy About page.

Sections:

- [ ] Short story of the restaurant
- [ ] What customers can expect
- [ ] Food style: Italian, pinsa, pasta, drinks
- [ ] Tourist-friendly note
- [ ] CTA to menu and directions

Do not invent a long historical story.

Use safe placeholder copy:

Italian:

```txt
Pomodorum è un ristorante/pizzeria a Roma, in Via Cavour 153. Offriamo piatti italiani, pinse, pasta, fritti, insalate e bevande in un ambiente semplice e accogliente.
```

English:

```txt
Pomodorum is a restaurant and pizzeria in Rome, located at Via Cavour 153. We serve Italian dishes, pinsa, pasta, fried starters, salads, and drinks in a simple and welcoming setting.
```

---

## 7. Contact page

Build a contact page with:

- [ ] Address
- [ ] Phone button
- [ ] Google Maps button
- [ ] Embedded Google Map if possible
- [ ] Current menu link
- [ ] Review link / Google profile link
- [ ] Opening hours placeholder
- [ ] Contact form only if an email/form service is configured

Important:

- [ ] If no form backend exists, do not create a fake contact form.
- [ ] Prefer direct actions: Call, Directions, Menu.

---

# Phase 4 — Language Support

## 8. Add bilingual support

Minimum required:

- [ ] Italian version
- [ ] English version

Nice to have later:

- [ ] Spanish
- [ ] French
- [ ] German
- [ ] Polish

Implementation options:

- Use route folders: `/it` and `/en`
- Default homepage can redirect or show language selector
- Keep copy in `src/data/i18n.ts` or separate JSON files

Requirements:

- [ ] Language switcher in navbar
- [ ] Correct `lang` attribute
- [ ] SEO alternate language links if reasonable
- [ ] Italian should be the default for local customers
- [ ] English should be clear for tourists

Do not machine-translate final copy blindly. Use simple, natural restaurant language.

---

# Phase 5 — Design Requirements

## 9. Visual style

Target style:

- Warm
- Italian
- Clean
- Modern
- Tourist-friendly
- Not too luxury
- Not childish
- Not overloaded

Suggested design direction:

- Background: warm cream / off-white
- Accent: tomato red
- Secondary: basil green or dark olive
- Text: dark charcoal
- Cards: white or light cream
- Buttons: strong red / dark green
- consider a grid view of the menu items small images and below it there is a wooden table that user can drag and drop each item and it become large and appears the ingridients an ddetails and price of that item.

Do not use a generic tech-startup look. This is a restaurant.

## 10. Components to create

Create reusable components:

- [ ] `Navbar.astro`
- [ ] `Footer.astro`
- [ ] `Button.astro`
- [ ] `SectionHeading.astro`
- [ ] `MenuCategory.astro`
- [ ] `MenuItemCard.astro`
- [ ] `LanguageSwitcher.astro`
- [ ] `ContactButtons.astro`
- [ ] `GalleryGrid.astro`
- [ ] `SEO.astro`

---

# Phase 6 — SEO

## 11. Local SEO basics

Add:

- [ ] SEO title
- [ ] SEO description
- [ ] Open Graph tags
- [ ] Twitter card tags
- [ ] Canonical URLs
- [ ] Restaurant schema.org JSON-LD
- [ ] LocalBusiness / Restaurant structured data
- [ ] Address structured data
- [ ] Phone structured data
- [ ] Menu URL structured data

Example SEO title:

```txt
Pomodorum Roma | Pizzeria, Pinsa e Cucina Italiana in Via Cavour
```

Example SEO description:

```txt
Pomodorum è una pizzeria e ristorante italiano a Roma, in Via Cavour 153. Scopri il menù, chiama il ristorante o apri le indicazioni su Google Maps.
```

English SEO title:

```txt
Pomodorum Rome | Pizza, Pinsa and Italian Food on Via Cavour
```

English SEO description:

```txt
Pomodorum is an Italian restaurant and pizzeria in Rome at Via Cavour 153. View the menu, call the restaurant, or get directions on Google Maps.
```

---

# Phase 7 — Performance and Accessibility

## 12. Performance requirements

- [ ] Lighthouse Performance score target: 90+
- [ ] Optimize all images
- [ ] Lazy-load gallery images
- [ ] Use responsive images
- [ ] Avoid heavy JavaScript
- [ ] Avoid unnecessary animation libraries
- [ ] Keep CSS clean
- [ ] Make the site fast on mobile data

## 13. Accessibility requirements

- [ ] Semantic HTML
- [ ] Keyboard-friendly navigation
- [ ] Visible focus states
- [ ] Good color contrast
- [ ] Alt text for images
- [ ] Buttons and links must have clear labels
- [ ] Menu categories should be reachable by anchor links
- [ ] Do not use text inside images for important info

---

# Phase 8 — Data and Menu Management

## 14. Easy menu updates

The owner/staff should be able to update the menu without touching complex code.

Use simple data files:

```json
{
  "id": "margherita",
  "name": "Margherita",
  "description": "Pomodoro, mozzarella, basilico",
  "price": 8.5,
  "category": "Pinse Rosse",
  "allergens": ["glutine", "latte"],
  "tags": ["vegetariano"]
}
```

Tasks:

- [ ] Create sample data structure
- [ ] Document how to edit menu items
- [ ] Add `README.md` instructions
- [ ] Make prices optional
- [ ] Make allergens optional
- [ ] Make tags optional
- [ ] Keep Italian and English data separate or use one multilingual object

---

# Phase 9 — Google Maps and Review Flow

## 15. Google profile integration

Use the provided Google link:

```txt
https://share.google/0A8mAU2wUWbzrzJQD
```

Tasks:

- [ ] Add “Get directions” button
- [ ] Add “Open in Google Maps” button
- [ ] Add “Leave a review” button if the link supports it
- [ ] Verify the correct Google Business Profile URL manually
- [ ] If exact review URL is not available, link to the Google business page

Do not claim ratings or review counts unless verified live.

---

# Phase 10 — Deployment

## 16. Prepare for deployment

- [ ] Push project to GitHub
- [ ] Add clear `README.md`
- [ ] Add `.env.example` only if needed
- [ ] Deploy to Vercel / Netlify / Cloudflare Pages
- [ ] Set production domain later
- [ ] Test production build
- [ ] Test all links after deployment

Commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 17. Deployment checklist

Before final handoff:

- [ ] Homepage loads correctly
- [ ] Menu page works
- [ ] Contact buttons work
- [ ] Google Maps link works
- [ ] Phone link works on mobile
- [ ] Language switcher works
- [ ] No broken images
- [ ] No fake prices
- [ ] No fake opening hours
- [ ] Site works on iPhone/Android sizes
- [ ] Lighthouse check completed
- [ ] Owner confirms business info

---

# Phase 11 — Future Features, Not Version 1

Do not build these now unless specifically requested after version 1 is deployed.

Possible version 2 features:

- [ ] Admin panel for menu editing
- [ ] Google Sheets-driven menu
- [ ] Inventory/order page for staff
- [ ] Weekly drink order tracker
- [ ] Google Reviews analysis dashboard
- [ ] QR code menu page
- [ ] WhatsApp reservation flow
- [ ] Multi-language expansion: Spanish, French, German
- [ ] Blog or local SEO pages
- [ ] Online ordering
- [ ] Reservation system

Priority after launch:

1. Better photos
2. Real menu data
3. Google Business optimization
4. Review CTA
5. Google Sheets menu/inventory integration

---

# Agent Instructions

When working on this project:

- [ ] Think like a restaurant customer first, not like a software engineer.
- [ ] Keep the site simple and fast.
- [ ] Ask before inventing business information.
- [ ] Use placeholders clearly where data is missing.
- [ ] Build reusable components.
- [ ] Keep mobile design excellent.
- [ ] Keep the code easy for a beginner/intermediate developer to maintain.
- [ ] Commit changes in logical steps.
- [ ] Run build before marking the task complete.
- [ ] Explain what was created and what still needs owner confirmation.

---

# Definition of Done

The first version is complete when:

- [ ] Website is deployed online.
- [ ] It has Italian and English versions.
- [ ] It includes Home, Menu, Gallery, About, and Contact pages.
- [ ] It has correct restaurant name, address, phone, and Google Maps link.
- [ ] It links to the existing menu website.
- [ ] It is mobile-friendly.
- [ ] It has local SEO metadata.
- [ ] It loads fast.
- [ ] It does not contain fake opening hours, fake prices, or fake social links.
- [ ] The owner can review and request edits easily.

---

# Suggested First Prompt for Codex / Copilot Agent

Use this prompt to start implementation:

```txt
You are building a modern restaurant website for Pomodorum in Rome.

Use Astro + Tailwind CSS + TypeScript.

Build a mobile-first bilingual website in Italian and English with:
- Home page
- Menu page
- Gallery page
- About page
- Contact page
- Language switcher
- SEO metadata
- Restaurant structured data
- Reusable components
- Menu data stored in JSON
- Google Maps / call / current menu buttons

Reference:
Current menu website: https://www.leggimenu.it/menu/pomodorum
Google link: https://share.google/0A8mAU2wUWbzrzJQD

Known info:
Name: Pomodorum
Address: Via Cavour 153, Roma, 00184, RM
Phone: +39 0683978285
Current menu categories: Pasta, Pinse Rosse, Insalate, Bevande, Fritti

Do not invent opening hours, prices, social links, or historical details.
Use clear TODO comments where owner confirmation is needed.
Implement the first working version, run the build, fix errors, and explain what files were created.
```
