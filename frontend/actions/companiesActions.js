export const RECEIVE_COMPANY = "RECEIVE_COMPANY"
export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES"
export const DELETE_COMPANY = "DELETE_COMPANY"
import * as APIUtil from '../util/apiUtil'
import { receiveErrors } from './errorsActions'

export const createCompany = company => {
  return dispatch => {
    return APIUtil.createCompany(company).then(company => {
      return dispatch({ type: RECEIVE_COMPANY, company })
    },
    errors => {
      return dispatch(receiveErrors(errors))
    })
  }
}

export const fetchCompanies = currentUser => {
  return dispatch => {
    return APIUtil.fetchCompanies(currentUser).then(companies => {
      return dispatch({ type: RECEIVE_COMPANIES, companies })
    },
    errors => {
      return dispatch(receiveErrors(errors))
    })
  }
}

export const fetchCompany = companyId => {
  return dispatch => {
    return APIUtil.fetchCompany(companyId).then(company => {
      return dispatch({ type: RECEIVE_COMPANY, company })
    },
    errors => {
      return dispatch(receiveErrors(errors))
    })
  }
}

export const updateCompany = company => {
  return dispatch => {
    return APIUtil.updateCompany(company).then(company => {
      return dispatch({ type: RECEIVE_COMPANY, company })
    },
    errors => {
      return dispatch(receiveErrors(errors))
    })
  }
}

export const deleteCompany = companyId => {
  return dispatch => {
    return APIUtil.deleteCompany(companyId).then(company => {
      return dispatch({ type: DELETE_COMPANY, companyId })
    })
  }
}
