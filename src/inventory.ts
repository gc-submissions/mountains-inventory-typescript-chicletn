import { Product } from "./models/Product";
import { InventoryItem } from "./models/InventoryItem";

const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

export const calcInventoryValue = (array: InventoryItem[]): number => {
  let totalValue = 0;
  if (array.length !== 0) {
    array.forEach((item) => {
      totalValue = totalValue + item.quantity * item.product.price;
    });
  }
  return totalValue;
};

let valueToPrint = calcInventoryValue(inventory);
console.log("total value: " + valueToPrint);

module.exports = {
  calcInventoryValue,
};
