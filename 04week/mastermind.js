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
function generateHint(guessFormatted) {
  // your code here

  //converts my string to an array so I can loop through it 
  let solutionArray = solution.split('')
  let guessArray = guessFormatted.split('')

  console.log('this is what my solution looks like now ', solutionArray)
  console.log('this what my guess looks like now ', guessArray)

  console.log(`this is the length of my solution array :`,solutionArray.length)

  //using the index of the solution array, we want to check against each item in the index and verify if they match 

  //first we're check if the location and letter matches 

   //this variable will need to count how many letters are in the correct location 
  let correctLetterLocations = 0  
    console.log('before the loop, my 100% accurate guesses are: ', correctLetterLocations)


  //this will count how many letters match the solution 
  let correctLetters = 0
  console.log('before the loop, the correct guesses letters are: ', correctLetters)

  //this is for checking if ANY of the letters provide match the guess
    //this converts my solution ins a regular express so I can check my guess array against it.
  let regexFromSolution = new RegExp(`[${solution}]`);
                                //this has to be a template literal or the formatting isn't right for the regex 
  console.log('this should be a regex of the solution', regexFromSolution)

  console.log('this is the start loop for 100% accurate guesses')

  for(let i = 0; i<solutionArray.length; i++) {
      //this is only looping once and not increase the correctLetterLocations 
    if(solution[i] === guessArray[i]) {
      console.log('this is inside my 100% loop')
      console.log('this is the current letter in the solution :'+ solutionArray[i] +' & the current letter in the guess :', guessArray[i])
      console.log(`make sure that ${solutionArray[i]} is equal to ${guessArray[i]}`)
      
      //this variable should increase for every letter and index that matches 
      return  correctLetterLocations ++ 
      console.log('current 100% accurate guesses are: ' + correctLetterLocations)
    } else {
      return correctLetterLocations = 0 
      console.log('there are no 100% matches in this guess')
    }
    return correctLetterLocations
  }

    //the guess should be checked against the solution 
  for (let i = 0; i > guessArray.length; i++) {
    if (guessArray[i].match(regexFromSolution)) {
      console.log('this is inside my correctLetter function')
      console.log('this is the current letter in the guess :', guessArray[i])
      return correctLetters++
    }
    //if nothing matches, we don't want to ti do anything 
    else {
      return null 
    }
    return correctLetters 
  }

  console.log('this is after both functions for correct answers have run')
  console.log('the number of 100% correct guesses are' + correctLetterLocations)
  console.log('the number of correct letters is ' + correctLetters)

    //this is the count for me total correct guesses made, either 100% or just letter
    let correctGuess = correctLetterLocations - correctLetters
  console.log('now the correct guesses equals ' + correctGuess)

  //the correct letter location should always take president over the correct letter. 
  //we don't want to double count your letters. We care more about the 100% accurate than the correct letters.
  // this number should never be greater than 4. 
  //this isn't quite right. 
  // if you are subtracting 4-4 = 0, 

  if (correctGuess > -1) {
    return correctGuess = 0 
    console.log('nothing was right in that guess')
  } else if (correctLetterLocations === 1 && correctLetters === 1) {
    return correctGuess = 1
    console.log('You have 1 100% accurate guess'.red)
  }

let targetIndex = 0
//if targetIndex > -1 increase correctLetters 

//hints

//console.log out correctLettersLocations in red and correctLetters in white, separated by a hyphen.


//add your hint to the board 

}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
    let guessFormatted = guess.trimmed().toLowerCase()


    if (guessFormatted.length > 4) {
      return 'your guess it too long, try again'
    }

    //short circuited, 
      //check if you got the guess correct right away
          // we shouldn't need to include language in the get hint function for a correct guess, since the function should stop here before it gets anywhere else 
    if (guessFormatted === solution) {
      return 'You guessed it!'
      //make sure you still have turns left
    } else  if  (board.length = 10){
      return 'You ran out of turns! The solution was ' + solution
      //if you haven't guess it and you still have turn, then generate a hint. 
    } else {
      return 'Guess again'
      generateHint()
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
