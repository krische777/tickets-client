import request from 'superagent'
export const SIGN_UP = 'SIGN_UP'
export const LOG_IN='LOG_IN'
export const GET_EVENTS='GET_EVENTS'
export const GET_TICKETS='GET_TICKETS'

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
            const action=signUpAction(res.body)
            dispatch(action)
        }).catch(error=>{
        console.log(error)
    })
}

function loginAction(payload) {
    return {
        type: LOG_IN,
        payload: payload
    }
}

export const login=(email, password)=>(dispatch)=>{
    request
        .post(`${url}/login`)
        .send({email, password})
        .then(res=>{
            const action=loginAction(res.body)
            dispatch(action)
        })
        .catch(error=>{
            console.log(error)})
}
function getEventsAction(payload) {
    return {
        type: GET_EVENTS,
        payload: payload
    }
}

export const getEvents=()=>(dispatch) =>{
    request
          .get(`${url}/event`)
          .then(res=>{
              const action=getEventsAction(res.body)
              dispatch(action)
          })
          .catch(error=>{
              console.log(error)
          })
}
function getTicketsAction(payload) {
      return {
          type:GET_TICKETS,
          payload:payload
      }
}

export const getTickets=(eventId)=>(dispatch) =>{
    request
          .get(`${url}/event/${eventId}/tickets`)
          .then(res=>{
              const action=getTicketsAction(res.body)
              dispatch(action)
          })
          .catch(error=>{
              console.log(error)
          })
}


