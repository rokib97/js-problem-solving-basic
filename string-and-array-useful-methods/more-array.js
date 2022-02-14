/* ৮. একটা array এর মধ্যে অনেকগুলা ইংরেজি জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম (স্ট্রিং) আছে। জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম না জানলে, গুগলে সার্চ দিয়ে বের করো। তারপর একটা লুপ চালিয়ে দেখো কোন কোন বইয়ের নামের মধ্যে "javascript" আছে। তাহলে সেই বইগুলার নাম আরেকটা array এর মধ্যে রাখবে। আর হ্যাঁ, যখন javascript আছে কিনা চেক করবে তখন খেয়াল করবে বড়হাতের নাকি ছোট হাতের অক্ষর সেটা বাদ দিয়ে চেক করতে। অর্থাৎ কেইস ইনসেন্সিটিভ হবে।  */

const jsBookNames = [
  "A Smarter Way to Learn JavaScript",
  "The Definitive Guide",
  "Head First JavaScript Programming: A Brain-Friendly Guide",
  "Eloquent javaScript, 3rd Edition",
  "JavaScript: The Good Parts",
  "Professional javaScript for Web Developers",
];

const searching = "javascript";
const outputJs = [];
for (const js of jsBookNames) {
  if (js.toLowerCase().includes(searching.toLowerCase())) {
    outputJs.push(js);
  }
}
console.log(outputJs);
