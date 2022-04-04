import { createStore, combineReducers, applyMiddleware } from 'redux';
import {auth} from "./reducers/auth";
import {contacts} from "./reducers/contacts";
import thunkMiddleWare from 'redux-thunk';

const rootReducer = combineReducers({
auth,
contacts,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;