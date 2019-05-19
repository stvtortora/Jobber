export const CLEAR_ERRORS = "CLEAR_ERRORS"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

export const clearErrors = () => ({ type: CLEAR_ERRORS })

export const receiveErrors = errors => {
  console.log(errors)
  return ({
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
  })
}
