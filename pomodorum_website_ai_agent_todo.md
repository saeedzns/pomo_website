# Pomodorum Roma Website — Detailed TODO for AI Agent

## 0. Main goal
Build a modern, elegant, animated restaurant website for **Pomodorum Roma** using the clean food-hero animation style from the provided reference video, but adapted to Pomodorum’s real menu, real prices, real ingredients, and existing visual identity.

The website should feel:
- Modern and clean, not like an old black menu board.
- Warm, Italian, appetizing, and fast.
- Professional enough for tourists and locals.
- Playful only through the tomato Roman mascot, not through the whole UI.

Food must be the hero. The mascot supports the brand; it must not dominate the page.

---

## 1. Design direction

### 1.1 Reference style to follow
Use the uploaded reference animation style:
- Light/cream background.
- Big hero food image in the center/right.
- Large bold headline on the left.
- Product cards on the right side.
- Orange/red accent buttons.
- Smooth food carousel transitions.
- Minimal navigation.
- Clean modern spacing.
- Subtle shadows and depth.

### 1.2 Pomodorum adaptation
Do not copy the reference exactly. Adapt it with:
- Pomodorum logo/brand name.
- Italian tricolor accent line: green, white, red.
- Real food images generated for the restaurant.
- Tomato Roman mascot as a small interactive guide.
- Real menu data and prices from the uploaded menu images.
- Clear CTAs: **View Menu**, **Get Directions**, **Order / Contact**.

### 1.3 Visual personality
Use this personality:
- Premium but casual.
- Italian street-food restaurant feel.
- Friendly and direct.
- Food-first.
- Mobile-friendly.

Avoid:
- Heavy black background for the whole homepage.
- Overcrowded menu-board style on the homepage.
- Too many fonts.
- Excessive mascot animation.
- Long loading screens.

---

## 2. Tech stack recommendation

Use one of these stacks:

### Preferred
- **Next.js / React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for hero/menu animation
- **Rive or Lottie** for mascot animation if available

### Acceptable alternative
- React + Vite + TypeScript + Tailwind + Framer Motion

### Do not use
- Heavy animation libraries for simple fades/slides.
- Huge unoptimized PNGs directly on page load.
- Autoplay video as the main hero unless compressed very well.

---

## 3. Color system

Create CSS variables or Tailwind theme tokens:

```css
:root {
  --color-bg: #f7f3ec;
  --color-bg-soft: #fff8ef;
  --color-text: #14110f;
  --color-muted: #6f675f;
  --color-red: #d6281f;
  --color-tomato: #ef4b2a;
  --color-orange: #f26a21;
  --color-green: #17853b;
  --color-cream: #fff3df;
  --color-black: #0c0b09;
  --color-card: #ffffff;
  --shadow-soft: 0 18px 50px rgba(20, 17, 15, 0.14);
}
```

Use mostly cream/white background with tomato-orange accents.
Use black only for text, footer, and small contrast sections.

---

## 4. Typography

Use a clean pairing:

### Headline font
Use a bold elegant serif or display font, for example:
- Playfair Display
- Cormorant Garamond
- Fraunces

### Body/UI font
Use a modern sans-serif:
- Inter
- Manrope
- Poppins

Do not use the old menu-board script font for the whole website. It can be used sparingly as a decorative label only.

---

## 5. Homepage structure

### 5.1 Header
Create a clean sticky or semi-transparent header.

Header items:
- Logo / text: **POMODORUM ROMA**
- Nav links:
  - Home
  - Menu
  - Pinsa
  - Pasta
  - Location
  - Reviews
- CTA button: **Get Directions**

Mobile:
- Logo left.
- Hamburger menu right.
- CTA inside mobile menu.

### 5.2 Hero section
Use the reference animation structure.

Hero content:

Headline:
```text
Pasta Fresca
& Pinsa Romana
```

Subtitle:
```text
Fresh Roman pasta, pinsa, supplì and tiramisù in Rome. No service charge.
```

Buttons:
- Primary: **View Menu**
- Secondary: **Get Directions**

Hero visual:
- Main large food image carousel.
- Start with a strong pinsa image.
- Rotate through: Pinsa, Carbonara, Lasagna/Cannelloni, Tiramisù, Supplì.
- Right-side product cards show real names and prices.
- Mascot appears small after main hero loads.

