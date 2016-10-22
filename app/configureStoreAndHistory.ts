import ReduxThunk from 'redux-thunk'
import {browserHistory} from 'react-router'
import * as createLogger from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux'

const logger = createLogger();

import NotificationReducer from './Shared/Notification/Reducer'

const reducers = combineReducers({
    NotificationReducer: NotificationReducer,
    routing: routerReducer
});

export const store = createStore(reducers, applyMiddleware(logger, ReduxThunk, routerMiddleware(browserHistory)));
export const history = syncHistoryWithStore(browserHistory, store);