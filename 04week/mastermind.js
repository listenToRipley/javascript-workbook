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

  //converts my string to an array so I can loop through it 
  let solutionArray = solution.split('')

  console.log('this is what my solution looks like now ', solutionArray)
  console.log('this what my guess looks like now ', guessArray)

  console.log(`this is the length of my solution array :`,solutionArray.length)

   //this variable will need to count how many letters are in the correct location 
  let correctLetterLocations = 0  
    console.log('before the loop, my 100% accurate guesses are: ', correctLetterLocations)


  //this will count how many letters match the solution 
  let correctLetters = 0
  console.log('before the loop, the correct guesses letters are: ', correctLetters)

  //first we're check if the location and letter matches 

  //using the index of the solution array, we want to check against each item in the index and verify if they match 
  // console.log('this is the start loop for 100% accurate guesses')
  for(let i = 0; i<solutionArray.length; i++) {
    if(solution[i] === guessArray[i]) {
        correctLetterLocations ++ 
      // console.log('current 100% accurate guesses are: ' + correctLetterLocations)
    }
    correctLetterLocations
  }

    //checks to see if any of the letters match 
  solutionArray.forEach((solutionLetter) => {
    guessArray.forEach((guessLetter) => {
        //need to add something in here to stops it from counting the same letter
      if (guessLetter === solutionLetter) {
        correctLetters ++
      }
      correctLetters
    })
    correctLetters
  }) 

  console.log('this is after both functions have run')
  console.log('the number of 100% correct guesses are' + correctLetterLocations)
  console.log('the number of correct letters is ' + correctLetters)

    //this is the count for me total correct guesses made, either 100% or just letter
  let locationOverLetter = (correctLetters - correctLetterLocations)
  let letterOverLocation = (correctLetterLocations - correctLetters)

  //if they are equal, the the location of the letter is more important the letter
 if (correctLetterLocations === correctLetters) {
    console.log(correctLetterLocations)
  //if the location number is larger than the correct letters, then the letter should be subtracted from the location, the location takes presents though
  } else if (correctLetters > correctLetterLocations) {
    console.log(correctLetterLocations = (locationOverLetter))
  //of you have more letters than locations, you should subtract the location from the letters and print both 
  } else if (correctLetterLocations > correctLetters)
  { 
      console.log(correctLetter = ((letterOverLocation)))
      console.log(correctLetterLocations = locationOverLetter)
    
    //we shouldn't end up with negative numbers, but if we do, reset it to zero
  }else if (correctLetterLocations> -1) {
    console.log(correctLetterLocations = 0)
  } else if (correctLetters > -1) {
    console.log(correctLetters = 0)
  }

//add your hint to the board 

}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

    let guessFormatted = guess.trim().toLowerCase()

    board.push(guessFormatted)

    let guessArray = guessFormatted.split('')

    //the guess should not be longer than 4    
    if (guessArray.length > 4) {
      console.log('your guess it too long, try again')
      //we only want letters, not numbers
    } else if (typeof guessArray !== 'string' || guessFormatted instanceof String){
      console.log('we only accept letters')
    }
    //would like to add something from stop the same letter being used twice in a string?
    else if (guessArray) {
      console.log('hey! you used the same letter twice')
    }

    //short circuited, 
      //check if you got the guess correct right away
          // we shouldn't need to include language in the get hint function for a correct guess, since the function should stop here before it gets anywhere else 
    if (guessFormatted === solution) {
      console.log('You guessed it!')
      //make sure you still have turns left
    } else  if (board.length === 10){
      console.log('You ran out of turns! The solution was ' + solution)
      //if you haven't guess it and you still have turn, then generate a hint. 
    } else {
      console.log('Guess again')
      generateHint(guessFormatted)
    }

}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    //get the input of the guess
    mastermind(guess);
    printBoard();
    //shouldn't the solution come before the guess? 
      //we only want the solution to be generated once, not continue to generate every turn
    generateSolution();
      // Kept this here to make sure calling it within the mastermind function was correct
        //with all input completed, we should generate the guess
    generateHint();
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
