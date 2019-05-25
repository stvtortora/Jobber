import { combineReducers } from 'redux';
import merge from 'lodash/merge'
import { RECEIVE_JOB_POSTS, RECEIVE_JOB_POST, DELETE_JOB_POST } from '../actions/jobPostsActions'


const info = (state = {}, action) => {
  let newState

  switch (action.type) {
    case RECEIVE_JOB_POSTS:
    console.log(action, 'posts')
      return action.jobPosts.content || {};
    case RECEIVE_JOB_POST:
      newState = merge({}, state)
      newState[action.jobPost.id] = action.jobPost
      return newState
    case DELETE_JOB_POST:
      newState = merge({}, state)
      delete newState[action.postId]
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

const filterCounts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_JOB_POSTS:
      return action.jobPosts.filter_counts || state;
    default:
      return state;
  }
}


export default combineReducers({ info, ids, filterCounts });
