/* ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  */

const names = ["sakib", "rakib", "towhid", "sumon"];

const [first, , third, , fifth] = names;
console.log(third);
