// import { reporters } from "mocha";
'use strict'

let arrayOfPosts;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()
  console.log('loading window')

}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
let getPost = function() {
  let x = fetch('http://jsonplaceholder.typicode.com/posts')
}
const getPosts = () => {
  console.log('Inside the posts methods, about this fetch request')
  let fetchPromise = fetch('http://jsonplaceholder.typicode.com/posts')
    let dataPromise = fetchPromise.then(function(response) {
      console.log('Fetch is done! Response =', response)
      return response.json()
  
    })
    dataPromise.then(function(data) {
      console.log('Got my data! data.length = ', data.length)
      data.forEach(updateHtml)
    })

  console.log('Request is sent off ...')
    // .then(res => res.json())
    // .then(posts => arrayOfPosts = posts)
}

let updateHtml = function(post){
  console.log('Updating the html for post = ', post)
  let postUl = document.getElementById('posts')
  
  let postLi = document.createElement('li')
    postLi.innerText = post.title
    postUl.appendChild(postLi)


    let userId = post.userId
    let userSpan = document.createElement('span')
    userSpan.innerText = '   - by' +userId
    postLi.append(userSpan)
    
    fetch('http://jsonplaceholder.typicode.com/posts'+userId)
    .then(function(response){
      
    })


}
// // this function logs the results in your browsers console
// const consolePosts = () => {
//   console.log(arrayOfPosts)
// }

// // this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
// const displayPost = () => {
//   const allPosts = document.getElementById('all-posts')
//   arrayOfPosts.map((post, index) => {
//     const li = document.createElement('li')
//     const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
//     li.appendChild(text)
//     allPosts.append(li)
//   })
// }

// // Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!

// let arrayPost = document.getElementById(arrayPost)

// arrayPost.addEventListener('click', consolePosts())

// let displayPost = document.getElementById(displayPost)

// displayPost.addEventListener('click', displayPost())