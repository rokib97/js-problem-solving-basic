// // ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 


// let marks = 83;

// if(marks >= 90 && marks <=100){
//     console.log("Golden A+");
// }
// else if(marks >= 80 && marks <=89){
//     console.log("A+");
// }
// else if (marks >= 70 && marks <= 79 ){
//     console.log("A");
// }
// else if (marks >= 60 && marks <= 69){
//     console.log("B");
// }
// else if (marks >= 50 && marks <= 59){
//     console.log("C");
// }
// else if (marks >= 40 && marks <= 49){
//     console.log("D");
// }
// else{
//     console.log("Failed");
// }

// using function 

function gradeSystem(marks) {
    if(marks >= 90 && marks <= 100){
        return "You got Golden A+"
    }
    else if(marks >=80 && marks <=89){
        return "You got A+"
    }
    else if(marks >=70 && marks <=79){
        return "You got A"
    }
    else if(marks >=60 && marks <=69){
        return "You got B"
    }
    else if(marks >=50 && marks <=59){
        return "You got C"
    }
    else if(marks >=40 && marks <=49){
        return "You got D"
    }
    else{
        return "Failed"
    }
}
let inputMarks = 79;
let result = gradeSystem(inputMarks);
console.log(result);