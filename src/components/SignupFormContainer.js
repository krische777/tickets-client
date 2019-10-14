import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signUp} from '../actions'
import SignupForm from './SignupForm'
import { Redirect } from 'react-router-dom'


class SignupFormContainer extends Component {
  state = {
    firstName:'', email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.signUp(this.state.fullName, this.state.email, this.state.password) // takes a while
  
    this.setState({fullName:'', email: '', password: '' })
    console.log('this props user ', this.props.user)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    if(this.props.user.email){
      return <Redirect to="/login"/>
    }

    return (
      <div>
        <SignupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state} />    
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.signupReducer
  }
}

export default connect(mapStateToProps, {signUp})(SignupFormContainer)
