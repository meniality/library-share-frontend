import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import defaultBookCover from '../../images/defaultBookCover.png'

class AddBookToMyBooks extends Component{
  state={
    title: '',
    author: '',
    pages: '',
    description: '',
    cover_url: '',

  }

  handlChange = (event) => {
    const {name, value} = event.target
    
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {title, author, pages, description} = this.state
    let {cover_url} = this.state
    const { history } = this.props;

    if (cover_url === ''){
      cover_url = (defaultBookCover)
    }

    fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        authorization: `bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({"book":{title, author, description, cover_url, pages}})
    })
    .then(response => response.json())
    .then(book => {
      this.props.AddBookToMyBooks(book)
      history.push('/myBooks')
    })
  }

  render(){
    return(
      <div id="add-new-book-to-mybooks-form-div">
        <form id="add-new-book-to-mybooks-form" onSubmit={this.handleSubmit}>
          <div id="left-page">
            <h3>Add a New Book to Your Bookshelf</h3>
            <input
              placeholder="title"
              name="title"
              value={this.state.title}
              onChange={this.handlChange}
            />
            <input
              placeholder="author"
              name="author"
              value={this.state.author}
              onChange={this.handlChange}
            />
            <input
              placeholder="total pages"
              name="pages"
              value={this.state.pages}
              onChange={this.handlChange}
            />
          </div>
          <div id='right-page'>
            <textarea
              placeholder="description"
              name="description"
              value={this.state.description}
              onChange={this.handlChange}
              cols='45'
              rows='30'
            />
            <input
              placeholder="Url for cover"
              name="cover_url"
              value={this.state.cover_url}
              onChange={this.handlChange}
            />
              <input
                type="submit"
              />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(AddBookToMyBooks)