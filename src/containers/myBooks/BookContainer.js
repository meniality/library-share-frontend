import React from 'react'
import BookContainerInfo from '../../components/BookContainerInfo'
import AddNewMyBookButton from '../../components/AddNewMyBookButton'

export default function BookContainer(props) {
  return(
    <div className="book-container">
      {props.myBooks.map(book => {
        return <BookContainerInfo 
          book={book}
          removeBookFromMyBook={props.removeBookFromMyBook}
          />
      })}
      <AddNewMyBookButton />
    </div>
  )
}
