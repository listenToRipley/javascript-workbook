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
const cBtn = document.createElement("button")
//remember the name needs to be a 'string'
const cClass = (element,name) => {element.classList.add(name)}
const findQSA = (element,name) => { element.querySelectorAll(name)}
const appending = (parent, child) => {parent.appendChild(child)}
const dElement = (parent, child) => {parent.removeChild(child)}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    // console.log('this this map the whole object?',person) 
    //yes, the whole object is mapped. 
    const li = document.createElement("li")
    const button = document.createElement("button")
      console.log('button', button)
    button.innerHTML = "Make Player"
    button.addEventListener('click', function(){makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
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

//team buttons? 
const teamButton = (buttonName,colorFun) => {
  buttonName.addEventListener('click',function() {
    colorFun() 
    console.log(`you clicked on ${buttonName}`)}) }

//take the array of people and put it in this list w/ the player components added. 
const listOfPlayers = []

const makePlayer = (id) => {
  // console.log(`li ${id} was clicked!`)
  const dbPlayers = document.getElementById('player')
  arrOfPeople.map(person => {
    //pull in the whole object, but only add those individual to the listOfPlays, if their id was provided 
    // console.log('look at the whole object,', person)
    if(person.id === id) {
      console.log('first if, inside makePlayer?')
      //at this point, we want to create a new object which includes the player constructor and the person object from the arrayOfPeople
          //we are assuming all of these when they sign up. 
      let letsPlay = new player(false, false, false, false,0)
      console.log(letsPlay)
      let newPlayer = Object.assign(person, letsPlay)
      console.log('merge to objects?',newPlayer)
    listOfPlayers.push(newPlayer)
    }
  })
//   console.log(listOfPlayers)

//     let playerCLi
//     let bBtn
//     let rBtn 
//   listOfPlayers.forEach(person => {
//       playerCLi = cLi
//     cClass(cLi, 'playerLi') //create Li for person
//       playerCLi.innerText = player.name
//      //create blue button
//     bBtn = cBtn
//     cClass(bBtn, 'blueBtn')
//       bBtn.innerText = 'Blue'
//       //create red button 
//     rBtn = cBtn
//     cClass(rBtn, 'redBtn')
//       rBtn.innerText = 'Red'
//   })

//     // teamButton(bBtn, blue)
//     // teamButton(rBtn, red)
//     //   appending(playerCLi,bBtn)
//     //   appending(playerCLi,rBtn)
//     //   appending(dbPlayers,playerCLi)

}

  //add people from your listOfPlayers to either the blueTeam or the RedTeam

const blueTeam = []
  //if they have been moved to the blueTeam, remove them from the listOfPlayers 
      //add the team attributes to this player 
const blue = () => {
  console.log('blue day blue blaha')
}

const redTeam = []
  //of they have been moved to the redTeam, remove them from the listOfPlayers 
const red = () => {
  console.log('red rum')
}
 


//when people are added to their associated them, this class should be added to those individuals. 
 //should these be an extended class?
// class teammates extends players  {
//   constructor(){
//     super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor)
//     this.mascot = mascot,
//     this.teamColor = teamColor
//   }
// }