### 5.3 First 5-second animation timeline
Implement using Framer Motion.

```text
0.0s–0.4s: cream background fades in.
0.4s–0.9s: Pomodorum logo appears with a subtle scale and opacity animation.
0.9s–1.5s: Italian tricolor underline animates under logo or headline.
1.2s–2.0s: headline reveals line by line with fade-up and slight blur removal.
2.0s–2.8s: main hero food image slides in from right/bottom, scale 0.92 to 1.00, rotate -2deg to 0deg.
2.8s–3.5s: product cards appear one by one on the right.
3.5s–4.3s: CTA buttons become active and slightly highlighted.
4.3s–5.0s: tomato mascot appears small in bottom-right, waves once, then idles.
```

After 5 seconds:
- Stop big entrance animations.
- Keep only subtle food floating/parallax and mascot blink/idle.

Respect `prefers-reduced-motion`:
- Disable entrance motion.
- Show static layout instantly.

### 5.4 Featured categories section
Create four cards:
- Pasta Fresca
- Pinsa Romana
- Supplì & Sides
- Desserts & Salads

Each card:
- Image
- Short description
- Button: View items

### 5.5 Menu preview section
Show tabs:
- All
- Pasta Fresca
- Pinsa Romana
- Salads
- Sides
- Dessert

Use real menu data from section 8 below.

Each product card:
- Image
- Name
- Ingredients
- Price
- Badges, when relevant:
  - Spicy
  - Very Spicy
  - Vegetarian
  - Popular

### 5.6 Restaurant trust section
Include:
- Google Reviews visual area
- Tripadvisor Travelers’ Choice Awards 2024
- No service charge
- Biodegradable plates/forks sustainability message

Do not use fake review numbers unless the owner confirms them.

### 5.7 Location section
Include:
- Address placeholder or actual Google Maps embed/link.
- Opening hours placeholder until confirmed.
- Button: Get Directions.
- Button: Call / WhatsApp, if phone number is available.

### 5.8 Footer
Include:
- Logo
- Short description
- Menu links
- Google Maps link
- Social links if available
- Legal/privacy links if needed

---

## 6. Required image asset strategy

### 6.1 File format
Use:
- `.webp` for website display whenever possible.
- `.png` only when transparency is required.
- Keep original high-resolution PNGs in `/public/images/originals/`.
- Use optimized web images in `/public/images/menu/`.

### 6.2 Image naming convention
Use lowercase kebab-case:

```text
/public/images/menu/pinsa-margherita.webp
/public/images/menu/pinsa-4-formaggi.webp
/public/images/menu/pinsa-calabrese.webp
/public/images/menu/pinsa-crostino.webp
/public/images/menu/pinsa-guanciale.webp
/public/images/menu/pinsa-funghi.webp
/public/images/menu/pinsa-italia.webp
/public/images/menu/pinsa-roma.webp
/public/images/menu/pasta-carbonara.webp
/public/images/menu/pasta-amatriciana.webp
/public/images/menu/pasta-arrabbiata.webp
/public/images/menu/pasta-aglio-olio.webp
/public/images/menu/pasta-cacio-pepe.webp
/public/images/menu/cannelloni.webp
/public/images/menu/caprese.webp
/public/images/menu/tiramisu.webp
/public/images/menu/suppli.webp
```

### 6.3 Optimization rules
- Max display width for product images: 900–1200 px.
- Use lazy loading for menu grid images.
- Preload only the first hero image.
- Do not load all full-resolution menu images above the fold.
- Use Next.js `<Image />` if using Next.js.

---

## 7. Components to build

### 7.1 Core layout components
- `Header.tsx`
- `Footer.tsx`
- `SectionTitle.tsx`
- `CTAButton.tsx`
- `Container.tsx`

### 7.2 Hero components
- `HeroSection.tsx`
- `HeroFoodCarousel.tsx`
- `HeroProductCard.tsx`
- `MascotGuide.tsx`
- `ItalianTricolorLine.tsx`

