import rootReducer from "./rootReducer";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk" 
import { applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;