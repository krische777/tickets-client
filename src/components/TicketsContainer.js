import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTickets } from '../actions'

class TicketsContainer extends Component {

  componentDidMount() {
    const {eventId} = this.props.match.params;
    this.props.getTickets(eventId)
  }

  render() {
    console.log('Ticket state in render', this.props.ticketState)
    //<Link to={`/event/${event.id}`}>View all tickets for {event.eventName}</Link>

    return (
      <div>
        <h1>Available tickets:</h1>
        <div className='ticketContainer'>{this.props.ticketState.map(ticket =>
          <div className='ticketClass' key={ticket.id}><p>Ticket id: {ticket.id}</p>
            <p>Author: {ticket.author}</p>
            <img src={ticket.picture} alt='pic' />
            <p>Price: {ticket.price}</p>
            <p>Description: {ticket.description}</p>
          </div>)}</div>

        <p>Add a new ticket. All fields are mandatory except from the picture.</p>
        <form onSubmit={this.onSubmit}>


        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('Ticket stat in props', state)

  return {
    ticketState: state.ticketReducer
  }
}

export default connect(mapStateToProps, { getTickets })(TicketsContainer)