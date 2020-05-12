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
  //should return each item in the array as individual to loop through 
  result.forEach(needAHero)
})
}

//tracks each item created so it doesn't replace the individual and actually creates the new element 
let usedId = []

let needAHero = (characters) => {
  //create a list of all the comic stories 
  //console.log('my results being pulled in?',characters) //yes
  //the characters are already is alphabetical order
  let main = document.getElementsByTagName('main') 
  let div = document.getElementById('character')

  if (usedId.includes(characters.id) === false) {
  let charCard = document.createElement('div')
    charCard.setAttribute('id', 'charCard')

  let charUL = document.createElement('ul')
    charUL.setAttribute('id', 'charUL')

  let pic = characters.thumbnail
  // console.log('picture path',pic)
  let name = characters.name
  // console.log('name', name)
  let profilePic  = document.createElement('img')
  let heroName = document.createElement('li')
  let storyBtn = document.createElement('button')
    storyBtn.innerText = 'Their Stories'
    storyBtn.setAttribute('id', 'storyButton')
    storyBtn.setAttribute('aria-controls','forToggle')

  profilePic.src = pic
  heroName.innerText = name

  //the links are broken, it doesn't return an image, just an image error 
  charUL.appendChild(profilePic)
  charUL.appendChild(heroName)
  charUL.appendChild(storyBtn)

  let storyUL = document.createElement('ul')
  
  let stories = characters.stories.items
  // console.log(stories)
  let listOfStories = []

//go through each character and pull out the items listed in the stories key and add them to their own list
  stories.forEach((element) => {
    listOfStories.push(element.name)
  });

  //discovered there may be duplicates in the list of stories
  let shortList = []
  let removeDuplicates = (array) => {
    console.log('pulling in',array)

    let dup = []
    for (let i = 0; i < array.length; i++) {
      for(let j = 1; i < array.length; j++) {
        if(array[i] === (array[j])) {
          dup.push(array[i])
        } else {
          shortList.push(array[i])
        }
        shortList
      }
      return shortList
    }
    console.log('clean', shortList)
    console.log('dups', dup)
    return shortList
  }

  removeDuplicates(listOfStories)
  // console.log('before merge',listOfStories)

  // //should sort the list before publishing in the webpage 
  // const mergeSort = (array) => {
  //   // console.log('inside merge sorts array:', array )
  //   if(array.length <= 1) {
  //     return array
  //   }
  //   const middle = Math.floor(array.length/2)
  //   const left = array.slice(0, middle)
  //   const right = array.slice(middle)

  //   let merge = (left, right) => {
  //     let resultArray = [] 
  //     let leftIndex = 0
  //     let rightIndex = 0;

  //   while (leftIndex < left.length && rightIndex < right.length) {
  //   if (left[leftIndex] < right[rightIndex]) {
  //     resultArray.push(left[leftIndex]);
  //     leftIndex++;
  //   } else {
  //     resultArray.push(right[rightIndex]);
  //     rightIndex++; 
  //   }
  // }
  //   return resultArray
  //         .concat(left.slice(leftIndex))
  //         .concat(right.slice(rightIndex));
  //   }
  //   return merge(
  //     mergeSort(left), mergeSort(right)
  //   )
  // }

  // mergeSort(listOfStories)

  // console.log('after merge',listOfStories)

  // let tales = listOfStories.forEach((element, index) => {
  //   // console.log('title }', element, 'index of :', index)
  //   let liTitle = 'createLi' + index
  //   liTitle = document.createElement('li')
  //   liTitle.innerText = element
  //   liTitle.setAttribute('id', 'tales')
  // })

  // console.log(tales)
  // storyUL.appendChild(tales)
    //sort that list alphabetical order under the name of each character using a button
  
  //display the names of each character that appears in that comic. 
  div.appendChild(charUL)

} 
usedId.push(character.id)
}
// console.log(usedId)