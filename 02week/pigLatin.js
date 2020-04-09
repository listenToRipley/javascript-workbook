'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


const pigLatin = (word)  => {

//formats your word
let formatWord = word.trim().toLowerCase() 

//checks if your word has an vowel is in it
            //regex was a lot simpler than trying to get a for loop to got through each letter. 
let vowel = formatWord.match(/[aeiou]/)

//finds the index of that first vowel
let position1 = formatWord.indexOf(vowel)

//the index of the first vowel is the first position
if(position1 === 0) {
  return formatWord + 'yay'

//the position of the first vowel should be greater than index 0
} else if (position1 >= 1) {
  return formatWord.slice(position1) + formatWord.slice(0, position1) + 'ay'
}
//in case it's doesn't have a vowel in it. 
else if (!vowel){
  return formatWord.substr(1) + formatWord.substr(0,1) + 'ay'
}
  
}

// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }


//nothing will happen unless the button is clicked first 
let translateButton = document.getElementById('translate')
translateButton.addEventListener('click', function(){
  console.log('this is the button you click to translate ', translateButton)

//pulling the text field into my JS
let wordInput = document.getElementById('funPrompt')
console.log('here is the input field ', wordInput)
//making the content on the text within the field actionable

//make the input field equal to the word in the pigLatin function

  //IMPORTANT NOTE!
    //this would be the word before it is translated! 
let newWord = wordInput.value
console.log('the phase/word you are translating to PIG LATIN IS: ', newWord)

//set the input field to blank after word is entered
wordInput.value = ''

//for each word entered, we want to create a new span
let spanDisplayResult = document.createElement('span')
spanDisplayResult.innerText = pigLatin(newWord)
                  //we want the output create to be the pigLatin, not the word in its current state

//create space with the div where I was the result to display
let mainDisplay = document.querySelector('#mainOutput')
  console.log('this is the mainDisplay where my result will go ',mainDisplay)

//lets create a div for the message and translation to go into
let resultDiv = document.createElement('div')
//for css
resultDiv.className = 'result'

//make this div live inside the mainOutput
mainDisplay.appendChild(resultDiv)

//should add some display text that shows that content of your results
let displayMessage = document.createElement('h3')
  console.log('where is my displaymessage at?', displayMessage)
displayMessage.innerText = (`'${newWord}' is now : `)


//here is where your display message gets added to your div
resultDiv.appendChild(displayMessage)

//add the span to the div section
resultDiv.appendChild(spanDisplayResult)
setupSpanEvent(spanDisplayResult)

//keep the list of everything you have tried: 
function setupSpanEvent(spanDisplayResult) {
  for(let i=0; i<spanDisplayResult.length; i++) {
    let spanDisplayResult = inPigLatin[i]
  }
}

})

// Tests
// gas
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }


