export type CatalogItem = {
  id: string;
  name: string;
  category: "watches" | "shoes" | "chocolates";
  description: string;
  price: number;
  features: string[];
};

export const catalog: CatalogItem[] = [
  {
    id: "watch-aurora",
    name: "Aurora Chronograph",
    category: "watches",
    description: "Stainless steel chronograph with sapphire crystal.",
    price: 489,
    features: ["Water resistant 10 ATM", "Swiss quartz movement", "2-year warranty"]
  },
  {
    id: "watch-midnight",
    name: "Midnight Automatic",
    category: "watches",
    description: "Automatic watch with exhibition case back and leather strap.",
    price: 629,
    features: ["Self-winding movement", "Power reserve 48h", "Customizable strap"]
  },
  {
    id: "shoe-glide",
    name: "Glide Runner X",
    category: "shoes",
    description: "Lightweight running shoe for daily training and races.",
    price: 129,
    features: ["Adaptive knit upper", "Energy-return midsole", "Outdoor traction outsole"]
  },
  {
    id: "shoe-heritage",
    name: "Heritage Leather Classic",
    category: "shoes",
    description: "Premium leather sneaker for everyday wear.",
    price: 159,
    features: ["Full-grain leather", "Removable comfort insole", "Anti-slip rubber sole"]
  },
  {
    id: "choco-trio",
    name: "Signature Chocolate Trio",
    category: "chocolates",
    description: "Box of 18 artisanal chocolates in three flavor families.",
    price: 39,
    features: ["Single-origin cacao", "No preservatives", "Handcrafted packaging"]
  },
  {
    id: "choco-velvet",
    name: "Velvet Ganache Bars",
    category: "chocolates",
    description: "Velvety ganache filled bars dipped in 70% dark chocolate.",
    price: 29,
    features: ["Ganache infused with vanilla bean", "Vegan-friendly option", "Ships chilled"]
  }
];
