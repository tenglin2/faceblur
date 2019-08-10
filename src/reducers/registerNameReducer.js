const registerNameReducer = function(state = '', action) {
	switch (action.type) {
		case 'REGISTER_NAME_CHANGE':
			return action.payload;
		default:
			return state;
	}
};

export default registerNameReducer;
