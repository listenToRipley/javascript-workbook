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

function movePiece() {
  // Your code here
  //take the last item off of stack and move it

//this will always be your starting state 
let stackA = stacks.a
let stackB = stack.b
let stackC = stack.c

//establish the index of your array in each object
let lastStackA = stackA[stackA.length-1]
let lastStackB = stackB[stackB.length-1]
let lastStackC = stackC[stackC.length-1]

//all the move from s 
let removeFromA = stackA.pop(lastStackA)
let removeFromB = stackB.pop(lastStackB)
let removeFromC = stackC.pop(lastStackC)

//move combinations 

//move from stack a to stack c
// let aToC = 
stackC.push(removeFromA)

//move from a stack to stack b
// let aToB = 
stackB.push(removeFromA)

//move from stack b to stack a 
// let bToA = 
stackB.push(removeFromA)

//move from stack b to stack c
//let bToC = 
stackB.push(removeFromC)

//move from stack c to stack a 
//let cToA = 
stackC.push(removeFromA)

//move from stack c to stack b 
//let cToB = 
stackC.push(removeFromB)
}

function isLegal(startStack, endStack) {
  // Your code here
  // you cannot occupy the space of a smaller number  
    //nor can you move to the same space 
    //we need to make sure to compare the value of your current move to the last array value already there.
  if((endStack < startStack)||(startStack === endStack)) {
    return false
  } 

}

function checkForWin() {
  // Your code here
  //you move all your values from stack a to stack c and the order is the same as the beginning 
if(stackC === [4, 3, 2, 1]) {
  return true 
}

}

function towersOfHanoi(startStack, endStack) {
  // Your code here

//we want to startStack to equal where you are moving from to where you are moving to. The value should always be the one on top.

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
