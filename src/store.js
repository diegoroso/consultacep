import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers'

const middleware = composeWithDevTools(
  applyMiddleware(thunk, logger)
)

export default createStore(reducer, middleware);
