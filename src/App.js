import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'font-awesome/css/font-awesome.min.css' 
import './App.css';
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Index'
import About from './components/About/Index'
import Contact from './components/Contact/Index'
import User from './components/Users/User'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar title="GithubFinder" icon="fa fa-github" />
           <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/contact" component={Contact}/>
            <Route  path="/user/:login" component={User}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
