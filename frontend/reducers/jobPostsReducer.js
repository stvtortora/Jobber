import { combineReducers } from 'redux';
import { RECEIVE_JOB_POSTS } from '../actions/jobPostsActions'


const info = (state = {}, action) => {
  console.log(action)
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
      return action.jobPosts.ids;
    default:
      return state;
  }
}

const totalCount = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_JOB_POSTS:
      return action.jobPosts.total_count;
    default:
      return state;
  }
}


export default combineReducers({ info, ids, totalCount });
