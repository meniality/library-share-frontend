import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';
import NavBar from './containers/nav-bar/NavBar'
import Header from './components/Header'
import Home from './containers/home/Home'
import MyBooks from './containers/myBooks/MyBooks'
import AddBookToMyBooks from './containers/myBooks/AddBookToMyBooks';
import Kiosks from './containers/kiosks/Kiosks'
import Footer from './containers/footer/Footer'

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

  removeBookFromMyBook = (book) => {
    const newMyBooks = this.state.myBooks.filter(myBook =>{
      return myBook.id !== book.id
    })
    this.setState({myBooks: newMyBooks})
  }

  AddBookToMyBooks = (book) => {
    this.setState({
      myBooks: [...this.state.myBooks, book]
    })
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar deleteToken ={this.deleteToken} setToken={this.setToken} token={this.state.token}/>
          <div className="body">
            <Switch>
              <Route exact path ="/" component={Home}/>
              <Route exact path="/myBooks" render={() => <MyBooks 
                setMyBooks= {this.setMyBooks} 
                token = {this.state.token} 
                myBooks={this.state.myBooks}
                removeBookFromMyBook={this.removeBookFromMyBook}
                />}/>
              <Route exact path ="/myBooks/addBook" render={() => <AddBookToMyBooks AddBookToMyBooks={this.AddBookToMyBooks}/>}></Route>
              <Route exact path = "/kiosks" render={()=> <Kiosks />}></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
