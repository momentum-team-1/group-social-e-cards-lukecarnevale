import axios from 'axios'

const request = axios.create({
  baseURL: 'https://ld-social-cards.herokuapp.com/api/'
})

export function getToken (username, password) {
  return request.post('/auth/token/login', {
    username: username,
    password: password
  }).then(res => res.data.auth_token)
}

export function getCards (token) {
  return request.get('/cards', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => res.data.results)
}
