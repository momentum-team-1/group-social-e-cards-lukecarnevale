/* globals localStorage */

import React from 'react'
import { getToken } from '../Api'
import { Button, Form, FormGroup, Label, Input, CardBody, Container } from 'reactstrap'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      error: null
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin (event) {
    event.preventDefault()

    getToken(this.state.username, this.state.password)
      .then(token => {
        this.props.setUserCredentials(this.state.username, token)
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: 'There is no user with that username and password.' })
      })
  }

  handleLogout (event) {
    event.preventDefault()

    this.setState({ token: null, username: '' })
    localStorage.removeItem('login_username')
    localStorage.removeItem('login_auth_token')
  }

  render () {
    return (
      <div>
        <Container className='logincomp'>
          {
            this.props.token
              ? (
                <div>
                  <CardBody>
                    <hr />
                    <h4>Welcome, {this.props.username}!</h4>
                    <Button color='link' onClick={this.handleLogout}>Log out</Button>
                    <hr />
                  </CardBody>
                </div>
              )
              : (
                <div className='cardbody'>
                  <CardBody>
                    <p>Please enter your username and password to sign in!</p>
                    <Form onSubmit={this.handleLogin}>
                      <div className='error'>{this.state.error}</div>
                      <div>
                        <FormGroup>
                          <Label for='username' hidden>Username: </Label>
                          <Input
                            id='username'
                            type='text'
                            name='text'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={event => this.setState({ username: event.target.value })}
                          />
                        </FormGroup>
                      </div>
                      {' '}
                      <div>
                        <FormGroup>
                          <Label for='password' hidden>Password: </Label>
                          <Input
                            className='password'
                            type='password'
                            id='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={event => this.setState({ password: event.target.value })}
                          />
                        </FormGroup>
                        {' '}
                      </div>
                      <div>
                        <Button color='primary' type='submit'>Submit</Button>
                      </div>
                    </Form>
                  </CardBody>
                </div>
              )
          }
        </Container>
      </div>
    )
  }
}

export default Login
