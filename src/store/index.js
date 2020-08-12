import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import combineReducers from '../reducers/index';

const middleware = applyMiddleware(thunkMiddleware, logger);

export const store = createStore(
  combineReducers, middleware

)

store.subscribe(() => {
  // console.log('store1',store.getState())
})
