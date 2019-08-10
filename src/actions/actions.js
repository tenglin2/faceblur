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

export const handleInputChange = function(input) {
	console.log(input);

	return {
		type: 'INPUT_CHANGE',
		payload: input
	};
};

export const registerNameChange = function(name) {
	console.log('name is', name);
	return {
		type: 'REGISTER_NAME_CHANGE',
		payload: name
	};
};

export const registerEmailChange = function(email) {
	console.log('emial is', email);
	return {
		type: 'REGISTER_EMAIL_CHANGE',
		payload: email
	};
};

export const registerPasswordChange = function(password) {
	console.log('password is', password);
	return {
		type: 'REGISTER_PASSWORD_CHANGE',
		payload: password
	};
};

// export const clearRegisterQueries = function() {
// 	// We just need to call the other actions with empty input...
// 	registerNameChange('');
// 	registerEmailChange('');
// 	registerPasswordChange('');
// };
