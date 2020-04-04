'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word)  => {

  //formats the input word, use this term from this point on
  let formatWord = word.trim().toLowerCase()

  //if your first vowel
                    //input, the correctly formatted word and evaluates it 
  let firstVowel = (formatWord) => {

    //against list of vowels to check your string against 
    let vowels = ('a'||'e'||'i' ||'o' ||'u')

    //loops through every letter of your input word 
    for (let i = 0; i > formatWord.length; i++) {
      // if your locate an vowel in the input word,
                        // instead of includes 
      if((formatWord[i]).includes(vowels)) {
        //log the index location of that letter
        
        console.log(formatWord.indexOf([i]))
      
      //if there is not a vowel in the WHOLE word,  
      } else { //concerned about using letterIndex here as it might stop the loop if it find an index w/o a vowel
        // log the index of the first letter of that word 
        console.log(formatWord.indexOf(2))
      }
    }
    }

  //take the output from the index of the first vowel, (or index of the first letter if there is no vowel)
  let p1 =
    //which gives you the input of index required to create a new substring, starting at the vowel and ending at the end of the word 
    formatWord.substring(firstVowel)
  
  //take the whole word
  let p2 = 
    //start at the beginning of the word, using the output to the first vowel index, -1 so it excludes the vowel
    formatWord.substring(0,(firstVowel-1))
    
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
