export type StrainType = "INDICA" | "SATIVA" | "HYBRID";

export type Strain = {
  name: string;
  type: StrainType;
  image: string;
  description: string;
};

export const strains: Strain[] = [
  {
    name: "Neon Cookies",
    type: "HYBRID",
    image: "/MediaSources/Strain-NeonCookies.PNG",
    description:
      "Neon Cookies is a candy-forward hybrid that blends some of the most sought-after genetics in modern cannabis. This vibrant cross brings together the tropical sweetness of Zkittlez with the creamy dessert profile of Lemon Cherry Gelato and the unmistakable potency of Girl Scout Cookies.\n\nThe aroma is loud and layered, bursting with bright citrus candy, sweet berries, and backed by loud gassy finish that can be smelled across the room. Each inhale delivers a smooth, flavorful smoke that lingers on the palate.\n\nNeon Cookies offers a balanced experience that begins with tasty flavor for smokers who prefer a loud taste for their palette but also has an uplifting head high before settling into a relaxed, easygoing body feel.",
  },
  {
    name: "Lemon Cherry Gelato",
    type: "INDICA",
    image: "/MediaSources/Strain-LemonCherryGelato.jpeg",
    description:
      "Lemon Cherry Gelato is an Indica-dominant strain with a sweet and candy like aroma. It has a smooth, creamy texture and a rich, sweet flavor. The effects are calming and relaxing, making it a great choice for those looking for relief from stress and anxiety. It's also known to help with pain relief and insomnia. Enjoy the sweet and candy flavor of Lemon Cherry Gelato and its calming effects.",
  },
  {
    name: "Sky Dulce",
    type: "SATIVA",
    image: "/MediaSources/Strain-SkyDulce.jpeg",
    description:
      "Sky Dulce is a bright, flavor-packed sativa-leaning hybrid that blends classic West Coast power with modern candy genetics. This unique cross brings together the legendary fuel and lift of Skywalker OG and Sour Diesel with the sweet, terpene-rich profile of Zkittlez and Gelato 41.\n\nThe aroma opens with vibrant citrus and tropical candy notes, layered with hints of creamy gelato and a subtle sour diesel funk that gives it depth. The flavor follows through with smooth, sweet on the inhale and a light gassy finish on the exhale.\n\nSky Dulce delivers an uplifting, clear-headed experience that sparks creativity and energy while keeping the body relaxed and balanced. Flavorful, lively, and easy to enjoy, it's a strain built for daytime sessions and anyone who appreciates loud terpenes with a classic sativa edge.",
  },
  {
    name: "Guava Gas",
    type: "INDICA",
    image: "/MediaSources/Strain-GuavaGas.PNG",
    description:
      "Guava Gas is a terpene-rich Indica hybrid that blends sweetness with a bold, fuel-driven backbone. This flavorful cross combines the creamy fruit notes of Guava Creamsicle and Gelato 41 with the unmistakable gassy punch.\n\nThe aroma opens with bright tropical guava and sweet citrus candy, layered over smooth vanilla cream and a sharp gas finish. On the palate, Guava Gas delivers a smooth, flavorful smoke where juicy fruit bubble gum and creamy dessert notes meet a lingering fuel exhale.\n\nExpect resin-coated buds and an exotic experience that starts with an uplifting, euphoric buzz before settling into a relaxed, easy body feel. Loud, flavorful, and deeply satisfying, Guava Gas is built for connoisseurs who appreciate sweet terps with a classic gassy edge.",
  },
  {
    name: "Sweet Tooth",
    type: "HYBRID",
    image: "/MediaSources/Strain-SweetTooth.JPEG",
    description:
      "Sweet Tooth is a candy-forward hybrid that lives up to its name, blending rich dessert genetics with bright, sugary candy terpenes. This flavorful cross combines the creamy candy sweetness of White Cherry Gelato with the playful soft candy notes of Bubble Gum Runtz.\n\nThe aroma is loud and inviting, opening with sweet bubblegum and ripe cherry candy layered over smooth vanilla cream and subtle gas. Each inhale delivers a smooth, candy-like smoke with sugary fruit on the front and a creamy gelato finish on the exhale.\n\nSweet Tooth offers a feel-good experience that begins with impressing the palate with candy flavor on the inhale and giving you an uplifting buzz before easing into a calm, relaxed body vibe. Flavor-packed and easy to enjoy, it's a strain made for anyone who appreciates classic candy terps with a modern twist.",
  },
  {
    name: "Buenas Noches",
    type: "HYBRID",
    image: "/MediaSources/Strain-Buenos Noches.jpeg",
    description:
      "Buenas Noches is a smokers delight. This hybrid built from some of the most beloved family of genetics. This flavorful cross blends the deep cookie sweetness of Biscotti and Sunset Sherbet with the bright candy cream profile of Gelato.\n\nThe aroma will draw you in and creamy citrus layered over notes of subtle gas. On the palate, Buenas Noches delivers a smooth, flavorful smoke.\n\nExpect dense, frosty buds and a relaxing experience that starts with a mellow head lift before settling into a calm, easy body feel. Sweet, creamy, and indulgent, Buenas Noches is a perfect strain for those who appreciate rich terpenes for a smooth flavorful smoke and a great high to finish.",
  },
  {
    name: "Papaya Tree",
    type: "SATIVA",
    image: "/MediaSources/Strain-PapayaTree.PNG",
    description:
      "Papaya Tree is a sativa hybrid that blends tropical fruit sweetness with deep, gassy kush undertones. This unique cross combines the papaya funk and dessert notes of Horchata with the bold grape fuel of Grape Gas Gelato, finished with the earthy strength of Long Valley Royal Kush.\n\nThe aroma opens with ripe tropical papaya and sweet grape candy, and a subtle kushy gas that gives it depth. The flavor carries through with smooth tropical fruit on the inhale, followed by a rich, slightly gassy finish.\n\nPapaya Tree delivers a balanced experience that starts with a light, uplifting head buzz before easing into a calm high that allows you to be energetic. Flavorful and complex, it's a strain made for those who appreciate exotic terpenes with a classic backbone.",
  },
];
