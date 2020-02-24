import React from 'react'
import {Link} from 'react-router-dom'

export default function AddNewMyBookButton(){
  return(
    <div id="add-new-my-book-button-div">
      <Link to='/myBooks/addBook'>
        <button id="add-new-my-book-button">+</button>
      </Link>
    </div>
  )
}