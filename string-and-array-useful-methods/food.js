/* ১) একটা অ্যারেতে তোমার পছন্দের খাবার গুলো রাখো এবং যে সব খাবারের নামের মধ্যে m আছে সেসব খাবারের নামগুলো console log করো।  */

const favFoods = ["mango", "apple", "Mirinda", "coke", "jack", "multova"];
const searching = "m";
const output = [];
for (const food of favFoods) {
  if (food.toLocaleLowerCase().includes(searching.toLowerCase())) {
    output.push(food);
  }
}
console.log(output);

/* for (const food of favFoods) {
  if (food.toLocaleLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(food);
  }
}
console.log(output); */
