export const changeSearchInput = function(input) {
	console.log('input given', input);
	return {
		type: 'CHANGE_INPUT',
		payload: input
	};
};

export const addTodo = function(item) {
	return {
		type: 'ADD_TODO',
		payload: item
	};
};

export const changeName = function(name) {
	return {
		type: 'CHANGE_NAME',
		payload: name
	};
};
