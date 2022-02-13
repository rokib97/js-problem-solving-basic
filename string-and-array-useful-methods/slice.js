/* ৩) fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

এই উপরের অ্যারে থেকে Orange এবং Lemon প্রিন্ট করো slice() ব্যাবহার করে। */

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
function sliceFruits(fruits) {
  const slicedFruits = fruits.slice(1, 3);
  return slicedFruits;
}

const results = sliceFruits(fruits);
for (const result of results) {
  console.log(result);
}
