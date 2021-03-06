import React, { Component } from 'react'

export default class CreateNewUser extends Component {

  state = {
    username: '',
    name: '',
    password: '',
    verifyPassword:'',
    email: '',
    phone_number: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const{username, name, password, verifyPassword, email, phone_number} = this.state

    if(password === verifyPassword){
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user:{username, name, password, email, phone_number}})
      })
      .then(response => response.json())
      .then(this.props.handleCreateNewUserClick)
      .catch((error) => {
        console.error('Error:', error);
      }) 
    }
    else{
      alert("Passwords Must Match")
    } 
  }

  render(){
    return(
      <div className="logout-login" id="create-new-user-form">
        <form onSubmit={this.handleSubmit} id="createNewUserForm">
          <label>Create a New User</label>
          <div>
            <div id = 'left'>
              <input
                name='username'
                placeholder='username'
                value={this.state.username}
                onChange={this.handleChange}
              />
                <input
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div id = 'right'>
              <input
              type='password'
              name='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.handleChange}
              />
              <input
              type='password'
              name='verifyPassword'
              placeholder='verify password'
              value={this.state.verifyPassword}
              onChange={this.handleChange}
              />
            </div>
            </div>
          <input 
            type='submit'
          />
        </form>
        <button onClick={this.props.handleCreateNewUserClick}>cancel</button>
      </div>
    )
  }
}