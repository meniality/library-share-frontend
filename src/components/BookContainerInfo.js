import React from 'react'

export default function BookContainerInfo(props) {
  return(
    <div id="book-container-info">
      <img src={props.book.cover_url} alt='no pic'></img>
    </div>
  )
}