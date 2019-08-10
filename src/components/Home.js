import React from 'react';
import '../stylesheets/Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (
			<main className="Home">
				<div className="display">
					<div className="display__box">
						<h1>Come and Anonymize Your Photos with Machine Learning and AI</h1>
						{/* <Button destination="register" text="Sign Up Today!" /> */}
						{/* Remember a link tag is basically the same thing as a anchor tag. */}
						<Link to="/Faceblur">Try It Now!</Link>
					</div>
				</div>
			</main>
		);
	}
}

export default Home;
