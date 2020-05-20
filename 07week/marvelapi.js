'use strict'

//load the api

window.onload = () => {
  getHeroes()
  // location()
}

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
      // console.log('result',result)
  //should return each item in the array as individual to loop through 
  result.forEach(needAHero)
})
}

let needAHero = (character) => {
  //create a list of all the comic stories 
  // console.log('my results being pulled in?',character) //yes

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
    heroName.setAttribute('id', 'heroName')
  let storyBtn = document.createElement('button')
    storyBtn.setAttribute('id', 'storyButton')
    storyBtn.innerText = 'Their story'
  let hiredBtn = document.createElement('button')
  hiredBtn.setAttribute('id', 'hiredButton')
    hiredBtn.innerText = 'HIRE'

  profilePic.src = pic

  if (profilePic.src === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg') {
    profilePic.src = 'https://i.redd.it/gcgmhj78goe41.jpg'
  }
  heroName.innerText = name

  //the links are broken, it doesn't return an image, just an image error 
  charUL.appendChild(profilePic)
  charUL.appendChild(heroName)
  charUL.appendChild(storyBtn)
  charUL.appendChild(hiredBtn)

  let storyUL = document.createElement('ul')
  storyUL.setAttribute('id', 'storyTime')
  storyUL.setAttribute('class', 'hide')

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
  charUL.appendChild(storyUL)

  //taking two clicks to display hte information, why?

  storyBtn.addEventListener('click', () => {
    // console.log('story time for the hero')
    storyUL.style.display = 'block'

    let aria = storyUL.getAttribute('aria-hidden')
    storyUL.setAttribute('aria-hidden', aria === 'true' ? 'false' : 'true')

    if (aria === 'true' ) {
      storyUL.style.display = 'block' 

    } else {
      storyUL.style.display = 'none' 
    }
  })
  div.appendChild(charUL)

 hiredBtn.addEventListener('click', () => { alert(`Congratulations! You hired ${name}`) })

  // console.log('after the main content is created')

  //I sent a lot of time trying to get into the specific array I wanted access to, but this felt like I was going WAY too deep.

//  let series = Object.entries(character.series.items)
// //  console.log('come on!',series)
//  let keysLength = Object.keys(series).length
//  // console.log('list the keys',keysLength.length)
//  let singleArray = []

//  if (series.length > 1) {
//    series.forEach((bodyArray) => {
//     bodyArray.forEach((insideArray) => {
//       singleArray.push(insideArray)
//     })
//     return singleArray
//    })
//  } else if (series.length === 0) {
//    singleArray.push('no stories')
//  }

// //  console.log('Stories lists', singleArray)

//  let lastObject = []
//  let numbers = []

//  singleArray.forEach((element, index) => {
//   //  console.log('element', element, 'index', index)
//   if (index % 2 !== 0) {
//     lastObject.push(element)
//   }
//   return lastObject
//  })

//  console.log('last Object to get into the array',lastObject.length)
// //  console.log('keys', Object.keys(lastObject))

//  let justStories = []
 
// lastObject.forEach((array) => {
//    console.log('array',array)
//    console.log(array.name)
//   if (lastObject.length = 0) {
//     return justStories.push('no story')
//   } else {
//     return justStories.push(array.name)
//   }
//  })

//  console.log('get the items out',justStories)

//  const removeNames = extractTheStoriesArray.forEach((value) => {
//    value.filter(Object.keys('name'))
//  })

//  console.log('please?',removeNames)

  }

