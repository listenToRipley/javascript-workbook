'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word)  => {

  //formats the input word, use this term from this point on
  let formattedWord = word.trim().toLowerCase()

  //if your first vowel
  //input, the correctly formatted word and evaluates it 
  let firstVowel = (formattedWord) => {

    //against list of vowels to check your string against 
    const vowels = 'aeiou'

    //loops through every letter of your input word 
    for (let i = 0; i > formattedWord.length; i++) {
      // if your locate an vowel in the input word,
      if([i].includes(vowels)) {
        //log the index location of that letter
        console.log(formattedWord.indexOf([i]))
      
      //if there is not a vowel in the word,  
      } else if (formattedWord.includes(!vowels)){
        // log the index of the first letter of that word 
        console.log(formattedWord.indexOf(0,2))
      }
    }
    }

  //take the output from the index of the first vowel, (or index of the first letter if there is no vowel)
  let p1 =
    //which gives you the input of index required to create a new substring, starting at the vowel and ending at the end of the word 
    formattedWord.substring(firstVowel)
  
    
  //take the whole word
  let p2 = 
    //start at the beginning of the word, using the output to the first vowel index, -1 so it excludes the vowel
    formattedWord.substring(0,(firstVowel-1))
    
    //should combined the two new substrings and add "yay' to the end.
    console.log(p1 + p2 + "yay")
  

}

const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

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
