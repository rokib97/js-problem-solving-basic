// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function checkEvenOdd(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

let myAge = 23;
let myAgeEvenOdd = checkEvenOdd(myAge);
if (myAgeEvenOdd == true) {
    console.log("Even");
} else {
    console.log("Odd");
}
