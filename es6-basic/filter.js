/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো  */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// odd
const odds = numbers.filter((number) => number % 2 == 1);
// even
const evens = numbers.filter((number) => number % 2 == 0);
console.log(odds);
// console.log(...odds);
console.log(evens);
