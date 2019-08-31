const radioOptionReducer = function(state = 'detect', action) {
	switch (action.type) {
		case 'CHANGE_RADIO_OPTION':
			return action.payload;
		default:
			return state;
	}
};

export default radioOptionReducer;
