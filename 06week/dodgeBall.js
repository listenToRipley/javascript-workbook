'use strict';

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
const cLi = document.createElement("li")
//remember the name needs to be a 'string'
const setAtt = (element,id,name) => {element.setAttribute(id,name)}
const findQSA = (element,name) => { element.querySelectorAll(name)}
const appending = (parent, child) => {parent.appendChild(child)}
const dElement = (child) => { child.parentNode.removeChild(child)}
const byID = (id) => document.getElementById(id)

//get from DOM
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

  class player {
    //these characteristic will have to be added to the individuals before they get added to the list of players
    constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      //these would be the default answers on all individuals 
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall; 
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = 0;
    }
    //add a method to update the player information, 
      //??can we still call this method if the object has beeb merged? 
    updatePlayer() {
      this.canThrowBall = this.canThrowBall;
      this.canDodgeBall = this.canDodgeBall
      this.hasPaid = this.hasPaid
      this.isHealthy = this.isHealthy
      this.yearsExperience = this.yearsExperience; 
    }
  }

//will allow people to be removed from lists
//we are compare the people who have been pushed to the new group (array), and the HTML list items 
const removedLi = (previousDIV,previousUL, newArray) => {
  //find the parentDIV
  let lastDIV = byID(previousDIV)
  console.log('this is not a node?',lastDIV)
  //find the last UL
  let preUL = byID(previousUL)
    // console.log('the previous ul list are are trying to update',preUL)
  //create a list of it's children element
  let pULchildren = preUL.children
  console.log('pul',pULchildren)

  //look at the items moved to your new list
  newArray.forEach((element) => {
    let findMatch = pULchildren.namedItem(`${element.id}`)
    let matchID = byID(`${element.id}`)
    console.log('find a match?', findMatch)
        //if the id for someone in your new array of players, then delete that li
    if(findMatch) {
      return preUL.removeChild(matchID)
      // console.log('if this matched, get rid of it',   preUL.removeChild(matchID))
      // lastDIV.appendChild(preUL)
    } 
    else if (!findMatch) {
      // console.log('there should not be a match after it was removed')
      return previousDIV
    }
    return appending(previousDIV, previousUL)
  })
  // console.log( 'HTML?',pULchildren.namedItem(2)
  console.log('completed the removal')
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
      let letsPlay = new player(false, false, false, false,0)
      // console.log(letsPlay)
      let newPlayer = Object.assign(person, letsPlay)
      // console.log('merge to objects?',newPlayer)
    listOfPlayers.push(newPlayer)
    }
  })
  console.log(listOfPlayers)

  //~~it's update the single li, but not creating new ones per individual in the listOfPlayers, the array is growing though 

  listOfPlayers.forEach((person, index) => {
  // console.log('find the player section of HTML', dbPlayers)
  let playerLi = cLi
    setAtt(cLi,'id','dbPlayerLi') //create Li for person
    setAtt(cLi,'id',`${person.id}`)
  //~~ need to work on this
    //we meed to go through each item as it is created and assign the name
    playerLi.innerText = person.name
   //create blue button
  let bBtn = document.createElement('button')
  setAtt(bBtn, 'id','blueBtn')
    bBtn.innerText = 'Blue'
    //create red button 
  let rBtn = document.createElement('button')
  setAtt(rBtn,'id','redBtn')
    rBtn.innerText = 'Red'
  let update  = document.createElement('button')
    update.innerText = 'Update Info'
  setAtt(update, 'id', 'updateBtn')


  console.log(update, playerLi, bBtn, rBtn)

//~~these need to be inside my map in order to function correctly, but cannot be called until after they are created?
bBtn.addEventListener('click',() => {blue(id)
  console.log('BLUE button click, id?', id)
})
  appending(playerLi,bBtn)
  appending(playerLi,update)
rBtn.addEventListener('click', () => {red(id)
  console.log('RED button click, id?', id)
})
   appending(playerLi,rBtn)
   appending(playerLi,update)

   removedLi('lopParent','people', listOfPlayers) 
   appending(dbUL, playerLi)
   appending(playersDiv, dbUL)
  })

  removedLi('lopParent','people', listOfPlayers) 
 
}

//when people are added to their associated them, this class should be added to those individuals. 
 //since I merged my my player object into one object within the listOfPlayers[], this cannot be an extended class of that since it will not be called until the individuals are assigned to their team.
 class teammates {
  constructor(mascot, teamColor) {
    this.mascot = mascot,
    this.teamColor = teamColor
  }
}

//add people from your listOfPlayers to either the blueTeam or the RedTeam
const blueTeam = []
  //if they have been moved to the blueTeam, remove them from the listOfPlayers 

const redTeam = []
  //if they have been moved to the redTeam, remove them from the listOfPlayers 

const blue = (id) => { 
  let bMember
  //comes up as UNDEFINED, why?
  console.log('the id',id)
// console.log('blue day blue blaha')
listOfPlayers.map(person => {
   if(person.id === id) {
      console.log('my blue if statement')
  let team = new teammates('Purple Cobras', 'blue')
  let teamSpirit = Object.assign(person, team)
  blueTeam.push(teamSpirit)
  bMember = cLi
    setAtt(bMember,'id','bMember')
    bMember.innerText = person.name + person.canDodgeBall
  return bMember
  }})
  // console.log('BLUE parent node', blueUL, 'and their parent', blueDiv)
  appending(blueUL, bMember)
  appending(blueDiv, blueUL)
}

const red = (id) => { 
  let rMember
  console.log('the id',id)
  // console.log('red rum')
  listOfPlayers.map(person => {
    if(person.id === id) {
      console.log('my red if statement')
  let team = new teammates('Average Joes', 'red')
  let teamSpirit = Object.assign(person, team)
  redTeam.push(teamSpirit)
  rMember = cLi
    setAtt(rMember, 'id','rMember')
    rMember.innerText = person.name + person.canDodgeBall
    return rMember
  }})
  // console.log('RED parent node', redUL, 'and their parent', redDiv)
  appending(redUL, rMember)
  appending(redDiv, redUL)
}
 