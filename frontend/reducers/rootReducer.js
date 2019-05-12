import { combineReducers } from 'redux';
import session from './sessionsReducer';
import currentRoute from './currentRouteReducer';

const rootReducer = combineReducers({ session, currentRoute });

export default rootReducer;
