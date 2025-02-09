import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import {connectRouter} from 'connected-react-router';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });

export default createRootReducer;
