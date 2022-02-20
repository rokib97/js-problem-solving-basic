/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

const numbers = [4, 6, 7, 8, 15, 56, 2, 20];

const result = numbers.map((number) => number * 5);
console.log(result);

// console.log(numbers.map((number) => number * 5));
