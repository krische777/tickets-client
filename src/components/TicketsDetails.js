import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDetailedTicket } from '../actions'

class TicketsDetails extends Component {


  componentDidMount() {
    //console.log('event id in comp did mount', this.props.match.params.eventId)
    const {eventId} = this.props.match.params;

    const {ticketId} = this.props.match.params;
    //console.log('detailed ticket', this.props.getDetailedTicket(eventId, ticketId))
    this.props.getDetailedTicket(eventId, ticketId)
  }

  onClick = (event)=>{
    console.log('event target', event.target)
    event.preventDefault()
    this.setState({
       hidediv: true
     });
   }

  render() {

    // console.log('Ticket state in render', this.props.ticketState)
    // console.log('event id of event', this.props.match.params.eventId)
    let commentsSection = [];
    if(Array.isArray(this.props.ticketDetailsState.comments)){
      commentsSection=this.props.ticketDetailsState.comments;
    }
    console.log('commentsSection', commentsSection)
    return (
      <div className='ticketDetailsContainer'>
        <h1>Ticket {this.props.ticketDetailsState.id} for the event {}</h1>
          <div className='ticketDetailsClass'>
            <p >Ticket id: {this.props.ticketDetailsState.id} </p>
            <p >Author: {this.props.ticketDetailsState.author} </p>
            <img className='bigImg' src={this.props.ticketDetailsState.picture} alt='pic'/>
            <p>"We calculated that the risk of this ticket being a fraud is XX%"</p>
            <p>Price: {this.props.ticketDetailsState.price} </p>
            <p>Description: {this.props.ticketDetailsState.description} </p>
            </div>

            <div className='commentContainer'>
            <h2>Comments:</h2><br /> <br />{commentsSection.map((comment,index)  =>
          <div  className='commentClass' key={index}>
            <p >Comment id: {comment.id} </p>
            <p >Author: {comment.author} </p>
            <p >Description: {comment.text} </p>

          </div>)}
          </div>

      </div>
    )
    
  }
}

const mapStateToProps = (state) => {
  console.log('Ticket stat in props in ticketDetails', state)

  return {
    ticketDetailsState: state.ticketDetailsReducer,
    eventState: state.eventReducer
  }
}

export default connect(mapStateToProps, { getDetailedTicket })(TicketsDetails)