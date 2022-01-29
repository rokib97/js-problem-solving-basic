// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 


function multTable(num){
    for(var i =1 ; i <=10; i++){
        var multiflication = num * i;
        console.log(num, "X" , i, ' = ' , multiflication);

    }
}
var number = 13;
multTable(number);