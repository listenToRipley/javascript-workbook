const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
  .then(res => {
    if(!res.ok) {
      throw Error('here is the throw',res.statusText)
    } return res.json()
  })
  .then(posts => arrayOfPosts = posts)
  .catch(err => console.log(`Error,  ${err}`))
}

console.log(getPosts())