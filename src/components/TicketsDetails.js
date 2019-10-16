import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDetailedTicket } from '../actions'
import { addComment, getComments } from '../actions'

class TicketsDetails extends Component {

  state = {
    text: ""
  }

  componentDidMount() {
    //console.log('event id in comp did mount', this.props.match.params.eventId)
    const { eventId } = this.props.match.params;

    const { ticketId } = this.props.match.params;
    //console.log('detailed ticket', this.props.getDetailedTicket(eventId, ticketId))
    this.props.getDetailedTicket(eventId, ticketId)
    this.props.getComments(eventId, ticketId)
  }

  onChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = (event) => {
    //console.log('username on submit', this.props.loginState.username)
    //console.log('eventId to give to backend', this.props.eventId)
    event.preventDefault()
    console.log('ticket id in comments', this.props.match.params.ticketId)
    console.log('text in comments', this.state.text)

    this.props.addComment(this.state.text, this.props.match.params.ticketId)
    this.setState({
      text: "",
    })
  }

  render() {

    // console.log('Ticket state in render', this.props.ticketState)
    // console.log('event id of event', this.props.match.params.eventId)

    // let commentsSection = [];
    // if(Array.isArray(this.props.ticketDetailsState.comments)){
    //   commentsSection=this.props.ticketDetailsState.comments;
    // }

    //console.log('commentsSection', commentsSection)
    return (
      <div className='ticketDetailsContainer'>
        <h1>Ticket {this.props.ticketDetailsState.id} for the event {}</h1>
        <div className='ticketDetailsClass'>
          <p >Ticket id: {this.props.ticketDetailsState.id} </p>
          <p >Author: {this.props.ticketDetailsState.author} </p>
          <img className='bigImg' src={this.props.ticketDetailsState.picture} alt='pic' />
          <p>"We calculated that the risk of this ticket being a fraud is XX%"</p>
          <p>Price: {this.props.ticketDetailsState.price} </p>
          <p>Description: {this.props.ticketDetailsState.description} </p>
        </div>

        <div className='commentContainer'>
          <h2>Comments:</h2><br /> <br />{this.props.commentState.map((comment, index) =>
            <div className='commentClass' key={index}>
              <p >Comment id: {comment.id} </p>
              <p >Author: {comment.author} </p>
              <p >Description: {comment.text} </p>

            </div>)}
        </div>

        <form onSubmit={this.onSubmit} className='commentsForm'>
          <label>Add comment</label> <br />
          <textarea rows="4" cols="125" name='text'
            value={this.state.text}
            placeholder='put a comment here'
            onChange={this.onChange} /><br />
          <button type='submit'>Post comment</button>
        </form>


      </div>
    )

  }
}

const mapStateToProps = (state) => {
  console.log('comments state in cont', state.commentReducer)

  return {
    ticketDetailsState: state.ticketDetailsReducer,
    eventState: state.eventReducer,
    loginState: state.loginReducer,
    commentState: state.commentReducer

  }
}

export default connect(mapStateToProps, { getDetailedTicket, addComment, getComments })(TicketsDetails)