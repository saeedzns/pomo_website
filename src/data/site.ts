export const site = {
  name: "Pomodorum",
  taglineIt: "Pizzeria e cucina italiana nel cuore di Roma",
  taglineEn: "Italian pizza and cuisine in the heart of Rome",
  address: "Via Cavour 153, Roma, 00184, RM",
  phone: "+39 0683978285",
  phoneHref: "tel:+390683978285",
  googleMapsUrl: "https://share.google/0A8mAU2wUWbzrzJQD",
  currentMenuUrl: "https://www.leggimenu.it/menu/pomodorum",
  whatsappUrl: "",
  instagramUrl: "",
  facebookUrl: "",
  openingHours: {
    // TODO: Confirm exact opening hours with the owner before publishing.
    it: "Da verificare",
    en: "To be confirmed",
  },
  defaultLanguage: "it",
  supportedLanguages: ["it", "en"],
  seo: {
    it: {
      title: "Pomodorum Roma | Pizzeria, Pinsa e Cucina Italiana in Via Cavour",
      description:
        "Pomodorum e una pizzeria e ristorante italiano a Roma, in Via Cavour 153. Scopri il menu, chiama il ristorante o apri le indicazioni su Google Maps.",
    },
    en: {
      title: "Pomodorum Rome | Pizza, Pinsa and Italian Food on Via Cavour",
      description:
        "Pomodorum is an Italian restaurant and pizzeria in Rome at Via Cavour 153. View the menu, call the restaurant, or get directions on Google Maps.",
    },
  },
} as const;

export type Language = (typeof site.supportedLanguages)[number];
