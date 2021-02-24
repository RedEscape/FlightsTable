import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import flightsReducer from './flightsReducer';
import thunk from 'redux-thunk';

//каждое свойство является МЕТОДОМ:
const store = createStore(
  flightsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
