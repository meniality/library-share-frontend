import React, { Component } from 'react'
import BookContainerBack from './BookContainerBack'

export default class BookContainerInfo extends Component {
  state ={
    className: "book-container-info"
  }

  updateClassName = () => {
    this.state.className === 'book-container-info'
      ? this.setState({className: 'book-container-info is-flipped'})
      : this.setState({className: 'book-container-info'})
  }

  render(){
    return(
      <div 
        className={this.state.className}
        onClick={this.updateClassName}
      >
        <img className="card-face card__face--front" src={this.props.book.cover_url} alt='no pic'></img>
        {this.props.book.cover_url === '/static/media/defaultBookCover.f55234fc.png'
          ?<p className="card-face" id ='title-on-cover'>{this.props.book.title}</p>
          : null
        }
        <BookContainerBack 
          book={this.props.book}
          removeBookFromMyBook={this.props.removeBookFromMyBook}
          />
      </div>
    )
  }
}