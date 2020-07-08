import React from 'react'
import { Card, CardTitle, CardText, Container, Button } from 'reactstrap'
import { getUsersCards } from '../Api'
import moment from 'moment'
import axios from 'axios'
import EditCard from './EditCard'
class Profile extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      username: window.localStorage.getItem('login_username') || '',
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
    return (
      <div>
        <div>
          <CardTitle className='personal'> Welcome to your personal card stack, {this.state.username}</CardTitle>
        </div>
        <Container className='myCards'>
          {this.state.cards.map(card => <Card className='eachCard' key={card.id}>
            <CardTitle> {card.outer_message}</CardTitle>
            <hr />
            <CardText>{card.inner_message}</CardText>
            <CardText>{card.color}</CardText>
            <CardText>{card.font}</CardText>
            <CardText>{card.border}</CardText>
            <br />
            <small classname='text-muted'>You created this card on {moment(card.posted_at).format('MMMM Do YYYY')}</small>
            <br />
            <div>
              <Button
                color='primary'
                size='sm'
                onClick=''
              >Edit
              </Button>
              {' '}
              <Button
                color='danger'
                size='sm'

              >Delete
              </Button>
            </div>
                                        </Card>)}
        </Container>
      </div>
    )
  }
}

export default Profile
