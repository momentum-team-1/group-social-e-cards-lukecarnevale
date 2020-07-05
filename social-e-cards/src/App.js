import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Cards from './components/Cards'
import Login from './components/Login'
import Profile from './components/Profile'
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <div className='App'>

        <Router>
          <CardHeader>
            <Navigation />
          </CardHeader>
          <Switch>
            <Route path='/auth/token/login/' component={Login} />
            <Route path='/auth/users/me/' component={Profile} />
            <Route path='/cards/all/' component={Cards} />
            <Login />
          </Switch>
        </Router>
        <CardBody />

        <CardFooter>
          <p>
        Site powered by ReactJS
          </p>
        </CardFooter>
      </div>
    )
  }
}

export default App
