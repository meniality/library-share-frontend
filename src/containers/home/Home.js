import React from 'react'
import pretentiousJohn from '../../images/pretentiousJohn.png'

export default function () {
  return(
    <div className = "home-page">
      <p id="home-page-blurb">
        BibFox is a peer to peer book sharing platform that allows 
        you to offer your books to other avid readers. In turn you can 
        see what books others have that interest you. Help us spread the 
        joy of traveling into the worlds that authors have spent so much
        time creating and join us today! Sign up is easy and free and you'll
        be reading something new in no time!
      </p>
      <img id='pretentiousJohn' src={pretentiousJohn} alt=""></img>
    </div>
  )
}