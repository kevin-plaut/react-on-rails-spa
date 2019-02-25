const BASE = 'http://localhost:3000'

let createUser = function(user) {
  let newUser = {user: user}
  return fetch(BASE + '/users', {
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
  .then((rawResponse) => {
    let parsedResponse = rawResponse.json()
    return parsedResponse
  })
}

let getPosts = function() {
  return fetch(BASE + '/posts')
  .then((rawResponse) => {
    let parsedResponse = rawResponse.json()
    return parsedResponse
  })
}

let createPost = function(post, user_id) {
  let newPost = {post: post, user_id: user_id}
  return fetch(BASE + '/posts', {
    body: JSON.stringify(newPost),
    headers:{
        'Content-Type': 'application/json'
    },
    method: "POST"
  })
  .then((rawResponse) => {
    let parsedResponse = rawResponse.json()
    return parsedResponse
  })
}

export { createUser, getPosts, createPost }
