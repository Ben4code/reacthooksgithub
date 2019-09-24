import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/Users/Users'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'
import Spinner from './components/Spinner/Spinner'
import Search from './components/Search/Search'



class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
    this.setState({ users: res.data, loading: false });
  }
  
  filterText = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
    this.setState({ users: res.data.items, loading: false });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar title="GithubFinder" icon="fa fa-github" />
          <div className="container">
            <div className="row">
              <div className="col m12">
                <div className="card-panel blue white-text center-align" style={{margin: '30px 0', padding: '50px'}}>
                  <h4>Welcome to GitFinder</h4>
                </div>
              </div>
              
            </div>
          </div>
          <Search filterText={this.filterText} />
          {
            this.state.loading
              ?
              <Spinner />
              :
              <Users users={this.state.users} />
          }

        </div>
      </Router>
    );
  }
}

export default App;
