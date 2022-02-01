/* ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।   */


function smallestNum(first,second,third) {
    if(first < second && first < third){
        return first;
    }
    else if(second < third && second < first){
        return second;
    }
    else{
        return third;
    }
}


let myslmallestNum = smallestNum(10,15,15);
console.log(myslmallestNum);


// using library function 
console.log(Math.min(102,25,13,120));