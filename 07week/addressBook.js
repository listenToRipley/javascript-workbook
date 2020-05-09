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
    // console.log('I want to look a people = ', people.results)
    people.results.forEach(findPeople)
  })
}

//should print ten lines of people
let findPeople = function(person) {
  // console.log('find the people = ', person)

  //create my HTML set up 
  let body = document.getElementsByTagName('body')
  console.log(body)
  //create your elements that you will be working with 
  //CREATION OF ELEMENTS
    //main body of my content, this is the master element 
  let mainBody = document.createElement('main')
  // console.log('create the main',mainBody)
  //create the div within the main body 
  let div = document.createElement('div')
  // console.log('create the div where my uls will live', div)
  //container for each individual called from the API 
  let mainUl = document.createElement('ul')
  // console.log('my main ul where the name and picture will first appear', mainUl )
  //create a separate UL for all the extra information 
  let hiddenUL = document.createElement('ul')
  // console.log('my second ul, where the additional information on each person will live', hiddenUL)

    //class names in order 
    div.setAttribute('id', 'people') //book
    mainUl.setAttribute('id','person')
    hiddenUL.setAttribute('id','extraInfo')
    

  //make sure my parent elements know how they are nested 
  mainBody.appendChild(div)
  div.appendChild(mainUl)
  mainUl.appendChild(hiddenUL)
  // console.log('everything coming through?',div) yes

  //query selectors 
  let book = document.getElementById('people')
    // console.log('this is all the information',book)
  let individual = document.getElementById('person')
    // console.log('this is each person coming in from the api',individual)
  let hidInfo = document.getElementById('extraInfo')
  // console.log('this is the additional information on each person', hidInfo)
  
  // console.log('this is my button', btn)

  //these are my created elements within the mainUL
  let profilePic = document.createElement('img')
  let firstNames = document.createElement('li')
  let lastNames = document.createElement('li')
  //button element needs to be created here so it will generate per individual 
  let infoButton = document.createElement('button')
  console.log('my button', infoButton)
  infoButton.innerText = 'More Info'

 //add this content to its parent element 
  individual.appendChild(profilePic)
  individual.appendChild(firstNames)
  individual.appendChild(lastNames)
  individual.appendChild(infoButton)

  //add the profile picture the profile picture element
  profilePic.src = person.picture.large
  //add to parent element
  individual.appendChild(profilePic)

  //add name to the name element
  firstNames.innerText = person.name.first
  lastNames.innerText = person.name.last
  //add to the parent element
  individual.appendChild(firstNames)
  individual.appendChild(lastNames)

  //this should be the content on your hidInfo UL list 
  let dob = document.createElement('li')
  let city = document.createElement('li')
  let state = document.createElement('li')
  let country = document.createElement('li')
  let phone = document.createElement('li')
  let email = document.createElement('li')

  //add the information that will be contained in the extraInfo section
  dob.innerText = person.dob.date
  city.innerText = person.location.city
  state.innerText = person.location.state
  country.innerText = person.location.country
  phone.innerText = person.phone
  email.innerText = person.email

  console.log('now this should have all the info per person',hidInfo)

  infoButton.setAttribute('id','infoBtn')
  //the information should not display until the button is clicked. 
    //when it is clicked, it should display directly under the individual 
  infoButton.addEventListener('click', function() {
    console.log('see this info button get clicked?', infoButton)
      //add those elements to the extraInfo section
    hidInfo.appendChild(dob)
    hidInfo.appendChild(city)
    hidInfo.appendChild(state)
    hidInfo.appendChild(country)
    hidInfo.appendChild(phone)
    hidInfo.appendChild(email)
    individual.appendChild(hidInfo)
    // console.log(one)
    console.log(hidInfo)
  })
}

