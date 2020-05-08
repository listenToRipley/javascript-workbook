'use strict'

//load the api

window.onload = () => {
  getHeroes()
}

//fetch my api

let getHeroes = () => {
  let apiList = fetch(
    'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=608ddbdbbd4b88eb88845fa22835d493&hash=bb511fe302899f05c5b16bc2baf3af81')
  .then(function(response){
    console.log('response passing json payload')
    return response.json()
  })
  .then(function(json){
    let result = json.data.results
    console.log('json result : ', result) 
  })
}

let needAHero = (getHeroes) => {
  //create a list of all the comic stories 
  let stories = []
//go through each character and pull out through 
  getHeroes.forEach(character => {
    stories.push(character.stories.items.name)
  });
  console.log(stories)
    //sort that list alphabetical order

  //display the names of each character that appears in that comic. 
}

console.log(needAHero(getHeroes))

console.log()