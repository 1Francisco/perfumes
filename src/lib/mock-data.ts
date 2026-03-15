export type Note = {
  name: string;
};

export type Review = {
  id: string;
  userName: string;
  rating: number; // 1 to 5
  season: 'Verano' | 'Otoño' | 'Invierno' | 'Primavera';
  longevity: number; // 1 to 5
  projection: number; // 1 to 5
  versatility: number; // 1 to 5
  comment: string;
  date: string;
};

export type Perfume = {
  id: string;
  name: string;
  brand: string;
  launchYear: number;
  perfumer: string;
  type: 'Masculino' | 'Femenino' | 'Unisex';
  season: 'Verano' | 'Otoño' | 'Invierno' | 'Primavera' | 'Cualquiera';
  description: string;
  image: string;
  images: string[];
  averageRating: number;
  price: number;
  notes: {
    top: Note[];
    heart: Note[];
    base: Note[];
  };
  reviews: Review[];
};

export const POPULAR_PERFUMES: Perfume[] = [
  {
    id: "p1",
    name: "Oud Mystique",
    brand: "Maison Aura",
    launchYear: 2023,
    perfumer: "Jean-Claude Ellena",
    type: "Unisex",
    season: "Invierno",
    description: "An enigmatic journey through dark woods and oriental spices. Oud Mystique captures the essence of midnight elegance, balancing the raw power of agarwood with the delicate sweetness of damask rose.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
    ],
    averageRating: 4.8,
    price: 280,
    notes: {
      top: [{ name: "Saffron" }, { name: "Black Pepper" }],
      heart: [{ name: "Turkish Rose" }, { name: "Oud" }],
      base: [{ name: "Amber" }, { name: "Sandalwood" }, { name: "Vanilla" }],
    },
    reviews: [
      {
        id: "r1",
        userName: "Elena M.",
        rating: 5,
        season: "Invierno",
        longevity: 5,
        projection: 4,
        versatility: 3,
        comment: "Absolutely mesmerizing. It lasts forever on the skin and the dry down is pure luxury.",
        date: "2023-11-15"
      }
    ]
  },
  {
    id: "p2",
    name: "Neroli Blanc",
    brand: "Riviera Fragrances",
    launchYear: 2021,
    perfumer: "Francis Kurkdjian",
    type: "Unisex",
    season: "Verano",
    description: "A burst of Mediterranean sunshine. Crisp, clean, and effervescent. Neroli Blanc is the ultimate expression of endless summer days along the Amalfi coast.",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    ],
    averageRating: 4.5,
    price: 195,
    notes: {
      top: [{ name: "Bergamot" }, { name: "Mandarin" }, { name: "Petitgrain" }],
      heart: [{ name: "Neroli" }, { name: "Orange Blossom" }, { name: "Jasmine" }],
      base: [{ name: "White Musk" }, { name: "Cedarwood" }],
    },
    reviews: []
  },
  {
    id: "p3",
    name: "Velvet Iris",
    brand: "Lumière Paris",
    launchYear: 2022,
    perfumer: "Olivier Polge",
    type: "Femenino",
    season: "Otoño",
    description: "Powdery, sophisticated, and deeply romantic. Velvet Iris wraps you in a soft cashmere sweater. The high-quality orris butter gives it an unmatched creamy texture.",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop",
    ],
    averageRating: 4.9,
    price: 240,
    notes: {
      top: [{ name: "Pink Pepper" }, { name: "Pear" }],
      heart: [{ name: "Orris Butter" }, { name: "Violet" }],
      base: [{ name: "Vanilla" }, { name: "Patchouli" }],
    },
    reviews: []
  },
  {
    id: "p4",
    name: "Santal 33",
    brand: "Le Labo",
    launchYear: 2011,
    perfumer: "Frank Voelkl",
    type: "Unisex",
    season: "Cualquiera",
    description: "A perfume that introduces our use of cardamom, iris, violet, ambient which crackle in the formula and bring to this smoking wood alloy (Australian sandalwood, cedarwood) some spicy, leathery, musky notes.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop"],
    averageRating: 4.7,
    price: 320,
    notes: {
      top: [{ name: "Violet Accord" }, { name: "Cardamom" }],
      heart: [{ name: "Iris" }, { name: "Ambrox" }],
      base: [{ name: "Cedarwood" }, { name: "Leather" }, { name: "Sandalwood" }],
    },
    reviews: []
  }
];
