/* globals localStorage */

import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Cards from './components/Cards'
import Login from './components/Login'
import Profile from './components/Profile'
import {
  CardHeader, CardFooter, CardBody, CardText
} from 'reactstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddCard from './components/AddCard'
import EditCard from './components/EditCard'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      username: localStorage.getItem('login_username') || '',
      token: localStorage.getItem('login_auth_token')
    }
    this.setUserCredentials = this.setUserCredentials.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  setUserCredentials (username, token) {
    this.setState({
      username: username,
      token: token
    })
    localStorage.setItem('login_username', username)
    localStorage.setItem('login_auth_token', token)
  }

  handleLogout (event) {
    event.preventDefault()

    this.setState({ token: null, username: '' })
    localStorage.removeItem('login_username')
    localStorage.removeItem('login_auth_token')
  }

  render () {
    return (
      <div className='App'>

        <Router>
          <CardHeader>
            <Navigation />
          </CardHeader>
          <Switch>
            <Route path='/login/'><Login setUserCredentials={this.setUserCredentials} /> </Route>
            <Route path='/auth/users/me/'><Profile authToken={this.state.token} /> </Route>
            <Route path='/cards/all/'><Cards authToken={this.state.token} /> </Route>
            <Route path='/addcard/'><AddCard authToken={this.state.token} /> </Route>
            <Route path='/cards/'><EditCard authToken={this.state.token} /> </Route>
          </Switch>
        </Router>
        <CardBody />

        <CardFooter>
          <CardText className='footer'>
        Created by DG & LC powered by React &#169;
          </CardText>
        </CardFooter>
      </div>
    )
  }
}

export default App
