// import React from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
// import '../stylesheets/App.css';

// import Navbar from './Navbar';
// import Home from './Home';
// import Register from './Register';
// import Signin from './Signin';
// import Faceblur from './Faceblur';
// import Footer from './Footer';
// import '../stylesheets/App.css';

// class App extends React.Component {
// 	render() {
// 		return (
// 			<Router basename="/">
// 				<div class="app">
// 					{/* <h1 class="app__header">THIS IS SOME HEADER TEXT</h1>
// 					<h2>THIS TEXT SHOULD BE H1 AND WHITE</h2> */}
// 					<Navbar />

// 					<Route exact={true} path="/" component={Home} />
// 					<Route exact={true} path="/register" component={Register} />
// 					<Route exact={true} path="/signin" component={Signin} />
// 					{/* the faceblur component needs to be a protected route based on register state. For now just render like the rest. */}
// 					<Route exact={true} path="/faceblur" component={Faceblur} />

// 					<Footer />
// 				</div>
// 			</Router>
// 		);
// 	}
// }

// export default App;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Register from './Register';
import Login from './Login';
import Faceblur from './Faceblur';
import Footer from './Footer';

import '../stylesheets/App.scss';

import Clarifai from 'clarifai';
import API_KEY from '../credentials';

import { handleInputChange } from '../actions/actions';
import { registerNameChange, registerEmailChange, registerPasswordChange } from '../actions/actions';

// For changing the image url on submission...
import { changeImageURL } from '../actions/actions';

// For getting the data from the clarifai api on submit...
import { changeFaceData } from '../actions/actions';

// For changing the image dimensions and attach to state.
import { changeImageDimensions } from '../actions/actions';

// Action used for changing the radio button selection state to detect, blur, or pitch.
import { changeRadioOption } from '../actions/actions';

const app = new Clarifai.App({
	apiKey: API_KEY
});

const App = function() {
	// So here we get a reference to the dispatch function which accepts an action creator. THen we invoke it with the changeName action. This should return an action with a type a payload to the action reducer (and all other reducers). That should update state. And it works. Good!
	// It seems that this step is necessary for some reason. Probably something to do with asynchronous actions.
	// For now we don't need any logic. Just do the front end stuff. Reference the
	const dispatch = useDispatch();
	// dispatch(changeName('gordon'));
	const name = useSelector((state) => state.name);
	// console.log(name);

	const input = useSelector((state) => state.input);

	const imageURL = useSelector((state) => state.imageURL);

	// Extrapolated the form and input handlers to the parent top level component and passed them down as props instead.
	const handleSubmit = function(event) {
		// YOU NEED A SEPARATE STATE FOR IMAGE URL. TYING IT STRICTLY TO INPUT IS NO GOOD!!!

		event.preventDefault();
		console.log('submission works.');
		console.log(`current input value is ${input}`);
		// Add the dispatch with the input state at the current moment of submission.
		dispatch(changeImageURL(input));

		// Super weird here. The imageURL is actually undefined for some reason.
		// console.log(`the actual imageURL is assigned to input of ${imageURL}`);
		// console.log(imageURL);

		// Another weird part is that we needed to use input instead of the taken imageURL because it's just not defined I guess? Some error.
		app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
			function(response) {
				// Here we also need to set the response data as state to pass down to the faceblur component so that it knows the bounding boxes. Call it faceData.
				console.log(response.outputs[0].data.regions);
				const formattedFaceData = response.outputs[0].data.regions;
				dispatch(changeFaceData(formattedFaceData));

				// We also want to clear the input on successful submit. That being said, we don't really want to create a new value, we only want to edit one. That means we use the same reducer and action.

				// For now instead of removing it after submission, let's just leave it.
				// dispatch(handleInputChange(''));

				// So I want to grab the image by id. The problem here might be that the image is currently undefined during response.

				const image = document.getElementById('inputImage');
				const imageDimensions = {
					height: image.height,
					width: image.width
				};
				// console.log(image);
				// console.log(`the height is ${image.height} and width is ${image.width}`);

				dispatch(changeImageDimensions(imageDimensions));
			},
			function(error) {
				console.log('we have an error...');
				console.log(error);
			}
		);

		console.log('FLAAAGGGGGAGGAGAG: we need to find the radio button value, I believe is named choice');
		// So instead of going throught he event target, we just use dom manipulation, but we have to attach an id to the wrapper div.
		const radios = document.querySelector('input[name="choice"]:checked').value;
		console.log(radios);
		dispatch(changeRadioOption(radios));
	};

	const handleChange = function(event) {
		console.log('updates the input value');
		dispatch(handleInputChange(event.target.value));
	};

	// CODE FOR REGISTER PAGE
	const handleRegisterSubmit = function(event) {
		event.preventDefault();
		console.log('register submission triggers');
		clearRegisterQueries();
	};

	const handleRegisterNameChange = function(event) {
		console.log('register name change');
		dispatch(registerNameChange(event.target.value));
	};

	const handleRegisterEmailChange = function(event) {
		console.log('register email change');
		dispatch(registerEmailChange(event.target.value));
	};

	const handleRegisterPasswordChange = function(event) {
		console.log('register password change');
		dispatch(registerPasswordChange(event.target.value));
	};

	const clearRegisterQueries = function() {
		dispatch(registerNameChange(''));
		dispatch(registerEmailChange(''));
		dispatch(registerPasswordChange(''));
	};

	// The best thing to do here is get the image height and width and assign it to state. To do that, we would need a reducer and on successful submission on clarifai, we want to find the dimensions. The formal way is probably with react refs but dom manipulation is probably easier.

	return (
		<Router>
			<div className="App">
				{/* <h1>Some value of {faceData.length}</h1> */}

				{/* <h1>The current input value is {input}</h1> */}

				<Navbar />
				{/* Or operator here to make no change and Home have the same component render. */}
				<Route exact={true} path="/(|Home)" component={Home} />
				<Route exact={true} path="/About" component={About} />
				{/* Register and SignIn need to be protected based off of logged in state. */}
				{/* <Route exact={true} path="/Register" component={Register} /> */}
				<Route
					exact={true}
					path="/Register"
					render={(props) => (
						<Register
							{...props}
							handleRegisterSubmit={handleRegisterSubmit}
							handleRegisterNameChange={handleRegisterNameChange}
							handleRegisterEmailChange={handleRegisterEmailChange}
							handleRegisterPasswordChange={handleRegisterPasswordChange}
						/>
					)}
				/>
				<Route exact={true} path="/Login" component={Login} />
				{/* <Route exact={true} path="/faceblur" component={Faceblur} /> */}

				{/* So this part here we wanted to pass props to our component so we had to use render instead of component and pass the props that way. Kind of weird. */}
				<Route
					exact={true}
					path="/Faceblur"
					render={(props) => <Faceblur {...props} handleSubmit={handleSubmit} handleChange={handleChange} />}
				/>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
