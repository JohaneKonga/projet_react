import { combineReducers } from 'redux';
import LoginReducer from 'redux/login/reducer';

/**
 * @description combine reducers
 */
const rootReducer = combineReducers({
  LoginReducer
});

export default rootReducer;
