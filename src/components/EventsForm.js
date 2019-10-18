import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../actions'

class EventsForm extends Component {
    state = {
        eventName: "",
        picture: "",
        startDate: "",
        endDate: "",
        description: ""
    }

    onChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.props.addEvent(this.state.eventName, this.state.picture,
            this.state.startDate, this.state.endDate, this.state.description)
        this.setState({
            eventName: "",
            picture: "",
            startDate: "",
            endDate: "",
            description: ""
        })
    }

    render() {
        return (
            <form className="newform" onSubmit={this.onSubmit} className='ticketsForm'>
                <p>Add a new event:</p>
                <label>Event name:</label>
                <input name='eventName'
                    value={this.state.eventName}
                    onChange={this.onChange} /><br />

                <label>Picture:</label>
                <input name='picture'
                    value={this.state.picture}
                    placeholder='put a picture url here'
                    onChange={this.onChange} /><br />

                <label>Start date:</label>
                <input name='startDate'
                    value={this.state.startDate}
                    placeholder='format "2016-08-09 04:05:02"'
                    onChange={this.onChange} /><br />

                <label>End date:</label>
                <input name='endDate'
                    value={this.state.endDate}
                    placeholder='format "2016-08-09 04:05:02"'
                    onChange={this.onChange} /><br />

                <label>Description</label>
                <input name='description'
                    value={this.state.description}
                    placeholder=''
                    onChange={this.onChange} /><br />

                <button type='submit'>Save new event</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('map state to prop in Ticketsform', state)
    return {
        loginState: state.loginReducer
    }
}

export default connect(mapStateToProps, { addEvent })(EventsForm)
