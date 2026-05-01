import necklace from "@/assets/p-necklace.jpg";
import earrings from "@/assets/p-earrings.jpg";
import bangles from "@/assets/p-bangles.jpg";
import perfume1 from "@/assets/p-perfume1.jpg";
import perfume2 from "@/assets/p-perfume2.jpg";
import perfume3 from "@/assets/myway.jpg";
import clutch from "@/assets/p-clutch.jpg";
import tote from "@/assets/p-tote.jpg";
import bag from "@/assets/bag.jpg";


export type Category = "jewelry" | "perfume" | "bags";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  tag?: string;
};

export const products: Product[] = [
  { id: "meskel-cross", name: "Meskel Cross Necklace", price: 189, category: "jewelry", image: necklace, description: "A delicate hand-finished gold filigree cross, inspired by the Meskel celebration. Featherlight on the skin.", tag: "Bestseller" },
  { id: "lalibela-earrings", name: "Lalibela Drop Earrings", price: 145, category: "jewelry", image: earrings, description: "Ornate drop earrings with hand-set garnet stones — a quiet nod to ancient rock-hewn craftsmanship." },
  { id: "habesha-bangles", name: "Habesha Engraved Bangles", price: 220, category: "jewelry", image: bangles, description: "A stack of five engraved bangles, each etched with traditional tibeb motifs.", tag: "New" },
  { id: "addis-rose", name: "Addis Rose Eau de Parfum", price: 110, category: "perfume", image: perfume1, description: "Damask rose, pink pepper and a whisper of vanilla. Bottled like a love letter from Addis." },
  { id: "frankincense-noir", name: "Frankincense Noir", price: 135, category: "perfume", image: perfume2, description: "Smoky frankincense, sandalwood and amber — the scent of incense at golden hour.", tag: "Limited" },
   { id: "my-way", name: "My Way Eau de Parfum", price: 125, category: "perfume", image: perfume3, description: "A modern floral fragrance with notes of jasmine, vanilla, and bergamot. Sweet and empowering.", tag: "New" },
  { id: "tibeb-clutch", name: "Tibeb Embroidered Clutch", price: 175, category: "bags", image: clutch, description: "Cream leather clutch finished with hand-loomed tibeb trim and tassel detailing." },
  { id: "blush-tote", name: "Blush Habesha Tote", price: 245, category: "bags", image: tote, description: "Buttery blush leather tote with a removable woven Habesha-pattern strap.", tag: "Bestseller" },
   { id: "luxury-leather-tote", name: "Leather Tote Bag", price: 199, category: "bags", image: bag, description: "Elegant leather tote perfect for everyday luxury." }
];

export const categoryLabels: Record<Category, string> = {
  jewelry: "Jewelry",
  perfume: "Perfume",
  bags: "Bags",
};
