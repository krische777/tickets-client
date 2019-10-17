import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTicket} from '../actions'

class TicketsForm extends Component {
    state = {
        picture: "",
        price: "",
        description: ""
    }

    onChange=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit=(event)=>{        
        event.preventDefault()
        this.props.addTicket(this.state.picture, this.state.price, this.state.description, this.props.eventId)
        this.setState({
            picture: "",
            price: "",
            description: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className='ticketsForm'>
                <label>Picture</label>
                <input name='picture'
                    value={this.state.picture}
                    placeholder='put a url for a picture here'
                    onChange={this.onChange} /><br />

                <label>Price</label>
                <input name='price'
                    value={this.state.price}
                    placeholder=''
                    onChange={this.onChange} /><br />

                <label>Description</label>
                <input name='description'
                    value={this.state.description}
                    placeholder=''
                    onChange={this.onChange} /><br />
                
                <button type='submit'>Save new ticket</button>
            </form>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log('map state to prop in Ticketsform', state)
    return {
        loginState: state.loginReducer
    }
}

export default connect(mapStateToProps, {addTicket})(TicketsForm)
