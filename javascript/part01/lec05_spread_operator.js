const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "melon"];

const allFruits = [...fruits, ...moreFruits];

console.log(allFruits);

// second example

const fruitsBasket = ["apple", "mango"];

const newState = [...fruits, "cherry"];

console.log(newState);
