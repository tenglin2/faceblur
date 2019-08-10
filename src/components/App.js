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
import Footer from './Footer';

import '../stylesheets/App.css';

const App = function() {
	// So here we get a reference to the dispatch function which accepts an action creator. THen we invoke it with the changeName action. This should return an action with a type a payload to the action reducer (and all other reducers). That should update state. And it works. Good!
	// It seems that this step is necessary for some reason. Probably something to do with asynchronous actions.
	// For now we don't need any logic. Just do the front end stuff. Reference the
	const dispatch = useDispatch();
	dispatch(changeName('gordon'));
	const name = useSelector((state) => state.name);
	console.log(name);

	return (
		<Router>
			<div class="App">
				{/* <h1>App Component</h1> */}

				<Navbar />
				{/* Or operator here to make no change and Home have the same component render. */}
				<Route exact={true} path="/(|Home)" component={Home} />
				<Route exact={true} path="/About" component={About} />
				{/* Register and SignIn need to be protected based off of logged in state. */}
				<Route exact={true} path="/Register" component={Register} />
				<Route exact={true} path="/Login" component={Login} />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
