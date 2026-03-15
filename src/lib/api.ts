import { Perfume, Review } from './mock-data';

// Todas las imágenes usan el CDN público de Fragrantica (fimgs.net)
// que sirve las fotos oficiales de cada frasco de perfume.
// Ejemplo: https://fimgs.net/mdimg/perfume/m.{ID}.jpg

export async function getRealPerfumes(): Promise<Perfume[]> {
  return REAL_WORLD_PERFUMES;
}

export async function getPerfumeById(id: string): Promise<Perfume | undefined> {
  return REAL_WORLD_PERFUMES.find(p => p.id === id);
}

const IMG = (id: number) => `https://fimgs.net/mdimg/perfume/m.${id}.jpg`;

export const REAL_WORLD_PERFUMES: Perfume[] = [

  // ════════════════════════════════════════
  //  DIOR
  // ════════════════════════════════════════
  {
    id: "dior-sauvage-edp", name: "Sauvage Eau de Parfum", brand: "Dior", launchYear: 2018, perfumer: "François Demachy",
    type: "Masculino", season: "Cualquiera",
    description: "Una estela poderosamente fresca y salvaje. La bergamota de Calabria choca contra un horizonte de ambroxan y vainilla. El número uno mundial de ventas masculinas.",
    image: IMG(31700), images: [IMG(31700)], averageRating: 4.8, price: 130,
    notes: { top: [{name:"Bergamota"},{name:"Pimienta"}], heart: [{name:"Lavanda"},{name:"Pimienta Sichuan"},{name:"Nuez Moscada"}], base: [{name:"Ambroxan"},{name:"Cedro"},{name:"Vainilla"}] },
    reviews: [{ id:"r1", rating:5, season:"Cualquiera" as Review["season"], longevity:5, projection:5, versatility:5, userName:"Carlos M.", comment:"El más vendido con razón. Proyección increíble.", date:"2024-01-15" }]
  },
  {
    id: "dior-sauvage-edt", name: "Sauvage Eau de Toilette", brand: "Dior", launchYear: 2015, perfumer: "François Demachy",
    type: "Masculino", season: "Verano",
    description: "El Sauvage original que redefinió la perfumería masculina. Bergamota explosiva y ambroxan limpio en un cóctel que enganchó al mundo entero.",
    image: IMG(28749), images: [IMG(28749)], averageRating: 4.7, price: 100,
    notes: { top: [{name:"Pimienta de Calabar"},{name:"Bergamota"}], heart: [{name:"Pimienta Sichuan"},{name:"Geranio"},{name:"Lavanda"}], base: [{name:"Ambroxan"},{name:"Cedro"},{name:"Vetiver"},{name:"Patchoulí"}] },
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
    image: IMG(4680), images: [IMG(4680)], averageRating: 4.8, price: 145,
    notes: { top: [{name:"Lavanda"},{name:"Bergamota"}], heart: [{name:"Iris"},{name:"Pera"}], base: [{name:"Vetiver"},{name:"Cedro"},{name:"Cuero"}] },
    reviews: []
  },
  {
    id: "miss-dior-edp", name: "Miss Dior Eau de Parfum", brand: "Dior", launchYear: 2017, perfumer: "François Demachy",
    type: "Femenino", season: "Primavera",
    description: "Chispeante, libre y apasionada. Rosa damascena, bergamota y almizcle blanco en una feminidad vibrante que celebra la libertad.",
    image: IMG(46843), images: [IMG(46843)], averageRating: 4.4, price: 140,
    notes: { top: [{name:"Bergamota"},{name:"Grosellas"}], heart: [{name:"Rosa Damascena"},{name:"Gardenia"}], base: [{name:"Almizcle Blanco"},{name:"Pachulí"},{name:"Sándalo"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  CHANEL
  // ════════════════════════════════════════
  {
    id: "chanel-no5-edp", name: "N°5 Eau de Parfum", brand: "Chanel", launchYear: 1921, perfumer: "Ernest Beaux",
    type: "Femenino", season: "Cualquiera",
    description: "El perfume más famoso de la historia. Aldehídos florales sobre una base de vetiver, sándalo y vainilla que redefinieron la femineidad del siglo XX.",
    image: IMG(1), images: [IMG(1)], averageRating: 4.6, price: 165,
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
    description: "La chica Chanel más atrevida. Bergamota y naranja estallan en una sensual rosa y jasmin, antes de caer en un pachulí cremoso.",
    image: IMG(46012), images: [IMG(46012)], averageRating: 4.7, price: 165,
    notes: { top: [{name:"Bergamota"},{name:"Naranja"}], heart: [{name:"Rosa"},{name:"Jazmín"}], base: [{name:"Pachulí"},{name:"Vetiver"},{name:"Almizcle Blanco"}] },
    reviews: []
  },
  {
    id: "chanel-chance-edp", name: "Chance Eau Tendre", brand: "Chanel", launchYear: 2010, perfumer: "Jacques Polge",
    type: "Femenino", season: "Primavera",
    description: "Ligera, cítrica y soñadora. Una pomelo radiante da paso a una rosa tenue y jazmín de agua sobre un fondo de cederwood.",
    image: IMG(9048), images: [IMG(9048)], averageRating: 4.5, price: 150,
    notes: { top: [{name:"Pomelo"},{name:"Cidro"}], heart: [{name:"Jacinto"},{name:"Rosa"},{name:"Jazmín"}], base: [{name:"Almizcle Blanco"},{name:"Iris"},{name:"Cedro"}] },
    reviews: []
  },
  {
    id: "chanel-allure-homme-sport", name: "Allure Homme Sport Eau Extrême", brand: "Chanel", launchYear: 2012, perfumer: "Jacques Polge",
    type: "Masculino", season: "Verano",
    description: "Maderas secas, sal marina y pimienta. La energía de un deporte de élite embotellada en un frascos limpio y deportivo.",
    image: IMG(16695), images: [IMG(16695)], averageRating: 4.5, price: 135,
    notes: { top: [{name:"Mandarina"},{name:"Pimienta"}], heart: [{name:"Tonka"},{name:"Sándalo"}], base: [{name:"Notas Amaderadas Secas"},{name:"Vetiver"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  YVES SAINT LAURENT
  // ════════════════════════════════════════
  {
    id: "ysl-libre-edp", name: "Libre Eau de Parfum", brand: "Yves Saint Laurent", launchYear: 2019, perfumer: "Anne Flipo & Carlos Benaim",
    type: "Femenino", season: "Otoño",
    description: "La fragancia de la libertad. Lavanda de Francia y flor de azahar de Marruecos en una fusión floral que define a la mujer libre y sin normas.",
    image: IMG(56077), images: [IMG(56077)], averageRating: 4.7, price: 135,
    notes: { top: [{name:"Lavanda"},{name:"Mandarina"},{name:"Petitgrain"}], heart: [{name:"Flor de Azahar"},{name:"Jazmín"}], base: [{name:"Vainilla"},{name:"Almizcle"},{name:"Ámbar Gris"}] },
    reviews: []
  },
  {
    id: "ysl-black-opium", name: "Black Opium Eau de Parfum", brand: "Yves Saint Laurent", launchYear: 2014, perfumer: "Nathalie Lorson, Marie Salamagne, Olivier Cresp & Honorine Blanc",
    type: "Femenino", season: "Invierno",
    description: "Sensual, adictivo y oscuro. El café negro y la vainilla se entrelazan con el jazmín blanco en un choque entre luz y sombra perfectamente equilibrado.",
    image: IMG(25606), images: [IMG(25606)], averageRating: 4.6, price: 125,
    notes: { top: [{name:"Pera"},{name:"Café Negro"}], heart: [{name:"Jazmín"},{name:"Flor de Cafeto"}], base: [{name:"Vainilla"},{name:"Pachulí"},{name:"Cedro"},{name:"Almizcle"}] },
    reviews: []
  },
  {
    id: "ysl-mon-paris", name: "Mon Paris Eau de Parfum", brand: "Yves Saint Laurent", launchYear: 2016, perfumer: "Dominique Ropion, Anne Flipo & Olivier Cresp",
    type: "Femenino", season: "Verano",
    description: "Un coup de foudre en frasco. Grosellas blancas y fresa dan paso a una peonia fresca sobre una base corazón de pachulí.",
    image: IMG(38705), images: [IMG(38705)], averageRating: 4.3, price: 120,
    notes: { top: [{name:"Fresa"},{name:"Grosellas"}], heart: [{name:"Peonia"},{name:"Rosa"},{name:"Jazmin blanco"}], base: [{name:"Almizcle Blanco"},{name:"Pachulí"}] },
    reviews: []
  },
  {
    id: "ysl-lhomme", name: "L'Homme Eau de Toilette", brand: "Yves Saint Laurent", launchYear: 2006, perfumer: "Anne Flipo",
    type: "Masculino", season: "Cualquiera",
    description: "El arquetipo del hombre YSL. Madera de sándalo y jengibre sobre una nota de cedro de Virginia con piel blanca y vainilla.",
    image: IMG(2503), images: [IMG(2503)], averageRating: 4.5, price: 95,
    notes: { top: [{name:"Jengibre"},{name:"Bergamota"}], heart: [{name:"Cardamomom"},{name:"Basilio"}], base: [{name:"Sándalo"},{name:"Cedro"},{name:"Piel"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  GIORGIO ARMANI
  // ════════════════════════════════════════
  {
    id: "armani-acqua-di-gio-absolu", name: "Acqua di Giò Absolu", brand: "Giorgio Armani", launchYear: 2018, perfumer: "Alberto Morillas",
    type: "Masculino", season: "Verano",
    description: "El mar de Pantelleria embotellado. Pimienta de Indonesia, bergamota y pachulí negro en un acorde marino profundo.",
    image: IMG(49793), images: [IMG(49793)], averageRating: 4.7, price: 115,
    notes: { top: [{name:"Bergamota"},{name:"Pimienta"}], heart: [{name:"Calone"},{name:"Notas Marinas"}], base: [{name:"Patchoulí Negro"},{name:"Almizcle"}] },
    reviews: []
  },
  {
    id: "armani-si-edp", name: "Sì Eau de Parfum", brand: "Giorgio Armani", launchYear: 2013, perfumer: "Christine Nagel",
    type: "Femenino", season: "Cualquiera",
    description: "El perfume del poder suave. Acorde de frambuesa, rosa centifolia y musgo de roble en un frascos contemporáneo y elegante.",
    image: IMG(20566), images: [IMG(20566)], averageRating: 4.5, price: 130,
    notes: { top: [{name:"Bergamota"},{name:"Frambuesa negra"}], heart: [{name:"Rosa"},{name:"Freesia"}], base: [{name:"Musgo de Roble"},{name:"Vainilla"},{name:"Almizcle"}] },
    reviews: []
  },
  {
    id: "armani-my-way-edp", name: "My Way Eau de Parfum", brand: "Giorgio Armani", launchYear: 2020, perfumer: "Carlos Benaim",
    type: "Femenino", season: "Primavera",
    description: "Un perfume que celebra los encuentros del mundo. Flor de azahar de Egipto, vainilla de Madagascar y madera de sándalo de Australia.",
    image: IMG(63186), images: [IMG(63186)], averageRating: 4.4, price: 125,
    notes: { top: [{name:"Bergamota"},{name:"Ylang Ylang"}], heart: [{name:"Flor de Azahar"},{name:"Rosa"}], base: [{name:"Sándalo"},{name:"Vainilla"},{name:"Cedro Blanco"}] },
    reviews: []
  },
  {
    id: "armani-code-absolu", name: "Armani Code Absolu", brand: "Giorgio Armani", launchYear: 2019, perfumer: "Loc Dong",
    type: "Masculino", season: "Invierno",
    description: "La seducción llevada al extremo. Cardamomo, albaricoque y vainilla en una composición orientalo-amaderada de intensidad sin igual.",
    image: IMG(57218), images: [IMG(57218)], averageRating: 4.6, price: 110,
    notes: { top: [{name:"Cardamomo"},{name:"Albaricoque"}], heart: [{name:"Flor de Naranja"},{name:"Jazmín"}], base: [{name:"Vainilla"},{name:"Madera"},{name:"Ámbar"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  PACO RABANNE
  // ════════════════════════════════════════
  {
    id: "paco-1-million", name: "1 Million", brand: "Paco Rabanne", launchYear: 2008, perfumer: "Christophe Raynaud, Olivier Pescheux & Michel Girard",
    type: "Masculino", season: "Otoño",
    description: "El lingote de oro de la perfumería. Mandarina sanguina, canela y cuero combinados en el perfume más audaz y exitoso de Rabanne.",
    image: IMG(3747), images: [IMG(3747)], averageRating: 4.4, price: 110,
    notes: { top: [{name:"Mandarina Sanguina"},{name:"Toronja"},{name:"Menta"}], heart: [{name:"Canela"},{name:"Rosa"}], base: [{name:"Cuero"},{name:"Ámbar"},{name:"Pachulí"}] },
    reviews: []
  },
  {
    id: "paco-lady-million", name: "Lady Million", brand: "Paco Rabanne", launchYear: 2010, perfumer: "Béatrice Piquet",
    type: "Femenino", season: "Cualquiera",
    description: "Un diamante de fragancia. Neroli árabe, jazmín blanco y miel sobre un corazón de rosa damasco que garantiza todos los cumplidos.",
    image: IMG(9295), images: [IMG(9295)], averageRating: 4.3, price: 105,
    notes: { top: [{name:"Naranja"},{name:"Frambuesa"},{name:"Neroli"}], heart: [{name:"Rosa Damasco"},{name:"Jazmín"},{name:"Miel"}], base: [{name:"Patchoulí"},{name:"Madera de Cedro"}] },
    reviews: []
  },
  {
    id: "paco-invictus", name: "Invictus Aqua", brand: "Paco Rabanne", launchYear: 2018, perfumer: "Loc Dong",
    type: "Masculino", season: "Verano",
    description: "La versión más fresca e intensa de Invictus. Menta marina y mandarina gelée crean una frescura oceánica perfecta para el verano.",
    image: IMG(50015), images: [IMG(50015)], averageRating: 4.4, price: 95,
    notes: { top: [{name:"Mandarina Gelée"},{name:"Menta Marina"}], heart: [{name:"Hoja de Violeta"},{name:"Calone"}], base: [{name:"Almizcle"},{name:"Ámbar Gris"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  JEAN PAUL GAULTIER
  // ════════════════════════════════════════
  {
    id: "jpg-le-male", name: "Le Male", brand: "Jean Paul Gaultier", launchYear: 1995, perfumer: "Francis Kurkdjian",
    type: "Masculino", season: "Verano",
    description: "El icono de la perfumería masculina de los 90. El contraste entre la lavanda fresca y la vainilla cálida sigue siendo tan adictivo como siempre.",
    image: IMG(430), images: [IMG(430)], averageRating: 4.5, price: 85,
    notes: { top: [{name:"Lavanda"},{name:"Menta"},{name:"Bergamota"}], heart: [{name:"Canela"},{name:"Flor de Azahar"},{name:"Cardamomo"}], base: [{name:"Vainilla"},{name:"Haba Tonka"},{name:"Sándalo"}] },
    reviews: []
  },
  {
    id: "jpg-scandal", name: "Scandal", brand: "Jean Paul Gaultier", launchYear: 2017, perfumer: "Quentin Bisch & Dora Baghriche",
    type: "Femenino", season: "Otoño",
    description: "Miel y grafito. Una combinación imposible que funciona: la miel le da dulzura, el gaiacwood la oscurece y el pachulí le pone carácter.",
    image: IMG(47760), images: [IMG(47760)], averageRating: 4.4, price: 100,
    notes: { top: [{name:"Naranja Sanguina"},{name:"Mandarina"}], heart: [{name:"Gardenia"},{name:"Miel"}], base: [{name:"Pachulí"},{name:"Guayaco"},{name:"Almizcle"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  TOM FORD
  // ════════════════════════════════════════
  {
    id: "tf-black-orchid", name: "Black Orchid", brand: "Tom Ford", launchYear: 2006, perfumer: "David Apel",
    type: "Unisex", season: "Invierno",
    description: "Oscuro, rico y magnético. Trufa, orquídea negra y cacao crean un perfume que hipnotiza a todos a tu alrededor.",
    image: IMG(1018), images: [IMG(1018)], averageRating: 4.6, price: 195,
    notes: { top: [{name:"Trufa"},{name:"Grosellas Negras"},{name:"Ylang-Ylang"}], heart: [{name:"Orquídea"},{name:"Especias"},{name:"Loto"}], base: [{name:"Pachulí"},{name:"Chocolate"},{name:"Vainilla"}] },
    reviews: []
  },
  {
    id: "tf-tobacco-vanille", name: "Tobacco Vanille", brand: "Tom Ford", launchYear: 2007, perfumer: "Olivier Gillotin",
    type: "Unisex", season: "Invierno",
    description: "El lujo oriental definitivo. Un interior de club londinés: tabaco suave, vainilla obscura y especias de Oriente en un abrazo caliente irresistible.",
    image: IMG(1825), images: [IMG(1825)], averageRating: 4.8, price: 395,
    notes: { top: [{name:"Tabaco"},{name:"Especias"}], heart: [{name:"Vainilla"},{name:"Cacao"},{name:"Haba Tonka"}], base: [{name:"Frutos Secos"},{name:"Maderas"}] },
    reviews: []
  },
  {
    id: "tf-lost-cherry", name: "Lost Cherry", brand: "Tom Ford", launchYear: 2018, perfumer: "Givaudan",
    type: "Unisex", season: "Invierno",
    description: "Una cereza madura en un licor de kirsch. Dulce, oscura y sensual. Tom Ford lleva la gourmandería a un territorio verdaderamente adulto.",
    image: IMG(51299), images: [IMG(51299)], averageRating: 4.6, price: 420,
    notes: { top: [{name:"Cereza Amarga"},{name:"Licor de Kirsch"}], heart: [{name:"Almendra"},{name:"Rosa Turca"}], base: [{name:"Palo Santo"},{name:"Vainilla"},{name:"Bálsamo de Tolú"}] },
    reviews: []
  },
  {
    id: "tf-oud-wood", name: "Oud Wood", brand: "Tom Ford", launchYear: 2007, perfumer: "Pierre Negrin",
    type: "Unisex", season: "Invierno",
    description: "El oud moderno y accesible. Una madera exótica de Oriente suavizada con sándalo cremoso y ámbar gris.",
    image: IMG(1823), images: [IMG(1823)], averageRating: 4.7, price: 395,
    notes: { top: [{name:"Cardamomo"},{name:"Nogal chinés"},{name:"Pimienta China"}], heart: [{name:"Oud"},{name:"Sándalo"},{name:"Vetiver"}], base: [{name:"Ámbar Gris"},{name:"Vaina de Tonka"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  LANCÔME
  // ════════════════════════════════════════
  {
    id: "lancome-la-vie-est-belle", name: "La Vie Est Belle", brand: "Lancôme", launchYear: 2012, perfumer: "Olivier Polge, Dominique Ropion & Anne Flipo",
    type: "Femenino", season: "Primavera",
    description: "La felicidad en frasco. Un iris iris untuoso y un praliné dulce crean el perfume de la sonrisa fácil y del día que empieza bien.",
    image: IMG(14982), images: [IMG(14982)], averageRating: 4.5, price: 130,
    notes: { top: [{name:"Grosellas"},{name:"Pera"}], heart: [{name:"Iris"},{name:"Jazmín"},{name:"Flor de Azahar"}], base: [{name:"Praliné"},{name:"Vainilla"},{name:"Pachulí"}] },
    reviews: []
  },
  {
    id: "lancome-idole", name: "Idôle Eau de Parfum", brand: "Lancôme", launchYear: 2019, perfumer: "Dominique Ropion & Anne Flipo",
    type: "Femenino", season: "Cualquiera",
    description: "Para quienes lideran con el corazón. Una rosa fresca y audaz sobre un almizcle moderno que dura todo el día.",
    image: IMG(60059), images: [IMG(60059)], averageRating: 4.3, price: 110,
    notes: { top: [{name:"Rosa"},{name:"Bergamota"}], heart: [{name:"Jazmín"},{name:"Iris"}], base: [{name:"Almizcle"},{name:"Haba Tonka"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  CAROLINA HERRERA
  // ════════════════════════════════════════
  {
    id: "ch-good-girl", name: "Good Girl", brand: "Carolina Herrera", launchYear: 2016, perfumer: "Louise Turner",
    type: "Femenino", season: "Otoño",
    description: "El stiletto negro más adictivo de la perfumería. Café, jazmín sambac y haba tonka en una explosión de dualidad femenina.",
    image: IMG(39681), images: [IMG(39681)], averageRating: 4.6, price: 145,
    notes: { top: [{name:"Café"},{name:"Almendra"}], heart: [{name:"Jazmín Sambac"},{name:"Nardos"}], base: [{name:"Haba Tonka"},{name:"Cacao"},{name:"Vainilla"}] },
    reviews: []
  },
  {
    id: "ch-212-vip", name: "212 VIP", brand: "Carolina Herrera", launchYear: 2010, perfumer: "Cecile Mattar Zagoranski",
    type: "Femenino", season: "Cualquiera",
    description: "Lista para la fiesta. Una miel jugosa, vainilla cremosa y notas de champagne crean el aura de la VIP de la sala.",
    image: IMG(9875), images: [IMG(9875)], averageRating: 4.3, price: 100,
    notes: { top: [{name:"Miel"},{name:"Champagne"}], heart: [{name:"Gardenias"},{name:"Flor de Camellia"}], base: [{name:"Vainilla"},{name:"Almizcle"},{name:"Madera"}] },
    reviews: []
  },
  {
    id: "ch-bad-boy", name: "Bad Boy Eau de Toilette", brand: "Carolina Herrera", launchYear: 2019, perfumer: "Louise Turner",
    type: "Masculino", season: "Otoño",
    description: "La dualidad masculina perfecta. Le Male responde con salvia y pimienta negra, un chico malo que en el fondo es un caballero.",
    image: IMG(57568), images: [IMG(57568)], averageRating: 4.4, price: 110,
    notes: { top: [{name:"Pimienta Verde"},{name:"Bergamota"},{name:"Manzana"}], heart: [{name:"Salvia Rara"},{name:"Cedro"}], base: [{name:"Elemi"},{name:"Vetiver"},{name:"Ámbar"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  GIVENCHY
  // ════════════════════════════════════════
  {
    id: "givenchy-irresistible", name: "Irresistible Eau de Parfum", brand: "Givenchy", launchYear: 2020, perfumer: "Dominique Ropion & Anne Flipo",
    type: "Femenino", season: "Primavera",
    description: "Una rosa que brilla sin esfuerzo. Ligera, chispeante y llena de alegría contagiosa.",
    image: IMG(62726), images: [IMG(62726)], averageRating: 4.4, price: 120,
    notes: { top: [{name:"Pomelo"},{name:"Bergamota"}], heart: [{name:"Rosa"},{name:"Magnolia"}], base: [{name:"Almizcle Blanco"},{name:"Cedro"}] },
    reviews: []
  },
  {
    id: "givenchy-linterdit", name: "L'Interdit Eau de Parfum", brand: "Givenchy", launchYear: 2018, perfumer: "Dominique Ropion & Anne Flipo",
    type: "Femenino", season: "Invierno",
    description: "Prohibido pero irresistible. Naranja blanca y jasmin sobre un fondo de patchoulí y vetiver que te pone en la lista negra de todos.",
    image: IMG(52073), images: [IMG(52073)], averageRating: 4.5, price: 130,
    notes: { top: [{name:"Naranja Blanca"},{name:"Pera Rosa"}], heart: [{name:"Jazmín"},{name:"Tiglio"}], base: [{name:"Vetiver"},{name:"Pachulí"},{name:"Sándalo"}] },
    reviews: []
  },
  {
    id: "givenchy-gentleman", name: "Gentleman Eau de Parfum", brand: "Givenchy", launchYear: 2017, perfumer: "Nathalie Lorson",
    type: "Masculino", season: "Invierno",
    description: "El contraste entre el iris polvoriento y el pachulí terroso. Un elegante juego de tensiones masculinas.",
    image: IMG(47462), images: [IMG(47462)], averageRating: 4.6, price: 115,
    notes: { top: [{name:"Pimienta"},{name:"Bergamota"}], heart: [{name:"Iris"},{name:"Lavanda"}], base: [{name:"Pachulí"},{name:"Sándalo"},{name:"Vetiver"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  CREED
  // ════════════════════════════════════════
  {
    id: "creed-aventus", name: "Aventus", brand: "Creed", launchYear: 2010, perfumer: "Olivier Creed & Erwin Creed",
    type: "Masculino", season: "Primavera",
    description: "Inspirado en Napoleón Bonaparte. Piña, abedul ahumado y musgo de roble crean la fragancia del éxito y la victoria.",
    image: IMG(9828), images: [IMG(9828)], averageRating: 4.7, price: 365,
    notes: { top: [{name:"Piña"},{name:"Bergamota"},{name:"Grosella Negra"}], heart: [{name:"Abedul"},{name:"Jazmín"},{name:"Rosa"}], base: [{name:"Almizcle"},{name:"Musgo de Roble"},{name:"Ámbar Gris"}] },
    reviews: []
  },
  {
    id: "creed-silver-mountain-water", name: "Silver Mountain Water", brand: "Creed", launchYear: 1995, perfumer: "Olivier Creed",
    type: "Unisex", season: "Primavera",
    description: "El aire puro de los Alpes suizos. Un fougère acuático de bergamota, té verde y almizcle que captura la pureza de la montaña.",
    image: IMG(573), images: [IMG(573)], averageRating: 4.5, price: 340,
    notes: { top: [{name:"Bergamota"},{name:"Neroli"}], heart: [{name:"Té Verde"},{name:"Loto"}], base: [{name:"Almizcle de Cachemira"},{name:"Sándalo"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  MAISON FRANCIS KURKDJIAN
  // ════════════════════════════════════════
  {
    id: "mfk-baccarat-rouge-540", name: "Baccarat Rouge 540", brand: "Maison Francis Kurkdjian", launchYear: 2015, perfumer: "Francis Kurkdjian",
    type: "Unisex", season: "Invierno",
    description: "La fragancia más comentada del siglo XXI. Azafrán, jazmín y cedro sobre un corazón de Amberwood que deja una estela inconfundible.",
    image: IMG(33519), images: [IMG(33519)], averageRating: 4.9, price: 325,
    notes: { top: [{name:"Azafrán"},{name:"Jazmín"}], heart: [{name:"Amberwood"},{name:"Ámbar Gris"}], base: [{name:"Resina de Abeto"},{name:"Cedro"}] },
    reviews: [{ id:"r3", rating:5, season:"Invierno" as Review["season"], longevity:5, projection:5, versatility:5, userName:"Luca B.", comment:"Sobrenatural. Todos preguntan qué llevas.", date:"2024-02-10" }]
  },
  {
    id: "mfk-grand-soir", name: "Grand Soir", brand: "Maison Francis Kurkdjian", launchYear: 2016, perfumer: "Francis Kurkdjian",
    type: "Unisex", season: "Invierno",
    description: "Un ámbar opulento y rico, suntuosamente amaderado. Para las grandes ocasiones donde nada es demasiado.",
    image: IMG(37900), images: [IMG(37900)], averageRating: 4.6, price: 285,
    notes: { top: [{name:"Cardamomo"},{name:"Bergamota"}], heart: [{name:"Ámbar"},{name:"Copal"}], base: [{name:"Vainilla"},{name:"Labdano"},{name:"Benzoína"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  LE LABO
  // ════════════════════════════════════════
  {
    id: "le-labo-santal-33", name: "Santal 33", brand: "Le Labo", launchYear: 2011, perfumer: "Frank Voelkl",
    type: "Unisex", season: "Otoño",
    description: "El perfume generacional. Sándalo ahumado, violeta cardamomo y cuero en la fragancia más reconocible e imitada de la última década.",
    image: IMG(12201), images: [IMG(12201)], averageRating: 4.9, price: 322,
    notes: { top: [{name:"Cardamomo"},{name:"Acorde de Violeta"}], heart: [{name:"Iris"},{name:"Ambrox"}], base: [{name:"Sándalo"},{name:"Cuero"},{name:"Cedro"}] },
    reviews: []
  },
  {
    id: "le-labo-rose-31", name: "Rose 31", brand: "Le Labo", launchYear: 2006, perfumer: "Daphné Bugey",
    type: "Unisex", season: "Primavera",
    description: "Una rosa dominada por los hombres. Cumin, cedro y pacholí masculinizan la rosa más seductora que hayas encontrado.",
    image: IMG(2834), images: [IMG(2834)], averageRating: 4.5, price: 300,
    notes: { top: [{name:"Comino"},{name:"Limón"}], heart: [{name:"Rosa"},{name:"Geranio"}], base: [{name:"Cedro"},{name:"Pachulí"},{name:"Almizcle"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  BYREDO
  // ════════════════════════════════════════
  {
    id: "byredo-bal-dafrique", name: "Bal d'Afrique", brand: "Byredo", launchYear: 2009, perfumer: "Jérôme Epinette",
    type: "Unisex", season: "Verano",
    description: "Una noche de baile en África. Caléndula, violeta y cedro en una danza sensorial ilimitada.",
    image: IMG(7156), images: [IMG(7156)], averageRating: 4.6, price: 255,
    notes: { top: [{name:"Bergamota"},{name:"Caléndula"}], heart: [{name:"Violeta"},{name:"Rosa"},{name:"Neroli"}], base: [{name:"Cedro"},{name:"Vetiver"},{name:"Almizcle"}] },
    reviews: []
  },
  {
    id: "byredo-blanche", name: "Blanche", brand: "Byredo", launchYear: 2007, perfumer: "Jérôme Epinette",
    type: "Femenino", season: "Primavera",
    description: "La pureza máxima. Pétalos de rosa blanca, almizcle de seda y sándalo se fusionan en una fragancia casi invisible pero completamente irresistible.",
    image: IMG(4927), images: [IMG(4927)], averageRating: 4.5, price: 240,
    notes: { top: [{name:"Notas Empolvadas"},{name:"Rosa"}], heart: [{name:"Iris"},{name:"Peonia"}], base: [{name:"Almizcle de Seda"},{name:"Sándalo"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  MUGLER
  // ════════════════════════════════════════
  {
    id: "mugler-alien", name: "Alien Eau de Parfum", brand: "Mugler", launchYear: 2005, perfumer: "Dominique Ropion & Laurent Bruyere",
    type: "Femenino", season: "Invierno",
    description: "Un talismán olfativo de otro mundo. Jazmín blanco etéreo y madera de cachemira en un ámbar blanco hipnótico.",
    image: IMG(707), images: [IMG(707)], averageRating: 4.6, price: 125,
    notes: { top: [{name:"Jazmín Sambac"}], heart: [{name:"Madera de Cachemira"}], base: [{name:"Ámbar Blanco"}] },
    reviews: []
  },
  {
    id: "mugler-angel", name: "Angel Eau de Parfum", brand: "Mugler", launchYear: 1992, perfumer: "Olivier Cresp & Yves de Chiris",
    type: "Femenino", season: "Invierno",
    description: "La fragancia que inventó la gourmandería en perfumería. Chocolate, caramelo y pachulí en combinación celestial y terrosa.",
    image: IMG(706), images: [IMG(706)], averageRating: 4.3, price: 110,
    notes: { top: [{name:"Bergamota"},{name:"Melón"},{name:"Pomelo"}], heart: [{name:"Miel"},{name:"Caramelo"},{name:"Chocolate"}], base: [{name:"Pachulí"},{name:"Vainilla"},{name:"Almizcle"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  VERSACE
  // ════════════════════════════════════════
  {
    id: "versace-eros", name: "Eros Eau de Toilette", brand: "Versace", launchYear: 2012, perfumer: "Olivier Cresp",
    type: "Masculino", season: "Primavera",
    description: "El dios del amor griego en frasco turquesa. Menta hierbabuena sobre un corazón de geranio tonka y un fondo de madera de ébano.",
    image: IMG(15940), images: [IMG(15940)], averageRating: 4.4, price: 85,
    notes: { top: [{name:"Menta"},{name:"Manzana Verde"},{name:"Limoncello"}], heart: [{name:"Geranio"},{name:"Semillas de Ambrette"},{name:"Haba Tonka"}], base: [{name:"Ébano"},{name:"Musgo de Roble"},{name:"Vainilla"}] },
    reviews: []
  },
  {
    id: "versace-bright-crystal", name: "Bright Crystal", brand: "Versace", launchYear: 2006, perfumer: "Alberto Morillas",
    type: "Femenino", season: "Primavera",
    description: "Límpida y fresca como el cristal. Granada, magnolia y almizcle de ámbar en una fragancia ligera y luminosa para el día a día.",
    image: IMG(2083), images: [IMG(2083)], averageRating: 4.3, price: 80,
    notes: { top: [{name:"Granada"},{name:"Yuzu"},{name:"Flor de Loto"}], heart: [{name:"Magnolia"},{name:"Flor de Peonía"}], base: [{name:"Almizcle de Ámbar"},{name:"Mahogany"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  DOLCE & GABBANA
  // ════════════════════════════════════════
  {
    id: "dg-light-blue-fem", name: "Light Blue Eau de Toilette (Mujer)", brand: "Dolce & Gabbana", launchYear: 2001, perfumer: "Oliver Giacobetti",
    type: "Femenino", season: "Verano",
    description: "El mar Mediterráneo en verano. Limón siciliano, manzana Granny Smith y bambú crean la languidez perfecta.",
    image: IMG(485), images: [IMG(485)], averageRating: 4.4, price: 75,
    notes: { top: [{name:"Limón de Sicilia"},{name:"Manzana"},{name:"Cedarwood"}], heart: [{name:"Bambú"},{name:"Jazmín"},{name:"Gardenia Blanca"}], base: [{name:"Cedro"},{name:"Almizcle"},{name:"Ámbar"}] },
    reviews: []
  },
  {
    id: "dg-the-one-masc", name: "The One Eau de Parfum (Hombre)", brand: "Dolce & Gabbana", launchYear: 2008, perfumer: "Olivier Polge",
    type: "Masculino", season: "Invierno",
    description: "Cálido, especiado y misterioso. Tabaco, jengibre y sándalo firmados por uno de los maestros perfumistas vivos.",
    image: IMG(4183), images: [IMG(4183)], averageRating: 4.5, price: 95,
    notes: { top: [{name:"Pomelo"},{name:"Albahaca"},{name:"Jengibre"}], heart: [{name:"Cardamomo"},{name:"Ozone"},{name:"Naranja"}], base: [{name:"Tabaco"},{name:"Cedro"},{name:"Ámbar"},{name:"Musgo"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  HUGO BOSS
  // ════════════════════════════════════════
  {
    id: "boss-bottled", name: "Boss Bottled Eau de Parfum", brand: "Hugo Boss", launchYear: 2018, perfumer: "Anne Flipo",
    type: "Masculino", season: "Otoño",
    description: "El clásico rejuvenecido. La manzana fresca y el sándalo firme definen el éxito masculino.",
    image: IMG(50001), images: [IMG(50001)], averageRating: 4.3, price: 80,
    notes: { top: [{name:"Manzana"},{name:"Bergamota"}], heart: [{name:"Geranio"},{name:"Canela"},{name:"Clavel"}], base: [{name:"Sándalo"},{name:"Vetiver"},{name:"Cedro"}] },
    reviews: []
  },
  {
    id: "boss-the-scent", name: "The Scent Absolute", brand: "Hugo Boss", launchYear: 2018, perfumer: "IFF",
    type: "Masculino", season: "Invierno",
    description: "La seducción en estado más puro. Jengibre japonés, incienso y cuero en una composición absolutamente adictiva.",
    image: IMG(51055), images: [IMG(51055)], averageRating: 4.4, price: 90,
    notes: { top: [{name:"Jengibre"},{name:"Pimienta"}], heart: [{name:"Incienso"},{name:"Gaiacwood"}], base: [{name:"Cuero"},{name:"Ámbar"},{name:"Almizcle"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  BURBERRY
  // ════════════════════════════════════════
  {
    id: "burberry-her-edp", name: "Her Eau de Parfum", brand: "Burberry", launchYear: 2018, perfumer: "Francis Kurkdjian",
    type: "Femenino", season: "Otoño",
    description: "Una metrópolis en frasco. Frutos del bosque londinenses sobre un corazón de violeta y jazmín. Fresco y urbano a la vez.",
    image: IMG(52079), images: [IMG(52079)], averageRating: 4.4, price: 115,
    notes: { top: [{name:"Fresas"},{name:"Grosellas"},{name:"Zarzamoras"}], heart: [{name:"Violeta"},{name:"Orris"},{name:"Jazmín"}], base: [{name:"Almizcle"},{name:"Ámbar"},{name:"Sándalo"}] },
    reviews: []
  },
  {
    id: "burberry-brit-fem", name: "Brit for Her Eau de Toilette", brand: "Burberry", launchYear: 2003, perfumer: "Michael Pickthall",
    type: "Femenino", season: "Primavera",
    description: "British chic en su mejor expresión. Pera luminosa, almendra dulce y almizcle blanco con el sello atemporal de Burberry.",
    image: IMG(550), images: [IMG(550)], averageRating: 4.1, price: 70,
    notes: { top: [{name:"Pomelo"},{name:"Mandarina"},{name:"Pera"}], heart: [{name:"Magnolia"},{name:"Peonia"},{name:"Almendra"}], base: [{name:"Vainilla"},{name:"Almizcle Blanco"},{name:"Cedro"}] },
    reviews: []
  },

  // ════════════════════════════════════════
  //  VALENTINO
  // ════════════════════════════════════════
  {
    id: "valentino-born-in-roma", name: "Born In Roma Donna", brand: "Valentino", launchYear: 2019, perfumer: "Marie Salamagne",
    type: "Femenino", season: "Primavera",
    description: "Roma en primavera: jazmín italiano, vainilla romana y bourbon. La maravilla de una ciudad eterna capturada en cada gota.",
    image: IMG(57197), images: [IMG(57197)], averageRating: 4.4, price: 130,
    notes: { top: [{name:"Pimienta Rosa"},{name:"Bergamota"}], heart: [{name:"Jazmín"},{name:"Heliotropo"}], base: [{name:"Vainilla"},{name:"Incienso"},{name:"Cedro"}] },
    reviews: []
  },
  {
    id: "valentino-voce-viva", name: "Voce Viva Eau de Parfum", brand: "Valentino", launchYear: 2021, perfumer: "Bruno Jovanovic",
    type: "Femenino", season: "Cualquiera",
    description: "Viva la voz, viva la mujer. Bergamota fresca y bergamota calabresa acompañan uva de Calabria y heliotropo en un acorde de jazmín.",
    image: IMG(66100), images: [IMG(66100)], averageRating: 4.3, price: 120,
    notes: { top: [{name:"Bergamota"},{name:"Uva Garganega"}], heart: [{name:"Jazmín"},{name:"Heliotropo"}], base: [{name:"Vainilla"},{name:"Almizcle"}] },
    reviews: []
  },
];
