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
    // console.log('There = ', people.results.length, "people in this object")
    people.results.forEach(findPeople)
  })
}

let indexUsed = []
//should print ten lines of people
let findPeople = function(people, index) {
  // console.log('find the people = ', people)
  // console.log('index', index)
let mainBody = document.getElementById('main')
  //we want the UL to be created per person
  //using the index, determine if you have already created a UL for the person
  //every time you do create a new UL, add the index number to your indexUsedArray
  //if not, create UL 
  if (indexUsed.includes(index) === false) {
  let div = document.createElement('div')
  div.setAttribute('class', 'card mb-3')
  // console.log('access the div where my uls will live', div)
    //container for each person called from the API '
  let mainUl = document.createElement('ul')
  mainUl.classList.add('person')

  // console.log('my main ul where the name and picture will first appear', mainUl )
  div.appendChild(mainUl)
  // console.log('see the div?',div)
  mainUl.setAttribute('class', 'list-group list-group-flush') 
  mainUl.setAttribute('class', 'card-body')

  //create a separate UL for all the extra information 
  let person = document.getElementsByClassName('person')
    // console.log('this is each person coming in from the api',person)

  //these are my created elements within the mainUL
  let profilePic = document.createElement('img')
  let names = document.createElement('li')
  let infoButton = document.createElement('button')
  // //button element needs to be created here so it will generate per individual 
  // console.log('my button', infoButton)
  infoButton.innerText = 'More Info'

  //set classes for css targeting
  infoButton.setAttribute('class', 'infoBtn')
  infoButton.setAttribute('aria-controls','forToggle')
  infoButton.setAttribute('class', 'btn-info')
  names.setAttribute('class', 'name')
  profilePic.setAttribute('class', 'proPic')

 //add this content to its parent element 
  mainUl.appendChild(profilePic)
  mainUl.appendChild(names)

  //add the profile picture the profile picture element
  profilePic.src = people.picture.large

  let firstNames = people.name.first
  let lastNames = people.name.last

  //add name to the name element
  names.innerText = firstNames + ' ' + lastNames

  //add to the parent element
  mainUl.appendChild(names)
//the button must be appended after the name has been added, or else it comes before it 
  mainUl.appendChild(infoButton)

  //this will create the hidden information
  let hiddenUL = document.createElement('ul')
  // console.log('my second ul, where the additional information on each person will live hiddenUL)
  hiddenUL.setAttribute('class','extraInfo')
  hiddenUL.setAttribute('class', 'forToggle')
  hiddenUL.setAttribute('aria-hidden', 'true')
  //create a loop for each attribute you want to set on hiddenUl
  let hidInfo = document.getElementsByClassName('extraInfo')
  // console.log('this is the additional information on each person', hidInfo)
  mainUl.appendChild(hiddenUL)

  //this should be the content on your hidInfo UL list 
  let dob = document.createElement('li')
  let city = document.createElement('li')
  let state = document.createElement('li')
  let country = document.createElement('li')
  let cell = document.createElement('li')
  let email = document.createElement('li')


  //add the information that will be contained in the extraInfo section
  let bDay = people.dob.date 
  // console.log(bDay)

  let formatBday = new Date(bDay).toDateString()
    //if i have time I would like to remove the day abbreviations from the front of the birthday.
      ///make birthday into a little of individual items
        // remove the first time
        //rewrite the birthday
    
  dob.innerText = `Birthday : ${formatBday}`
  city.innerText = `City : ${people.location.city}`
  state.innerText = `State : ${people.location.state}`
  country.innerText =`Country : ${ people.location.country}`
  cell.innerText = `Cell : ${people.cell}`
  email.innerText = `Email : ${people.email}`
  // console.log('now this should have all the info per person',hidInfo)
  
    //add those elements information 
  hiddenUL.appendChild(dob)
  hiddenUL.appendChild(city)
  hiddenUL.appendChild(state)
  hiddenUL.appendChild(country)
  hiddenUL.appendChild(cell)
  hiddenUL.appendChild(email)
    // console.log(hidInfo)
  mainUl.appendChild(hiddenUL)
  hiddenUL.style.visibility = 'hidden' 
  // console.log(mainUl)

  infoButton.addEventListener('click', function() {
    // console.log('been clicked?')
    let aria = hiddenUL.getAttribute('aria-hidden')
    
    //created information should only be created once then store, not created over and over again 
    hiddenUL.setAttribute('aria-hidden', aria === 'true' ? 'false' : 'true')
    
    if (aria === 'true') {
      hiddenUL.style.visibility = 'visible' 
      infoButton.innerText = 'Less Info'
    } else {
      hiddenUL.style.visibility = 'hidden' 
      infoButton.innerText = 'More Info'
    }
  })

  mainBody.appendChild(mainUl)
  
  //add this index to your indexUsed array so you don't make it again
  indexUsed.push('index',index)
} 
  
}

