import AuthService from './AuthService'

export default class PostService extends AuthService {
  getPosts(token) {
    return this.fetch(`${this.domain}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: 'GET'
    }).then((res) => {
      return Promise.resolve(res)
    })
  }

  createPost(token, new_post) {
    return this.fetch(`${this.domain}/posts`, {
      headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      method: 'POST',
      body: JSON.stringify({
        new_post: new_post
      })
    }).then((res) => {
      return Promise.resolve(res)
    })
  }
}
