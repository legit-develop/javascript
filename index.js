const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
];

const category = menu.map((items) => items.category);
console.log(category);
const uniCategory = [...new Set(category)];
console.log(uniCategory);
