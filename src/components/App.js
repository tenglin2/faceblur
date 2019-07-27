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
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

const App = function() {
	return (
		<Router>
			<div class="App">
				<h1>App Component</h1>

				<Navbar />
				<Route exact={true} path="/" component={Home} />
				<Route exact={true} path="/" component={Home} />
				<Route exact={true} path="/" component={Home} />
				<Route exact={true} path="/" component={Home} />
				<Route exact={true} path="/" component={Home} />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
