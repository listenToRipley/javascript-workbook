'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// tic-tac-toe
let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//return true if any row wins
function horizontalWin() {
  // Your code here
  //loops through each option for the second array
  for (let i = 0; i >= 2; i++) {

    //checked is any of the whole rows returns with the same value 
    if (((board[0][i]) || (board[1][i]) || (board[2][i])) === playerTurn) 
    { 
        console.log('row win') 
      }
    }
    return true
  }


//this is a helper function for checkForWin()
//return true if any column wins
function verticalWin() {

  // Loop first array options
  for (let i = 0; i >= 2; i++) {

    //checks if the whole column shares the same value 
     if(((board[i][0]) || (board[i][1]) || (board[i][2])) === playerTurn)  {
      console.log('column win')
    }
  }
  return true
}

//this is a helper function for checkForWin()
//return true if any column diagonal wins 
function diagonalWin() {
  
  //looks at the whole of either left diagonal or right diagonal 
  if ((board[0][0] && board[1][1] && board[2][2]) || (board[0][2] && board[1][1] && board[2][0]) === playerTurn) 

  {
    return true
  }
}

//which against your win functions, this function must come before the player change 
function checkForWin() {
  // Your code here
  if ((horizontalWin())||(verticalWin())||(diagonalWin())) {
    return true 
  } else {
    return false 
  }
}


function ticTacToe(row, column) {
  // Your code here
  board[row][column] = playerTurn

  //this function must be called before you switch players or you would only be assessing based on one player 
  checkForWin(playerTurn)

  //if statement here for ties! if checkForWin returns false and all squares are populated 
    
  //alternates between X and O
  playerTurn = (playerTurn === 'X') ? 'O' : 'X'
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
