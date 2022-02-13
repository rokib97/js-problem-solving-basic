/* ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।  */

function arrAvg(numbers) {
    let sum = 0;
    for (let i = 0; i < myNumbers.length; i++) {
        let numElement = myNumbers[i];
        sum = sum + numElement;
    }
    let avgOfElement = sum / numbers.length;
    return avgOfElement;
}
let myNumbers = [10, 20, 30, 60];
let result = arrAvg(myNumbers);
console.log(result);
