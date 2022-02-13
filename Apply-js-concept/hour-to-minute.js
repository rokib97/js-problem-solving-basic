// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

function timeConvert(hour) {
    let minuteOFHour = hour * 60;
    return minuteOFHour;
}

let result = timeConvert(4);
console.log(result);
