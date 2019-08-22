const faceDataReducer = function(state = [], action) {
	switch (action.type) {
		case 'CHANGE_FACE_DATA':
			return action.payload;
		default:
			return state;
	}
};

export default faceDataReducer;

// This individual reducer stuff is tedioius but remember that if you want one huge reducer, you have to return it as an object and spread it. Actually kind of impractical because you have to name the parent and use the dot operator to get each value. The advantageous is that you don't have to do this tedious coding.
