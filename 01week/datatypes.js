'use strict'

//write a JS program to display current date and time

let now = new Date();

console.log('the current date and time ', now);
const theNumber = 5;
const theString = theNumber.toString()

console.log('The type of theString varaible is ', (typeof theString))
console.log('The ty[e of theNumber variable is ', (typeof theNumber))

console.log('The string is ', theString)
console.log('the number is ', theNumber)

const theOtherString = '11'
const theOtherNumber = parseInt(theOtherString, 10)
console.log(theOtherNumber);
console.log('theOtherNumber is a type of ', (typeof theOtherNumber))

let num1 = 345
let num2 = 876

console.log(num1 + num2)

//number 4a

//boolean
const blueBean = true

console.log('blueBean is a type of ' + typeof blueBean)

//null
let nullFun = () => {
  if (true) {
    return null
  }
}
let zero = nullFun

console.log('Zero is a type of ' + typeof zero)
// I still don't really understand this. Is there another way we are supposed to be declaring this?

//undefined
let empty

console.log('Empty is a type of ' + typeof empty)

//number
let num = 12

console.log('Num is a type of ' + typeof num)

//NaN
let nothing = (5 + 'hello')
 
console.log('Nothing is a  type of ' + typeof nothing)

//how do  I get it to appear as NaN?

//string
let string = 'is a string, right?'
// why is this coming up as undefined?

console.log('Stringer is a ' + typeof stringer)

//number 5-8, more like two truth and two lies

let truthy = (a, b) => {

  if(a === true && b === true) {
    console.log('Both are TRUE')
  } else if (a === true && b !== true) {
    console.log('One of these is TRUE') 

  // this one isn't right, need to fix  
  } else if (a === false && b === false)
   {
    console.log('Neither is TRUE')
  }
}

  let laTrue = true
  let trueToo = true 
  let notTrue = false 
  let iLied = false 


console.log(truthy(laTrue, trueToo))


console.log(truthy(laTrue, notTrue))


console.log(truthy(notTrue, iLied))