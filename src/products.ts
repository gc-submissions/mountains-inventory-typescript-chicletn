import { Product } from "./models/Product";

let products: Product[] = [
  { name: "red socks", price: 5.0 },
  { name: "blue socks", price: 3.5 },
  { name: "purple socks", price: 7.15 },
  { name: "green socks", price: 8.0 },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  let sum = 0;
  if (array.length !== 0) {
    array.forEach((item) => {
      sum = sum + item.price;
    });
    sum = sum / array.length;
  }
  return sum;
};

let averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);

module.exports = {
  calcAverageProductPrice,
};
