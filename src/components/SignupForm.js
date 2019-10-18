import React, { Component } from 'react'

export default class SginupForm extends Component {
  render() {
    return (
      <div>
        <h2>Create new account</h2>
        <form onSubmit={this.props.onSubmit}>
          <label >Full Name:</label>
            <input type="text" name="fullName" value={this.props.values.fullName} onChange={this.props.onChange} />
          <br />
          <label >Email:</label>
            <input type="text" name='email' value={this.props.values.email} onChange={this.props.onChange} />
          <br />
          <label >Password:</label>
            <input type="text" name='password' value={this.props.values.password} onChange={this.props.onChange} />
          <br />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}
