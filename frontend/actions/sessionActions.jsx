export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
import * as APIUtil from '../util/apiUtil'
import { receiveErrors } from './errorsActions'

export const createUser = user => {
  return dispatch => {
    return APIUtil.createUser(user).then(currentUser => {
      return dispatch({ type: LOG_IN, currentUser })
    },
    (errors) => {
      return dispatch(receiveErrors(errors))
    })
  }
}

export const login = user => {
  return dispatch => {
    return APIUtil.login(user).then(currentUser => {
      return dispatch({ type: LOG_IN, currentUser })
    },
    (errors) => {
      return dispatch(receiveErrors(errors))
    })
  }
}

export const logout = user => {
  return dispatch => {
    return APIUtil.logout(user).then(() => {
      return dispatch({ type: LOG_OUT })
    })
  }
}
