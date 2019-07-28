import axios from 'axios'

const API_URL = '/api/posts'

export function getPosts() {
  return axios.get(`${API_URL}`)
}

export function updatePost(formData, postId) {
  return axios({
    method: 'put',
    url: `${API_URL}/${postId}`,
    data: formData,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
  })
}
