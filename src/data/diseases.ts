export interface PotatoDisease {
  id: string;
  name: string;
  imageUrl: string;
  symptoms: string[];
  solutions: string[];
  description: string;
}

export const potatoDiseases: PotatoDisease[] = [
  {
    id: "late-blight",
    name: "Late Blight",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
    symptoms: [
      "Dark brown spots on leaves",
      "White fuzzy growth on leaf undersides",
      "Rotting tubers with reddish-brown spots"
    ],
    solutions: [
      "Use fungicides containing chlorothalonil or copper",
      "Remove infected plants",
      "Improve air circulation",
      "Plant resistant varieties"
    ],
    description: "Late blight is a devastating disease caused by Phytophthora infestans. It can destroy entire fields within days under favorable conditions."
  },
  {
    id: "early-blight",
    name: "Early Blight",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
    symptoms: [
      "Dark concentric rings on leaves",
      "Yellowing around lesions",
      "Brown spots with target-like patterns"
    ],
    solutions: [
      "Rotate crops",
      "Apply fungicides preventively",
      "Maintain proper plant spacing",
      "Remove infected leaves"
    ],
    description: "Early blight is caused by Alternaria solani and typically appears during warm, humid weather conditions."
  },
  {
    id: "blackleg",
    name: "Blackleg",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
    symptoms: [
      "Black stem base",
      "Yellowing and wilting of leaves",
      "Rotting tubers"
    ],
    solutions: [
      "Use certified seed potatoes",
      "Avoid planting in wet soil",
      "Practice crop rotation",
      "Improve soil drainage"
    ],
    description: "Blackleg is a bacterial disease that causes black decay at the base of the potato stem."
  },
  {
    id: "scab",
    name: "Common Scab",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
    symptoms: [
      "Rough, corky patches on tubers",
      "Brown, raised lesions",
      "Superficial or deep pitted lesions"
    ],
    solutions: [
      "Maintain soil pH below 5.5",
      "Improve soil drainage",
      "Use resistant varieties",
      "Practice crop rotation"
    ],
    description: "Common scab is caused by Streptomyces species and affects the appearance and quality of tubers."
  },
  {
    id: "viral-mosaic",
    name: "Potato Virus Y (PVY)",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
    symptoms: [
      "Mosaic patterns on leaves",
      "Stunted growth",
      "Leaf drop",
      "Reduced yield"
    ],
    solutions: [
      "Use certified seed potatoes",
      "Control aphid populations",
      "Remove infected plants",
      "Practice good field hygiene"
    ],
    description: "PVY is a viral disease transmitted by aphids that can significantly reduce potato yield and quality."
  },
  {
    id: "pink-rot",
    name: "Pink Rot",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
    symptoms: [
      "Pink discoloration when cut",
      "Soft, watery rot",
      "Wilting plants"
    ],
    solutions: [
      "Improve soil drainage",
      "Avoid over-irrigation",
      "Use fungicides preventively",
      "Practice crop rotation"
    ],
    description: "Pink rot is a soil-borne disease that causes tuber decay, especially in wet conditions."
  },
  {
    id: "silver-scurf",
    name: "Silver Scurf",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
    symptoms: [
      "Silvery patches on tuber skin",
      "Dark spores on lesions",
      "Skin becoming wrinkled"
    ],
    solutions: [
      "Use clean seed potatoes",
      "Minimize storage time",
      "Ensure proper ventilation",
      "Apply fungicide treatments"
    ],
    description: "Silver scurf is a fungal disease that affects potato appearance and storage quality."
  },
  {
    id: "rhizoctonia",
    name: "Black Scurf",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
    symptoms: [
      "Black sclerotia on tubers",
      "Stem cankers",
      "Stunted growth"
    ],
    solutions: [
      "Plant in warm soil",
      "Use clean seed potatoes",
      "Practice crop rotation",
      "Apply fungicide treatments"
    ],
    description: "Black scurf is caused by Rhizoctonia solani and affects both plant growth and tuber quality."
  },
  {
    id: "soft-rot",
    name: "Bacterial Soft Rot",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
    symptoms: [
      "Soft, mushy tissue",
      "Foul odor",
      "Brown to black discoloration"
    ],
    solutions: [
      "Avoid harvesting in wet conditions",
      "Cure properly before storage",
      "Maintain good ventilation",
      "Handle tubers carefully"
    ],
    description: "Bacterial soft rot can cause severe losses in storage and is favored by wet conditions."
  },
  {
    id: "wart",
    name: "Potato Wart",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
    symptoms: [
      "Warty outgrowths on tubers",
      "Cauliflower-like growths",
      "Distorted tubers"
    ],
    solutions: [
      "Use resistant varieties",
      "Practice long crop rotations",
      "Follow quarantine regulations",
      "Report suspected cases"
    ],
    description: "Potato wart is a serious quarantine disease that can persist in soil for many years."
  }
];