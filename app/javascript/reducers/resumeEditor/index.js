import { combineReducers } from 'redux';
import basicInfoReducer from './basicInfoReducer';

export default combineReducers({
  basicInfo: basicInfoReducer
});
