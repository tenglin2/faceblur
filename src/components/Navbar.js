import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

// Should turn the parts with the link into specific button component. That would be nice and reuseable.

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar">
				<div className="navbar__logo">
					{/* Some logo should go here */}
					<h1 className="navbar__logo--title">faceblur: Anonymize Photos</h1>
				</div>

				<div className="navbar__link-container">
					<ul className="navbar__link-list">
						<li className="navbar__link-list-item">
							<Link to="/" className="navbar__link">
								Home
							</Link>
						</li>
						<li className="navbar__link-list-item">
							<Link to="/register" className="navbar__link">
								Register
							</Link>
						</li>
						<li className="navbar__link-list-item">
							<Link to="/signin" className="navbar__link">
								Signin
							</Link>
						</li>
						<li className="navbar__link-list-item">
							<Link to="/faceblur" className="navbar__link">
								Faceblur
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
