const inputReducer = function(state = 'https://i.ytimg.com/vi/L4Z-pXRHQVA/maxresdefault.jpg', action) {
	switch (action.type) {
		case 'INPUT_CHANGE':
			return action.payload;
		default:
			return state;
	}
};

export default inputReducer;
