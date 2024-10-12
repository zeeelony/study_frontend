import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { apiReducer } from './apiSlice';

export const store = createStore(apiReducer, applyMiddleware(thunk));
