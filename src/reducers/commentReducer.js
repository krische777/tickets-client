import { ADD_COMMENT, GET_COMMENTS} from "../actions"
export default function (state = [], action = {}) {
  switch (action.type) {
    case GET_COMMENTS:
            return action.payload;
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state
  }
}