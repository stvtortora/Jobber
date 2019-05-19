import {
  RECEIVE_ERRORS, CLEAR_ERRORS
} from '../actions/errorsActions'

const errorsReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ERRORS:
      console.log(action)
      return (action.errors)
    case CLEAR_ERRORS:
      return [];
    default:
      return state
  }
};

export default errorsReducer
