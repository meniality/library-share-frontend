import React from 'react'
import HomeButton from '../../components/navbar/HomeButton'
import MyBooksButton from '../../components/navbar/MyBooksButton'
import KiosksButton from '../../components/navbar/KiosksButton'

export default function NavButtons() {
  return(
    <div id="nav-buttons-div">
      <HomeButton />
      <MyBooksButton />
      <KiosksButton />
    </div>
  )
}