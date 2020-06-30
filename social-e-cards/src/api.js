import axios from 'axios'

const request = axios.create({
  baseURL: 'https://localhost:300/api'
})

export function getToken (username, password) {
  return request.post('/auth/token/login', {})
}
