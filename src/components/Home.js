import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <h1>The newest and most popular events in one place</h1>
        
        <p>See our offered events</p>

        <p>Add new tickets for the events. Every registered and logged in user can add new tickets for the events</p>
        
      </div>
    )
  }
}
