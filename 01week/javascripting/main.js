'use strict'

console.log('Inside my main.js file')

let myDate = new Date();
let hours = myDate.getHours();
let minutes = myDate.getMinutes();
console.log(hours, ':', minutes)

let clock = hours + ':' + minutes


console.log('the current date is', myDate)


//get the span from the page/document 
let mySpan = document.getElementById('theTime')

//change the inner text 
mySpan.innerText = clock 

//2. Write a JavaScript program to convert a number to a string.


let sum = document.getElementById('total')

sum.innerText = total

//3. Write a JavaScript program to convert a string to the number.

//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean

//Null
//Undefined
//Number
//NaN
//String

//Write a JavaScript program that adds 2 numbers together.

let total = 14 + 345
console.log(total)

//Write a JavaScript program that runs only when 2 things are true.
//Write a JavaScript program that runs when 1 of 2 things are true.
//Write a JavaScript program that runs when both things are not true.

