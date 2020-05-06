'use strict'

window.onload = function() {
  addressBook() 
  console.log('my page has loaded')
}

let addressBook = function() {
  let book = fetch('https://randomuser.me/api/')
  book.then(function(response) {
    console.log('here is the fetch response = ', response)
    return response.json()
  })
  .then(function(data) {
    console.log('I want to look at each entry = ', data)
    data.forEach(updatePage)
  })
}

let updatePage = function(view) {
  console.log('show the item entry')
  let people = document.getElementById('people')
  
  let details = document.createElement('li')
    details.innerText = view.name
    people.appendChild(details)
}