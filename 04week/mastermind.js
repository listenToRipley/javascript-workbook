'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];

//the 'solution' is the mastermind's input
let solution = '';

//since we're restricting the letters you can choose, should be short circuit this? 
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

//these are for testing 
function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

//this is a helper function for the generateSolution 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//this function should generate output that is the guess hints 
function generateHint(guessArray) {
  // your code here

  // console.log('is my guess array coming through!', guessArray)
  //converts my string to an array so I can loop through it 
  let solutionArray = solution.split('')
  // console.log('this is what my solution looks like now ', solutionArray)

  // console.log(`this is the length of my solution array :`,solutionArray.length)

   //this variable will need to count how many letters are in the correct location 
  let correctLetterLocations = 0  
    // console.log('before the loop, my 100% accurate guesses are: ', correctLetterLocations)


  //this will count how many letters match the solution 
  let correctLetters = 0
  // console.log('before the loop, the correct guesses letters are: ', correctLetters)

  //first we're check if the location and letter matches 

  let temporarySolution = []  
  let leftOvers = []

  //using the index of the solution array, we want to check against each item in the index and verify if they match 
  // console.log('this is the start loop for 100% accurate guesses')
  for(let i = 0; i<solutionArray.length; i++) {
    if(solutionArray[i] === guessArray[i]) {
        //remove the correct answers for the array 
        temporarySolution.push(solution[i])
        correctLetterLocations ++ 
      // console.log('current 100% accurate guesses are: ' + correctLetterLocations)
    } else {
      //move the unaccounted for items to their own array
      leftOvers.push(solution[i])
    }
    correctLetterLocations
  }

    //checks to see if any of the letters match 

  for (let i = 0; i<guessArray.length; i++) {
    for (let j = 0; j<leftOvers.length; j++) {
      if (guessArray[j] === leftOvers[i]) {
        correctLetters ++
      } 
      correctLetters
    }
    correctLetters
  }

//   console.log('the number of 100% correct guesses are' + correctLetterLocations)
//   console.log('the number of correct letters is ' + correctLetters)

// console.log('you have 100% correct guesses are :' + correctLetterLocations)
// console.log('you have correct letters is :' + correctLetters)

//add your hint to the board 
return correctLetterLocations + '-' + correctLetters

}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
    //format your array
    let guessFormatted = guess.trim().toLowerCase()

    //make your guess into an array
    let guessArray = guessFormatted.split('')
    // console.log('guess array looks like now',guessArray)

    //these must return true if you want to execute 
    //your guess must be 4 long 
    if ((guessArray.length > 4) || (guessArray < 4)) {
      console.log('your guess must be 4 characters long. Try again')
    }
      //the guess doesn't contain the characters available in the letters set 
        //~~not working
    else if (guessArray.includes(letters) === true) {
      console.log('only characters available in a guess are :', letters)
    }

    //short circuited
      //check if you got the guess correct right away
     if (guessFormatted === solution) {
      return 'You guessed it!'
      //make sure you still have turns left
    } else  if (board.length === 10){
      return 'You ran out of turns! The solution was ' + solution
      //if you haven't guess it and you still have turn, then generate a hint. 
    } else {
      // console.log('guess should be here', guessArray)
       //show your input, then show your errors
      board.push(guessFormatted)
      return generateHint(guessArray)
    }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    //get the input of the guess
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
