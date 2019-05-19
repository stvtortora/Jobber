export const RECEIVE_JOB_CATEGORIES = "RECEIVE_JOB_CATEGORIES"
import * as APIUtil from '../util/apiUtil'

export const fetchJobCategories = () => {
  return dispatch => {
    return APIUtil.fetchJobCategories().then(jobCategories => {
      return dispatch({ type: RECEIVE_JOB_CATEGORIES, jobCategories })
    })
  }
}
