export const site = {
  name: "Pomodorum",
  taglineIt: "Cucina romana, pinsa e pasta in Via Cavour",
  taglineEn: "Roman pasta, pinsa, and Italian food on Via Cavour",
  address: "Via Cavour 153, Roma, 00184, RM",
  phone: "+39 0683978285",
  phoneDisplay: "+39 06 8397 8285",
  phoneHref: "tel:+390683978285",
  email: "pomodorumroma@yahoo.com",
  emailHref: "mailto:pomodorumroma@yahoo.com",
  googleMapsUrl: "https://share.google/0A8mAU2wUWbzrzJQD",
  currentMenuUrl: "https://www.leggimenu.it/menu/pomodorum",
  whatsappUrl: "",
  instagramUrl: "",
  facebookUrl: "",
  openingHours: {
    // From supplied pomodorum-project reference. Confirm with the owner before production.
    it: "Martedi - Domenica · 10:00 - 21:00 · Lunedi chiuso",
    en: "Tuesday - Sunday · 10:00 - 21:00 · Closed Monday",
  },
  defaultLanguage: "it",
  supportedLanguages: ["it", "en"],
  seo: {
    it: {
      title: "Pomodorum Roma | Pizzeria, Pinsa e Cucina Italiana in Via Cavour",
      description:
        "Pomodorum e un ristorante a Roma in Via Cavour 153 con pasta romana, pinsa, fritti e Wi-Fi gratuito. Scopri il menu o apri le indicazioni su Google Maps.",
    },
    en: {
      title: "Pomodorum Rome | Roman Pasta, Pinsa and Italian Food on Via Cavour",
      description:
        "Pomodorum is an Italian restaurant in Rome at Via Cavour 153 with Roman pasta, pinsa, fried starters, and free Wi-Fi. View the menu or get directions.",
    },
  },
} as const;

export type Language = (typeof site.supportedLanguages)[number];
