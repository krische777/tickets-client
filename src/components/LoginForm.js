import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h3>Log into your account</h3>
        <form onSubmit={this.props.onSubmit}>
          <label>Email:</label>
          <input type="text" name='email' value={this.props.values.email} onChange={this.props.onChange}/>
          <br/>
          <label>Password:</label>
          <input type="text" name='password'  value={this.props.values.password} onChange={this.props.onChange}/>
          <br/>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}
