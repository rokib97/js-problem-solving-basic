/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */

const products = [
  { pName: "phone", price: 5000, color: "black", ram: "6gb" },
  { pName: "pen", price: 50, color: "grey" },
  { pname: "laptop", price: 25000, color: "white", ram: "12gb" },
];

const priceProduct = products.find((product) => product.price == 5000);
// console.log(priceProduct);

// for each

const whiteProduct = products.forEach((product) => console.log(product.price));
