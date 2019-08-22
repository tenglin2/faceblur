const imageURLReducer = function(state = '', action) {
	switch (action.type) {
		case 'CHANGE_IMAGE_URL':
			return action.payload;
		default:
			return state;
	}
};

export default imageURLReducer;
