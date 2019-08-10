const inputReducer = function(state = '', action) {
	switch (action.type) {
		case 'INPUT_CHANGE':
			return action.payload;
		default:
			return state;
	}
};

export default inputReducer;
