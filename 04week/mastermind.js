//felts like  I really messed up the first one, so I am trying to pull out what I know what works and makes me notes less confusing. 
//if you want to review my first tempt, you cna find it here:
//https://github.com/listenToRipley/javascript-workbook/compare/gh-pages...listenToRipley:mastermind 

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

function generateHint(guessFormat) {
  // your code here

  //solution is global, so we should be able to change it into an array like this
  let solutionArray = solution.split('')
  //guess is passed it so we should be able to change it to an array here 
  let guessArray = guessFormat.split('')

  console.log(`solution = ${solutionArray} & guess = ${guessArray}`)

  // count for 100% accurate guesses 
  let correctLetterLocations = 0

  //count for correct letters supplied
  let correctLetters = 0 

  //loop through the arrays and compare the index locations with the letters in that location to see if they match
  for(let i = 0; i<solutionArray.length; i++) {
    if(solutionArray[i] === guessArray[i]) {
      correctLetterLocations ++
    }
    correctLetterLocations
  }

  //loop through each array to determine if any of the letters are contains in the guess
  solutionArray.forEach((solutionLetters) => {
    guessArray.forEach((guessLetters) => {
      if (guessLetters === solutionLetters) {
        correctLetters ++ 
      }
      correctLetters
    })
    correctLetters
  })

  let locationsOverLetters = Math.abs(correctLetterLocations - correctLetters)

  if (correctLetterLocations === 4) {
    console.log('this should have been caught before! you won!')
  }
  else if((correctLetters < correctLetterLocations) || (correctLetters > correctLetterLocations)) {
    console.log(correctLetters = locationsOverLetters)
  } else if (correctLetters === correctLetterLocations) {
    console.log(correctLetters = 0)
  }
    else if ((correctLetters === 0) && (correctLetterLocations === 0)) {
      console.log('sorry, none of these match the code')
    }

    return correctLetterLocations, '-', correctLetters
  }


function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

  //format the guess 
  let guessFormat = guess.trim().toLowerCase()
  console.log(`can you see the guess: ${guessFormat}`)

  console.log('this is where the board add is')
  //add guess to the board
    //we want to see the guess
  board.push(guessFormat)

  //validate the guess is accurate 
    //too long                                        //not a string
  if((guessFormat.length > 4 || guessFormat < 4) || (typeof guessFormat !== 'string')) {  
    console.log('this is not a valid guess, please try again')
    return false
  } else if(guessFormat === solution) {
    //need to stop the board from continuing to allow me to bring
    console.log('You guessed it!')
    return true
  } else if (board.length === 10) {
    console.log('You ran out of turns, the solution was : ', solution)
    return false
  } else {
    generateHint(guessFormat)
  }
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    //after you added the item to the board, you want to add the hint?
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
