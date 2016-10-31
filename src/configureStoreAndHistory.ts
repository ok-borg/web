import ReduxThunk from "redux-thunk";
import {browserHistory} from "react-router";
import * as createLogger from "redux-logger";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {syncHistoryWithStore, routerReducer, routerMiddleware} from "react-router-redux";
import NotificationReducer from "./Shared/Notification/Reducer";
import SearchReducer from './Shared/SearchInput/Reducer';

const logger = createLogger();

const reducers = combineReducers({
    NotificationReducer: NotificationReducer,
    SearchState: SearchReducer,
    routing: routerReducer
});

let middlewares = [ReduxThunk, routerMiddleware(browserHistory)];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

export const store = createStore(reducers, applyMiddleware(...middlewares));
export const history = syncHistoryWithStore(browserHistory, store);
