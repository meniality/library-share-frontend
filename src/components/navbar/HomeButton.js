import React from 'react'
import {Link} from 'react-router-dom'

export default function HomeButton () {
  return (
    <Link to="/">
      <button className="nav-button">Home</button>
    </Link>
  )
}