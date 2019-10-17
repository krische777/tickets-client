import { GET_TICKETS, ADD_TICKET } from "../actions"
export default function (state = [], action = {}) {
  switch (action.type) {
    case GET_TICKETS:
      return action.payload;
    case ADD_TICKET:
      return [...state, action.payload];
    default:
      return state
  }
}

