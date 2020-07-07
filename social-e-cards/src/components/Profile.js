import React from 'react'
import { getUsersCards } from '../Api'

class Profile extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      username: localStorage.getItem('login_username') || '',
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
      getUsersCards(this.state.token)
        .then(cards => this.setState({ cards: cards }))
    }
  }

  render () {
    console.log('profile', this.state.cards)
    return (
      <div>
        <div>
          <h2> Welcome, {this.state.username}</h2>
        </div>
        <div>
          {this.state.cards.map(card => <p key={card.id}> Your Cards {card}</p>)}
        </div>
      </div>
    )
  }
}

export default Profile
