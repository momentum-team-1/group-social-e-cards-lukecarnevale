import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Cards from './components/Cards'
import Login from './components/Login'
import Profile from './components/Profile'
import loading from './components/loading'
import {
  CardHeader, CardFooter, CardBody, CardText

} from 'reactstrap'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddCard from './components/AddCard'

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
            <Route path='/addcard/' component={AddCard} />
          </Switch>
        </Router>
        <CardBody />

        <CardFooter>
          <CardText className='#'>
        Site powered by ReactJS
          </CardText>
        </CardFooter>
      </div>
    )
  }
}

export default App
