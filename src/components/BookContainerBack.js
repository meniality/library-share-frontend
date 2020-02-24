import React from 'react'

function removeBookFromMyBook(props){
      fetch(`http://localhost:3000/books/${props.book.id}`,{
        method: 'DELETE',
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`
        }
      })
}

export default function BookContainerBack(props){
  return (
    <div className="card-face card__face--back">
      <p id="book-title">{props.book.title}</p>
      <p id="book-author">author: {props.book.author}</p>
      <p id="book-description">{props.book.description}</p>
      <p id="book-pages">{props.book.pages} pages</p>
      <button 
        id="remove-from-mybooks"
        onClick={()=>{
          removeBookFromMyBook(props)
          props.removeBookFromMyBook(props.book)
        }}
      >
        remove
      </button>
    </div>
  )
}