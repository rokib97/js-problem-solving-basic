/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */

const product = { pName: "phone", price: 5000, color: "black", ram: "6gb" };

const { price, ram } = product;
console.log(price, ram);
