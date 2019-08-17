import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navlink.scss';

// We are passing in a name prop which will also determine how the links work.
const Navlink = function({ name }) {
	return (
		<div className="Navlink">
			<Link to={`/${name}`} className="Navlink__link">{`${name}`}</Link>
		</div>
	);
};

export default Navlink;
