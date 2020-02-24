import React, { Component } from 'react'
import NavButtons from '../../containers/nav-bar/NavButtons'
import LoginFrom from '../../components/navbar/LoginForm'
import Logout from '../../components/navbar/Logout'
import CreateNewUser from '../../components/navbar/CreateNewUser'

export default class NavBar extends Component {

  state = {
    createNewUserClicked: false,
  }

  handleCreateNewUserClick = () => {
    this.setState({
      createNewUserClicked: !this.state.createNewUserClicked
    })
  }

  componentDidMount(){
    this.setState({token: localStorage.getItem('token')})
  }
  
  render(){
    return(
      <div className='nav-bar'>
        {this.props.token
        ?<NavButtons />
        : null
        }
        {this.state.createNewUserClicked
          ? <CreateNewUser handleCreateNewUserClick={this.handleCreateNewUserClick}/>
          : this.props.token 
            ? <Logout deleteToken={this.props.deleteToken}/>
            : <LoginFrom setToken={this.props.setToken} handleCreateNewUserClick={this.handleCreateNewUserClick}/>
        }
      </div>
    )
  }
}