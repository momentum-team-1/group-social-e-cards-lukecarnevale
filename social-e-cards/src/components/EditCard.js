import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Col, CardBody, Container, CardTitle } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class EditCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      outer_text: '',
      inner_text: '',
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
    this.setState({ outer_text: event.target.value })
  }

  handleInnerChange (event) {
    this.setState({ inner_text: event.target.value })
  }

  handleColorChange (event) {
    this.setState({ color: event.target.value })
  }

  handleFontChange (event) {
    this.setState({ font: event.target.value })
  }

  handleBorderChange (event) {
    this.setState({ borderStyle: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .Patch('https://ld-social-cards.herokuapp.com/api/cards/', {
        outer_text: this.state.outer_text,
        inner_text: this.state.inner_text,
        color: this.state.color,
        font: this.state.font,
        border: this.state.border
      },
      {
        headers: {
          Authorization: `Token ${this.props.token}`
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
            <h1> Add a New Card!</h1>
          </Col>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Input
                  type='text'
                  onChange={this.handleOuterChange}
                  value={this.state.outer_text}
                  id='title'
                  name='title'
                  placeholder='What is the theme of your card?'
                  required
                />
              </FormGroup>

              <FormGroup row>
                <Input
                  onChange={this.handleInnerChange}
                  value={this.state.inner_text}
                  type='textarea'
                  id='subject'
                  placeholder='Write your meaningful message here!'
                  maxLength='140'
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
                  >
                    {/* {this.state.color.map(color => <option key={this.props.token}>{this.state.color}</option>)} */}
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
                  >
                    {/* {this.state.font.map(font => <option key={this.props.token}>{this.state.font}</option>)} */}
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
                  >
                    {/* {this.state.border.map(border => <option value={this.state.border} key={this.props.token}>{this.state.border}</option>)} */}
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

export default EditCard
