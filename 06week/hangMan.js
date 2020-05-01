//come up with word or phase to guess, the secret phrase
console.log('this is the hang man game')

//use this array for guess after your word has been converted to a string
let secret = []

//concerts your string to an array for guessing 
let secretString = (string) => {
  secret = Array.from(string)
}
secretString('hello')

console.log(secret)
//how long is the secret phrase
//create a line for each letter in the secret phrase
let hide = (array) => {
  hiddenArray = []
  //for every letter in the array 
  array.forEach(element => {
    //hid it by changing it to a "_"
    element = '_'
    //and move that into it's own array called hiddenArray 
    hiddenArray.push(element)
  });

  //display the hiddenArray 
  return hiddenArray
}

//where you see the current secret phrase 
let board = hide(secret)
  //here is where I have what letter wrong 
let guesses = []
console.log(hide(secret))
  //set assign space for incorrect guesses 

//the someone tries to guess the secret phrase 
let currentGuess = ' '
  //rules: 

  //they give a single letter at a time 
  if(currentGuess.length < 1) {
    return 'I am sorry, you can only guess one letter at a time'
      //cannot reuse letters after already used, either correct or incorrect
  } else if (guesses.includes(currentGuess) === true|| hiddenArray.includes(currentGuess) === true) {
    return `you've already used that letter, try again one`
      //if letter isn't included in the secret phrase, then place in the incorrect guesses 
  } else if (secretString.includes(currentGuess) === false) {
    guesses.push(currentGuess)
    return guesses
      //if the they get one or more letter from the secret phrase, replace the line with that letter
  } else if (secretString.includes(currentGuess) === true) {
      let indexLocation = []
    //loop through secretString and return the index for each letter that matches the currentGuess 
    secretString.forEach(element, index => {
      if (element === currentGuess) {
        indexLocation.push(index)
      }
    })
    //push the currentGuess to that index on the hiddenSecret 
    //display the new hiddenSecret with the correctGuesses 
  }

    //do we want to add something that allows them to "solve the puzzle?"