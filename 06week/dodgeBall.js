'use strict';

// let assert = require('assert');

//this is my starting list. 
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

//code the will be repeated a lot

//remember the name needs to be a 'string'
const setAtt = (element,id,name) => {element.setAttribute(id,name)}
const appending = (parent, child) => {parent.appendChild(child)}
const byID = (id) => document.getElementById(id)

//get from DOM
const body = byID('body')
const main = byID('main')
const lopParent = byID('lopParent')
  const listElement = byID('people')
const playersDiv = byID('playerParent')
  const dbUL = byID('players')
const blueDiv = byID('bParent')
  const blueUL = byID('blue')
const redDiv = byID('rParent')
  const redUL = byID('red')

const listPeopleChoices = () => {
  arrOfPeople.map(person => {
    // console.log('this this map the whole object?',person) 
    //yes, the whole object is mapped. 
    const li = document.createElement("li")
    const button = document.createElement("button")
      // console.log('button', button)
    button.innerHTML = "Make Player"
    button.addEventListener('click', function(){makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      setAtt(li,'id',`${person.id}`)
        // console.log(li)
      listElement.append(li)
    })
    console.log('listElement',listElement)
  }

  class Player {
    //these characteristic will have to be added to the individuals before they get added to the list of players
    constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      //these would be the default answers on all individuals 
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall; 
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = 0;
    }
  }

//~~~saying that mascot ahd team color have to be stated in the constructor, but it makes everything undefined once passed into the player. 
class Teammates extends Player {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor) {
    super () 
      this.mascot = mascot,
      this.teamColor = teamColor
  }
}

//will allow people to be removed from lists
//we are compare the people who have been pushed to the new group (array), and the HTML list items 
const removedLi = (previousDIV,previousUL ,newArray, previousArray) => {
  //find the last UL
  let preUL = byID(previousUL)
    // console.log('the previous ul list are are trying to update',preUL)
  //create a list of it's children element
  let pULchildren = preUL.children
  // console.log('pul',pULchildren)
  let matchingID 

  //look at the items moved to your new list
  newArray.forEach((element) => {
    matchingID = element.id
    let findMatch = pULchildren.namedItem(matchingID)
    // console.log('find a match?', findMatch)
        //if the id for someone in your new array of players, then delete that li
    if(findMatch) {
      // console.log('and the match was ',findMatch, 'previousArray~~', previousArray, `& element id this go is:`, matchingID )
      // lastDIV.appendChild(preUL)
      // thatIndex = previousArray.indexOf(`${element.id}`)
      // previousArray.splice(thatIndex, 1)
      return preUL.removeChild(findMatch)
    } 
    else if (!findMatch) {
      // console.log('there should not be a match after it was removed')
      return previousDIV
    }
    return appending(previousDIV, previousUL)
  })
  // console.log( 'HTML?',pULchildren.namedItem(2))
  // console.log('completed the removal')
    //we need to remove the player from the previous array so that they don't keep appearing on the browser   
    if(!previousArray) {
      // console.log('skip this step, you did not provide a previous array, so we guess you want to keep it where it is')
    } else if (
      previousArray.forEach((element, index) => {
        // console.log('side my else if to remove the repeat element', element)
        if(element.id === matchingID) {
          // console.log('you find the item in the array!')
          return previousArray.splice(index, 1)
        }
        return previousArray
      }) 
    ) {
      console.log('found in previous array! Now you have to remove it', previousArray)
      return previousArray
    }
}

//take the array of people and put it in this list w/ the player components added. 
const listOfPlayers = []

