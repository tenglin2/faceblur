import React from 'react';
import '../stylesheets/Footer.css';

const Footer = function() {
	return (
		<div className="footer">
			<a
				href="https://github.com/tenglin2/faceblur"
				target="_blank"
				rel="noopener noreferrer"
				className="footer__link"
			>
				<span className="footer__link--text">Source Code Link</span>
			</a>
		</div>
	);
};

export default Footer;
