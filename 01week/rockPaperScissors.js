// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  // Write code here
  // Use the unit test to see what is expected

  let formattedHand1 = hand1.trim().toLowerCase()
  let formattedHand2 = hand2.trim().toLowerCase()
  
  const rh1 = (formattedHand1 === 'rock')
  const ph1 = (formattedHand1 === 'paper')
  const sh1 = (formattedHand1 === 'scissors')
  
  const rh2 = (formattedHand2 === 'rock')
  const ph2 = (formattedHand2 === 'paper')
  const sh2 = (formattedHand2 === 'scissors')
  
  const tie = (rh1 && rh2) || (sh1 && sh2) || (ph1 && ph2)
  const winner1 = (rh1 && sh2) || (ph1 && rh2) || (sh1 && ph2)
  const winner2 = (ph1 && sh2) || (rh1 && ph2) || (sh1 && rh2)
  
  let wrong = (!(winner1) && !(winner2))
  
  if (tie) {
    return "It's a tie!"
  }
  else if (winner1) {
    return "Hand one wins!"
  
  } else if (winner2) {
    return "Hand two wins!"
  
  } 
  else if (wrong) {
    return `This is "Rock, Paper, Scissors" not "Ninjas, Wizards, Vikings", try again.` 
  }
  
  }

// the first function called in the program to get an input from the user
// to run the function use the command: node 01week/rockPaperScissors.js
// to run a test: npm test 01week/rockPaperScissors.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
