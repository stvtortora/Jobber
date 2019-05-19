import { LOG_IN, LOG_OUT } from '../actions/sessionActions'

export default (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.currentUser;
    case LOG_OUT:
      return {};
    default:
      return state;
  }
}
