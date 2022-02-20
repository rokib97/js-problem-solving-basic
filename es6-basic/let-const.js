/* ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। */

let name = "Rokib"; // value can be changed but variable name cant be re declared
name = "Hasan";
// let name = "Shadhin "; // not accesptable

const PI = 3.14; //reassign redeclare not possible
// PI = 10; // not possible
// const PI = 110;  not possible
/* mostly used in array and object in array and object we use const and also we can change the index value of array and property of object  */
