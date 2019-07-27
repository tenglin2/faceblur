import { combineReducers } from 'redux';

const searchInputReducer = function(state = '', action) {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return action.payload;
		default:
			return state;
	}
};

const addTodoReducer = function(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO': {
			return [ ...state, action.payload ];
		}
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	input: searchInputReducer,
	todo: addTodoReducer
});

export default rootReducer;
