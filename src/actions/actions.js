// export const changeSearchInput = function(input) {
// 	console.log('input given', input);
// 	return {
// 		type: 'CHANGE_INPUT',
// 		payload: input
// 	};
// };

// export const addTodo = function(item) {
// 	return {
// 		type: 'ADD_TODO',
// 		payload: item
// 	};
// };

// export const changeName = function(name) {
// 	return {
// 		type: 'CHANGE_NAME',
// 		payload: name
// 	};
// };

export const handleInputChange = function(input) {
	console.log('on submit this should trigger');
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

// We need to update image url
export const changeImageURL = function(imageURL) {
	console.log(`the image url that the action takes is ${imageURL}`);
	// Return an action that is dispatch to the reducer.

	return {
		type: 'CHANGE_IMAGE_URL',
		payload: imageURL
	};
};

export const changeFaceData = function(faceData) {
	// Remember that we expect the face data to be an array of objects where each object defines a different face detected. There is also a length property we can use to iterate through each face.

	return {
		type: 'CHANGE_FACE_DATA',
		payload: faceData
	};
};

export const changeImageDimensions = function(imageDimensions) {
	return {
		type: 'CHANGE_IMAGE_DIMENSIONS',
		payload: imageDimensions
	};
};

export const changeRadioOption = function(radioOption) {
	return {
		type: 'CHANGE_RADIO_OPTION',
		payload: radioOption
	};
};
