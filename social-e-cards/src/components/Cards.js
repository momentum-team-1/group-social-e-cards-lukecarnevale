import React from 'react'
import { getCards } from '../Api'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'
import '../App.css'

class Cards extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: [],
      token: window.localStorage.getItem('login_auth_token'),
      isloading: null
    }
  }

  componentDidMount () {
    if (this.state.token) {
      getCards(this.state.token)
        .then(cards => this.setState({ cards: cards }))
    } console.log('component mounted')
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.token && this.state.token !== prevState.token) {
      getCards(this.state.token).then(cards => this.setState({ cards: cards }))
    }
  }

  render () {
    return (
      <div className='Cards'>
        <div>
          <div>
            <h3>Card Feed</h3>
            {this.state.cards.map(card =>
              <Card classname='cards' key={card.id}>
                <CardImg />
                <CardTitle> {card.outer_message}</CardTitle>
                <CardText>{card.inner_message}</CardText>
                <small classname='text-muted'>Card created by {card.author.username} on {card.posted_at}</small>
                {/* TODO: utilize moment js to work with time */}

              </Card>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Cards
