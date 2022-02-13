// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে

// function celToFar(celcius){
//     let celciusResult = (celcius * (9 / 5)) + 32;
//     return celciusResult;
// }

// let result = celToFar(25);
// console.log(result);

// farToCel
function farToCel(inputValue) {
    let farValue = (inputValue - 32) * (5 / 9);
    return farValue.toFixed(0);
}
let resultValue = farToCel(128);
console.log(resultValue);
console.log(typeof resultValue);
let resultValueFinal = parseInt(resultValue);
console.log(typeof resultValueFinal);
console.log(resultValueFinal);
