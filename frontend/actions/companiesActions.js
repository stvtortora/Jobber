export const RECEIVE_COMPANY = "RECEIVE_COMPANY"
export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES"
import * as APIUtil from '../util/apiUtil'
import { receiveErrors } from './errorsActions'

export const createCompany = job_post => {
  return dispatch => {
    return APIUtil.createCompany(job_post).then(jobPost => {
      return dispatch({ type: RECEIVE_COMPANY, jobPost })
    },
    errors => {
      return dispatch(receiveErrors(errors))
    })
  }
}
