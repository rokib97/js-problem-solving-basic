/* ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে। */

const student = {
  name: "sadik",
  age: 21,
  job: "student",
  favPlyers: ["messi", "neymar", "mbapppe"],
  isRich: false,
};

// object destructuring
const { name, job } = student;
// const { name: newName, job } = student;  // new variable name for property
// console.log(name, job);

// array destructuring
const [first, second, third] = student.favPlyers;
// console.log(first, balance, third);

// more
const numbers = [7, 12, 15, 38, 15, 156];
const [, balance, newNumber, ...rest] = numbers;
console.log(balance, newNumber);
console.log(...rest);
