// import React from 'react';
// import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers/reducers';

// import App from './components/App';

// const store = createStore(rootReducer);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
