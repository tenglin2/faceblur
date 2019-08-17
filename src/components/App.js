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
import { changeName } from '../actions/actions';
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

const app = new Clarifai.App({
	apiKey: API_KEY
});

const App = function() {
	// So here we get a reference to the dispatch function which accepts an action creator. THen we invoke it with the changeName action. This should return an action with a type a payload to the action reducer (and all other reducers). That should update state. And it works. Good!
	// It seems that this step is necessary for some reason. Probably something to do with asynchronous actions.
	// For now we don't need any logic. Just do the front end stuff. Reference the
	const dispatch = useDispatch();
	dispatch(changeName('gordon'));
	const name = useSelector((state) => state.name);
	console.log(name);

	const input = useSelector((state) => state.input);

	// Extrapolated the form and input handlers to the parent top level component and passed them down as props instead.
	const handleSubmit = function(event) {
		// YOU NEED A SEPARATE STATE FOR IMAGE URL. TYING IT STRICTLY TO INPUT IS NO GOOD!!!

		event.preventDefault();
		console.log('submission works.');
		console.log(`current input value is ${input}`);
		// Add the dispatch later....

		app.models.predict('a403429f2ddf4b49b307e318f00e528b', 'https://samples.clarifai.com/face-det.jpg').then(
			function(response) {
				console.log(response.outputs[0].data.regions);
			},
			function(error) {
				console.log(error);
			}
		);
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

	return (
		<Router>
			<div className="App">
				{/* <h1>App Component</h1> */}

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
