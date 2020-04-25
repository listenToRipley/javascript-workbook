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
        //once push, we can access the whole object of that crew member here. 
    ]

    //update the crew members in the ship 
    let crewOnShip = (this.crew = crew)

  }
    //this method should return the ship's ability if there is a crew member who job matches that require abilities aka "ship type"
    //we have to compare the job to key of jobTypes and if it matches then you can access to value of that key. 
      //once the key is provided you can compare it to the ships ability. 
  missionStatement(crewMemberJob, shipMission) {
      let doThis = ''
      //is there any one on the ship?
      if(crewOnShip.length == 0) {
        return "Can't perform a mission yet."
      } 
      //Look at the crew member's jobs 
      else if (
         //if you have more than one crew member, look at each of their jobs
        ((crewOnShip.job.forEach((membersJob) => 
      //compare their job title to the job options listed in jobTypes
      { if (membersJob.includes(jobTypes.keys())) {
          //
        return doThis = jobTypes[membersJob]
      } else {
        console.log('that nice, but is not good for space travel')
        //return false 
      }
    }))
    ) //we want the doThis === this.type 
    //if it is a programmer, it can be assigned to any ship and still do the same thing 
     ) {
        //if all of or any of that is true, then you can perform the ship's ability 
        return this.ability
      } else {
        return "Can't perform a mission yet."
      }
    }
  //using template literals 
  description (crew) {
    return `${this.name}, is a ${this.type} of ship and it's goal is to ${this.ability}`
    //there are no crew member, the ship is staying put 
    if(this.crew.length === 0) {
      return ` and there isn't currently anyone on this ship`
  } else if (this.crew.length > 0) {
    return ` and there are currently ${this.crew.length}, on the ship.`
  }
  //should be also include if it can complete it's mission? 
}
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
