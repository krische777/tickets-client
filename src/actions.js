import request from 'superagent'
export const SIGN_UP = 'SIGN_UP'
export const LOG_IN = 'LOG_IN'
export const GET_EVENTS = 'GET_EVENTS'
export const GET_TICKETS = 'GET_TICKETS'
export const ADD_TICKET = 'ADD_TICKET'
export const GET_DETAILED_TICKET = 'GET_DETAILED_TICKET'
export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_FRAUDRISK = 'GET_FRAUDRISK'
export const UPDATE_TICKET = 'UPDATE_TICKET'


const url = 'http://localhost:5555'

function signUpAction(payload) {
    return {
        type: SIGN_UP,
        payload: payload
    }
}

export const signUp = (fullName, email, password) => (dispatch) => {
    request
        .post(`${url}/signup`)
        .send({ fullName, email, password })
        .then(res => {
            const action = signUpAction(res.body)
            dispatch(action)
        }).catch(error => {
            console.log(error)
        })
}

function loginAction(payload) {
    return {
        type: LOG_IN,
        payload: payload
    }
}

export const login = (email, password) => (dispatch) => {
    request
        .post(`${url}/login`)
        .send({ email, password })
        .then(res => {
            const action = loginAction(res.body)
            dispatch(action)
        })
        .catch(error => {
            console.log(error)
        })
}
function getEventsAction(payload) {
    return {
        type: GET_EVENTS,
        payload: payload
    }
}

export const getEvents = () => (dispatch) => {
    request
        .get(`${url}/event`)
        .then(res => {
            const action = getEventsAction(res.body)
            dispatch(action)
        })
        .catch(error => {
            console.log(error)
        })
}
function getTicketsAction(payload) {
    return {
        type: GET_TICKETS,
        payload: payload
    }
}

export const getTickets = (eventId) => (dispatch) => {
    request
        .get(`${url}/event/${eventId}/tickets`)
        .then(res => {
            const action = getTicketsAction(res.body)
            dispatch(action)
        })
        .catch(error => {
            console.log(error)
        })
}

function addTicketAction(payload) {
    return {
        type: ADD_TICKET,
        payload: payload
    }
}

export const addTicket = (ticketPicture, ticketPrice,
    ticketDescription, ticketEventId) => (dispatch, getState) => {
        const state = getState()
        const { jwt } = state.loginReducer

        request
            .post(`${url}/ticket`)
            .set('Authorization', `Bearer ${jwt}`)
            .send({
                picture: ticketPicture, price: ticketPrice,
                description: ticketDescription, eventId: ticketEventId
            })
            .then(res => {
                const action = addTicketAction(res.body)
                dispatch(action)
            })
            .catch(console.error)
    }


function getDetailedTicketAction(payload) {
    return {
        type: GET_DETAILED_TICKET,
        payload: payload
    }
}

export const getDetailedTicket = (eventId, ticketId) => (dispatch) => {
    request
        .get(`${url}/event/${eventId}/tickets/${ticketId}`)
        .then(res => {
            const action = getDetailedTicketAction(res.body)
            dispatch(action)
        })
        .catch(error => {
            console.log(error)
        })
}

function addCommentAction(payload) {
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}

export const addComment = (commentText, commentTicketId) => (dispatch, getState) => {
    const state = getState()
    const { jwt } = state.loginReducer
    console.log('ticket id in actions', commentTicketId)
    console.log('text in comments in actions', commentText)

    request
        .post(`${url}/comment`)
        .set('Authorization', `Bearer ${jwt}`)
        .send({
            text: commentText, ticketId: commentTicketId
        })
        .then(res => {
            const action = addCommentAction(res.body)
            dispatch(action)
        })
        .catch(console.error)
}

function getCommentsAction(payload) {
    return {
        type: GET_COMMENTS,
        payload: payload
    }
}

export const getComments = (eventId, ticketId) => (dispatch) => {
    request
        .get(`${url}/event/${eventId}/tickets/${ticketId}/comment`)
        .then(res => {
            const action = getCommentsAction(res.body)
            dispatch(action)
        })
        .catch(error => {
            console.log(error)
        })
}

function getFraudriskAction(payload) {
    return {
        type: GET_FRAUDRISK,
        payload: payload
    }
}

export const getFraudrisk = (eventId, ticketId) => (dispatch) => {
    request
        .get(`${url}/event/${eventId}/tickets/${ticketId}/fraudrisk`)
        .then(res => {
            const action = getFraudriskAction(res.body)
            dispatch(action)
        })
        .catch(error => {
            console.log(error)
        })
}

function updateTicketAction(payload) {
    return {
        type: UPDATE_TICKET,
        payload: payload
    }
}

export const updateTicket = (ticketId, description, price, picture) => (dispatch, getState) => {
    const state = getState()
    const { jwt } = state.loginReducer
    request
        .put(`${url}/ticket/${ticketId}`)
        .set('Authorization', `Bearer ${jwt}`)
        .send({
            description: description, price: price, picture: picture
        })
        .then(res => {
            const action = updateTicketAction(res.body)
            dispatch(action)
        })
        .catch(error => {
            console.log(error)
        })
}
