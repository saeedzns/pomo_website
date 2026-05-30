export type MenuBadge = "Spicy" | "Very Spicy" | "Vegetarian" | "Popular" | "Dessert";

export type MenuItem = {
  id: string;
  category: "Pasta Fresca" | "Pinsa Romana" | "Salads" | "Sides" | "Dessert";
  name: string;
  ingredients: string;
  price: number;
  priceLabel: string;
  image: string;
  badges: MenuBadge[];
};

export type HeroItem = {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  accent: string;
};

export type MenuSection = {
  category: MenuItem["category"];
  items: MenuItem[];
};

const menuImage = (file: string) => `/images/menu/cutouts/${file}.webp`;

export const pinsaItems: MenuItem[] = [
  {
    id: "pinsa-margherita",
    category: "Pinsa Romana",
    name: "Margherita",
    ingredients: "Tomato sauce and mozzarella cheese",
    price: 9,
    priceLabel: "€9,00",
    image: menuImage("pinsa-margherita"),
    badges: ["Vegetarian"],
  },
  {
    id: "pinsa-4-formaggi",
    category: "Pinsa Romana",
    name: "4 Formaggi",
    ingredients: "Mozzarella, brie, gorgonzola and parmigiano",
    price: 10,
    priceLabel: "€10,00",
    image: menuImage("pinsa-4-formaggi"),
    badges: ["Vegetarian"],
  },
  {
    id: "pinsa-calabrese",
    category: "Pinsa Romana",
    name: "Calabrese",
    ingredients: "Tomato sauce, mozzarella and spicy salame",
    price: 9.5,
    priceLabel: "€9,50",
    image: menuImage("pinsa-calabrese"),
    badges: ["Spicy"],
  },
  {
    id: "pinsa-crostino",
    category: "Pinsa Romana",
    name: "Crostino",
    ingredients: "Tomato sauce, mozzarella and ham",
    price: 9.5,
    priceLabel: "€9,50",
    image: menuImage("pinsa-crostino"),
    badges: [],
  },
  {
    id: "pinsa-guanciale",
    category: "Pinsa Romana",
    name: "Guanciale",
    ingredients: "Tomato sauce, mozzarella and bacon",
    price: 9.5,
    priceLabel: "€9,50",
    image: menuImage("pinsa-guanciale"),
    badges: [],
  },
  {
    id: "pinsa-funghi",
    category: "Pinsa Romana",
    name: "Funghi",
    ingredients: "Tomato sauce, mozzarella cheese and mushroom",
    price: 9.5,
    priceLabel: "€9,50",
    image: menuImage("pinsa-funghi"),
    badges: ["Vegetarian"],
  },
  {
    id: "pinsa-italia",
    category: "Pinsa Romana",
    name: "Italia",
    ingredients: "Cherry tomato and mozzarella",
    price: 10,
    priceLabel: "€10,00",
    image: menuImage("pinsa-italia"),
    badges: ["Vegetarian"],
  },
  {
    id: "pinsa-roma",
    category: "Pinsa Romana",
    name: "Roma",
    ingredients: "Tomato sauce, mozzarella, ham, bacon and mushroom",
    price: 10,
    priceLabel: "€10,00",
    image: menuImage("pinsa-roma"),
    badges: [],
  },
];

