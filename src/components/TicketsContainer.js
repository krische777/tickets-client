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

  // onClick = (event)=>{
  //   //console.log('event target', event.target)
  //   event.preventDefault()
  //   this.setState({
  //     //[event.target]
  //      hidediv: true
  //    });
  //  }
   //<div hidden = {!this.state.hidediv}>

  render() {

    //console.log('Ticket state in render in TicketsContainer', this.props.ticketState)
    //console.log('event id of event', this.props.match.params.eventId)
   // console.log('ticket', this.props.ticketState)

    //<Link to={`/event/${event.id}`}>View all tickets for {event.eventName}</Link>
            //({this.props.match.params.eventId}=={this.props.ticketState.ticket.eventId})?
    //const filteredTickets = this.props.ticketState.filter(ticket => ticket.eventId==this.props.match.params.eventId);


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