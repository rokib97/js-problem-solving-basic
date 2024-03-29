/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। */

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

const details = person.play();
console.log(details);