export const pastaItems: MenuItem[] = [
  {
    id: "pasta-pomodoro",
    category: "Pasta Fresca",
    name: "Pomodoro",
    ingredients: "Tomato sauce and basil",
    price: 9.5,
    priceLabel: "€9,50",
    image: menuImage("pasta-pomodoro"),
    badges: ["Vegetarian"],
  },
  {
    id: "gnocchi-pomodoro",
    category: "Pasta Fresca",
    name: "Gnocchi Pomodoro",
    ingredients: "Tomato sauce and basil",
    price: 9.5,
    priceLabel: "€9,50",
    image: menuImage("gnocchi-pomodoro"),
    badges: ["Vegetarian"],
  },
  {
    id: "gnocchi-pesto",
    category: "Pasta Fresca",
    name: "Gnocchi Pesto",
    ingredients: "Basil, cheese and garlic",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("gnocchi-pesto"),
    badges: ["Vegetarian"],
  },
  {
    id: "gnocchi-ragu",
    category: "Pasta Fresca",
    name: "Gnocchi Ragù",
    ingredients: "Tomato sauce and meat Bolognese",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("gnocchi-ragu"),
    badges: [],
  },
  {
    id: "pasta-cacio-pepe",
    category: "Pasta Fresca",
    name: "Cacio & Pepe",
    ingredients: "Cheese and pepper",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("pasta-cacio-pepe"),
    badges: ["Vegetarian"],
  },
  {
    id: "pasta-carbonara",
    category: "Pasta Fresca",
    name: "Carbonara",
    ingredients: "Cheese, eggs and guanciale bacon",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("pasta-carbonara"),
    badges: ["Popular"],
  },
  {
    id: "pasta-aglio-olio",
    category: "Pasta Fresca",
    name: "Aglio & Olio",
    ingredients: "Garlic, olive oil and chilli peppers",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("pasta-aglio-olio"),
    badges: ["Very Spicy"],
  },
  {
    id: "pasta-gricia",
    category: "Pasta Fresca",
    name: "Gricia",
    ingredients: "Cheese and guanciale bacon",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("pasta-gricia"),
    badges: [],
  },
  {
    id: "pasta-ragu",
    category: "Pasta Fresca",
    name: "Ragù",
    ingredients: "Bolognese sauce",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("pasta-ragu"),
    badges: [],
  },
  {
    id: "pasta-arrabbiata",
    category: "Pasta Fresca",
    name: "Arrabbiata",
    ingredients: "Spicy tomato sauce, garlic and chilli peppers",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("pasta-arrabbiata"),
    badges: ["Very Spicy", "Vegetarian"],
  },
  {
    id: "pasta-amatriciana",
    category: "Pasta Fresca",
    name: "Amatriciana",
    ingredients: "Spicy tomato sauce and guanciale bacon",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("pasta-amatriciana"),
    badges: ["Spicy"],
  },
  {
    id: "pasta-pesto",
    category: "Pasta Fresca",
    name: "Pesto",
    ingredients: "Basil, cheese and garlic",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("pasta-pesto"),
    badges: ["Vegetarian"],
  },
  {
    id: "pasta-limone-parmigiano",
    category: "Pasta Fresca",
    name: "Limone & Parmigiano",
    ingredients: "Lemon, butter and parmigiano",
    price: 10.5,
    priceLabel: "€10,50",
    image: menuImage("pasta-limone-parmigiano"),
    badges: ["Vegetarian"],
  },
  {
    id: "ravioli",
    category: "Pasta Fresca",
    name: "Ravioli",
    ingredients: "Ricotta cheese and spinach, tomato sauce",
    price: 12.5,
    priceLabel: "€12,50",
    image: menuImage("ravioli"),
    badges: ["Vegetarian"],
  },
  {
    id: "lasagna",
    category: "Pasta Fresca",
    name: "Lasagna",
    ingredients: "Bolognese sauce and mozzarella cheese",
    price: 12.5,
    priceLabel: "€12,50",
    image: menuImage("lasagna"),
    badges: ["Popular"],
  },
  {
    id: "gnocchi-sorrentina",
    category: "Pasta Fresca",
    name: "Gnocchi Sorrentina",
    ingredients: "Tomato sauce and mozzarella cheese",
    price: 12.5,
    priceLabel: "€12,50",
    image: menuImage("gnocchi-sorrentina"),
    badges: ["Vegetarian"],
  },
  {
    id: "cannelloni",
    category: "Pasta Fresca",
    name: "Cannelloni",
    ingredients: "Tomato sauce, ricotta and spinach",
    price: 12.5,
    priceLabel: "€12,50",
    image: menuImage("cannelloni"),
    badges: ["Vegetarian"],
  },
  {
    id: "pasta-tonno-pomodoro",
    category: "Pasta Fresca",
    name: "Tonno & Pomodoro",
    ingredients: "Tuna and tomato",
    price: 12.5,
    priceLabel: "€12,50",
    image: menuImage("pasta-tonno-pomodoro"),
    badges: [],
  },
];

export const otherItems: MenuItem[] = [
  {
    id: "suppli",
    category: "Sides",
    name: "Supplì",
    ingredients: "Tomato rice and mozzarella",
    price: 2.5,
    priceLabel: "€2,50",
    image: menuImage("suppli"),
    badges: ["Vegetarian"],
  },
  {
    id: "caprese-salad",
    category: "Salads",
    name: "Caprese Salad",
    ingredients: "Fresh tomato, mozzarella and basil",
    price: 7.5,
    priceLabel: "€7,50",
    image: menuImage("caprese-salad"),
    badges: ["Vegetarian"],
  },
  {
    id: "mix-salad",
    category: "Salads",
    name: "Mix Salad",
    ingredients: "Mixed green salad, tomato and black olives",
    price: 6.5,
    priceLabel: "€6,50",
    image: menuImage("mix-salad"),
    badges: ["Vegetarian"],
  },
  {
    id: "tiramisu",
    category: "Dessert",
    name: "Tiramisù",
    ingredients: "Classic Italian dessert",
    price: 5,
    priceLabel: "€5,00",
    image: menuImage("tiramisu"),
    badges: ["Dessert"],
  },
];

export const allMenuItems = [...pinsaItems, ...pastaItems, ...otherItems];

export const fullMenu: MenuSection[] = [
  { category: "Pasta Fresca", items: pastaItems },
  { category: "Pinsa Romana", items: pinsaItems },
  { category: "Salads", items: otherItems.filter((item) => item.category === "Salads") },
  { category: "Sides", items: otherItems.filter((item) => item.category === "Sides") },
  { category: "Dessert", items: otherItems.filter((item) => item.category === "Dessert") },
];

export const heroItems: HeroItem[] = [
  {
    title: "Pinsa Romana",
    subtitle: "Crispy, light and freshly baked",
    price: "from €9,00",
    image: menuImage("pinsa-margherita"),
    accent: "#f26a21",
  },
  {
    title: "Carbonara",
    subtitle: "Eggs, cheese and guanciale",
    price: "€10,50",
    image: menuImage("pasta-carbonara"),
    accent: "#d89b2b",
  },
  {
    title: "Lasagna",
    subtitle: "Bolognese sauce and mozzarella",
    price: "€12,50",
    image: menuImage("lasagna"),
    accent: "#d6281f",
  },
  {
    title: "Supplì",
    subtitle: "Tomato rice and mozzarella",
    price: "€2,50",
    image: menuImage("suppli"),
    accent: "#ef4b2a",
  },
  {
    title: "Tiramisù",
    subtitle: "Classic Italian dessert",
    price: "€5,00",
    image: menuImage("tiramisu"),
    accent: "#8b5a3c",
  },
];

export const featuredDishes = allMenuItems.filter((item) =>
  ["pinsa-margherita", "pasta-carbonara", "pasta-cacio-pepe", "pasta-amatriciana", "lasagna", "caprese-salad", "suppli"].includes(item.id),
);
