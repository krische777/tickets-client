import { GET_FRAUDRISK} from "../actions"
export default function (state = [], action = {}) {
  switch (action.type) {
    case GET_FRAUDRISK:
      return action.payload;
      default:
      return state
  }
}