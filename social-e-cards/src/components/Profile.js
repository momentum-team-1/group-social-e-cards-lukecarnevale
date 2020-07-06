import React from 'react'
import { getUsersCards } from '../Api'

class Profile extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      username: localStorage.getItem('login_username') || '',
      email: '',
      first_name: '',
      last_name: '',
      cards: []
    }
  }

  componentDidMount () {
    if (this.state.token) {
      getUsersCards(this.state.token)
        .then(cards => this.setState({ cards: cards }))
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.token && this.state.token !== prevState.token) {
      getUsersCards(this.state.token).then(cards => this.setState({ cards: cards }))
    }
  }

  render () {
    return (
      <div>
        <div>
          <p>Username: {this.state.username}</p>
        </div>
        <div>
          <p>Name: {this.state.first_name}{this.state.last_name}</p>
        </div>
        <div>
          {this.state.cards.map(card => <p key={card.id}>Card: {card.card_text}</p>)}
        </div>
      </div>
    )
  }
}

export default Profile
