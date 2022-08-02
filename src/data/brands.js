import brandsData from "./brand.json";

export const brandsArray = [];
Object.keys(brandsData).map((key) => {
  return brandsArray.push(brandsData[key]);
});
