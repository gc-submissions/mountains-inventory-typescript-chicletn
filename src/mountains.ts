import { Mountain } from "./models/Mountain";

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (array: Mountain[]): string => {
  let tallestMountain: Mountain = array[0];
  array.forEach((item) => {
    if (item.height > tallestMountain.height) {
      tallestMountain = item;
    }
  });
  return tallestMountain.name;
};

let tallestMountain: string = "";
tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

module.exports = {
  findNameOfTallestMountain,
};
