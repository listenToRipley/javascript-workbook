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

function movePiece(startPoint, endPoint) {
  // Your code here

//establish the index of your array in each object
  let lastInStackIndex = startPoint.length-1
  
  //take the last item off of stack and move it
  let removeFrom = startPoint.pop(lastInStackIndex)

//all ends should push the pop item on the next index,
    //need to push the popped it here, which is what we were doing below
  let moveTo = endPoint.push(removeFrom)

  //LAST THREE SHOULD BE DAISY CHAINED
    return moveTo
}

function isLegal(starter, ender) {
  
    //access the stack 
    let startPoint = stacks[starter]
    let endPoint = stacks[ender]

  // Your code here
  //since it is is Legal, not is Legal, any falsys should be trues 
    // console.log('inside is legal start point: ', startPoint)
    // console.log('inside is legal end points: ', endPoint)

        //the array you are trying to move from is empty
      if (startPoint.length === 0) {
        return false
      } 
    //the array you are trying move to is empty
      if (endPoint.length === 0) {
        return true 
      }

      //need to asses the last item in the index of your current move  
      let lastIndexStart = startPoint.length-1
      let lastIndexEnd = endPoint.length-1
      
   if(
    //the array you a try move to has a value which is greater already in it 
    (startPoint[lastIndexStart] < endPoint[lastIndexEnd])
    // of the starting position happens to be the same as the end position 
      && (startPoint !== endPoint)) {
    return true
  } else {
    return false
  }

}

function checkForWin() {
  // Your code here
  //you move all your values from stack a to stack c and the order is the same as the beginning 
if(stacks.b.length === 4 || stacks.c.length === 4) {
  return true 
} else {
  return false 
}
}

function towersOfHanoi(startStack, endStack) {
  // Your code here

  // valid that the entry is something that can be done 
  if (startStack === 'a' || startStack === 'b' || startStack === 'c' && endStack === 'a' || endStack === 'b' || endStack === 'c') {

  //does seem to be case sensitive 
  let starter = startStack.toLowerCase().trim()
  let ender = endStack.toLowerCase().trim()

  //access the stack 
  let startPoint = stacks[starter]
  let endPoint = stacks[ender]

  console.log('here is ' + startStack, 'here is '+ endStack)
  console.log('here is start: '+ startPoint, 'here is end : ' + endPoint)

  //seems to like to have the move piece first, when I changed it to a while statement, the move function stopped working
 if (isLegal(starter, ender) === true) {
    movePiece(startPoint, endPoint)
 } else {
   console.log('is not legal')
 }
} else {
  console.log('this is not a valid move, please try again')
}

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
       if (checkForWin() === false) {
         getPrompt(); 
      } else {
        printStacks()
        console.log('You won!')
      }
    });
  });
}

// Tests

if (typeof describe === 'function') {

  //my test
  describe('block invalid output', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('es', 'gee');
      assert.deepEqual(stacks, { a: [4, 3, 2,1], b: [], c: [] });
    });
  });

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  //my test
  describe('#towersOfHanoi()', () => {
    it('should trim and lower case the input', () => {
      towersOfHanoi('A', '  B   ');
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

    //my test
    it('should block moves to the same location that you started from', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'a'), false);
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
