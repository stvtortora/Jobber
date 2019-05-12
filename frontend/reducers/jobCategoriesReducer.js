import { combineReducers } from 'redux';
// import { RECEIVE_JOB_CATEGORIES } from '../actions/jobCategoriesActions'


const info = (state = {}, action) => {
  // switch (action.type) {
  //   case RECEIVE_JOB_CATEGORIES:
  //     return action.jobCategories;
  //   default:
      return state;
  // }
}

const ids = (state = [], action) => {
  // switch (action.type) {
  //   case RECEIVE_JOB_CATEGORIES:
  //     return Object.keys(action.jobCategories);
  //   default:
      return state;
  // }
}


export default combineReducers({ info, ids });
