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
mainDisplay.appendChild(spanDisplayResult)
//place text inside of the input field

  // perform the function in the pig latin
//create an output field where the text displays 

//create location for the new word to go into
let results = document.getElementById('output')
// results.innerHTML = getPrompt()
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


