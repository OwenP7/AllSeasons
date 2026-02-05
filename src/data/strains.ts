export type StrainType = "Indica" | "Sativa" | "Hybrid";

export type Strain = {
  name: string;
  type: StrainType;
  thc: string;
  cbd: string;
  effects: string[];
  flavors: string[];
  description: string;
  tone: string;
};

export const strains: Strain[] = [
  {
    name: "Midnight Bloom",
    type: "Indica",
    thc: "28%",
    cbd: "<1%",
    effects: ["Calming", "Full-body relaxation", "Dreamy"],
    flavors: ["Berry", "Cocoa", "Earth"],
    description:
      "A rich, slow-burning indica crafted for evening rituals. Dense trichomes and a velvet finish deliver a luxe, heavy exhale.",
    tone: "from-[#1f1f1f] via-[#0f0f0f] to-black",
  },
  {
    name: "Sunrise Current",
    type: "Sativa",
    thc: "26%",
    cbd: "<1%",
    effects: ["Uplifting", "Focused", "Creative"],
    flavors: ["Citrus zest", "Pine", "Mint"],
    description:
      "Bright, electric, and crisp. Crafted for clarity with a clean finish and a lively terpene profile that cuts through the noise.",
    tone: "from-[#242323] via-[#111111] to-black",
  },
  {
    name: "Balanced Grain",
    type: "Hybrid",
    thc: "27%",
    cbd: "1%",
    effects: ["Centered", "Social", "Smooth"],
    flavors: ["Vanilla", "Spice", "Grape"],
    description:
      "A modern hybrid with balanced energy and calm. Smooth texture, layered aromas, and a refined, slow-building lift.",
    tone: "from-[#1a1a1a] via-[#0d0d0d] to-black",
  },
  {
    name: "Glasshouse Gold",
    type: "Hybrid",
    thc: "29%",
    cbd: "<1%",
    effects: ["Euphoric", "Present", "Creative"],
    flavors: ["Honey", "Lemon peel", "Gas"],
    description:
      "Cultivated under precision lighting for maximal expression. Expect dense structure, high clarity, and a luxe inhale.",
    tone: "from-[#262626] via-[#141414] to-black",
  },
  {
    name: "Coastal Resin",
    type: "Sativa",
    thc: "25%",
    cbd: "<1%",
    effects: ["Bright", "Active", "Clean finish"],
    flavors: ["Sea salt", "Pine", "Herbal"],
    description:
      "Salt-air sharpness with a polished terpene stack. Built for daytime focus with a crisp, coastal finish.",
    tone: "from-[#202020] via-[#101010] to-black",
  },
  {
    name: "Velvet Apex",
    type: "Indica",
    thc: "30%",
    cbd: "<1%",
    effects: ["Heavy", "Restful", "Serene"],
    flavors: ["Dark fruit", "Diesel", "Cocoa nib"],
    description:
      "Top-tier indica expression with thick resin rails and a decadent aroma. Designed for deep, unhurried nights.",
    tone: "from-[#1b1b1b] via-[#0c0c0c] to-black",
  },
];
