'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here

  let solutionArray = solution.split('')
  let guessArray = ''
  //check of the above variable will need to be .split('')
  let correctLetterLocations = 0 
  //this variable will need to count how many letters are in the correct location 
  //this variable should increase for every letter and index that matches 
  // if it returns no matches, return null 
  let correctLetters = 0
  //loop through that solutionArray, w/ .indexOf() 
  //determine if guessArray appears at all in solutionArray 
  //save the index in the variable called 
  let targetIndex = 0
  //if targetIndex > -1 increase correctLetters 

  //hints

  //console.log out correctLettersLocations in red and correctLetters in white, separated by a hyphen.
  
  //add your hint to the board 


}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

  //how to play: 
  //1. mastermind chooses four, in this case, letter and keeps them secret, the secret code.
  //2. the codebreaker provide a guess to see if they can figure out the secret code. 
  //3. After the guess is made, the mastermind must provide hints to the codebreaker
    // if the code breaker provided:
       //a. if th guess matches the secret code
          // the game is over 

          //else 
        //b. if the letter and location with the guess matches
          //return 1 for each match 
        //c. if the letter matches, but the location does not
          //return 1 for each match 
        //d. if no matches can be found, return nothing 
    //4. as long as 3.a. - winning - has not occurred, continue 3.b. - 3.d. until 10 guess have been made.
    //5. if there has been 10 guesses and a correct guess has not been made
        // the mastermind wins
        //the codebreaker loses 

        
  //if they get the answer it should return 'You guessed it!'


  // the end 
  if (board.length = 10) {
    return 'You ran out of turns! The solution was ' + solution
  } else {
    return 'Guess again.'
    //need to run the hint function again 
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
