import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Col, CardBody, Container } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class AddCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      outer_message: '',
      inner_message: '',
      color: '',
      font: '',
      border: '',
      created: false
    }
    this.handleOuterChange = this.handleOuterChange.bind(this)
    this.handleInnerChange = this.handleInnerChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleFontChange = this.handleFontChange.bind(this)
    this.handleBorderChange = this.handleBorderChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOuterChange (event) {
    this.setState({ outer_message: event.target.value })
  }

  handleInnerChange (event) {
    this.setState({ inner_message: event.target.value })
  }

  handleColorChange (event) {
    this.setState({ color: event.target.value })
  }

  handleFontChange (event) {
    this.setState({ font: event.target.value })
  }

  handleBorderChange (event) {
    this.setState({ border: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .post('https://ld-social-cards.herokuapp.com/api/cards/', {
        outer_message: this.state.outer_message,
        inner_message: this.state.inner_message,
        color: this.state.color,
        font: this.state.font,
        border: this.state.border
      },
      {
        headers: {
          Authorization: `Token ${this.props.authToken}`
        }
      })
      .then(response =>
        this.setState({ created: true }))
  }

  render () {
    console.log('attributes', this.state.cards)
    if (this.state.created) {
      return <Redirect to='/cards/all/' />
    }
    return (
      <div>
        <Container row>
          <Col sm={10}>
            <h1 className='cardTitle'> Add a New Card!</h1>
          </Col>
          <CardBody className='form-area'>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Input
                  type='text'
                  onChange={this.handleOuterChange}
                  value={this.state.outer_message}
                  id='title'
                  name='title'
                  placeholder='What is the theme of your card?'
                  required
                />
              </FormGroup>

              <FormGroup row>
                <Input
                  onChange={this.handleInnerChange}
                  value={this.state.inner_message}
                  type='textarea'
                  id='innerText'
                  placeholder='Write your meaningful message here!'
                  maxLength='500'
                  rows='7'
                />
              </FormGroup>

              <FormGroup row>
                <Label for='selectColor' sm={2}>Select a Color</Label>
                <Col sm={10}>
                  <Input
                    type='select'
                    name='select'
                    id='selectColor'
                    onChange={this.handleColorChange}
                    value={this.state.color}
                    required
                  >
                    <option value=''>---</option>
                    <option value='Living Coral'>Living Coral</option>
                    <option value='Ultra Violet'>Ultra Violet</option>
                    <option value='Greenery'>Greenery</option>
                    <option value='Rose Quartz'>Rose Quartz</option>
                    <option value='Serenity'>Serenity</option>
                    <option value='Marsala'>Marsala</option>
                    <option value='Radiand Orchid'>Radiand Orchid</option>
                    <option value='Emerald'>Emerald</option>
                    <option value='Tangerine Tango'>Tangerine Tango</option>
                    <option value='Honeysucle'>Honeysuckle</option>
                    <option value='Turquoise'>Turquoise</option>
                    <option value='Mimosa'>Mimosa</option>
                    <option value='Blue Izis'>Blue Izis</option>
                    <option value='Chili Pepper'>Chili Pepper</option>
                    <option value='Sand Dollar'>Sand Dollar</option>
                    <option value='Blue Turquoise'>Blue Turquoise</option>
                    <option value='Tigerlily'>Tigerlily</option>
                    <option value='Aqua Sky'>Aqua Sky</option>
                    <option value='True Red'>True Red</option>
                    <option value='Fuchsia Rose'>Fuchsia Rose</option>
                    <option value='Cerulean Blue'>Cerulean Blue</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for='selectFont' sm={2}>Select a Font</Label>
                <Col sm={10}>
                  <Input
                    type='select'
                    name='select'
                    id='selectFont'
                    onChange={this.handleFontChange}
                    value={this.state.font}
                    required
                  >
                    <option value=''>---</option>
                    <option value='Montserrat + Lora (Modern)'>Montserrat + Lora (Modern)</option>
                    <option value='Prata + Lato (Elegant)'>Prata + Lato (Elegant)</option>
                    <option value='Archivo Black + Judson (Emphasis)'>Archivo Black + Judson (Emphasis)</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for='selectBorder' sm={2}>Select a Border</Label>
                <Col sm={10}>
                  <Input
                    type='select'
                    name='select'
                    id='selectBorder'
                    onChange={this.handleBorderChange}
                    value={this.state.border}
                    required
                  >
                    <option value=''>---</option>
                    <option value='Inset'>Inset</option>
                    <option value='Solid'>Solid</option>

                  </Input>
                </Col>
              </FormGroup>
              <br />
              <Button
                size='lg' block
                type='submit'
                id='submit'
                name='submit'
                value='Submit'
                color='primary'
              >
            Add Card
              </Button>
            </Form>
          </CardBody>
        </Container>
      </div>
    )
  }
}

export default AddCard
