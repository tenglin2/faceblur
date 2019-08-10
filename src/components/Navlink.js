import React from 'react';
import { Link } from 'react-router-dom';

// We are passing in a name prop which will also determine how the links work.
const Navlink = function({ name }) {
	return (
		<div class="Navlink">
			<Link to={`/${name}`}>{`${name}`}</Link>
		</div>
	);
};

export default Navlink;
