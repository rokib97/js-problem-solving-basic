/* ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */

const myArr = [
    "sakib",
    "sumon",
    "shadhin",
    "moinShahriyar",
    "tota",
    "bappePower",
];
function bestFriend(myArr) {
    let largeElement = myArr[0];
    for (let i = 0; i < myArr.length; i++) {
        let eleName = myArr[i];
        if (eleName.length > largeElement.length) {
            largeElement = eleName;
        }
    }
    return largeElement;
}

const result = bestFriend(myArr);
console.log(result);

// using for of
const myArr = [
    "sakib",
    "sumon",
    "shadhin",
    "moinShahriyar",
    "tota",
    "bappePower",
];
function bestFriend(myArr) {
    let largeElement = myArr[0];
    for (const name of myArr) {
        if (name.length > largeElement.length) {
            largeElement = name;
        }
    }
    return largeElement;
}

const result = bestFriend(myArr);
console.log(result);
