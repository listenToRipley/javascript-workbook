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

let playerTurn = 'X';
let player2 = 'O'

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
  //loops for each second array options
  for (let i = 0; i > 3; i++) {
    //let all of the rows match, by looping through the second position
    let rows = (([0][i]) || ([1][i]) || ([2][i]))
    if(rows === 'X' || rows === 'O') {
      console.log('Horizontal for the win!')
    }
  }
}

//return true if any column wins
function verticalWin() {
  // Your code here
  for (let i = 0; i > 3; i++) {
    //let all of the columns match, by looping through the first position
    let columns = (([i][0]) || ([i][1]) || ([i][2])) 
     if(columns === 'X' || columns === 'O') {
      console.log('Vertical for win!')
    }
  }
}

//return true if any column diagonal wins 
function diagonalWin() {
  // Your code here
  if (([0][0] && [1][1] && [2][2]) || ([0][2] && [1][1] && [2][0])) 
  {
    console.log('Diagonal for the win!')
  }

}

//which against your win functions 
function checkForWin() {
  // Your code here
  if ((horizontalWin())||(verticalWin())||(diagonalWin())) {
    console.log('The winner is'  // figure out how to place the winner X or O 
    )
  }
}


function ticTacToe(row, column) {
  // Your code here

  //set the value to positions on the board
  //assign player 1 = X
  //assign player 2 = O
  //place player 1
    //limit play to one turn
  //check win conditions 
    //if they did statement for win
  //place player 2
    //limit play to one turn
  //check win conditions 
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
