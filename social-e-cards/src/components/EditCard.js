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
    this.setState({ border: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .Patch('https://ld-social-cards.herokuapp.com/api/my_cards/', {
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
            <h1> Edit your Card!</h1>
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
                    <option value=''>white</option>
                    <option value='red'>Red</option>
                    <option value='purple'>purple</option>
                    <option value='blue'>blue</option>
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
                    <option value=''>-- None --</option>
                    <option value='dotted'>dotted</option>
                    <option value='dashed'>dashed</option>
                    <option value='solid'>solid</option>
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
                    <option value='helvetica'>helvetica</option>
                    <option value='courier new'>courier new
                    </option>
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
                color='alert'
              >
            Make Changes
              </Button>
            </Form>
          </CardBody>
        </Container>
      </div>
    )
  }
}

export default EditCard
