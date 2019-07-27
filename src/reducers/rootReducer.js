import { combineReducers } from 'redux';
import countReducer from './countReducer';
import nameReducer from './nameReducer';

// So these are our state values and we name it right here.
const rootReducer = combineReducers({
	count: countReducer,
	name: nameReducer
});

export default rootReducer;
