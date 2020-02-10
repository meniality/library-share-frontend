import React, {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user:{username: this.state.username, password: this.state.password}})
    })
    .then(response => response.json())
    .then(userData => {
      if(userData.ok) {
        localStorage.setItem('token', userData.token)
      }
      else {
        alert("Invalid Username or Password")
      }
    })
    .then(this.setState({
      username: "",
      password: ""
    }
    ))
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  render(){
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input 
            placeholder = "Username"
            name ="username"
            value ={this.state.username}
            onChange = {this.handleChange}
          />
          <input 
            placeholder = "Password"
            type = "password"
            name ="password"
            value = {this.state.password}
            onChange = {this.handleChange}
          />
          <input 
          type ='submit'
          />
        </form>
        <button onClick={this.props.handleCreateNewUserClick}>Create New User</button>
      </div>
    )
  }
}

export default LoginForm