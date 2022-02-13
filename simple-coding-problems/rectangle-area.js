/* ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।  */

function areaOfrectangle(width, length) {
    let area = width * length;
    return area;
}

let w = 10;
let l = 5;
let areaResult = areaOfrectangle(w, l);
console.log(areaResult);
