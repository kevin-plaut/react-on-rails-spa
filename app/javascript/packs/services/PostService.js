import AuthService from './AuthService'

export default class PostService extends AuthService {
  createPost(post) {
    return this.fetch(`${this.domain}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        post: post    	})
    }).then((res) => {
      return Promise.resolve(res)
    })
  }
}
