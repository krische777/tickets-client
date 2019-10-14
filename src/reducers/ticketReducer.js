import { GET_TICKETS} from "../actions"
export default function (state = [], action = {}) {
  switch (action.type) {
    case GET_TICKETS:
      return [...state, ...action.payload];
    default:
      return state
  }
}