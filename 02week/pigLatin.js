'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


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

const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

let results = document.getElementById('output')
results.innerHTML = getPrompt()

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}





