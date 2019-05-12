import { combineReducers } from 'redux';
import session from './sessionsReducer';
import currentRoute from './currentRouteReducer';
import records from './recordsReducer';

export default combineReducers({ session, currentRoute, records })
