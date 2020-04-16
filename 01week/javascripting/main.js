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

//establish this number
const theNumber = 5
  console.log('the number is ', theNumber)

//id the data type of theNumber
const numFive = typeof theNumber

//locate your span where this will go
let nowNumber = document.getElementById('currentNumber')

//move the type of identify information to the HTML
nowNumber.innerText = numFive

//convert theNumber into a string
const theString = theNumber.toString()
  console.log('The string is ', theString)

//identify the datatype of this item 
const nowString = typeof theString

let stringAlong = document.getElementById('stringTheory')

stringAlong.innerText = nowString

//3. Write a JavaScript program to convert a string to the number.

//establishing the string
const theOtherString = '11'

//calling the method and placing the argument of the string
const theOtherNumber = parseInt(theOtherString, 10)
  console.log(theOtherNumber);

const theOtherWay = typeof theOtherNumber

const nowYouDont = document.getElementById('nowYouSeeMe')

nowYouDont.innerText = theOtherWay

//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:

//boolean
const blueBean = true

//null 
// still not reading as a string
var zero = null

//undefined
var empty

//number
var num = 12

//NaN
var nothing = NaN
 
//string
var stringer = 'this is a string'

// function declaration
const isTypeOf = (data) => {
  return typeof data
}

// function invocation
let dt1 = isTypeOf(blueBean)
let dt2 = isTypeOf(zero)
let dt3 = isTypeOf(empty)
let dt4 = isTypeOf(num)
let dt5 = isTypeOf(nothing)
let dt6 = isTypeOf(stringer)

let datatype1 = document.getElementById('datatype1')
let datatype2 = document.getElementById('datatype2')
let datatype3 = document.getElementById('datatype3')
let datatype4 = document.getElementById('datatype4')
let datatype5 = document.getElementById('datatype5')
let datatype6 = document.getElementById('datatype6')

datatype1.innerText = dt1
datatype2.innerText = dt2
datatype3.innerText = dt3
datatype4.innerText = dt4
datatype5.innerText = dt5
datatype6.innerText = dt6
//Write a JavaScript program that adds 2 numbers together.

let sum = document.getElementById('total')

let total = 14 + 345
console.log(total)

sum.innerText = total

//Write a JavaScript program that runs only when 2 things are true.
//Write a JavaScript program that runs when 1 of 2 things are true.
//Write a JavaScript program that runs when both things are not true.

let truthy = (a, b) => {

  if(a === true && b === true) {
    return 'Both are TRUE'
  } else if (a === true && b !== true) {
    return 'One of these is TRUE' 

  } else if (a === false && b === false)
   {
    return 'Neither is TRUE'
  }
}

let laTrue = true
let trueToo = true 
let notTrue = false 
let iLied = false 

//only when 2 things are true.
let twoTrue = truthy(laTrue, trueToo)
  console.log(twoTrue)

let bothTrue = document.getElementById('ifTrue')

bothTrue.innerHTML = twoTrue

//when 1 of 2 things are true.
let oneTrue = truthy(laTrue, notTrue)
  console.log(oneTrue)

let trueAndFalse = document.getElementById('ifOneTrue')

trueAndFalse.innerHTML = oneTrue

//when both things are not true.
let twoFalse = truthy(notTrue, iLied)
  console.log(twoFalse)

let bothFalse = document.getElementById('ifFalse')

bothFalse.innerHTML = twoFalse

