import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//reducers
import { userReducer } from './reducers';

const combinedReducer = combineReducers({
  userReducer,
});

export const store = createStore(combinedReducer, applyMiddleware(thunk));
