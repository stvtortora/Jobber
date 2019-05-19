import { combineReducers } from 'redux'
import session from './sessionsReducer'
import currentRoute from './currentRouteReducer'
import records from './recordsReducer'
import errors from './errorsReducer'

export default combineReducers({ session, currentRoute, records, errors })
