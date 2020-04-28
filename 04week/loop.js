// Complete each of the following exercises.
// Use a do...while loop to console.log the numbers from 1 to 1000.

//this works, don't forget to uncomment 
let z = 0 
do {
  z++
  console.log(z)
}
while( z < 1000);

      console.log(`at the end z is: `, z)
 // Create an object (an array with keys and values) called person with the following data:


 let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: {
    month: 'Jan',
    day: 5,
    year: 1925
  },
  gender: "female"
 }

 // Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

 //right now this is iterating over each variable within birthDate 

let odd = (time) => {
   for (let time in person.birthDate) {

  // console.log(person.birthDate)

   if(time.year % 2) {
     return 'this year is even'
   } else {
      return 'this year is odd'
   }
 }
}

console.log(odd(person))

 // Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

 console.log(`here is the object array`)

 let arrayOfPersons = [{
  firstName: "Jane",
  lastName: "Doe",
  birthDate: 'Jan 5, 1925',
  gender: "female"
 },

 {
  firstName: "John",
  lastName: "Doe",
  birthDate: 'Dec 1, 1935',
  gender: "male"
 },

 {
  firstName: "Janis",
  lastName: "Joplin",
  birthDate: 'Jan 19, 1943',
  gender: "female"
 },

 {
  firstName: "Willie",
  lastName: "Nelson",
  birthDate: 'Apr 29, 1933',
  gender: "male"
 },

 {
  firstName: "George",
  lastName: "Orson",
  birthDate: 'Jan 1, 1990',
  gender: "male"
}]
// Use .map() to map over the arrayOfPersons and console.log() their information.

console.log(`my janis code`)
let janis = arrayOfPersons.map((array) => {
    console.log(array.firstName)
    console.log(array.lastName)
    console.log(array.birthDate)
    console.log(array.gender)
    arrayOfPersons[2]
  })

console.log(janis)

// Use .filter() to filter the persons array and console.log only males in the array.

console.log('this is where the men function starts')

let men = arrayOfPersons.filter((man, index) => {
  console.log('this is the gender: ', man.gender, ' and the index :', index)
  return (man.gender === 'male')
})
console.log(men)

// // Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

console.log(`filter on birthday`)

let birthday = (date, index) => {
  console.log(arrayOfPersons.birthDate)
  return (date.birthDate === 'Jan 1, 1990')
}

console.log(arrayOfPersons.filter(birthday))