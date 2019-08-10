import React from 'react';
import { Link } from 'react-router-dom';

const Button = function({ destination, text }) {
	return (
		<div class="Button">
			<Link to={destination}>{text}</Link>
		</div>
	);
};

export default Button;
