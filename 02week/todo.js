console.log('This my js page')

//add button clicked, 
  //append the list to add the new text to bottom of the list

let addButton = document.getElementById('add')

addButton.addEventListener('click', function() {
  console.log("my delete button ", addButton)

//   the new content should look like this
//   <li>
//   <span class="done">inner text here</span> 
//     <button class="delete">delete</button>
// </li>

let toDoText = document.getElementById('newContent').nodeValue;
let li =  document.createElement('li')
let span =   document.createElement('span').innerText = toDoText

let deleteButton = document.createElement('button')
  deleteButton.innerText = 'delete'
  deleteButton.classList.add('delete')

let ul = document.getElementsByTagName('ul')
ul.appendChild(li)
li.appendChild(span)
setUpSpanEvent(span)
li.appendChild(deleteButton)
setupDeleteEvent(deleteButton)
})

//delete button clicked, 
  //remove the individual item associated with the line item, the parent list item 
let allDeletes = document.querySelectorAll('.delete')
for (let i = 0; i < allDeletes.length; i++) {
  let deleteButton = allDeletes[i]
  function setupDeleteEvent(deleteButton) {
    deleteButton.addEventListener('click', function() {
      console.log(`Delete got clicked, it's parent node is, `, deleteButton.parentElement)
      let parentLi = deleteButton.parentElement
      let parentUl = parentLi.parentElement
      parentUl.removeChild(parentLi)
    })
  } 
}

//when the span is clicked, 
  //class "done" added to it 
  //create a strike through effect 

  let allSpans = document.querySelectorAll('span')
  console.log(allSpans, 'is here');

for(let i = 0; i < allSpans.length; i++) {
  let span = allSpans[i];
  // console.log('The span is here', span)
}

function setUpSpanEvent(span) {

  span.addEventListener('click', function() {
    console.log('now the span is here', span);
    span.classList.add('done');
  })
}
