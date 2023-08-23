import { combineReducers } from 'redux';
import productReducer from './Reducer/productReducer.js';

const rootReducer = combineReducers({
  productReducer: productReducer,
});

export default rootReducer;
