const registerPasswordReducer = function(state = '', action) {
	switch (action.type) {
		case 'REGISTER_PASSWORD_CHANGE':
			return action.payload;
		default:
			return state;
	}
};

export default registerPasswordReducer;
