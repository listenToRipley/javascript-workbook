'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//remember, these are your towers/ your board
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//make sure you're using shift and unshift since you always want it to be the last one 

//this will always be your starting state 
let stackA = stacks.a
let stackB = stacks.b
let stackC = stacks.c

function movePiece() {
  // Your code here
  //take the last item off of stack and move it

//establish the index of your array in each object
  //should this be created as it's own object? 
let lastStackA = stackA[stackA.length-1]
let lastStackB = stackB[stackB.length-1]
let lastStackC = stackC[stackC.length-1]

//all the move from s 
let removeFromA = stackA.pop(lastStackA)
let removeFromB = stackB.pop(lastStackB)
let removeFromC = stackC.pop(lastStackC)

    //move combinations 
    //we only want to push if the item is called 

//move from stack a to stack c
if(((startStack === stackA) && (endStack === stackC))) {
  stackC.push(removeFromA)
}

//move from a stack to stack b
else if (((startStack === stackA) && (endStack === stackB))) {
  stackB.push(removeFromA)
} 
//move from stack b to stack a 
else if (((startStack === stackB) && (endStack === stackA))) {
  stackB.push(removeFromA)
} 

//move from stack b to stack c
else if (((startStack === stackB) && (endStack === stackC))) {
  stackB.push(removeFromC)
} 

//move from stack c to stack a 
else if (((startStack === stackC) && (endStack === stackA))) {
  stackC.push(removeFromA)
} 

//move from stack c to stack b 
else if (((startStack === stackC) && (endStack === stackB))) {
  stackC.push(removeFromB)
} 

}

function isLegal() {
  // Your code here
  // if the last number placed in the space is smaller then the number you are currently trying to place, then you cannot place that new number
    //you cannot move to the same space you started at
    //we need to make sure to compare the value of your current move to the last array value already there.
  if((endStack < startStack)||(startStack === endStack)) {
    return true
  } 

}

function checkForWin() {
  // Your code here
  //you move all your values from stack a to stack c and the order is the same as the beginning 
    //should I just a for in loop here to verify it? 
if(stackC === [4, 3, 2, 1]) {
  return true 
}

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
    //we want to startStack to equal where you are moving from 
   //and the endStack  equal to where you are moving to. 

  //first verify you move if legal
  if (isLegal(startStack, endStack) === false) {
    //then you can move a piece 
    movePiece(startStack, endStack) 
    //then you want to see if you win
    if (checkForWin() === true) {
      // if you win the game is over
      console.log('You win!')
    } else {
      //else you are going to need to keep playing
      movePiece(startStack, endStack)
    }
    //see of the move is illegal, then you won't continue!
  } else {
    console.log('try again')
  }

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
