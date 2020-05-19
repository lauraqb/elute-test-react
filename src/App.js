import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import JSTests from './pages/JSTests/'
import APITests from './pages/APITests'
import Puzzle from './pages/Puzzle'


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={JSTests}></Route>
        <Route exact path="/api-tests" component={APITests}></Route>
        <Route exact path="/puzzle" component={Puzzle}></Route>
      </Switch>
    </Router>
  )
}

export default App;
