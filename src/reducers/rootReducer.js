import { combineReducers } from 'redux';
import countReducer from './countReducer';
import nameReducer from './nameReducer';
import inputReducer from './inputReducer';

import registerNameReducer from './registerNameReducer';
import registerEmailReducer from './registerEmailReducer';
import registerPasswordReducer from './registerPasswordReducer';

import imageURLReducer from './imageURLReducer';
import faceDataReducer from './faceDataReducer';
import imageDimensionsReducer from './imageDimensionsReducer';

import radioOptionReducer from './radioOptionReducer';

// So these are our state values and we name it right here.
const rootReducer = combineReducers({
	count: countReducer,
	name: nameReducer,
	input: inputReducer,
	registerName: registerNameReducer,
	registerEmail: registerEmailReducer,
	registerPassword: registerPasswordReducer,
	imageURL: imageURLReducer,
	faceData: faceDataReducer,
	imageDimensions: imageDimensionsReducer,
	radioOption: radioOptionReducer
});

export default rootReducer;
