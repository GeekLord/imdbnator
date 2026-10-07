import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger';
const logger = createLogger();
import reducers from '../reducers'

const debug = process.env.NODE_ENV !== "production"
const middleware = (debug) ? applyMiddleware(logger) : undefined

export default createStore(reducers, middleware)
