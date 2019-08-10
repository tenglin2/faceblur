// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../stylesheets/Navbar.css';

// // Should turn the parts with the link into specific button component. That would be nice and reuseable.

// classNameName Navbar extends React.Component {
// 	render() {
// 		return (
// 			<nav classNameName="navbar">
// 				<div classNameName="navbar__logo">
// 					{/* Some logo should go here */}
// 					<h1 classNameName="navbar__logo--title">faceblur: Anonymize Photos</h1>
// 				</div>

// 				<div classNameName="navbar__link-container">
// 					<ul classNameName="navbar__link-list">
// 						<li classNameName="navbar__link-list-item">
// 							<Link to="/" classNameName="navbar__link">
// 								Home
// 							</Link>
// 						</li>
// 						<li classNameName="navbar__link-list-item">
// 							<Link to="/register" classNameName="navbar__link">
// 								Register
// 							</Link>
// 						</li>
// 						<li classNameName="navbar__link-list-item">
// 							<Link to="/signin" classNameName="navbar__link">
// 								Signin
// 							</Link>
// 						</li>
// 						<li classNameName="navbar__link-list-item">
// 							<Link to="/faceblur" classNameName="navbar__link">
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
		<header className="Navbar">
			<section className="logo-box">
				<div className="logo-icon" />
				<div className="logo-name">faceblur</div>
			</section>

			<section className="navigation-box">
				<div className="navigation-link">
					<Navlink name="Home" />
				</div>
				<div className="navigation-link">
					<Navlink name="About" />
				</div>

				{/* We will need to conditionally render based on login state. Get this from useSelector. */}
				<div className="navigation-link">
					<Navlink name="Register" />
				</div>
				<div className="navigation-link">
					<Navlink name="Login" />
				</div>
			</section>
		</header>
	);
};

export default Navbar;
