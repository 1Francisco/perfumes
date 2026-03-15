import { Perfume, Review } from './mock-data';

// All images sourced from Fragrantica's CDN (fimgs.net) using 375x500 high-resolution format.
// Every image ID has been individually BROWSER-VERIFIED to show the correct bottle.

export async function getRealPerfumes(): Promise<Perfume[]> {
  return REAL_WORLD_PERFUMES;
}

export async function getPerfumeById(id: string): Promise<Perfume | undefined> {
  return REAL_WORLD_PERFUMES.find(p => p.id === id);
}

const IMG = (id: number) => `https://fimgs.net/mdimg/perfume/375x500.${id}.jpg`;

export const REAL_WORLD_PERFUMES: Perfume[] = [

  // ═══════════════════════════════════════
  //  DIOR  (5 perfumes – all verified)
  // ═══════════════════════════════════════
  {
    id: "dior-sauvage-edp", name: "Sauvage Eau de Parfum", brand: "Dior", launchYear: 2018, perfumer: "François Demachy",
    type: "Masculino", season: "Cualquiera",
    description: "Una estela poderosamente fresca y salvaje. La bergamota de Calabria choca contra un horizonte de ambroxan y vainilla. El número uno mundial de ventas masculinas.",
    image: IMG(48100), images: [IMG(48100)], averageRating: 4.8, price: 130,
    notes: { top: [{name:"Bergamota"},{name:"Pimienta"}], heart: [{name:"Lavanda"},{name:"Pimienta Sichuan"},{name:"Nuez Moscada"}], base: [{name:"Ambroxan"},{name:"Cedro"},{name:"Vainilla"}] },
    reviews: [{ id:"r1", rating:5, season:"Cualquiera" as Review["season"], longevity:5, projection:5, versatility:5, userName:"Carlos M.", comment:"El más vendido con razón. Proyección increíble.", date:"2024-01-15" }]
  },
  {
    id: "dior-sauvage-edt", name: "Sauvage Eau de Toilette", brand: "Dior", launchYear: 2015, perfumer: "François Demachy",
    type: "Masculino", season: "Verano",
    description: "El Sauvage original que redefinió la perfumería masculina. Bergamota explosiva y ambroxan limpio en un cóctel que enganchó al mundo entero.",
    image: IMG(31861), images: [IMG(31861)], averageRating: 4.7, price: 100,
    notes: { top: [{name:"Pimienta de Calabar"},{name:"Bergamota"}], heart: [{name:"Pimienta Sichuan"},{name:"Geranio"},{name:"Lavanda"}], base: [{name:"Ambroxan"},{name:"Cedro"},{name:"Vetiver"}] },
    reviews: []
  },
  {
    id: "dior-jadore", name: "J'adore Eau de Parfum", brand: "Dior", launchYear: 1999, perfumer: "Calice Becker",
    type: "Femenino", season: "Primavera",
    description: "El icono femenino de Dior. Ylang-ylang, rosa centifolia y jazmín sambac forman uno de los bouquets florales más ricos y luminosos de la historia.",
    image: IMG(210), images: [IMG(210)], averageRating: 4.5, price: 155,
    notes: { top: [{name:"Mandarina"},{name:"Magnolia"},{name:"Pera"}], heart: [{name:"Jazmín"},{name:"Rosa"},{name:"Ylang-Ylang"}], base: [{name:"Vainilla"},{name:"Almizcle"},{name:"Cedro"}] },
    reviews: []
  },
  {
    id: "dior-homme-intense", name: "Dior Homme Intense", brand: "Dior", launchYear: 2007, perfumer: "Olivier Polge",
    type: "Masculino", season: "Invierno",
    description: "El perfume más romántico de Dior. Un iris polvoriento y sensual envuelto en lavanda, cuero y madera de cedro.",
    image: IMG(13016), images: [IMG(13016)], averageRating: 4.8, price: 145,
    notes: { top: [{name:"Lavanda"},{name:"Bergamota"}], heart: [{name:"Iris"},{name:"Pera"}], base: [{name:"Vetiver"},{name:"Cedro"},{name:"Cuero"}] },
    reviews: []
  },
  {
    id: "miss-dior-edp", name: "Miss Dior Eau de Parfum", brand: "Dior", launchYear: 2017, perfumer: "François Demachy",
    type: "Femenino", season: "Primavera",
    description: "Chispeante, libre y apasionada. Rosa damascena, bergamota y almizcle blanco en una feminidad vibrante.",
    image: IMG(45202), images: [IMG(45202)], averageRating: 4.4, price: 140,
    notes: { top: [{name:"Bergamota"},{name:"Grosellas"}], heart: [{name:"Rosa Damascena"},{name:"Gardenia"}], base: [{name:"Almizcle Blanco"},{name:"Pachulí"},{name:"Sándalo"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  CHANEL  (5 perfumes – all verified)
  // ═══════════════════════════════════════
  {
    id: "chanel-no5-edp", name: "N°5 Eau de Parfum", brand: "Chanel", launchYear: 1921, perfumer: "Ernest Beaux",
    type: "Femenino", season: "Cualquiera",
    description: "El perfume más famoso de la historia. Aldehídos florales sobre una base de vetiver, sándalo y vainilla.",
    image: IMG(40069), images: [IMG(40069)], averageRating: 4.6, price: 165,
    notes: { top: [{name:"Aldehídos"},{name:"Neroli"},{name:"Ylang-Ylang"}], heart: [{name:"Rosa de Mayo"},{name:"Jazmín"},{name:"Iris"}], base: [{name:"Vetiver"},{name:"Sándalo"},{name:"Vainilla"}] },
    reviews: [{ id:"r2", rating:5, season:"Cualquiera" as Review["season"], longevity:5, projection:4, versatility:5, userName:"Sofia R.", comment:"Eterno, clásico, el olor del lujo puro.", date:"2023-12-01" }]
  },
  {
    id: "bleu-de-chanel-parfum", name: "Bleu de Chanel Parfum", brand: "Chanel", launchYear: 2018, perfumer: "Olivier Polge",
    type: "Masculino", season: "Cualquiera",
    description: "Intensamente amaderado y profundamente masculino. El cedro de Nueva Caledonia es la firma de esta fragancia inmortal.",
    image: IMG(49912), images: [IMG(49912)], averageRating: 4.8, price: 175,
    notes: { top: [{name:"Limón"},{name:"Bergamota"},{name:"Menta"}], heart: [{name:"Jengibre"},{name:"Jazmín"},{name:"Nuez Moscada"}], base: [{name:"Sándalo"},{name:"Cedro"},{name:"Haba Tonka"}] },
    reviews: []
  },
  {
    id: "chanel-coco-mademoiselle", name: "Coco Mademoiselle Intense", brand: "Chanel", launchYear: 2017, perfumer: "Olivier Polge",
    type: "Femenino", season: "Otoño",
    description: "La chica Chanel más atrevida. Bergamota y naranja estallan en una sensual rosa y jazmín.",
    image: IMG(48310), images: [IMG(48310)], averageRating: 4.7, price: 165,
    notes: { top: [{name:"Bergamota"},{name:"Naranja"}], heart: [{name:"Rosa"},{name:"Jazmín"}], base: [{name:"Pachulí"},{name:"Vetiver"},{name:"Almizcle Blanco"}] },
    reviews: []
  },
  {
    id: "chanel-allure-homme-sport", name: "Allure Homme Sport Eau Extrême", brand: "Chanel", launchYear: 2012, perfumer: "Jacques Polge",
    type: "Masculino", season: "Verano",
    description: "Maderas secas, sal marina y pimienta. La energía de un deporte de élite embotellada.",
    image: IMG(14669), images: [IMG(14669)], averageRating: 4.5, price: 135,
    notes: { top: [{name:"Mandarina"},{name:"Pimienta"}], heart: [{name:"Tonka"},{name:"Sándalo"}], base: [{name:"Notas Amaderadas"},{name:"Vetiver"}] },
    reviews: []
  },
  {
    id: "chanel-chance-tendre", name: "Chance Eau Tendre EDP", brand: "Chanel", launchYear: 2019, perfumer: "Olivier Polge",
    type: "Femenino", season: "Primavera",
    description: "Ligera, cítrica y soñadora. Un pomelo radiante da paso a una rosa tenue y jazmín.",
    image: IMG(52359), images: [IMG(52359)], averageRating: 4.5, price: 150,
    notes: { top: [{name:"Pomelo"},{name:"Cidro"}], heart: [{name:"Jacinto"},{name:"Rosa"},{name:"Jazmín"}], base: [{name:"Almizcle Blanco"},{name:"Iris"},{name:"Cedro"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  YVES SAINT LAURENT  (3 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "ysl-libre-edp", name: "Libre Eau de Parfum", brand: "Yves Saint Laurent", launchYear: 2019, perfumer: "Anne Flipo & Carlos Benaim",
    type: "Femenino", season: "Otoño",
    description: "La fragancia de la libertad. Lavanda de Francia y flor de azahar de Marruecos en una fusión floral que define a la mujer libre.",
    image: IMG(56077), images: [IMG(56077)], averageRating: 4.7, price: 135,
    notes: { top: [{name:"Lavanda"},{name:"Mandarina"}], heart: [{name:"Flor de Azahar"},{name:"Jazmín"}], base: [{name:"Vainilla"},{name:"Almizcle"},{name:"Ámbar Gris"}] },
    reviews: []
  },
  {
    id: "ysl-black-opium", name: "Black Opium Eau de Parfum", brand: "Yves Saint Laurent", launchYear: 2014, perfumer: "Nathalie Lorson & Marie Salamagne",
    type: "Femenino", season: "Invierno",
    description: "Sensual, adictivo y oscuro. El café negro y la vainilla se entrelazan con el jazmín blanco en un choque entre luz y sombra.",
    image: IMG(25324), images: [IMG(25324)], averageRating: 4.6, price: 125,
    notes: { top: [{name:"Pera"},{name:"Café Negro"}], heart: [{name:"Jazmín"},{name:"Flor de Cafeto"}], base: [{name:"Vainilla"},{name:"Pachulí"},{name:"Cedro"}] },
    reviews: []
  },
  {
    id: "ysl-lhomme", name: "L'Homme Eau de Toilette", brand: "Yves Saint Laurent", launchYear: 2006, perfumer: "Anne Flipo",
    type: "Masculino", season: "Cualquiera",
    description: "El arquetipo del hombre YSL. Jengibre sobre cedro de Virginia con vainilla y sándalo.",
    image: IMG(734), images: [IMG(734)], averageRating: 4.5, price: 95,
    notes: { top: [{name:"Jengibre"},{name:"Bergamota"}], heart: [{name:"Cardamomo"},{name:"Albahaca"}], base: [{name:"Sándalo"},{name:"Cedro"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  GIORGIO ARMANI  (4 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "armani-acqua-di-gio", name: "Acqua di Giò Absolu", brand: "Giorgio Armani", launchYear: 2018, perfumer: "Alberto Morillas",
    type: "Masculino", season: "Verano",
    description: "El mar de Pantelleria embotellado. Bergamota, pimienta y pachulí negro en un acorde marino profundo.",
    image: IMG(48138), images: [IMG(48138)], averageRating: 4.7, price: 115,
    notes: { top: [{name:"Bergamota"},{name:"Pimienta"}], heart: [{name:"Calone"},{name:"Notas Marinas"}], base: [{name:"Patchoulí Negro"},{name:"Almizcle"}] },
    reviews: []
  },
  {
    id: "armani-si-edp", name: "Sì Eau de Parfum", brand: "Giorgio Armani", launchYear: 2013, perfumer: "Christine Nagel",
    type: "Femenino", season: "Cualquiera",
    description: "El perfume del poder suave. Frambuesa negra, rosa y musgo de roble en un frasco elegante.",
    image: IMG(18453), images: [IMG(18453)], averageRating: 4.5, price: 130,
    notes: { top: [{name:"Bergamota"},{name:"Frambuesa Negra"}], heart: [{name:"Rosa"},{name:"Freesia"}], base: [{name:"Musgo de Roble"},{name:"Vainilla"},{name:"Almizcle"}] },
    reviews: []
  },
  {
    id: "armani-my-way", name: "My Way Eau de Parfum", brand: "Giorgio Armani", launchYear: 2020, perfumer: "Carlos Benaim",
    type: "Femenino", season: "Primavera",
    description: "Un perfume que celebra los encuentros del mundo. Flor de azahar de Egipto y vainilla de Madagascar.",
    image: IMG(62036), images: [IMG(62036)], averageRating: 4.4, price: 125,
    notes: { top: [{name:"Bergamota"},{name:"Ylang Ylang"}], heart: [{name:"Flor de Azahar"},{name:"Rosa"}], base: [{name:"Sándalo"},{name:"Vainilla"},{name:"Cedro Blanco"}] },
    reviews: []
  },
  {
    id: "armani-code-absolu", name: "Armani Code Absolu", brand: "Giorgio Armani", launchYear: 2019, perfumer: "Loc Dong",
    type: "Masculino", season: "Invierno",
    description: "La seducción llevada al extremo. Cardamomo, albaricoque y vainilla en una composición orientalo-amaderada.",
    image: IMG(53106), images: [IMG(53106)], averageRating: 4.6, price: 110,
    notes: { top: [{name:"Cardamomo"},{name:"Albaricoque"}], heart: [{name:"Flor de Naranja"},{name:"Jazmín"}], base: [{name:"Vainilla"},{name:"Madera"},{name:"Ámbar"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  PACO RABANNE  (3 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "paco-1-million", name: "1 Million", brand: "Paco Rabanne", launchYear: 2008, perfumer: "Christophe Raynaud & Olivier Pescheux",
    type: "Masculino", season: "Otoño",
    description: "El lingote de oro de la perfumería. Mandarina sanguina, canela y cuero combinados en el perfume más audaz de Rabanne.",
    image: IMG(3747), images: [IMG(3747)], averageRating: 4.4, price: 110,
    notes: { top: [{name:"Mandarina Sanguina"},{name:"Toronja"},{name:"Menta"}], heart: [{name:"Canela"},{name:"Rosa"}], base: [{name:"Cuero"},{name:"Ámbar"},{name:"Pachulí"}] },
    reviews: []
  },
  {
    id: "paco-lady-million", name: "Lady Million", brand: "Paco Rabanne", launchYear: 2010, perfumer: "Béatrice Piquet",
    type: "Femenino", season: "Cualquiera",
    description: "Un diamante de fragancia. Neroli, jazmín blanco y miel sobre un corazón de rosa damasco.",
    image: IMG(9045), images: [IMG(9045)], averageRating: 4.3, price: 105,
    notes: { top: [{name:"Naranja"},{name:"Frambuesa"},{name:"Neroli"}], heart: [{name:"Rosa Damasco"},{name:"Jazmín"},{name:"Miel"}], base: [{name:"Patchoulí"},{name:"Cedro"}] },
    reviews: []
  },
  {
    id: "paco-invictus", name: "Invictus", brand: "Paco Rabanne", launchYear: 2013, perfumer: "Anne Flipo & Dominique Ropion",
    type: "Masculino", season: "Verano",
    description: "El trofeo de la victoria. Un fougère acuático fresco y magnético con pomelo, laurel y ambroxan.",
    image: IMG(18471), images: [IMG(18471)], averageRating: 4.4, price: 95,
    notes: { top: [{name:"Pomelo"},{name:"Notas Marinas"}], heart: [{name:"Laurel"},{name:"Jazmín"}], base: [{name:"Ambroxan"},{name:"Almizcle"},{name:"Guayaco"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  JEAN PAUL GAULTIER  (2 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "jpg-le-male", name: "Le Male", brand: "Jean Paul Gaultier", launchYear: 1995, perfumer: "Francis Kurkdjian",
    type: "Masculino", season: "Verano",
    description: "El icono de la perfumería masculina. Lavanda y vainilla juntos: sensualidad sin esfuerzo.",
    image: IMG(430), images: [IMG(430)], averageRating: 4.5, price: 85,
    notes: { top: [{name:"Lavanda"},{name:"Menta"},{name:"Bergamota"}], heart: [{name:"Canela"},{name:"Flor de Azahar"},{name:"Cardamomo"}], base: [{name:"Vainilla"},{name:"Haba Tonka"},{name:"Sándalo"}] },
    reviews: []
  },
  {
    id: "jpg-scandal", name: "Scandal", brand: "Jean Paul Gaultier", launchYear: 2017, perfumer: "Quentin Bisch & Dora Baghriche",
    type: "Femenino", season: "Otoño",
    description: "Miel y grafito. La miel le da dulzura y el pachulí le pone carácter.",
    image: IMG(45651), images: [IMG(45651)], averageRating: 4.4, price: 100,
    notes: { top: [{name:"Naranja Sanguina"},{name:"Mandarina"}], heart: [{name:"Gardenia"},{name:"Miel"}], base: [{name:"Pachulí"},{name:"Guayaco"},{name:"Almizcle"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  TOM FORD  (4 perfumes – all verified)
  // ═══════════════════════════════════════
  {
    id: "tf-black-orchid", name: "Black Orchid", brand: "Tom Ford", launchYear: 2006, perfumer: "David Apel",
    type: "Unisex", season: "Invierno",
    description: "Oscuro, rico y magnético. Trufa, orquídea negra y cacao crean un perfume que hipnotiza.",
    image: IMG(1018), images: [IMG(1018)], averageRating: 4.6, price: 195,
    notes: { top: [{name:"Trufa"},{name:"Grosellas Negras"},{name:"Ylang-Ylang"}], heart: [{name:"Orquídea"},{name:"Especias"},{name:"Loto"}], base: [{name:"Pachulí"},{name:"Chocolate"},{name:"Vainilla"}] },
    reviews: []
  },
  {
    id: "tf-tobacco-vanille", name: "Tobacco Vanille", brand: "Tom Ford", launchYear: 2007, perfumer: "Olivier Gillotin",
    type: "Unisex", season: "Invierno",
    description: "El lujo oriental definitivo. Tabaco suave, vainilla oscura y especias de Oriente en un abrazo caliente irresistible.",
    image: IMG(1825), images: [IMG(1825)], averageRating: 4.8, price: 395,
    notes: { top: [{name:"Tabaco"},{name:"Especias"}], heart: [{name:"Vainilla"},{name:"Cacao"},{name:"Haba Tonka"}], base: [{name:"Frutos Secos"},{name:"Maderas"}] },
    reviews: []
  },
  {
    id: "tf-lost-cherry", name: "Lost Cherry", brand: "Tom Ford", launchYear: 2018, perfumer: "Givaudan",
    type: "Unisex", season: "Invierno",
    description: "Una cereza madura en kirsch. Dulce, oscura y sensual.",
    image: IMG(51411), images: [IMG(51411)], averageRating: 4.6, price: 420,
    notes: { top: [{name:"Cereza Amarga"},{name:"Licor de Kirsch"}], heart: [{name:"Almendra"},{name:"Rosa Turca"}], base: [{name:"Palo Santo"},{name:"Vainilla"},{name:"Bálsamo de Tolú"}] },
    reviews: []
  },
  {
    id: "tf-oud-wood", name: "Oud Wood", brand: "Tom Ford", launchYear: 2007, perfumer: "Pierre Negrin",
    type: "Unisex", season: "Invierno",
    description: "El oud moderno y accesible. Una madera exótica suavizada con sándalo cremoso y ámbar gris.",
    image: IMG(1826), images: [IMG(1826)], averageRating: 4.7, price: 395,
    notes: { top: [{name:"Cardamomo"},{name:"Pimienta China"}], heart: [{name:"Oud"},{name:"Sándalo"},{name:"Vetiver"}], base: [{name:"Ámbar Gris"},{name:"Haba Tonka"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  LANCÔME  (2 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "lancome-la-vie-est-belle", name: "La Vie Est Belle", brand: "Lancôme", launchYear: 2012, perfumer: "Olivier Polge & Dominique Ropion",
    type: "Femenino", season: "Primavera",
    description: "La felicidad en frasco. Iris untuoso y praliné dulce que te hacen sonreír.",
    image: IMG(14982), images: [IMG(14982)], averageRating: 4.5, price: 130,
    notes: { top: [{name:"Grosellas"},{name:"Pera"}], heart: [{name:"Iris"},{name:"Jazmín"},{name:"Flor de Azahar"}], base: [{name:"Praliné"},{name:"Vainilla"},{name:"Pachulí"}] },
    reviews: []
  },
  {
    id: "lancome-idole", name: "Idôle Eau de Parfum", brand: "Lancôme", launchYear: 2019, perfumer: "Dominique Ropion & Anne Flipo",
    type: "Femenino", season: "Cualquiera",
    description: "Para quienes lideran con el corazón. Rosa fresca sobre almizcle moderno.",
    image: IMG(60059), images: [IMG(60059)], averageRating: 4.3, price: 110,
    notes: { top: [{name:"Rosa"},{name:"Bergamota"}], heart: [{name:"Jazmín"},{name:"Iris"}], base: [{name:"Almizcle"},{name:"Haba Tonka"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  CAROLINA HERRERA  (3 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "ch-good-girl", name: "Good Girl", brand: "Carolina Herrera", launchYear: 2016, perfumer: "Louise Turner",
    type: "Femenino", season: "Otoño",
    description: "El stiletto negro más adictivo de la perfumería. Café, jazmín sambac y haba tonka.",
    image: IMG(39681), images: [IMG(39681)], averageRating: 4.6, price: 145,
    notes: { top: [{name:"Café"},{name:"Almendra"}], heart: [{name:"Jazmín Sambac"},{name:"Nardos"}], base: [{name:"Haba Tonka"},{name:"Cacao"},{name:"Vainilla"}] },
    reviews: []
  },
  {
    id: "ch-212-vip", name: "212 VIP", brand: "Carolina Herrera", launchYear: 2010, perfumer: "Cecile Mattar Zagoranski",
    type: "Femenino", season: "Cualquiera",
    description: "Lista para la fiesta. Miel, vainilla y champagne crean el aura de la VIP de la sala.",
    image: IMG(9781), images: [IMG(9781)], averageRating: 4.3, price: 100,
    notes: { top: [{name:"Miel"},{name:"Champagne"}], heart: [{name:"Gardenias"},{name:"Flor de Camellia"}], base: [{name:"Vainilla"},{name:"Almizcle"}] },
    reviews: []
  },
  {
    id: "ch-bad-boy", name: "Bad Boy Eau de Toilette", brand: "Carolina Herrera", launchYear: 2019, perfumer: "Louise Turner",
    type: "Masculino", season: "Otoño",
    description: "La dualidad masculina. Salvia y pimienta negra: un chico malo que en el fondo es un caballero.",
    image: IMG(55823), images: [IMG(55823)], averageRating: 4.4, price: 110,
    notes: { top: [{name:"Pimienta Verde"},{name:"Bergamota"}], heart: [{name:"Salvia"},{name:"Cedro"}], base: [{name:"Vetiver"},{name:"Ámbar"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  GIVENCHY  (3 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "givenchy-irresistible", name: "Irresistible Eau de Parfum", brand: "Givenchy", launchYear: 2020, perfumer: "Dominique Ropion & Anne Flipo",
    type: "Femenino", season: "Primavera",
    description: "Una rosa que brilla sin esfuerzo. Ligera, chispeante y llena de alegría contagiosa.",
    image: IMG(60891), images: [IMG(60891)], averageRating: 4.4, price: 120,
    notes: { top: [{name:"Pomelo"},{name:"Bergamota"}], heart: [{name:"Rosa"},{name:"Magnolia"}], base: [{name:"Almizcle Blanco"},{name:"Cedro"}] },
    reviews: []
  },
  {
    id: "givenchy-linterdit", name: "L'Interdit Eau de Parfum", brand: "Givenchy", launchYear: 2018, perfumer: "Dominique Ropion & Anne Flipo",
    type: "Femenino", season: "Invierno",
    description: "Prohibido pero irresistible. Naranja blanca y jazmín sobre pachulí y vetiver.",
    image: IMG(51369), images: [IMG(51369)], averageRating: 4.5, price: 130,
    notes: { top: [{name:"Naranja Blanca"},{name:"Pera Rosa"}], heart: [{name:"Jazmín"},{name:"Tuberosa"}], base: [{name:"Vetiver"},{name:"Pachulí"},{name:"Sándalo"}] },
    reviews: []
  },
  {
    id: "givenchy-gentleman", name: "Gentleman Eau de Parfum Boisée", brand: "Givenchy", launchYear: 2020, perfumer: "Nathalie Lorson",
    type: "Masculino", season: "Invierno",
    description: "Iris polvoriento y pachulí terroso. Un elegante juego de tensiones masculinas.",
    image: IMG(58126), images: [IMG(58126)], averageRating: 4.6, price: 115,
    notes: { top: [{name:"Pimienta"},{name:"Bergamota"}], heart: [{name:"Iris"},{name:"Lavanda"}], base: [{name:"Pachulí"},{name:"Sándalo"},{name:"Vetiver"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  CREED  (2 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "creed-aventus", name: "Aventus", brand: "Creed", launchYear: 2010, perfumer: "Olivier Creed & Erwin Creed",
    type: "Masculino", season: "Primavera",
    description: "Inspirado en Napoleón. Piña, abedul ahumado y musgo de roble: la fragancia del éxito y la victoria.",
    image: IMG(9828), images: [IMG(9828)], averageRating: 4.7, price: 365,
    notes: { top: [{name:"Piña"},{name:"Bergamota"},{name:"Grosella Negra"}], heart: [{name:"Abedul"},{name:"Jazmín"},{name:"Rosa"}], base: [{name:"Almizcle"},{name:"Musgo de Roble"},{name:"Ámbar Gris"}] },
    reviews: []
  },
  {
    id: "creed-silver-mountain-water", name: "Silver Mountain Water", brand: "Creed", launchYear: 1995, perfumer: "Olivier Creed",
    type: "Unisex", season: "Primavera",
    description: "El aire puro de los Alpes suizos. Bergamota, té verde y almizcle capturan la pureza de la montaña.",
    image: IMG(472), images: [IMG(472)], averageRating: 4.5, price: 340,
    notes: { top: [{name:"Bergamota"},{name:"Neroli"}], heart: [{name:"Té Verde"},{name:"Loto"}], base: [{name:"Almizcle"},{name:"Sándalo"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  MAISON FRANCIS KURKDJIAN  (1 perfume – verified)
  // ═══════════════════════════════════════
  {
    id: "mfk-baccarat-rouge-540", name: "Baccarat Rouge 540", brand: "Maison Francis Kurkdjian", launchYear: 2015, perfumer: "Francis Kurkdjian",
    type: "Unisex", season: "Invierno",
    description: "La fragancia más comentada del siglo XXI. Azafrán, jazmín y cedro sobre Amberwood: una estela inconfundible.",
    image: IMG(33519), images: [IMG(33519)], averageRating: 4.9, price: 325,
    notes: { top: [{name:"Azafrán"},{name:"Jazmín"}], heart: [{name:"Amberwood"},{name:"Ámbar Gris"}], base: [{name:"Resina de Abeto"},{name:"Cedro"}] },
    reviews: [{ id:"r3", rating:5, season:"Invierno" as Review["season"], longevity:5, projection:5, versatility:5, userName:"Luca B.", comment:"Sobrenatural. Todos preguntan qué llevas.", date:"2024-02-10" }]
  },

  // ═══════════════════════════════════════
  //  LE LABO  (1 perfume – verified)
  // ═══════════════════════════════════════
  {
    id: "le-labo-santal-33", name: "Santal 33", brand: "Le Labo", launchYear: 2011, perfumer: "Frank Voelkl",
    type: "Unisex", season: "Otoño",
    description: "El perfume generacional. Sándalo ahumado, iris y cuero en la fragancia más reconocible de la década.",
    image: IMG(12201), images: [IMG(12201)], averageRating: 4.9, price: 322,
    notes: { top: [{name:"Cardamomo"},{name:"Acorde de Violeta"}], heart: [{name:"Iris"},{name:"Ambrox"}], base: [{name:"Sándalo"},{name:"Cuero"},{name:"Cedro"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  BYREDO  (1 perfume – verified)
  // ═══════════════════════════════════════
  {
    id: "byredo-bal-dafrique", name: "Bal d'Afrique", brand: "Byredo", launchYear: 2009, perfumer: "Jérôme Epinette",
    type: "Unisex", season: "Verano",
    description: "Una noche de baile en África. Caléndula, violeta y cedro en una danza sensorial.",
    image: IMG(6458), images: [IMG(6458)], averageRating: 4.6, price: 255,
    notes: { top: [{name:"Bergamota"},{name:"Caléndula"}], heart: [{name:"Violeta"},{name:"Rosa"},{name:"Neroli"}], base: [{name:"Cedro"},{name:"Vetiver"},{name:"Almizcle"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  MUGLER  (2 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "mugler-alien", name: "Alien Eau de Parfum", brand: "Mugler", launchYear: 2005, perfumer: "Dominique Ropion",
    type: "Femenino", season: "Invierno",
    description: "Un talismán de otro mundo. Jazmín blanco y madera de cachemira en ámbar blanco hipnótico.",
    image: IMG(707), images: [IMG(707)], averageRating: 4.6, price: 125,
    notes: { top: [{name:"Jazmín Sambac"}], heart: [{name:"Madera de Cachemira"}], base: [{name:"Ámbar Blanco"}] },
    reviews: []
  },
  {
    id: "mugler-angel", name: "Angel Eau de Parfum", brand: "Mugler", launchYear: 1992, perfumer: "Olivier Cresp",
    type: "Femenino", season: "Invierno",
    description: "La fragancia que inventó la gourmandería. Chocolate, caramelo y pachulí.",
    image: IMG(704), images: [IMG(704)], averageRating: 4.3, price: 110,
    notes: { top: [{name:"Bergamota"},{name:"Melón"}], heart: [{name:"Miel"},{name:"Caramelo"},{name:"Chocolate"}], base: [{name:"Pachulí"},{name:"Vainilla"},{name:"Almizcle"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  VERSACE  (2 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "versace-eros", name: "Eros Eau de Toilette", brand: "Versace", launchYear: 2012, perfumer: "Olivier Cresp",
    type: "Masculino", season: "Primavera",
    description: "El dios del amor griego en frasco turquesa. Menta, geranio y haba tonka sobre ébano.",
    image: IMG(16657), images: [IMG(16657)], averageRating: 4.4, price: 85,
    notes: { top: [{name:"Menta"},{name:"Manzana Verde"},{name:"Limoncello"}], heart: [{name:"Geranio"},{name:"Haba Tonka"}], base: [{name:"Ébano"},{name:"Musgo de Roble"},{name:"Vainilla"}] },
    reviews: []
  },
  {
    id: "versace-bright-crystal", name: "Bright Crystal", brand: "Versace", launchYear: 2006, perfumer: "Alberto Morillas",
    type: "Femenino", season: "Primavera",
    description: "Límpida y fresca como el cristal. Granada, magnolia y almizcle para el día a día.",
    image: IMG(632), images: [IMG(632)], averageRating: 4.3, price: 80,
    notes: { top: [{name:"Granada"},{name:"Yuzu"},{name:"Flor de Loto"}], heart: [{name:"Magnolia"},{name:"Peonia"}], base: [{name:"Almizcle de Ámbar"},{name:"Mahogany"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  DOLCE & GABBANA  (2 perfumes – verified)
  // ═══════════════════════════════════════
  {
    id: "dg-light-blue", name: "Light Blue Eau de Toilette", brand: "Dolce & Gabbana", launchYear: 2001, perfumer: "Olivier Cresp",
    type: "Femenino", season: "Verano",
    description: "El Mediterráneo en verano. Limón siciliano, manzana y bambú.",
    image: IMG(485), images: [IMG(485)], averageRating: 4.4, price: 75,
    notes: { top: [{name:"Limón Siciliano"},{name:"Manzana"},{name:"Cedro"}], heart: [{name:"Bambú"},{name:"Jazmín"},{name:"Gardenia"}], base: [{name:"Cedro"},{name:"Almizcle"},{name:"Ámbar"}] },
    reviews: []
  },
  {
    id: "dg-the-one", name: "The One Eau de Parfum", brand: "Dolce & Gabbana", launchYear: 2008, perfumer: "Olivier Polge",
    type: "Masculino", season: "Invierno",
    description: "Cálido, especiado y misterioso. Tabaco, jengibre y sándalo.",
    image: IMG(31909), images: [IMG(31909)], averageRating: 4.5, price: 95,
    notes: { top: [{name:"Pomelo"},{name:"Albahaca"},{name:"Jengibre"}], heart: [{name:"Cardamomo"},{name:"Naranja"}], base: [{name:"Tabaco"},{name:"Cedro"},{name:"Ámbar"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  HUGO BOSS  (1 perfume – verified)
  // ═══════════════════════════════════════
  {
    id: "boss-bottled", name: "Boss Bottled Eau de Parfum", brand: "Hugo Boss", launchYear: 2020, perfumer: "Jean-Christophe Hérault",
    type: "Masculino", season: "Otoño",
    description: "El clásico rejuvenecido. Manzana fresca, sándalo y pachulí.",
    image: IMG(62564), images: [IMG(62564)], averageRating: 4.3, price: 80,
    notes: { top: [{name:"Manzana"},{name:"Bergamota"}], heart: [{name:"Canela"},{name:"Clavel"}], base: [{name:"Sándalo"},{name:"Vetiver"},{name:"Cedro"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  BURBERRY  (1 perfume – verified)
  // ═══════════════════════════════════════
  {
    id: "burberry-her", name: "Her Eau de Parfum", brand: "Burberry", launchYear: 2018, perfumer: "Francis Kurkdjian",
    type: "Femenino", season: "Otoño",
    description: "Una metrópolis en frasco. Frutos del bosque sobre violeta y jazmín.",
    image: IMG(51617), images: [IMG(51617)], averageRating: 4.4, price: 115,
    notes: { top: [{name:"Fresas"},{name:"Grosellas"},{name:"Zarzamoras"}], heart: [{name:"Violeta"},{name:"Jazmín"}], base: [{name:"Almizcle"},{name:"Ámbar"},{name:"Sándalo"}] },
    reviews: []
  },

  // ═══════════════════════════════════════
  //  VALENTINO  (1 perfume – verified)
  // ═══════════════════════════════════════
  {
    id: "valentino-born-in-roma", name: "Born In Roma Donna", brand: "Valentino", launchYear: 2019, perfumer: "Marie Salamagne",
    type: "Femenino", season: "Primavera",
    description: "Roma en primavera: jazmín, vainilla romana y bourbon.",
    image: IMG(55805), images: [IMG(55805)], averageRating: 4.4, price: 130,
    notes: { top: [{name:"Pimienta Rosa"},{name:"Bergamota"}], heart: [{name:"Jazmín"},{name:"Heliotropo"}], base: [{name:"Vainilla"},{name:"Incienso"},{name:"Cedro"}] },
    reviews: []
  },
];
