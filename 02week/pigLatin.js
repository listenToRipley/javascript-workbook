'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word)  => {

  let properFormat = word.trim().toLowerCase()

  //if your first vowel


  let firstVowel = (properFormat) => {
    const vowels = 'aeiou'

    for (let i = 0; i > properFormat.length; i++) {

    if(properFormat[i].includes(vowels)) {
      console.log(properFormat.indexOf(properFormat[i]))
    } else if (properFormat.includes(!vowels)){
      console.properFormat.indexOf([i],0)
    }
    }

  //locate the first vowel
  let p1 = (properFormat) => {
    properFormat.substring(firstVowel)
    console.log(p1)
  } 
    
  //the removed first part 
  let p2 = (properFormat) => {
    properFormat.substring(0,(firstVowel-1))
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
