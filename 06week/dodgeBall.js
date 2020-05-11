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
const cClass = (element,name) => {element.classList.add(name)}
const findQSA = (element,name) => { element.querySelectorAll(name)}
const appending = (parent, child) => {parent.appendChild(child)}
const dElement = (child) => { child.parentNode.removeChild(child)}
const byID = (id) => document.getElementById(id)

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
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
      cClass(li, `${person.id}`)
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
    //add a method to update the player information 
    updatePlayer() {
      this.canThrowBall = this.canThrowBall;
      this.canDodgeBall = this.canDodgeBall
      this.hasPaid = this.hasPaid
      this.isHealthy = this.isHealthy
      this.yearsExperience = this.yearsExperience; 
    }
  }


//take the array of people and put it in this list w/ the player components added. 
const listOfPlayers = []

const makePlayer = (id) => {
  // console.log(`li ${id} was clicked!`)
  arrOfPeople.map(person => {
    //pull in the whole object, but only add those individual to the listOfPlays, if their id was provided 
    // console.log('look at the whole object,', person)
    if(person.id === id) {
      console.log('first if, inside makePlayer?')
      //at this point, we want to create a new object which includes the player constructor and the person object from the arrayOfPeople
          //we are assuming all of these when they sign up. 
      let letsPlay = new player(false, false, false, false,0)
      // console.log(letsPlay)
      let newPlayer = Object.assign(person, letsPlay)
      // console.log('merge to objects?',newPlayer)
    listOfPlayers.push(newPlayer)
    }

    //~~come back to how to remove a child element 
    // const listElement = byID('people')
    // const liChild = document.getElementsByTagName('li')
    //   //need to return the class name for each of these li's
    // const childID = (listElement.forEach((child) => {
      
    // }))
    // //we need to determine if this person has been moved into the listOfPlays[], if they have, then they should be removed from the List Of People HTML
    // if(listOfPlayers.forEach((person) => {
    //   person.id
    // })) {
    //   console.log('try and remove, parent :', listElement,'child :', liChild)
    //   liChild.parentNode.removeChild(liChild)
    // }
  })
  console.log(listOfPlayers)
  //need a parent UL 
  const dbPlayers = document.getElementById('players')
    console.log('find the player section of HTML', dbPlayers)
    
    let playerCLi = cLi
    cClass(cLi, 'playerLi') //create Li for person

  //~~ need to work on this, coming up as undefined
      playerCLi.innerText = listOfPlayers.name
     //create blue button
    let bBtn = document.createElement('button')
    cClass(bBtn, 'blueBtn')
      bBtn.innerText = 'Blue'
      //create red button 
    let rBtn = document.createElement('button')
    cClass(rBtn, 'redBtn')
      rBtn.innerText = 'Red'
    let update  = document.createElement('button')
      update.innerText = 'Update Info'

  console.log(update, playerCLi, bBtn, rBtn)

//~~these need to be inside my map in order to function correctly, but cannot be called until after they are created?
rBtn.addEventListener('click', () => {red(player.id)})
bBtn.addEventListener('click',() => {blue(player.id)})

   appending(playerCLi,rBtn)
   appending(playerCLi,bBtn)
   appending(playerCLi,update)
   appending(dbPlayers, playerCLi)
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
  let bTeam =  byID('blue')
    console.log(bTeam)
console.log('blue day blue blaha')
listOfPlayers.map(person => {
   if(person.id === id) {
      console.log('my blue if statement')
  let team = new teammates('Purple Cobras', 'blue')
  let teamSpirit = Object.assign(person, team)
  blueTeam.push(teamSpirit)
  }})
}


const red = (id) => { 
  let rTeam =  byID('red')
    console.log(rTeam)
  console.log('red rum')
  listOfPlayers.map(person => {
    if(person.id === id) {
      console.log('my red if statement')
  let team = new teammates('Average Joes', 'red')
  let teamSpirit = Object.assign(person, team)
  redTeam.push(teamSpirit)
  }})
}
 