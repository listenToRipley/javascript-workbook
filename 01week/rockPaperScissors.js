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
// there are only the options below to return


const rockPaperScissors = (hand1, hand2) => {

// Write code here
// Use the unit test to see what is expected


// this would be always evaluating the hand1 first then hand2
let hand1 = {
  R : 'rock',
  P : 'paper',
  S : 'scissors'
}

let hand2 = {
  R : 'rock',
  P : 'paper',
  S : 'scissors'
}
switch(hand1 | hand2) {


    // win conditions for player1
    case ((hand1.R & hand2.S) | (hand1.P & hand2.R) | (hand1.S & hand2.P)):

    //       rock and scissors                         or              paper and rock               or               scissors and paper
    // case (((hand1 === 'rock')&&(hand2 === 'scissors')) || ((hand1 === 'paper')&&(hand2 === 'rock')) || ((hand1 === 'scissors')&&(hand2 === 'paper'))) :
      console.log('Hand one wins!')
    break

    //win conditions for play2
    case ((hand1.P & hand2.S) | (hand1.R & hand2.P) | (hand1.S & hand2.R)):

    //            paper and scissors                    or          rock and paper                     or        scissors and rock
    // case (((hand1 === 'paper')&&(hand2 === 'scissors')) || ((hand1 === 'rock')&&(hand2 === 'paper')) || ((hand1 === 'scissors')&&(hand2 === 'rock'))):
      console.log('Hand two wins!')
    break

    // tie / draw conditions 
    // if each is equal to itself 
    case ((hand1.R & hand2.R) | (hand1.S & hand2.S) | (hand1.P & hand2.P)):
    // case (((hand1 === 'rock')&& (hand2 === 'rock')) || ((hand1 === 'scissors')&&(hand2 === 'scissors')) || ((hand1 === 'paper')&&(hand2 === 'paper'))):
      console.log(`It's a draw! You played the same thing!`)
    break

    // if you didn't use the values defined it should default to here 
    // default: 
    //   console.log(`This is "Rock, Paper, Scissors" not "Ninjas, Wizards, Vikings", try again.`)
  }

}


// the first function called in the program to get an input from the user
// to run the function use the command: npm test 01week/rockPaperScissors.js
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
// You use them run the command: npm test 01week/rockPaperScissors.js
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
    it("should scrub input to ensure lowercase with `trim`ed whitepace", () => {
      assert.equal(rockPaperScissors('rocK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
