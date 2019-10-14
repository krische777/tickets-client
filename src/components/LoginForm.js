import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h3>Log into your account</h3>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Email:<br/>
          <input type="text" name='email' value={this.props.values.email} onChange={this.props.onChange}/>
          </label><br/>
          <label>
            Password:<br/>
          <input type="text" name='password'  value={this.props.values.password} onChange={this.props.onChange}/>
          </label><br/>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}
