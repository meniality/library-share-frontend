import React, { Component } from 'react'
import LoginFrom from '../components/navbar/LoginForm'
import Logout from '../components/navbar/Logout'
import CreateNewUser from '../components/navbar/CreateNewUser'

export default class NavBar extends Component {

  state = {
    isLoggedin: localStorage.getItem('token'),
    createNewUserClicked: false,
  }

  handleCreateNewUserClick = () => {
    this.setState({
      createNewUserClicked: !this.state.createNewUserClicked
    })
  }

  render(){
    console.log(this.state.createNewUserClicked)
    return(
      <div id='nav-bar'>
        { this.state.createNewUserClicked
            ? <CreateNewUser handleCreateNewUserClick={this.handleCreateNewUserClick}/>
            : this.state.isLoggedin 
              ? <Logout />
              : <LoginFrom handleCreateNewUserClick={this.handleCreateNewUserClick}/>
            
        }
      </div>
    )
  }
}