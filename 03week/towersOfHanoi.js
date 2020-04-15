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
// let lastStackA = stackA[stackA.length-1]
// let lastStackB = stackB[stackB.length-1]
// let lastStackC = stackC[stackC.length-1]
  //or we could create another helper function to make this a lot shorter 
                          //should this be starter stack maybe?
  let lastInStackIndex = (startStack) => {
    return startStack.length-1
  }

  //take the last item off of stack and move it
// let removeFromA = stackA.pop(lastStackA)
// let removeFromB = stackB.pop(lastStackB)
// let removeFromC = stackC.pop(lastStackC)
  // or we could create another function to go through each
                    // should this still share the same variable name? 
  let removeFrom = (startStack) => {
    return startStack.pop(lastInStackIndex)
  }

//all ends should push the pop item on the next index,
    //need to push the popped it here, which is what we were doing below
  let moveTo = (endStack) => {
    return endStack.push(removeFrom(startStack))
  }

  //LAST THREE FUNCTIONS SHOULD BE DAISY CHAINED

}

function isLegal() {

  // Your code here
    // the item being pop is greater then the last item push to that location
      //need to asses the last item in the index of your current move  
      let lastValueInStack = (stack) => {
        return stack.length-1
      }
  if((endStack[lastValueInStack(endStack)] < startStack[lastValueInStack(startStack)])
    // of the starting position happens to be the same as the end position 
      ||(startStack === endStack)) {
    return false
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

  //this isn't quite right, we do call these into the move piece, but not right
    if (checkForWin === true) {
      return 'you win'
    } else {
    movePiece(startStack, endStack) 
      if (move)
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
