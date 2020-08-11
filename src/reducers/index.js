import { combineReducers } from 'redux';
import OrderReducer from './order.reducer';
import CustomerReducer from './customer.reducer';

export default combineReducers({
    OrderReducer,
    CustomerReducer
})