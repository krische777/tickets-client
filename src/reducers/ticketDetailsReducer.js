import {GET_DETAILED_TICKET } from "../actions"
export default function (state = [], action = {}) {
  switch (action.type) {
    case GET_DETAILED_TICKET:
      return action.payload;
    default:
      return state
  }
}