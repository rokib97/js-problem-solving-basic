// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function textConvert(text) {
    var textLower = text.toLowerCase(); // convert text to lowercase
    return textLower;
}

var result = textConvert("RoKiB");
console.log(result);
