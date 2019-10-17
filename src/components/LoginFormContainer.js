import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import {login} from '../actions'
import {Redirect} from 'react-router-dom'

class LoginFormContainer extends Component {
  state = { email: '', password: '' }


  constructor(props) {
    super(props);
    console.log('logging out ..')
    console.log('before logout user ..', localStorage.getItem('user'))
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    console.log('after logout user ..', localStorage.getItem('user'))
}

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: '',
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      (localStorage.getItem('user')) ? 
        <Redirect to='/'/>
      :
        <div>
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state} />
        </div> 
    )
  }
}
const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer
  }
}
export default connect(mapStateToProps, {login})(LoginFormContainer)
