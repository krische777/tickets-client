import request from 'superagent'
export const SIGN_UP = 'SIGN_UP'
export const LOG_IN='LOG_IN'

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

