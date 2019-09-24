import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'font-awesome/css/font-awesome.min.css' 
import './App.css';
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Index'
import About from './components/About/Index'
import Contact from './components/Contact/Index'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar title="GithubFinder" icon="fa fa-github" />
           <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
