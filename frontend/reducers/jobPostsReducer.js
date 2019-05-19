import { combineReducers } from 'redux';
import merge from 'lodash/merge'
import { RECEIVE_JOB_POSTS, RECEIVE_JOB_POST } from '../actions/jobPostsActions'


const info = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_JOB_POSTS:
      return action.jobPosts.content;
    case RECEIVE_JOB_POST:
      const newState = merge({}, state)
      newState[action.jobPost.id] = action.jobPost
      return newState
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
