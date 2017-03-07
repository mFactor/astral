import { combineReducers } from 'redux';
import appRedux from './app/reduce';

const globalReducers = combineReducers({
  appRedux,
});

export default globalReducers;
