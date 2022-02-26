/* ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।  */
const person = {
  name: "shazzad",
  age: 24,
  bestFriend: { name: "bobi", age: 21, job: "student" },
  hobby: ["coding", "fishing", "football", "cricket"],
  isRich: false,
  play() {
    return `${this.name} is playing ${this.hobby[2]} with his bestfriend ${this.bestFriend.name}`;
  },
};

const details = `Name:${person.name} BestFriend Name: ${person.bestFriend.name} Hobby: ${person.hobby[1]} `;
console.log(details);
