/* ৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  */

function SecondLargestNum(numbers) {
    let largestNum = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        let arrElement = numbers[i];
        if(arrElement > largestNum){
            largestNum = arrElement;
        }
    }
    console.log(largestNum);
}


SecondLargestNum([11, 2, 44, 20]);