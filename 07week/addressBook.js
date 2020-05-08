'use strict'

window.onload = function() {
  apiPeople() 
  console.log('my page has loaded')
}


let apiPeople = function() {
  //we find the content we are looking for
                      //10 people 
  fetch('https://randomuser.me/api/?results=10')
  //pull in the content you want
  .then(function(envelope) {
    // console.log('here is the fetch envelope = ', envelope)
    //we get the json file response 
    return envelope.json()
  })
  //we want to return the content on the json file 
  .then(function(people) {
      //getting back that the length is undefined, why? 
    // console.log('I want to look a people = ', people.results)
    people.results.forEach(findPeople)
  })
}

//should print ten lines of people
let findPeople = function(person) {
  console.log('find the people = ', person)
  //create your elements that you will be working with 
    //this is my parent elements, my targets where my created content will be placed 
  let book = document.getElementById('people')
  let single = document.getElementById('person')
  let extraInfo = document.getElementById('extraInfo')
  //make sure my parent elements know how they are nested 
  book.appendChild(single)
  single.appendChild(extraInfo)

    //these are my created elements
  let profilePic = document.createElement('img')
  let firstNames = document.createElement('li')
  let lastNames = document.createElement('li')
  let buttonInfo = document.createElement('button')
  let dob = document.createElement('li')
  let city = document.createElement('li')
  let state = document.createElement('li')
  let country = document.createElement('li')
  let phone = document.createElement('li')
  let email = document.createElement('li')
  
  //add the profile picture the profile picture element
  profilePic.src = person.picture.large
  //add to parent element
  single.appendChild(profilePic)

  //add name to the name element
  firstNames.innerText = person.name.first
  lastNames.innerText = person.name.last
  //add to the parent element
  single.appendChild(firstNames)
  single.appendChild(lastNames)
  // Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth.
  buttonInfo.innerText = 'More Info'
  single.appendChild(buttonInfo)


  //adds a class so it can be altered in css
  buttonInfo.classList.add('xinfo')

  //add the information that will be contained in the extraInfo section
  dob.innerText = person.dob.date
  city.innerText = person.location.city
  state.innerText = person.location.state
  country.innerText = person.location.country
  phone.innerText = person.phone
  email.innerText = person.email

  //add those elements to the extraInfo section
  extraInfo.appendChild(dob)
  extraInfo.appendChild(city)
  extraInfo.appendChild(state)
  extraInfo.appendChild(country)
  extraInfo.appendChild(phone)
  extraInfo.appendChild(email)

  //need the extra info to live inside my button into and only generate/seen when the button is clicked
  buttonInfo.addEventListener('click', function() {
    console.log('see this info button get clicked?', buttonInfo)
    single.appendChild(extraInfo)
    console.log(single)
    console.log(extraInfo)
  })

  //dob - change formatting for display? 
  //location
  //phone
  //email
}