### 7.3 Menu components
- `MenuSection.tsx`
- `MenuTabs.tsx`
- `MenuCard.tsx`
- `MenuCategory.tsx`
- `DishModal.tsx`
- `SpicyBadge.tsx`
- `VegetarianBadge.tsx`

### 7.4 Support sections
- `FeaturedCategories.tsx`
- `TrustBadges.tsx`
- `LocationSection.tsx`
- `ReviewsTeaser.tsx`
- `SustainabilityNote.tsx`

---

## 8. Real menu data

Use this data exactly unless the restaurant owner changes the menu.

### 8.1 Pinsa Romana

```ts
export const pinsaItems = [
  {
    id: 'pinsa-margherita',
    category: 'Pinsa Romana',
    name: 'Margherita',
    ingredients: 'Tomato sauce and mozzarella cheese',
    price: 9.00,
    priceLabel: '€9,00',
    image: '/images/menu/pinsa-margherita.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'pinsa-4-formaggi',
    category: 'Pinsa Romana',
    name: '4 Formaggi',
    ingredients: 'Mozzarella, brie, gorgonzola and parmigiano',
    price: 10.00,
    priceLabel: '€10,00',
    image: '/images/menu/pinsa-4-formaggi.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'pinsa-calabrese',
    category: 'Pinsa Romana',
    name: 'Calabrese',
    ingredients: 'Tomato sauce, mozzarella and spicy salame',
    price: 9.50,
    priceLabel: '€9,50',
    image: '/images/menu/pinsa-calabrese.webp',
    badges: ['Spicy']
  },
  {
    id: 'pinsa-crostino',
    category: 'Pinsa Romana',
    name: 'Crostino',
    ingredients: 'Tomato sauce, mozzarella and ham',
    price: 9.50,
    priceLabel: '€9,50',
    image: '/images/menu/pinsa-crostino.webp',
    badges: []
  },
  {
    id: 'pinsa-guanciale',
    category: 'Pinsa Romana',
    name: 'Guanciale',
    ingredients: 'Tomato sauce, mozzarella and bacon',
    price: 9.50,
    priceLabel: '€9,50',
    image: '/images/menu/pinsa-guanciale.webp',
    badges: []
  },
  {
    id: 'pinsa-funghi',
    category: 'Pinsa Romana',
    name: 'Funghi',
    ingredients: 'Tomato sauce, mozzarella cheese and mushroom',
    price: 9.50,
    priceLabel: '€9,50',
    image: '/images/menu/pinsa-funghi.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'pinsa-italia',
    category: 'Pinsa Romana',
    name: 'Italia',
    ingredients: 'Cherry tomato and mozzarella',
    price: 10.00,
    priceLabel: '€10,00',
    image: '/images/menu/pinsa-italia.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'pinsa-roma',
    category: 'Pinsa Romana',
    name: 'Roma',
    ingredients: 'Tomato sauce, mozzarella, ham, bacon and mushroom',
    price: 10.00,
    priceLabel: '€10,00',
    image: '/images/menu/pinsa-roma.webp',
    badges: []
  }
];
```

### 8.2 Pasta Fresca

