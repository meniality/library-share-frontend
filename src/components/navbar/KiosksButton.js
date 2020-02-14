import React from 'react'
import {Link} from 'react-router-dom'

export default function HomeButton () {
  return (
    <Link to="/kiosks">
      <button className="nav-button">Kiosks</button>
    </Link>
  )
}