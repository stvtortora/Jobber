import { combineReducers } from 'redux';
import { RECEIVE_COMPANIES, RECEIVE_COMPANY } from '../actions/companiesActions'


const info = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMPANIES:
      return action.companies;
    case RECEIVE_COMPANY:
      const newState = merge({}, state)
      newState[action.company.id] = action.company
      return newState
    default:
      return state;
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMPANIES:
      return Object.keys(action.companies);
    default:
      return state;
  }
}


export default combineReducers({ info, ids });
