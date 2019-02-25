import AuthService from './AuthService'

export default class PostService extends AuthService {
  createPost(new_post) {
    return this.fetch(`${this.domain}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        new_post: new_post
      })
    }).then((res) => {
      return Promise.resolve(res)
    })
  }
}
