// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../stylesheets/Navbar.css';

// // Should turn the parts with the link into specific button component. That would be nice and reuseable.

// class Navbar extends React.Component {
// 	render() {
// 		return (
// 			<nav className="navbar">
// 				<div className="navbar__logo">
// 					{/* Some logo should go here */}
// 					<h1 className="navbar__logo--title">faceblur: Anonymize Photos</h1>
// 				</div>

// 				<div className="navbar__link-container">
// 					<ul className="navbar__link-list">
// 						<li className="navbar__link-list-item">
// 							<Link to="/" className="navbar__link">
// 								Home
// 							</Link>
// 						</li>
// 						<li className="navbar__link-list-item">
// 							<Link to="/register" className="navbar__link">
// 								Register
// 							</Link>
// 						</li>
// 						<li className="navbar__link-list-item">
// 							<Link to="/signin" className="navbar__link">
// 								Signin
// 							</Link>
// 						</li>
// 						<li className="navbar__link-list-item">
// 							<Link to="/faceblur" className="navbar__link">
// 								Faceblur
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 			</nav>
// 		);
// 	}
// }

// export default Navbar;

import React from 'react';
import '../stylesheets/Navbar.css';
import Navlink from './Navlink';

const Navbar = function() {
	return (
		<header class="Navbar">
			<section class="logo-box">
				<div class="logo-icon" />
				<div class="logo-name">faceblur</div>
			</section>

			<section class="navigation-box">
				<div class="navigation-link">
					<Navlink name="Home" />
				</div>
				<div class="navigation-link">
					<Navlink name="About" />
				</div>

				{/* We will need to conditionally render based on login state. Get this from useSelector. */}
				<div class="navigation-link">
					<Navlink name="Register" />
				</div>
				<div class="navigation-link">
					<Navlink name="Login" />
				</div>
			</section>
		</header>
	);
};

export default Navbar;
