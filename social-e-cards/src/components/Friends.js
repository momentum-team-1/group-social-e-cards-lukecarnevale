import React from 'react'
import { getFriendsList, getFriendsCards } from '../Api'

class FollowFriends extends React.Component {
  constructor () {
    super()
    this.state = {
      friends: [],
      cards: []

    }
  }

  componentDidMount () {
    getFriendsCards(this.props.token)
      .then(cards => this.setState({ cards: cards.results }))
    getFriendsList(this.props.token)
      .then(friends => this.setState({ friends: friends }))
  }

  render () {
    console.log(this.state.friends)
    return (
      <div>
        <div>
          <div className='container'>
            <p> Friends:
              {this.state.friends.map(friend => <p key={friend.id}> {friend}</p>)}
            </p>
          </div>
        </div>
        <div>
          {this.state.cards.map(card => <p className='container' key={card.id}> Friend: {card.username} <br /> Title: {card.title}  <br />  Card: {card.message}</p>)}
        </div>
      </div>

    )
  }
}

export default FollowFriends
