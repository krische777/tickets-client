import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDetailedTicket, updateTicket } from '../actions'
import { addComment, getComments, getFraudrisk } from '../actions'
import ContentEditable from 'react-contenteditable'

class TicketsDetails extends Component {

  state = {
    text: "",
    description: '',
    picture: '',
    price: ''
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value })
  }
  handlePictureChange = (event) => {
    this.setState({ picture: event.target.value })
  }
  handlePriceChange = (event) => {
    this.setState({ price: event.target.value })
  }
  handleEdit = () => {
    const { ticketId } = this.props.match.params;
    console.log('on edit', this.state)
    this.props.updateTicket(ticketId, this.state.description, this.state.price, this.state.picture)
  }

  componentDidMount() {
    console.log('componentDidMount Before setState', this.props.ticketDetailsState.description)
    const { eventId } = this.props.match.params;
    const { ticketId } = this.props.match.params;

    this.props.getDetailedTicket(eventId, ticketId)
    this.props.getComments(eventId, ticketId)
    this.props.getFraudrisk(eventId, ticketId)
  }

  onChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.props.addComment(this.state.text, this.props.match.params.ticketId)
    this.setState({
      text: "",
    })
  }

  componentWillReceiveProps(nextProps) {
    //changing local state without page rerender, this is called before render()
    this.setState({
      description: nextProps.ticketDetailsState.description,
      picture: nextProps.ticketDetailsState.picture,
      price: String(nextProps.ticketDetailsState.price)
    })
  }

  render() {
    const currentUser = JSON.parse(localStorage.getItem('user')).username
      return (
        <div className='ticketDetailsContainer'>
          <h1>Ticket {this.props.ticketDetailsState.id} for the event {}</h1>
          <div className='ticketDetailsClass'>
            <p>Ticket id:{this.props.ticketDetailsState.id}</p>
            <p >Author: {this.props.ticketDetailsState.author} </p>
            <p>"We calculated that the risk of this ticket being a fraud is {this.props.fraudriskState}%"</p>

            {(() => {
              if (this.props.ticketDetailsState.author === currentUser) {
                return (
                  <div>Picture: <ContentEditable
                    html={this.state.picture} // innerHTML of the editable div
                    disabled={!(this.props.ticketDetailsState.author === currentUser)}       // use true to disable editing
                    onChange={this.handlePictureChange} // handle innerHTML change
                    onBlur={this.handleEdit}
                  /></div>
                )
              } else {
                return (
                  <div><img className='bigImg' src={this.props.ticketDetailsState.picture} alt='pic' /></div>
                )
              }
            })()}

            <div>Price: <ContentEditable
              html={this.state.price} // innerHTML of the editable div
              disabled={!(this.props.ticketDetailsState.author === currentUser)}       // use true to disable editing
              onChange={this.handlePriceChange} // handle innerHTML change
              onBlur={this.handleEdit}
            /></div>
            <div>Description: <ContentEditable
              html={this.state.description} // innerHTML of the editable div
              disabled={!(this.props.ticketDetailsState.author === currentUser)}       // use true to disable editing
              onChange={this.handleDescriptionChange} // handle innerHTML change
              onBlur={this.handleEdit}
            />
            </div>

          </div>

          <form onSubmit={this.onSubmit} className='commentsForm'>
            <label>Add comment</label> <br />
            <textarea rows="4" cols="125" name='text'
              value={this.state.text}
              placeholder='put a comment here'
              onChange={this.onChange} /><br />
            <button type='submit'>Post comment</button>
          </form>

          <div className='commentContainer'>
            <h2>Comments:</h2><br /> <br />{this.props.commentState.map((comment, index) =>
              <div className='commentClass' key={index}>
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
  console.log('comments state in cont', state)

  return {
    ticketDetailsState: state.ticketDetailsReducer,
    eventState: state.eventReducer,
    loginState: state.loginReducer,
    commentState: state.commentReducer,
    fraudriskState: state.fraudriskReducer
  }
}

export default connect(mapStateToProps, {
  getDetailedTicket, addComment, getComments,
  getFraudrisk, updateTicket
})(TicketsDetails)