import axios from 'axios'

const requestAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: false,
  headers: {
    'content-type': 'application/json',
  },
})

export const postsAPI = {
  getPostsApi() {
    return requestAPI
      .get(`posts`)
      .then((response) => response.data)
      .catch((error) => error.response)
  },

  getPostApi(id) {
    return requestAPI
      .get(`posts/${id}`)
      .then((response) => response.data)
      .catch((error) => error.response)
  },

  getCommentPost(id) {
    return requestAPI
      .get(`posts/${id}/comments`)
      .then((response) => response.data)
      .catch((error) => error.response)
  },
}

export const userAPI = {
  getUsersApi() {
    return requestAPI
      .get('users')
      .then((response) => response.data)
      .catch((error) => error.response)
  },
}
