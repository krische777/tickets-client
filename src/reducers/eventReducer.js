import { GET_EVENTS, ADD_EVENT} from "../actions"
export default function (state = [], action = {}) {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload;
    case ADD_EVENT:
      return [...state, action.payload];
    default:
      return state
  }
}