```ts
export const pastaItems = [
  {
    id: 'pasta-pomodoro',
    category: 'Pasta Fresca',
    name: 'Pomodoro',
    ingredients: 'Tomato sauce and basil',
    price: 9.50,
    priceLabel: '€9,50',
    image: '/images/menu/pasta-pomodoro.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'gnocchi-pomodoro',
    category: 'Pasta Fresca',
    name: 'Gnocchi Pomodoro',
    ingredients: 'Tomato sauce and basil',
    price: 9.50,
    priceLabel: '€9,50',
    image: '/images/menu/gnocchi-pomodoro.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'gnocchi-pesto',
    category: 'Pasta Fresca',
    name: 'Gnocchi Pesto',
    ingredients: 'Basil, cheese and garlic',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/gnocchi-pesto.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'gnocchi-ragu',
    category: 'Pasta Fresca',
    name: 'Gnocchi Ragù',
    ingredients: 'Tomato sauce and meat Bolognese',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/gnocchi-ragu.webp',
    badges: []
  },
  {
    id: 'pasta-cacio-pepe',
    category: 'Pasta Fresca',
    name: 'Cacio & Pepe',
    ingredients: 'Cheese and pepper',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/pasta-cacio-pepe.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'pasta-carbonara',
    category: 'Pasta Fresca',
    name: 'Carbonara',
    ingredients: 'Cheese, eggs and guanciale bacon',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/pasta-carbonara.webp',
    badges: ['Popular']
  },
  {
    id: 'pasta-aglio-olio',
    category: 'Pasta Fresca',
    name: 'Aglio & Olio',
    ingredients: 'Garlic, olive oil and chilli peppers',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/pasta-aglio-olio.webp',
    badges: ['Very Spicy']
  },
  {
    id: 'pasta-gricia',
    category: 'Pasta Fresca',
    name: 'Gricia',
    ingredients: 'Cheese and guanciale bacon',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/pasta-gricia.webp',
    badges: []
  },
  {
    id: 'pasta-ragu',
    category: 'Pasta Fresca',
    name: 'Ragù',
    ingredients: 'Bolognese sauce',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/pasta-ragu.webp',
    badges: []
  },
  {
    id: 'pasta-arrabbiata',
    category: 'Pasta Fresca',
    name: 'Arrabbiata',
    ingredients: 'Spicy tomato sauce, garlic and chilli peppers',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/pasta-arrabbiata.webp',
    badges: ['Very Spicy', 'Vegetarian']
  },
  {
    id: 'pasta-amatriciana',
    category: 'Pasta Fresca',
    name: 'Amatriciana',
    ingredients: 'Spicy tomato sauce and guanciale bacon',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/pasta-amatriciana.webp',
    badges: ['Spicy']
  },
  {
    id: 'pasta-pesto',
    category: 'Pasta Fresca',
    name: 'Pesto',
    ingredients: 'Basil, cheese and garlic',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/pasta-pesto.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'pasta-limone-parmigiano',
    category: 'Pasta Fresca',
    name: 'Limone & Parmigiano',
    ingredients: 'Lemon, butter and parmigiano',
    price: 10.50,
    priceLabel: '€10,50',
    image: '/images/menu/pasta-limone-parmigiano.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'ravioli',
    category: 'Pasta Fresca',
    name: 'Ravioli',
    ingredients: 'Ricotta cheese and spinach, tomato sauce',
    price: 12.50,
    priceLabel: '€12,50',
    image: '/images/menu/ravioli.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'lasagna',
    category: 'Pasta Fresca',
    name: 'Lasagna',
    ingredients: 'Bolognese sauce and mozzarella cheese',
    price: 12.50,
    priceLabel: '€12,50',
    image: '/images/menu/lasagna.webp',
    badges: ['Popular']
  },
  {
    id: 'gnocchi-sorrentina',
    category: 'Pasta Fresca',
    name: 'Gnocchi Sorrentina',
    ingredients: 'Tomato sauce and mozzarella cheese',
    price: 12.50,
    priceLabel: '€12,50',
    image: '/images/menu/gnocchi-sorrentina.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'cannelloni',
    category: 'Pasta Fresca',
    name: 'Cannelloni',
    ingredients: 'Tomato sauce, ricotta and spinach',
    price: 12.50,
    priceLabel: '€12,50',
    image: '/images/menu/cannelloni.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'pasta-tonno-pomodoro',
    category: 'Pasta Fresca',
    name: 'Tonno & Pomodoro',
    ingredients: 'Tuna and tomato',
    price: 12.50,
    priceLabel: '€12,50',
    image: '/images/menu/pasta-tonno-pomodoro.webp',
    badges: []
  }
];
```

### 8.3 Sides, salads, dessert

```ts
export const otherItems = [
  {
    id: 'suppli',
    category: 'Sides',
    name: 'Supplì',
    ingredients: 'Tomato rice and mozzarella',
    price: 2.50,
    priceLabel: '€2,50',
    image: '/images/menu/suppli.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'caprese-salad',
    category: 'Salads',
    name: 'Caprese Salad',
    ingredients: 'Fresh tomato, mozzarella and basil',
    price: 7.50,
    priceLabel: '€7,50',
    image: '/images/menu/caprese-salad.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'mix-salad',
    category: 'Salads',
    name: 'Mix Salad',
    ingredients: 'Mixed green salad, tomato and black olives',
    price: 6.50,
    priceLabel: '€6,50',
    image: '/images/menu/mix-salad.webp',
    badges: ['Vegetarian']
  },
  {
    id: 'tiramisu',
    category: 'Dessert',
    name: 'Tiramisù',
    ingredients: 'Classic Italian dessert',
    price: 5.00,
    priceLabel: '€5,00',
    image: '/images/menu/tiramisu.webp',
    badges: ['Dessert']
  }
];
```

