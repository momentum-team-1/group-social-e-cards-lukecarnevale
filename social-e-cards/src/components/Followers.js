import React from 'react'
import { getFollowersList, getFollowersCards } from '../Api'

class Follow extends React.Component {
  constructor () {
    super()
    this.state = {
      followers: [],
      cards: []

    }
  }

  componentDidMount () {
    getFollowersCards(this.props.token)
      .then(cards => this.setState({ cards: cards.results }))
    getFollowersList(this.props.token)
      .then(followers => this.setState({ followers: followers }))
  }

  render () {
    console.log(this.state.followers)
    return (
      <div>
        <div>
          <div className='container'>
            <p> Followers:
              {this.state.followers.map(follower => <p key={follower.id}> {follower}</p>)}
            </p>
          </div>
        </div>
        <div>
          {this.state.cards.map(card => <p className='container' key={card.id}> Follower: {card.username} <br /> Title: {card.title}  <br />  Card: {card.message}</p>)}
        </div>
      </div>

    )
  }
}

export default Follow
