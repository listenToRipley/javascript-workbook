  
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
  return `just checking`
// Write code here
// Use the unit test to see what is expected


// this would be always evaluating the hand1 first then hand2

// if (( hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'paper')) {
//   console.log('Hand one wins!')


// } else if ((hand1 === 'paper' && hand2 === 'scissors') || (hand1 === 'rock' && hand2 === 'paper' ) || (hand1 === 'scissors' &&hand2 === 'rock')) {
//   console.log('Hand two wins!')

// } else if ((hand1 === 'rock' && hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'paper')) {
//   console.log(`It's a draw! Your both win!`)

// } else {
//   console.log(`This is "Rock, Paper, Scissors" not "Ninjas, Wizards, Vikings", try again.`)
// }

// const hand1Wins = (( hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'paper'))
// const hand2Wins = ((hand1 === 'paper' && hand2 === 'scissors') || (hand1 === 'rock' && hand2 === 'paper') || (hand1 === 'scissors' &&hand2 === 'rock')) 
// const itsATie = ((hand1 === 'rock' && hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'paper'))

// let winner1 = 'Hand one wins!'
// let winner2 = 'Hand two wins!'
// let drawOrTie = `It's a draw! You played the same thing!`

// switch(rockPaperScissors) {

 

//     // win conditions for player1
//     case hand1Wins:
//       return winner1
//     break

//     //win conditions for play2

//     case hand2Wins:
//       return winner2
//     break

//     // tie / draw conditions 
//     // if each is equal to itself 
//     case itsATie:
//       return drawOrTie
//     break

    // if you didn't use the values defined it should default to here 
    // default: 
    //   console.log(`This is "Rock, Paper, Scissors" not "Ninjas, Wizards, Vikings", try again.`)
  // }
}

// the first function called in the program to get an input from the user
// to run the function use the command: npm test 01week/rockPaperScissors.js
// to close it ctrl + C
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