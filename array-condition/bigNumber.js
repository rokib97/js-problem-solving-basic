var numberOne = 65;
var numberTwo = 5;
var numberThree = 20;

if(numberOne > numberThree && numberOne > numberThree){
    console.log(numberOne, " is the big number.");
}
else if(numberTwo > numberOne && numberTwo > numberThree){
    console.log(numberTwo, " is the big number");
}
else{
    console.log(numberThree, " is the big number");
}

// using function 

function bigNumber(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if (num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}



var result = bigNumber(100, 25, 150);
console.log("The big number is: ", result);