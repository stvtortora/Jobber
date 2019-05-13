export const RECEIVE_JOB_POSTS = "RECEIVE_JOB_POSTS"
import * as APIUtil from '../util/apiUtil'

export const searchJobPosts = query => {
  return dispatch => {
    return APIUtil.searchJobPosts(query).then(jobPosts => {
      return dispatch({ type: RECEIVE_JOB_POSTS, jobPosts })
    })
  }
}