---

## 9. Menu UI behavior

### 9.1 Product cards
Each menu card should show:
- Dish image
- Name
- Ingredients
- Price
- Badges
- Optional button: `View details`

Card hover:
- Lift by 4–8 px.
- Slight shadow increase.
- Food image scale 1.03.

### 9.2 Tabs / filters
Filters:
- All
- Pasta Fresca
- Pinsa Romana
- Salads
- Sides
- Dessert
- Vegetarian
- Spicy

### 9.3 Dish modal
On click, open modal:
- Larger image
- Name
- Ingredients
- Price
- Category
- Badges
- CTA: Back to menu / Get directions

No fake online ordering unless actual ordering system exists.

---

## 10. Hero carousel data

Use this for the homepage hero carousel:

```ts
export const heroItems = [
  {
    title: 'Pinsa Romana',
    subtitle: 'Crispy, light and freshly baked',
    price: 'from €9,00',
    image: '/images/menu/pinsa-margherita.webp',
    accent: '#f26a21'
  },
  {
    title: 'Carbonara',
    subtitle: 'Eggs, cheese and guanciale',
    price: '€10,50',
    image: '/images/menu/pasta-carbonara.webp',
    accent: '#d89b2b'
  },
  {
    title: 'Lasagna',
    subtitle: 'Bolognese sauce and mozzarella',
    price: '€12,50',
    image: '/images/menu/lasagna.webp',
    accent: '#d6281f'
  },
  {
    title: 'Supplì',
    subtitle: 'Tomato rice and mozzarella',
    price: '€2,50',
    image: '/images/menu/suppli.webp',
    accent: '#ef4b2a'
  },
  {
    title: 'Tiramisù',
    subtitle: 'Classic Italian dessert',
    price: '€5,00',
    image: '/images/menu/tiramisu.webp',
    accent: '#8b5a3c'
  }
];
```

Hero transition:
- Change every 4–5 seconds.
- Fade old image out while new image slides in.
- Product card highlight changes with current item.
- Do not make the entire page jump.

---

## 11. Animation details

### 11.1 Food hero animation
Use Framer Motion variants:

```ts
const foodVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    y: -24,
    scale: 0.96,
    transition: { duration: 0.35 }
  }
};
```

### 11.2 Floating cards
Cards should have a subtle idle movement:

```ts
animate={{ y: [0, -8, 0] }}
transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
```

### 11.3 Mascot animation
If only a PNG is available:
- Use CSS/Framer Motion for small bounce and wave illusion.
- Add blink if separate eye layers exist.

If Rive/Lottie is available:
- States: idle, wave, point, blink.
- Start with wave once after hero loads.
- Then idle.

Mascot placement:
- Desktop: bottom-right of hero or near CTA.
- Mobile: small near headline or hidden below fold if it clutters the screen.

---

## 12. Responsive rules

### Desktop
- 2-column hero layout.
- Left text, center/right food, right floating cards.
- Mascot bottom-right.

### Tablet
- Text top-left, food center, cards below or right.
- Reduce food image size.

### Mobile
- Single-column.
- Logo top.
- Headline first.
- Food image second.
- CTA buttons third.
- Product cards horizontal scroll.
- Mascot very small or hidden after first interaction.

Mobile priority:
1. Headline
2. View Menu button
3. Food image
4. Prices/categories
5. Location

---

## 13. Accessibility

Must include:
- Alt text for every dish image.
- Keyboard-accessible menu tabs and modals.
- Proper button labels.
- Sufficient contrast.
- `prefers-reduced-motion` support.
- Do not rely only on color for spicy/vegetarian badges.

Example alt text:
```text
Pinsa Margherita with tomato sauce and mozzarella on a wooden board
```

---

## 14. SEO and local restaurant basics

