import React from 'react'
import { Alert, Card, CardTitle, CardText, Container, Button, CardBody } from 'reactstrap'
import { getUsersCards } from '../Api'
import moment from 'moment'
import axios from 'axios'
import EditCard from './EditCard'
import { Route, Redirect } from 'react-router-dom'
import classNames from 'classnames'
class Profile extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      username: window.localStorage.getItem('login_username') || '',
      cards: [],
      deleted: false
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

  handleDeleteCard (cardID) {
    console.log(cardID)
    if (this.state.token) {
      axios.delete(`https://ld-social-cards.herokuapp.com/api/cards/${cardID}/`, {
        headers: {
          Authorization: `Token ${this.state.token}`
        }
      })
        .then(response => {
          console.log(response)
          if (response.status === 204) {
            this.setState({
              cards: this.state.cards.filter(card => card.id != cardID)
            })
          }
        })
    }
  }

  render () {
    if (this.state.deleted) {
      return <Redirect to='/cards/' />
    }
    return (
      <div>
        <div>
          <CardTitle className='personal'> This is your personal card stack, {this.state.username}</CardTitle>
        </div>
        <Container className='myCards'>
          {this.state.cards.map((card, id) => <Card className='eachCard' key={card.id}>
            <CardBody className={classNames({
              backgroundLC: card.color === 'Living Coral',
              backgroundUV: card.color === 'Ultra Violet',
              backgroundGY: card.color === 'Greenery',
              backgroundRQ: card.color === 'Rose Quartz',
              backgroundSY: card.color === 'Serenity',
              backgroundMA: card.color === 'Marsala',
              backgroundRO: card.color === 'Radiand Orchid',
              backgroundED: card.color === 'Emerald',
              backgroundTT: card.color === 'Tangerine Tango',
              backgroundHS: card.color === 'Honeysucle',
              backgroundTQ: card.color === 'Turquoise',
              backgroundMM: card.color === 'Mimosa',
              backgroundBI: card.color === 'Blue Izis',
              backgroundCP: card.color === 'Chili Pepper',
              backgroundSD: card.color === 'Sand Dollar',
              backgroundBT: card.color === 'Blue Turquoise',
              backgroundTL: card.color === 'Tigerlily',
              backgroundAS: card.color === 'Aqua Sky',
              backgroundTR: card.color === 'True Red',
              backgroundFR: card.color === 'Fuchsia Rose',
              backgroundCB: card.color === 'Cerulean Blue',
              borderSolid: card.border === 'Solid',
              borderInset: card.border === 'Inset',
              fontModern: card.font === 'Montserrat + Lora (Modern)',
              fontElegant: card.font === 'Prata + Lato (Elegant)',
              fontEmphasis: card.font === 'Archivo Black + Judson (Emphasis)'
            })}
            >
              <h2> {card.outer_message}</h2>
              <hr />
              <h4>{card.inner_message}</h4>
              <br />
              <CardText>
                <small><strong>Styles Used:</strong> Color: {card.color} -- Font: {card.font} -- Border: {card.border}</small>
                <br />
                <small classname='text-muted'>Card created by {card.author.username} on {moment(card.posted_at).format('MMMM Do YYYY')}</small>
              </CardText>
              <br />
              <small classname='text-muted'>You created this card on {moment(card.posted_at).format('MMMM Do YYYY')}</small>
              <br />
              <div>
                <Button
                  color='primary'
                  size='sm'
                  onClick=<Redirect to='/cards/' />
                >Edit
                </Button>
                {' '}
                <Button
                  color='danger'
                  size='sm'
                  onClick={this.handleDeleteCard.bind(this, card.id)}
                >Delete
                </Button>
              </div>
            </CardBody>
                                              </Card>)}
        </Container>
      </div>
    )
  }
}

export default Profile
