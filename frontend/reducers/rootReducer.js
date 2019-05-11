import { combineReducers } from 'redux';
import session from './sessionsReducer';

const rootReducer = combineReducers({ session });

export default rootReducer;
