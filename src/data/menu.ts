export type FeaturedDish = {
  id: string;
  name: string;
  category: string;
  ingredients: string;
  price: string;
  image: string;
};

export type MenuItem = {
  name: string;
  price: string;
  ingredients?: string;
};

export type MenuSection = {
  category: string;
  items: MenuItem[];
};

export const featuredDishes: FeaturedDish[] = [
  {
    id: "carbonara",
    name: "Carbonara",
    category: "Pasta",
    ingredients: "Tonnarelli, egg yolk, guanciale, pecorino romano, black pepper",
    price: "€10.50",
    image: "/images/menu/dish-carbonara.jpg",
  },
  {
    id: "cacio-pepe",
    name: "Cacio e Pepe",
    category: "Pasta",
    ingredients: "Tonnarelli, pecorino romano, freshly cracked black pepper",
    price: "€10.50",
    image: "/images/menu/dish-cacio-pepe.jpg",
  },
  {
    id: "amatriciana",
    name: "Amatriciana",
    category: "Pasta",
    ingredients: "Rigatoni, tomato, guanciale, pecorino romano",
    price: "€10.50",
    image: "/images/menu/dish-amatriciana.jpg",
  },
  {
    id: "pinsa-margherita",
    name: "Pinsa Margherita",
    category: "Pinsa Rossa",
    ingredients: "Pomodoro, mozzarella, fresh basil",
    price: "€8.50",
    image: "/images/menu/dish-pinsa-margherita.jpg",
  },
  {
    id: "lasagna",
    name: "Lasagna al Ragu",
    category: "Pasta",
    ingredients: "Fresh pasta, slow-cooked ragu, bechamel, parmigiano",
    price: "€12.50",
    image: "/images/menu/dish-lasagna.jpg",
  },
  {
    id: "caprese",
    name: "Caprese",
    category: "Insalata",
    ingredients: "Grape tomato, mozzarella, basil, olive oil",
    price: "€7.00",
    image: "/images/menu/dish-caprese.jpg",
  },
  {
    id: "suppli",
    name: "Suppli",
    category: "Fritto",
    ingredients: "Rice, tomato, mozzarella, fried golden",
    price: "€2.50",
    image: "/images/menu/dish-suppli.jpg",
  },
];

export const fullMenu: MenuSection[] = [
  {
    category: "Pasta",
    items: [
      { name: "Cacio e Pepe", price: "€10.50", ingredients: "Tonnarelli or Rigatoni" },
      { name: "Carbonara", price: "€10.50", ingredients: "Tonnarelli or Rigatoni" },
      { name: "Amatriciana", price: "€10.50", ingredients: "Tonnarelli or Rigatoni" },
      { name: "Gricia", price: "€10.50", ingredients: "Tonnarelli or Rigatoni" },
      { name: "Pesto", price: "€10.50", ingredients: "Tonnarelli or Rigatoni" },
      { name: "Pomodoro", price: "€9.50", ingredients: "Tonnarelli or Rigatoni" },
      { name: "Ragu", price: "€10.50", ingredients: "Tonnarelli or Rigatoni" },
      { name: "Arrabbiata", price: "€10.50" },
      { name: "Aglio Olio & Peperoncino", price: "€10.50" },
      { name: "Limone & Parmigiano", price: "€10.50", ingredients: "Butter, parmigiano, lemon" },
      { name: "Gnocchi Pomodoro", price: "€9.50" },
      { name: "Gnocchi Pesto", price: "€10.50" },
      { name: "Gnocchi Sorrentino", price: "€12.50" },
      { name: "Lasagna al Ragu", price: "€12.50" },
      { name: "Ravioli", price: "€12.50", ingredients: "Meat ravioli, bolognese sauce" },
    ],
  },
  {
    category: "Pinse Rosse",
    items: [
      { name: "Margherita", price: "€8.50", ingredients: "Pomodoro, mozzarella, basilico" },
      { name: "Crostino", price: "€9.50", ingredients: "Pomodoro, mozzarella, prosciutto cotto" },
      { name: "Funghi", price: "€9.50", ingredients: "Pomodoro, mozzarella, funghi" },
      { name: "Guanciale", price: "€9.50", ingredients: "Pomodoro, mozzarella, guanciale" },
      { name: "Boscaiola", price: "€9.50", ingredients: "Pomodoro, mozzarella, salsiccia" },
      { name: "Calabrese", price: "€9.50", ingredients: "Pomodoro, mozzarella, salame piccante" },
      { name: "Roma", price: "€9.50", ingredients: "Pomodoro, mozzarella, prosciutto cotto, funghi, guanciale" },
    ],
  },
  {
    category: "Insalate",
    items: [
      { name: "Mix Salad", price: "€7.50", ingredients: "Lettuce, tomato, black olives" },
      { name: "Caprese", price: "€7.00", ingredients: "Grape tomato, mozzarella, basil" },
    ],
  },
  {
    category: "Fritti",
    items: [{ name: "Suppli", price: "€2.50", ingredients: "Rice, tomato, mozzarella" }],
  },
];
