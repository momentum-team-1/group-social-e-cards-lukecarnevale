import React from 'react'
import { getCards } from '../Api'
import { Card, CardText, CardTitle, Container, CardBody } from 'reactstrap'
import '../App.css'
import moment from 'moment'

class Cards extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: [],
      token: window.localStorage.getItem('login_auth_token')
    }
  }

  componentDidMount () {
    if (this.state.token) {
      getCards(this.state.token)
        .then(cards => this.setState({ cards: cards }))
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.token && this.state.token !== prevState.token) {
      getCards(this.state.token).then(cards => this.setState({ cards: cards }))
    }
  }

  //   TODO: Get CSS element from API call to render on the page

  render () {
    return (
      <div className='Cards'>
        <CardBody>
          <Container>
            <CardTitle className='personal'>Card Feed</CardTitle>
            {this.state.cards.map(card =>
              <Card className='eachCard' key={card.id}>
                <CardTitle> {card.outer_message}</CardTitle>
                <hr />
                <CardText>{card.inner_message}</CardText>
                <CardText>{card.color}</CardText>
                <CardText>{card.font}</CardText>
                <CardText>{card.border}</CardText>
                <small classname='text-muted'>Card created by {card.author.username} on {moment(card.posted_at).format('MMMM Do YYYY')}</small>
              </Card>)}
          </Container>
        </CardBody>
      </div>
    )
  }
}

export default Cards
