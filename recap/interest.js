// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

function simpleInterest(ammount, time, rate){
    let totalInterest = (ammount * time * rate) / 100;
    return totalInterest;
}
let investMoney = 500;
let yearCount = 10;
let interestCount = 10;
let result = simpleInterest(investMoney,yearCount,interestCount);
console.log(result);