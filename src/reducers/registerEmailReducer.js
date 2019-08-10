const registerEmailReducer = function(state = '', action) {
	switch (action.type) {
		case 'REGISTER_EMAIL_CHANGE':
			return action.payload;
		default:
			return state;
	}
};

export default registerEmailReducer;
