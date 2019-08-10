const nameReducer = function(state = 'george', action) {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.payload;
		default:
			return state;
	}
};

export default nameReducer;
