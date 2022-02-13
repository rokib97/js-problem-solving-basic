/* ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।  */

function smallElementOfArr(input) {
    let smallestNum = input[0];
    for (let i = 1; i < input.length; i++) {
        let arrElement = input[i];
        if (arrElement < smallestNum) {
            smallestNum = arrElement;
        }
    }
    return smallestNum;
}

let myArr = [52, 10, 20, 4, 77, 120, 2];
let mySmallArrElement = smallElementOfArr(myArr);
console.log(mySmallArrElement);
