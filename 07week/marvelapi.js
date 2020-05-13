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
    // console.log('response passing json payload')
    return response.json()
  })
  .then(function(json){
    let result = json.data.results
    // console.log('json result : ', result)
    // document.getElementById('fetch').innerText = result.length 
    return result
  })
  .then(function(result) {
      console.log('result',result)
  //should return each item in the array as individual to loop through 
  result.forEach(needAHero)
})
}

let needAHero = (character) => {
  //create a list of all the comic stories 
  // console.log('my results being pulled in?',character) //yes
  // console.log(Object.keys(character))
  //the characters are already is alphabetical order
  let main = document.getElementsByTagName('main') 
  let div = document.getElementById('character')


  let charCard = document.createElement('div')
    charCard.setAttribute('id', 'charCard')

  let charUL = document.createElement('ul')
    charUL.setAttribute('id', 'charUL')

  let pic = character.thumbnail.path + "/portrait_xlarge." +character.thumbnail.extension
  // console.log('picture path',pic)
  let name = character.name
  // console.log('name', name)
  let profilePic  = document.createElement('img')
  let heroName = document.createElement('li')
  let storyBtn = document.createElement('button')
    storyBtn.setAttribute('id', 'storyButton')
    storyBtn.setAttribute('aria-controls','forToggle')
    storyBtn.innerText = 'Their story'
  let hiredBtn = document.createElement('button')
  hiredBtn.setAttribute('id', 'hiredButton')
    hiredBtn.innerText = 'HIRE'

  profilePic.src = pic
  heroName.innerText = name

  //the links are broken, it doesn't return an image, just an image error 
  charUL.appendChild(profilePic)
  charUL.appendChild(heroName)
  charUL.appendChild(storyBtn)
  charUL.appendChild(hiredBtn)

  let storyUL = document.createElement('ul')
  storyUL.setAttribute('id', 'storyTime')
  storyUL.setAttribute('class', 'forToggle')

  const dis = character.description
  // console.log('how long a story?',dis.length)
  const liLis = document.createElement('li')

  if (dis.length === 0) {
    liLis.innerText = `${name}'s story has yet to be told.`
  } else {
    liLis.innerText = dis
  }
  // console.log('tell me a story:',dis)
  
  storyUL.appendChild(liLis)
  

  storyBtn.addEventListener('click', () => {
    console.log('storytime for the hero')

    let aria = storyUL.getAttribute('aria-hidden')
    storyUL.setAttribute('aria-hidden', aria === 'true' ? 'false' : 'true')

    if (aria === 'true') {
      storyUL.style.visibility = 'visible' 
      storyBtn.innerText = 'Their story'

    } else {
      storyUL.style.visibility = 'hidden' 
      storyBtn.innerText = 'Story is over'
    }
    charUL.appendChild(storyUL)
  })

  div.appendChild(charUL)

} 
// }
