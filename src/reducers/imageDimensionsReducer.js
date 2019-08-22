const imageDimensionsReducer = function(state = {}, action) {
	switch (action.type) {
		case 'CHANGE_IMAGE_DIMENSIONS':
			return action.payload;
		default:
			return state;
	}
};

export default imageDimensionsReducer;
