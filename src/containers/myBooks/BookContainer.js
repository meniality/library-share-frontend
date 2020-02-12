import React from 'react'
import BookContainerInfo from '../../components/BookContainerInfo'

export default function BookContainer(props) {
  return(
    <div id='book-container'>
      {props.myBooks.map(book => {
        return <BookContainerInfo book={book}/>
      })}
    </div>
  )
}
