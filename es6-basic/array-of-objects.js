/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

const product = {
  pName: "phone",
  price: 5000,
  color: {
    samsung: "white",
    nokia: ["white", "red", "blue"],
  },
  ram: "6gb",
};

const {
  color: {
    nokia: [white],
  },
} = product;
// console.log(white);

// const result = product.color.nokia[0];
const result = product?.web?.color.nokia[0];
console.log(result);
