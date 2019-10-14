import { combineReducers } from 'redux'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import eventReducer from './eventReducer'

export default combineReducers({
  signupReducer,
  loginReducer,
  eventReducer
})