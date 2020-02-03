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
    
  }

  render(){
    return (
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
    )
  }
}

export default LoginForm