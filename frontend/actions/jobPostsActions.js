export const RECEIVE_JOB_POSTS = "RECEIVE_JOB_POSTS"
export const RECEIVE_JOB_POST = "RECEIVE_JOB_POST"
import * as APIUtil from '../util/apiUtil'

export const searchJobPosts = query => {
  return dispatch => {
    return APIUtil.searchJobPosts(query).then(jobPosts => {
      return dispatch({ type: RECEIVE_JOB_POSTS, jobPosts })
    })
  }
}

export const fetchJobPost = postId => {
  return dispatch => {
    return APIUtil.fetchJobPost(postId).then(jobPost => {
      return dispatch({ type: RECEIVE_JOB_POST, jobPost })
    })
  }
}
