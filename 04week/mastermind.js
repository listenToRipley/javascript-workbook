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

  //using the index of the solution array, we want to check against each item in the index and verify if they match 
  // console.log('this is the start loop for 100% accurate guesses')
  for(let i = 0; i<solutionArray.length; i++) {
    if(solutionArray[i] === guessArray[i]) {
        correctLetterLocations ++ 
      // console.log('current 100% accurate guesses are: ' + correctLetterLocations)
    }
    correctLetterLocations
  }

    //checks to see if any of the letters match 

  for (let i = 0; i<solutionArray.length; i++) {
    for (let j = 0; j<guessArray.length; j++) {
      if (guessArray[j] === solutionArray[i]) {
        correctLetters ++
      } 
      correctLetters
    }
    correctLetters
  }

  console.log('this is after both functions have run')
  console.log('the number of 100% correct guesses are' + correctLetterLocations)
  console.log('the number of correct letters is ' + correctLetters)

  //this isn't coming through 

    //this is the count for me total correct guesses made, either 100% or just letter
  console.log('start of if statement')
// you correctLetterLocations number will always remain the same, but your correctLetters will change 
if ((correctLetters < correctLetterLocations)||(correctLetters > correctLetterLocations)) {
  // console.log('you have more correct locations')
  return ((correctLetters = Math.abs(correctLetterLocations - correctLetters)), correctLetterLocations)
} else if (correctLetterLocations === correctLetters) {
  // console.log('your correct letters and locations are equal')
  return ((correctLetters = 0), correctLetterLocations)
} else if (correctLetters === 0 && correctLetterLocations === 0) {
  return ((correctLetterLocations = 0), (correctLetters = 0))
}

//
console.log('after my if statement')

console.log('after if statement you have 100% correct guesses are' + correctLetterLocations)
console.log('after if statement you have correct letters is ' + correctLetters)


console.log(correctLetters, correctLetterLocations)
//add your hint to the board 
  let showHint = board.push(correctLetterLocations.red + '-' + correctLetters.white)

  return showHint
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

    let guessFormatted = guess.trim().toLowerCase()

    let guessArray = guessFormatted.split('')
    console.log('guess array looks like now',guessArray)

    //if I contain this to its own function, maybe it will run?
    let valueInput = (guessFormatted, guessArray) => {

    let duplicateLetters = (letters) => {
      console.log('it ran')
      if (guessFormatted.indexOf(letter) >= 0) {
        console.log('no duplicates')
        return true
      } else {
        console.log('this guess contains duplicates')
        return false;
      }
    }

    //this is all wrong
  
    let notValue = guessArray.forEach((letter, index) => {
      console.log('this one ran too')
      if (guessArray.includes(letters) === true) {
        return true
      } else {
        return false
      }
    })

    //the guess should not be longer than 4  
      //I know it's not right, but I am trying.  
    if(notValue === false) 
    { 
      console.log('these letters are not included in the the guess options')
      return false
    } 
    else if (guessFormatted.length > 4 || guessFormatted.length < 4) {
      console.log('your guess is not the right length, please try again')
      return false
       
      //duplicate letter 
    } else if (duplicateLetters === false) {
      console.log('there is a double letter in this guess')
      return false 
    } 
    //we only want letters, not numbers 
      else if (typeof guessFormatted !== 'string'){
      console.log('we only accept letters')
      return false 
    }
      else {
      // console.log('this guess is acceptable')
      return true 
    }
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
      // console.log('guess should be here', guessArray)
       //show your input, then show your errors
      board.push(guessFormatted)
      generateHint(guessArray)
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
    // generateHint();
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
