import React from 'react'
import Logo from '../images/bibFoxLogo.png'

export default function Header() {
  return(
    <div className='header'>
      <img 
        src={Logo}
        alt="coming soon"
      />
      <h1>BibFox</h1>
    </div>
  )
}