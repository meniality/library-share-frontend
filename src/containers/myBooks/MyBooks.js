import React, { Component } from 'react';
import BookContainer from './BookContainer'

export default class MyBooks extends Component {
  
componentDidMount(){
    fetch('http://localhost:3000/myBooks',{
    method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      authorization: `bearer ${localStorage.getItem('token')}`
      },
    })
    .then(response => response.json())
    .then(response => {
      this.props.setMyBooks(response)
    })
}
  render(){
    return (
      this.props.myBooks && this.props.myBooks.length > 0
        ?<div id="my-bookshelf">
          <BookContainer 
            myBooks={this.props.myBooks}
            removeBookFromMyBook ={this.props.removeBookFromMyBook}
            />
        </div>
        :<h4>You have no books in your library. Please add some below!</h4>
    )
  }
}