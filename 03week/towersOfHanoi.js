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

//this will always be your starting state 
  //if this is placed here, then all functions should be able to use these variables 
  let stackA = stacks.a
  let stackB = stacks.b
  let stackC = stacks.c

function movePiece() {
  // Your code here


//establish the index of your array in each object
  //should this be created as it's own object? 
let lastStackA = stackA[stackA.length-1]
let lastStackB = stackB[stackB.length-1]
let lastStackC = stackC[stackC.length-1]

  //take the last item off of stack and move it
let removeFromA = stackA.pop(lastStackA)
let removeFromB = stackB.pop(lastStackB)
let removeFromC = stackC.pop(lastStackC)

//this should be placed here? Or in the last function? 
//all start should pop the last item on the index last 
let startStack = (removeFromA || removeFromB || removeFromC)

//all ends should push the pop item on the next index,
  //this is not current right, it would just continuously pop 
let endStack = (removeFromA || removeFromB || removeFromC)

    //move combinations 
    //we only want to push if the item is called 
//we want to first make sure this is a valid move 
  //and win condition has not yet been met
  //is this considered hoisting? should this be placed in the last function?
if ((isLegal === true) && (checkForWin === false)) {
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
} else {
  return false 
  console.log('try again! not valid move!')
}

}

function isLegal() {
  // Your code here
    // the item being pop is greater then the last item push to that location
  if((endStack < startStack)
    // of the starting position happens to be the same as the end position 
      ||(startStack === endStack)) {
    return true
  } else {
    return false 
    console.log('try again!')
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

  //all other functions have been built into the other functions 
    movePiece(startStack, endStack) 

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
