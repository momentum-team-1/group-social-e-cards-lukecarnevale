import React from 'react'
import { getCards } from '../Api'
import { Card, CardText, CardTitle, Container, CardBody } from 'reactstrap'
import '../App.css'
import moment from 'moment'
import classNames from 'classnames'

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

  render () {
    return (
      <div className='Cards'>
        <CardBody>
          <Container>
            <CardTitle className='personal'>Card Feed</CardTitle>
            {this.state.cards.map(card =>
              <Card className='eachCard' key={card.id}>
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
                </CardBody>
              </Card>)}
          </Container>
        </CardBody>
      </div>
    )
  }
}

export default Cards
