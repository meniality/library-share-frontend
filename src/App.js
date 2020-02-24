import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.scss';
import NavBar from './containers/nav-bar/NavBar'
import Header from './components/Header'
import Home from './containers/home/Home'
import MyBooks from './containers/myBooks/MyBooks'

class App extends Component {
  state = {
    token: null,
    myBooks: null,
  }

  componentDidMount(){
    this.setState({token: localStorage.getItem('token')})
  }

  setToken = (token) => {
    this.setState({token: token})
  }

  deleteToken = () => {
    this.setState({token: ''})
    localStorage.removeItem('token')
  }

  setMyBooks = (myBooks) => {
    this.setState({myBooks: myBooks})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar deleteToken ={this.deleteToken} setToken={this.setToken} token={this.state.token}/>
          <div className="body">
            <Route exact path ="/" component={Home}/>
            <Route exact path="/myBooks" render={() => <MyBooks setMyBooks= {this.setMyBooks} token = {this.state.token} myBooks={this.state.myBooks}/>}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
