import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Play from './pages/Play'

function App () {
  const Redirectx = ({ history }) => {
    history.push('/home')
    return <Home />
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Redirectx} />
        <Route path='/home' component={Home} />
        <Route path='/play' component={Play} />
      </Switch>
    </Router>
  )
}

export default App
