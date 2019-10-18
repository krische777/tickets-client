import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getEvents } from '../actions'
import EventsForm from './EventsForm'
import Moment from "react-moment";

class Home extends Component {

  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    console.log('helooooooooooooooooooo', this.props.eventState)
    //<Link to={`/event/${event.id}`}>View all tickets for {event.eventName}</Link>

    return (
      <div className="homepage-wrapper">
        <h1>The newest and most popular events in one place</h1>

        <p>See our offered events</p>

        <p>Add new tickets for the events. Every registered and logged in user can add new tickets for the events</p>

        <div className='eventConatiner'>{this.props.eventState.map((event, index)=>
          <div className='eventClass' key={index}><p>Event id: {event.id}</p>
            <p>Event: {event.eventName}</p>
            <p>Description: {event.description}</p>
            <img className='img' src={event.picture} alt='pic' />
            <p>Start date: <Moment format="YYYY/MM/DD">
              {event.startDate}
            </Moment></p>
            <p>End date:<Moment format="YYYY/MM/DD">
              {event.endDate}
            </Moment></p>
            <Link to={`/event/${event.id}/tickets`}>View all tickets for {event.eventName}</Link>
          </div>)}</div>

        <EventsForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)

  return {
    eventState: state.eventReducer
  }
}

export default connect(mapStateToProps, { getEvents })(Home)