Add:
- Page title: `Pomodorum Roma | Pasta Fresca & Pinsa Romana`
- Meta description: `Fresh pasta, pinsa romana, supplì, tiramisù and salads in Rome. No service charge.`
- Open Graph image using hero food image.
- Structured data for restaurant if address, phone, and opening hours are confirmed.

Do not invent:
- Address
- Phone number
- Opening hours
- Reviews count
- Delivery platform

Ask owner/user to confirm these before publishing.

---

## 15. Data quality rules

- Prices must use comma decimal format: `€10,50`, not `€10.50` in UI.
- Internally, numeric prices can use decimal numbers.
- Keep Italian dish names correct:
  - Supplì
  - Tiramisù
  - Ragù
  - Cacio & Pepe
  - Aglio & Olio
  - Amatriciana
  - Arrabbiata
  - Gnocchi Sorrentina
- Keep category names consistent:
  - Pasta Fresca
  - Pinsa Romana
  - Salads
  - Sides
  - Dessert

---

## 16. Suggested file structure

```text
src/
  app/
    page.tsx
    menu/page.tsx
    layout.tsx
  components/
    layout/
      Header.tsx
      Footer.tsx
      Container.tsx
    hero/
      HeroSection.tsx
      HeroFoodCarousel.tsx
      HeroProductCard.tsx
      MascotGuide.tsx
      ItalianTricolorLine.tsx
    menu/
      MenuSection.tsx
      MenuTabs.tsx
      MenuCard.tsx
      DishModal.tsx
      Badge.tsx
    sections/
      FeaturedCategories.tsx
      TrustBadges.tsx
      LocationSection.tsx
      SustainabilityNote.tsx
  data/
    menu.ts
    hero.ts
  styles/
    globals.css
public/
  images/
    logo/
    mascot/
    menu/
    originals/
```

---

## 17. Development phases

### Phase 1 — Setup
- Create Next.js/React project.
- Install Tailwind CSS.
- Install Framer Motion.
- Create global color tokens.
- Add base layout.

### Phase 2 — Data
- Create `src/data/menu.ts`.
- Add all menu items with real prices and ingredients.
- Add hero carousel data.
- Validate data by rendering all cards.

### Phase 3 — Assets
- Add all optimized images into `/public/images/menu/`.
- Add mascot PNG/SVG into `/public/images/mascot/`.
- Convert heavy PNGs to WebP.
- Keep transparency where required.

### Phase 4 — Hero
- Build animated hero section inspired by reference video.
- Add headline, CTA, food carousel, product cards, mascot.
- Implement 5-second entrance timeline.
- Add reduced-motion fallback.

### Phase 5 — Menu
- Build menu tabs.
- Build product cards.
- Add filters by category/badges.
- Add dish modal.
- Add mobile horizontal category selector.

### Phase 6 — Trust/location
- Add `No service charge` badge.
- Add sustainability note from menu:
  `We are proud to use biodegradable paper plates and forks in our restaurant to help save the planet.`
- Add Google Reviews/Tripadvisor visual only if approved.
- Add location section with confirmed map link.

### Phase 7 — Polish
- Improve spacing.
- Test mobile.
- Compress images.
- Test loading speed.
- Test accessibility.
- Fix copy and prices.

### Phase 8 — Deploy
- Deploy to Vercel or Netlify.
- Add domain.
- Test on phone inside the restaurant.
- Confirm menu accuracy with owner before public launch.

---

## 18. Acceptance criteria

The website is ready when:
- Homepage loads fast on mobile.
- First hero section looks like a modern food landing page, not a static old menu board.
- All menu items have correct prices and ingredients.
- Food images are optimized and not blurry.
- The first 5-second animation feels smooth and not annoying.
- Users can reach menu and directions within one tap.
- The site works with reduced motion.
- The design is responsive.
- No fake business info is published.

---

## 19. Final instruction for the AI coding agent

Build this website with clean, maintainable components. Prioritize conversion: customers should immediately understand that Pomodorum sells fresh pasta, pinsa romana, supplì, salads, and tiramisù, with clear prices and easy access to the menu and location. Use the provided elegant food-hero animation style as inspiration, but make the result feel specifically like Pomodorum Roma.