const makePlayer = (id) => {
  // console.log(`li ${id} was clicked!`)
  //this creates a copy of the individual with a matching id to the list of players array. 
  arrOfPeople.map(person => {
    //pull in the whole object, but only add those individual to the listOfPlays, if their id was provided 
    // console.log('look at the whole object,', person)
    if(person.id === id) {
      // console.log('first if, inside makePlayer?')
      //at this point, we want to create a new object which includes the player constructor and the person object from the arrayOfPeople
          //we are assuming all of these when they sign up. 
      // console.log(letsPlay)
      let newPlayer = Object.assign(person,[new Player(false, false, false, false,0)])
      // console.log(listOfPlayers, 'this the list of players')
      // console.log('merge to objects?',newPlayer)
    listOfPlayers.push(newPlayer)
    }
  }
  )
  dbUL.innerHTML = ' '
  listOfPlayers.forEach((person) => {
  // console.log('find the player section of HTML', dbPlayers)
  let playerLi = document.createElement('li')

    setAtt(playerLi,'id','dbPlayerLi') //create Li for person
    setAtt(playerLi,'id',`${person.id}`)
  //~~ need to work on this
    //we need to go through each item as it is created and assign the name
    playerLi.innerText = person.name
   //create blue button
  let bBtn = document.createElement('button')
  setAtt(bBtn, 'id','blueBtn')
    bBtn.innerText = 'Blue'
    //create red button 
  let rBtn = document.createElement('button')
  setAtt(rBtn,'id','redBtn')
    rBtn.innerText = 'Red'
  // console.log( playerLi, bBtn, rBtn)

bBtn.addEventListener('click',() => { blue(id)
  // console.log('BLUE button click, id?', id)
})
  appending(playerLi,bBtn)

rBtn.addEventListener('click', () => { red(id)
    // console.log('RED button click, id?', id)
})
   appending(playerLi,rBtn)
   removedLi('lopParent','people', listOfPlayers) 
   appending(dbUL, playerLi)
   appending(playersDiv, dbUL)
  })
  removedLi('lopParent','people', listOfPlayers) 
}

console.log('list of players object',listOfPlayers)
//when people are added to their associated them, this class should be added to those individuals. 

//add people from your listOfPlayers to either the blueTeam or the RedTeam
const blueTeam = []
  //if they have been moved to the blueTeam, remove them from the listOfPlayers 
  const bTeamSpirit = new Teammates('Purple Cobras', 'blue')
  let bMember

const redTeam = []
  //if they have been moved to the redTeam, remove them from the listOfPlayers 
  const rTeamSpirit = new Teammates('Average Joes', 'red')
  let rMember
  redUL.innerHTML = ''

const teamBtn = (id, cTeam, cMember, cTS, cUL, cDiv) => {
    //comes up as UNDEFINED, why?
    console.log('the id',id)
  // console.log('clicked')
  listOfPlayers.map(person => {
     if(person.id === id) {
        // console.log('if statement')
    let teamSpirit = Object.assign(person,cTS)
    cTeam.push(teamSpirit)

    // console.log('what does this team look like now?',cTeam)
    cMember = document.createElement('li')
      setAtt(cMember,'id',`${person.id}`)
      cMember.innerText = person.name
      console.log('my current memember is :', person)
      removedLi('playerParent','players', cTeam, listOfPlayers)
    //buttons
      return cMember
  
    }})
    // console.log('parent node', cUL, 'and their parent', cDiv)
    appending(cUL, cMember)
    appending(cDiv, cUL)
}

let blue = (id) => {
  teamBtn(id, blueTeam, bMember, bTeamSpirit, blueUL, blueDiv)
}

let red = (id) => {
  teamBtn(id, redTeam, rMember, rTeamSpirit, redUL, redDiv)

}
// console.log('blue team :', blueTeam, 'red team', redTeam)
// console.log('what does my team player list look like now?', listOfPlayers)

//tests
// if (typeof describe === 'functions') {
//   describe('list of People', function() {
//     it('should generate a list of people', function() {
//       assert.equal(listOfPlayers.length = 7)
//     })
//   })

//   describe('Dodge Ball Players', function() {
//     it('should move players to the players array', function() {
//       assert.equal(listOfPlayers.length = 7)
//     })
//   })

//   describe('Blue Team', function() {
//     it('should generate a list of people', function() {
//       it('should move players to the blue team array', function() {
//         assert.equal(blueTeam.length = 7)
//       })
//       it('should remove players to the players array', function() {
//         assert.equal(listOfPlayers.length = 7)
//       })
//     })
//   })

//   describe('Red Team', function() {
//     it('should move players to the red team array', function() {
//       assert.equal(redTeam.length = 7)
//     })
//     it('should remove players to the players array', function() {
//       assert.equal(listOfPlayers.length = 7)
//     })
    
//   })
// }