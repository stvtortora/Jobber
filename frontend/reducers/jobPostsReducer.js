import { combineReducers } from 'redux';
import { RECEIVE_JOB_POSTS } from '../actions/jobPostsActions'


const info = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_JOB_POSTS:
      return action.jobPosts.content;
    default:
      return state;
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_JOB_POSTS:
    console.log(action, 'action')
      return action.jobPosts.ids;
    default:
      return state;
  }
}

const count = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_JOB_POSTS:
      return action.jobPosts.count;
    default:
      return state;
  }
}


export default combineReducers({ info, ids, count });
