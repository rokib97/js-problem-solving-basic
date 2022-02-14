/* ৯. অনেকগুলা সংখ্যাওয়ালা একটা array নাও। তারপর সেই array কে sort করো। sort হবে ছোট থেকে বড় সংখ্যার সিরিয়াল অনুসারে।  */
const numbers = [12, 2, 142, 45, 332, 254, 5551, 4, 5, 9];

const sortedNumbers = numbers.sort(function (x, y) {
  return x - y;
});
console.log(sortedNumbers);
