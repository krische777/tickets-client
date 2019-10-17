import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTickets } from '../actions'
import TicketsForm from './TicketsForm'

class TicketsContainer extends Component {
 //

  componentDidMount() {
    //console.log('event id in comp did mount', this.props.match.params.eventId)

    const {eventId} = this.props.match.params;
    this.props.getTickets(eventId)
  }

  render() {

   // console.log('ticket', this.props.ticketState)


    return (
      <div>
        <h1>Available tickets:</h1>
        <p>Click on a ticket to see more details</p>
        <div className='ticketContainer'>{this.props.ticketState.map((ticket,index)  =>
          <div  className='ticketClass' key={index}>
            <p >Ticket id: {ticket.id} </p>
            <p >Author: {ticket.author} </p>
            <img className='img' src={ticket.picture} alt='pic'/> <br />
            {/* <p>"We calculated that the risk of this ticket being a fraud is XX%"</p> */}

            <Link to={`/event/${this.props.match.params.eventId}/tickets/${ticket.id}`}>Click here to view details for the ticket</Link>

            {/* <div>
            <p>Price: {ticket.price} </p>
            <p>Description: {ticket.description} </p>
            </div> */}
          </div>)}
          </div>

        <p>Add a new ticket. All fields are mandatory except from the picture.</p>
        <TicketsForm 
        eventId={this.props.match.params.eventId}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('Ticket stat in props in TICKETCONTAINER', state)

  return {
    ticketState: state.ticketReducer
  }
}

export default connect(mapStateToProps, { getTickets })(TicketsContainer)