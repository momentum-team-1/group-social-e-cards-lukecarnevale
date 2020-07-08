import React from 'react'
import { Card, CardTitle, CardText, Container, Button, CardBody } from 'reactstrap'
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
          <CardTitle className='personal'> This is your personal card stack, {this.state.username}</CardTitle>
        </div>
        <Container className='myCards'>
          {this.state.cards.map(card => <Card className='eachCard' key={card.id}>
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
                  onClick=<Redirect to='/cards/' />
                >Edit
                </Button>
                {' '}
                <Button
                  color='danger'
                  size='sm'

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
