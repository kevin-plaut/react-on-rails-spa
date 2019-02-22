import AuthService from './AuthService'

export default class PostService extends AuthService {
  createPost(post, user_id) {
    return this.fetch(`${this.domain}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        post: {
          post,
          user_id
        }
    	})
    }).then((resp) => {
      let json = resp.json()
      return json
    })
  }
}
