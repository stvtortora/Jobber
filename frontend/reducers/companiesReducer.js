import { combineReducers } from 'redux';
// import { RECEIVE_COMPANIES } from '../actions/compnaniesActions'


const info = (state = {}, action) => {
  switch (action.type) {
    // case RECEIVE_COMPANIES:
    //   return action.companies;
    // default:
      return state;
  // }
}

const ids = (state = [], action) => {
  // switch (action.type) {
  //   case RECEIVE_COMPANIES:
  //     return Object.keys(action.companies);
  //   default:
      return state;
  // }
}


export default combineReducers({ info, ids });
