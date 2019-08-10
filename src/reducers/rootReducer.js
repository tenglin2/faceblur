import { combineReducers } from 'redux';
import countReducer from './countReducer';
import nameReducer from './nameReducer';
import inputReducer from './inputReducer';

import registerNameReducer from './registerNameReducer';
import registerEmailReducer from './registerEmailReducer';
import registerPasswordReducer from './registerPasswordReducer';

// So these are our state values and we name it right here.
const rootReducer = combineReducers({
	count: countReducer,
	name: nameReducer,
	input: inputReducer,
	registerName: registerNameReducer,
	registerEmail: registerEmailReducer,
	registerPassword: registerPasswordReducer
});

export default rootReducer;
