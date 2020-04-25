'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here

//build two classes, 

//crew member
  //constructor should take in as input: name, their job, their special skill 

class CrewMember {
  constructor(name, job, skill) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;

    //we need to assign this information back the crew member 
    this.postedToShip = null;
      //unlike ship, we're only going to have one ship assign to one individual 
    } 
//create a method should add THIS crew member to the ship being passed i
      //shipName is the instance of the template you are using. Since you are assigning this information by the variable name, it should pass the whole instance into this. 
      enterShip(shipName){
        // pass the ship name to the individual 
           //NOTE: an entire ship instance is passed in, not just a name
          this.postedToShip = shipName
          //NOTE: the entire crew number should be added to the ship's array of crew 
          shipName.crew.push(this)
        }

  }


//ship 
  //constructor should take in as input:name, type, ability
    //can have crew members 
    //contain a method: missionStatement()
        //if there a crew member that can activate it  == loop through crew to make sure jobTypes matches ship ability, it should return ability
          //else return 'can't perform a mission yet' 

class Ship {
  constructor(name, type, ability) {

    this.name = name;
    this.type = type;
    this.ability = ability

    //need to have an empty array for crew members
    this.crew = [
        //we need to push the whole class on the member in here. 
    ]

    //update the crew members in the ship 
    let crewOnShip = (this.crew = crew)

  }
    //this method should return the ship's ability if there is a crew member who job matches that require abilities aka "ship type"
    //we have to compare the job to key of jobTypes and if it matches then you can access to value of that key. 
      //once the key is provided you can compare it to the ships ability. 
  missionStatement() {
      //  we need to compare the jobTypes to the type of ship
      // if crew member can activate it, it should activate it 
      //   return 
      //       two possible outcomes 
      //     1.  "Can't perform a mission yet."
      //     2.  the ability is executed 
    }
  // }
  //using template literals 
  // description () {
    //there are no crew member, the ship is staying put 
    //if(this.crew.length === 0) {
      
    // }
  //   //provide object literals for the details on what should be getting passed in  
    //the name of the ship
      //how many crew members their currently are
        //if empty list that
        //if the mission statement can be completed 
  // }
}

//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
