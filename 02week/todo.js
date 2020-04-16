console.log('This my js page')

//add button clicked, 
  //append the list to add the new text to bottom of the list

let addButton = document.getElementById('addButton')

addButton.addEventListener('click', function() {
  // console.log("my add button ", addButton)

//sets the content
let inputElement = document.getElementById('inputText');
let todoText = inputElement.value

//makes sure the text goes back to blank after the text is entered
inputElement.value = '';

//create my list item
let li =  document.createElement('li')

//creates a span item 
let span = document.createElement('span')
//appends the inner text to the list
  span.innerText = todoText

//creates a delete button
let deleteButton = document.createElement('button')

//updates the text on the delete button
  deleteButton.innerText = 'delete'

//adds a class for the delete button, makes it so you can edit it in css if you want to
  deleteButton.classList.add('delete')

//adds the list item to the bottom of the of your ul 
let ul = document.querySelector('ul')
ul.appendChild(li)

// adds the span 
li.appendChild(span)
setUpSpanEvent(span)
//and delete button as the children of the new li 
li.appendChild(deleteButton)
setupDeleteEvent(deleteButton)
})

//delete button clicked, 
  //remove the individual item associated with the line item, the parent list item 
let allDeletes = document.querySelectorAll('.delete')
for(let i=0; i<allDeletes.length; i++) {
  let deleteButton = allDeletes[i]
  setupDeleteEvent(deleteButton);
}

function setupDeleteEvent(deleteButton) {
  deleteButton.addEventListener('click', function() {
    console.log('Delete got clicked! parent li is, ', deleteButton.parentElement)
    let parentLi = deleteButton.parentElement
    parentLi,remove()
  })
}

//when span / to do item, get clicked
//the done class should be added to it 
let allSpans = document.querySelectorAll('span')
  // console.log(allSpans, 'is here');

for(let i = 0; i < allSpans.length; i++) {
  let span = allSpans[i];
  setUpSpanEvent(span)
}

//also want to add the click event to the span
function setUpSpanEvent(span) {
  span.addEventListener('click', function() {
    console.log('now the line is here', span);
    span.classList.toggle('done');
  })
}
