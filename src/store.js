import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import logReducer from "./reducers";

function configureStore() {
    return createStore(logReducer, applyMiddleware(...[thunk, logger]));
}

export default configureStore;