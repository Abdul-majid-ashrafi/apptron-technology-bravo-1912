import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import MainReducer from './reducers/mainReducer'
import UserReducer from './reducers/userReducer'

export default createStore(
    combineReducers({
        MainReducer,
        UserReducer
    }),
    {},
    applyMiddleware(logger())
)