import { GET_EVENTS} from "../actions"
export default function (state = [], action = {}) {
  switch (action.type) {
    case GET_EVENTS:
      return [...state, ...action.payload];
    default:
      return state
  }
}