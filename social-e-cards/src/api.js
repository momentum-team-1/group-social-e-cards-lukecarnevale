import axios from 'axios'

const request = axios.create({
  baseURL: 'https://ld-social-cards.herokuapp.com/api/'
})

export function getToken (username, password) {
  return request.post('/auth/token/login/', {
    username: username,
    password: password
  }).then(res => res.data.auth_token)
}

export function getCards (token) {
  return request.get('/cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log('api', res.data)
    return res.data.results
  })
}

export function getUsersCards (token) {
  return request.get('/cards/my_cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log('api', res.data)
    return res.data.results
  })
}

export function getUsersInfo (token) {
  return request.get('/user/info/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log('UserInfo', res.data)
    return res.data.results
  })
}

export function getFollows (token) {
  return request.get('/follows/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log('following', res.data)
    return res.data.results
  })
}

// export function getCardId (token) {
//   return request.get(`/cards/${id}/`, {
//     headers: {
//       Authorization: `Token ${token}`
//     }
//   }).then(res => {
//     console.log('cardID', res.data)
//     return res.data.results
//   })
// }
