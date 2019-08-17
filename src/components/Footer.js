import React from 'react';
import '../stylesheets/Footer.scss';

const Footer = function() {
	return (
		<div className="Footer">
			<a
				href="https://github.com/tenglin2/faceblur"
				target="_blank"
				rel="noopener noreferrer"
				className="Footer__link"
			>
				<span className="Footer__link--text">Source Code Link</span>
			</a>
		</div>
	);
};

export default Footer;
