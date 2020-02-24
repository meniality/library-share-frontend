import React from 'react'
import {Link} from 'react-router-dom'

export default function HomeButton () {
  return (
    <Link to="myBooks">
      <button className="nav-button">My Books</button>
    </Link>
  )
}