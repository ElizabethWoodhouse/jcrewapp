import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { categoryReducer, productListReducer } from './subReducers/index';

const rootReducer = combineReducers({
	category: categoryReducer,
	productList: productListReducer,
});

export default createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware)
);
