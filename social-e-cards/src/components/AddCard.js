import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Col, CardBody, Container, CardTitle } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class AddCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      outer_text: '',
      inner_text: '',
      created: false
    }
    this.handleOuterChange = this.handleOuterChange.bind(this)
    this.handleInnerChange = this.handleInnerChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOuterChange (event) {
    this.setState({ outer_text: event.target.value })
  }

  handleInnerChange (event) {
    this.setState({ inner_text: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .post('https://ld-social-cards.herokuapp.com/api/cards/all/', {
        outer_text: this.state.outer_text,
        inner_text: this.state.inner_text
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
    console.log('token', this.props.token)
    if (this.state.created) {
      return <Redirect to='/cards/all/' />
    }
    return (
      <div>
        <Container row>
          <Col sm={10}>
            <h1> Add a New Card!</h1>
          </Col>
          <CardBody className='form-area'>
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
                  className='form-control'
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
                  <Input type='select' name='select' id='selectColor'>
                    <option>{this.state.colors}</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for='selectFont' sm={2}>Select a Font</Label>
                <Col sm={10}>
                  <Input type='select' name='select' id='selectFont'>
                    <option>1</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for='selectBorder' sm={2}>Select a Border</Label>
                <Col sm={10}>
                  <Input type='select' name='select' id='selectBorder'>
                    <option>1</option>
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
