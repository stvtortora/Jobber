import {
  SHOW_OPTIONS, HIDE_OPTIONS
} from '../actions/smallScreenNavActions'

const smallScreenNavReducer = (state = false, action) => {
  Object.freeze(state)
  switch (action.type) {
    case SHOW_OPTIONS:
      return true
    case HIDE_OPTIONS:
      return false
    default:
      return state
  }
};

export default smallScreenNavReducer
