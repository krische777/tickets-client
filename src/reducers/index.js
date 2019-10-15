import { combineReducers } from 'redux'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import eventReducer from './eventReducer'
import ticketReducer from './ticketReducer'
import ticketDetailsReducer from './ticketDetailsReducer'

export default combineReducers({
  signupReducer,
  loginReducer,
  eventReducer,
  ticketReducer,
  ticketDetailsReducer
})