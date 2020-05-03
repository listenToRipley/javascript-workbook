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

//how many of these functions should actually be methods within the classes? 
//what triggers these events? 
//create a function by which we can merge (Object.assign(target, source)), the individual with the player class 

//create a function that allows individuals to be move from the list of player to the blue or red team

//create a function that allows people to be move from one team to another.

//create a function that allows the team attributes to be added to an individual once they have been added to that team.


//take the array of people and put it in this list w/ the player components added. 
const listOfPlayers = []
  //add people from your listOfPlayers to either the blueTeam or the RedTeam

const blueTeam = []
  //if they have been moved to the blueTeam, remove them from the listOfPlayers 
      //add the team attributes to this player 
const redTeam = []
  //of they have been moved to the redTeam, remove them from the listOfPlayers 

 
class player {
  //these characteristic will have to be added to the individuals before they get added to the list of players
  //possibly use Object.assign(target, source)
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    //these would be the default answers on all individuals 
    this.canThrowBall = False;
    this.canDodgeBall = False; 
    this.hasPaid = False;
    this.isHealthy = False;
    this.yearsExperience = 0;
  }
  //add a method to update the player information 
}

//when people are added to their associated them, this class should be added to those individuals. 
 //should these be an extended class?
class blueTeammate {
  //these be supers? 
  constructor(mascot, teamColor){
    this.mascot = mascot,
    this.teamColor = teamColor
  }
}
class redTeammate {
  constructor(mascot, teamColor){
    this.mascot = mascot,
    this.teamColor = teamColor
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
}