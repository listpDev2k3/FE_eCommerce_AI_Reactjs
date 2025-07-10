import { mockProducts } from "../data/mockProducts";

export const getSuggestions = (userId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const chance = Math.random();
      if (chance < 0.2) reject();
      else resolve(mockProducts.slice(0, 3)); 
    }, 1000);
  });
