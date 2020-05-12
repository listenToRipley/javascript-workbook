Life scenario - just the logistics of signing up, not the rules of the game 
You sign up to play dodge ball
  they ask you: 
    do you know how to play?
      if so:
        how many years experience do you have? 
      if so can you: 
        throw?
        dodge? 
    have to paid you fee? 
    are you in good healthy?
someone decides what team you're going to be one given their own set of criteria 
you then become a member of that team. 
  you know the color of your team and the mascot 
now you are ready to play

These are the rules we're deals with
People sign up to play dodge ball.  
Apply the player details to each of those individuals 
Display that list 
Sort those individuals into 1 of 2 teams 
  Once added:
   Remove that individual from the main list 
   Move them onto a list for that team. 
    Apply to team information to that individual 
    
  Players can move from one team to another, but they should only appear on one list at a time. 
    If a play is moved from one team to another, the team information should be replaced with the team they moved to. 

Important questions to ask:
**EVEYTIME 
  What order does this need to occur in?
  Is this action dependent on something else occur first?
  Where will my content live in the html?
**What code will be repeated?
     There seems to be a lot of creation of li's and buttons and removal from lists. 

**What is the most unique attribute of each person? 
Their ID

**What triggers these events? 
  Most of these events are based off on button clicks, so the functions for each should be associated with the related button. 
  ~~these two button are already created for use, so we do not need to create them again 
List Of People = listPeopleChoices()
Make a person into a player = makePlayer()

~~ buttons I need to create
@ Make person part of the blue team = blue()
@ Make person part of the red team = team()
@ Change teams = exchange()
#would like
@ Edit class player, update their abilities = edit()

**What events are associated with each of these events? 
listPeopleChoices() 
  Lives in - 'people'
    maps a new object from arrayOfPeople and create a list 
    creates an li and button
    creates a click event for the new button 
      appends the DOM to include the player's name, their skill set and the button the will allow them to become a player
~~
  makePlayer()
  Lives in - 'player'
    get the id of player
    using the ID, create a copy of that person in   listOfPlayers[] 
    add the class of Player to that person 
    REMOVE that li from the the list of people HTML
      the ul items only include name and skill
      ! HOW
      You have the list of players in the HTML 
      They get added to the DB list. 
      
    add a buttons of blue() & red()
      this function should be triggered inside of this element 
    update html content

  blue() & red()
    Lives in - 'blue' & 'red' respectively 
      ?? these two functions will basically be the same, but the times color will be different. Would it make more sense to create one function, but pass in the team color? Would we be able to do that under one button? modify based on the class of the button? 

    ge the id for each color
    add that player to the associated color array
    create an li for this item
    remove the li from the list of players
    add the extended class of Teammates to that person. 
    display the person in the color group
    update html content

  exchange()
  Lives in - 'blue' & 'red'
    similar to the red and blue, 
      if the player is currently colorA switch to colorB,
        move that person to that color's team array. 
        this person should not appear on the array or li of the previous team
    update html content

  edit()
    Lives in - ? should live with each individual in every section? 
      should appear from the point of them becoming players  and stay with the individual allowing updates to the player class per individual
    update html content 


Instructions Provided 
Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience
Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.
Add a button to each new player that will allow each one to be selected for either Blue Team or Read Team and now has mascot and teamColor
Use the this keyword to assign each player to a team with an onclick. Either Blue Team or Red Team.
Display the two teams in a new list in the DOM with appropriate titles.
Create 3 tests for your application.

Extended Practice Bonus!!
Add an input at the top of the Window that allows for a user to add new people!
Make a random-izer to automatically select teams for us!
Add multiple teams to add players to.
Change the color of the text for each color based on the color of their team!
Make a button to remove Players from Teams and back to the Players list.
Make a button to remove Player from the Players List and move them into the People List.