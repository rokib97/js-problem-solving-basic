/* ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।  */
const products = {
  phone: "Xiaomi",
  bike: "Suzuki",
  car: "Tesla",
};

const firstName = "Rokib";
const lastName = "Hasan";
const age = 24;
const fullName = `I am ${firstName} ${lastName} Rokib.
I am going to be ${age + 1} years old in 2023.
I am right now using a ${products.phone} phone, My fav car company is ${
  products.car
} also I have a  girlfriend named ${products.bike}  Gixxer.`;
console.log(fullName);
