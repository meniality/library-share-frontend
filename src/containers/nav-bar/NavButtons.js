import React from 'react'
import HomeButton from '../../components/navbar/HomeButton'
import MyBooksButton from '../../components/navbar/MyBooksButton'

export default function NavButtons() {
  return(
    <div id="nav-buttons-div">
      <HomeButton />
      <MyBooksButton />
    </div>
  )
}