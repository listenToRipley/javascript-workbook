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

// -It's a tie!
// -Hand one wins!
// -Hand two wins!
// - 'well you\'re not Sheldon Cooper'

const rockPaperScissors = (hand1, hand2) => {

   // Write code here
  // Use the unit test to see what is expected

  //possible results 
  const winner1 = 'Hand one wins!'
  const winner2 = 'Hand two wins!'
  const tieOrDraw = `It's a draw! You played the same thing!`
  const notSPR = `This is "Rock, Paper, Scissors" not "Ninjas, Wizards, Vikings", try again.`

  // should be one of these three

  const s = 'scissors'
  const p = 'paper'
  const r = 'rock'

// this would be always evaluating the hand1 first then hand2


//hand1 rock outcomes 
  switch(rockPaperScissors) {

    // win conditions for player1
    //       rock and scissors             or         paper and rock           or         scissors and paper
    case (((hand1 === r) && (hand2 === s)) || ((hand1 === p) && (hand2 === r)) || ((hand1 === s) && (hand2 === p))) :
      console.log(winner1)
      return winner1
    break

    //win conditions for play2
    //            paper and scissors       or          rock and paper          or        scissors and rock
    case (((hand1 === p) && (hand2 === s)) || ((hand1 === r) && (hand2 === p)) || ((hand1 === s) && (hand2 === r))):
      console.log(winner2)
      return winner2
    break

    // tie / draw conditions 
    // if each is equal to itself 
    case (((hand1 === r && hand2 === r)) || ((hand1 === s && hand2 === s)) || ((hand1 === p && hand2 === p))):
      console.log(tieOrDraw)
      return tieOrDraw
    break
    default: 
    console.log('doing it wrong')
    return notSPR
  }

  }





// the first function called in the program to get an input from the user
// to run the function use the command: node test 01week/rockPaperScissors.js
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
    it("should scrub input to ensure lowercase with "trim"ed whitepace", () => {
      assert.equal(rockPaperScissors('rocK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
