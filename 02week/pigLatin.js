'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word)  => {

  let properWord = word.trim().toLowerCase()

  let firstVowel = (properWord) => {
    //a
    if (properWord.includes('a')) {
       console.log(properWord.indexOf('a'))

    //e
    } else if (properWord.includes('e')){
      console.log(properWord.indexOf('e'))

    //i
    } else if (properWord.includes('i')) {
      console.log(properWord.indexOf('i'))
    } 

    //o
    else if (properWord.includes('o')) {
      console.log(properWord.indexOf('o'))
    }

    //u
    else if (properWord.includes('u')) {
      console.log(properWord.indexOf('u'))
    }

    //other 
    else {
      console.log(properWord.substring(0,2))
    }
  }

  //locate the first vowel
  let p1 = (properWord) => {
    properWord.substring(firstVowel)
    console.log(p1)

  } 
    
  //the removed first part 
  let p2 = (properWord) => {
    properWord.substring(0,firstVowel-1)
    console.log(p2)
  } 
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
