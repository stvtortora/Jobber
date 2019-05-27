import { combineReducers } from 'redux';
import merge from 'lodash/merge'
import { RECEIVE_COMPANIES, RECEIVE_COMPANY, DELETE_COMPANY } from '../actions/companiesActions'


const info = (state = {}, action) => {
  let newState

  switch (action.type) {
    case RECEIVE_COMPANIES:
      return action.companies.content || {};
    case RECEIVE_COMPANY:
      newState = merge({}, state)
      newState[action.company.id] = action.company
      return newState
    case DELETE_COMPANY:
      newState = merge({}, state)
      delete newState[action.companyId]
      return newState
    default:
      return state;
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMPANIES:
      return action.companies.ids;
    default:
      return state;
  }
}

const filterCounts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMPANIES:
      return action.companies.filter_counts || state;
    default:
      return state;
  }
}


export default combineReducers({ info, ids, filterCounts });
