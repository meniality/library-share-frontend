import React from 'react'
import {Link} from 'react-router-dom'

export default function Logout(props) {
  return (
    <div className="logout-login">
      <h4>Welcome, {localStorage.getItem('username')}</h4>
      <Link to="/">
          <button id="logout-button" onClick={props.deleteToken}>
            Logout
          </button>
        </Link>
    </div>
  )
}