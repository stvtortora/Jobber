import { combineReducers } from 'redux';
import { RECEIVE_JOB_POSTS } from '../actions/jobPostsActions'


const info = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_JOB_POSTS:
      return action.jobPosts;
    default:
      return state;
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_JOB_POSTS:
      return Object.keys(action.jobPosts);
    default:
      return state;
  }
}


export default combineReducers({ info, ids });
