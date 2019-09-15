import React from 'react';
import '../stylesheets/Home.scss';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (
			<main className="Home">
				<div className="display">
					<div className="display__box">
						<h1 className="display__box--description">
							Come and Anonymize Your Photos with Machine Learning and AI
						</h1>
						<img src="/img/blur.jpg" />
						{/* <Button destination="register" text="Sign Up Today!" /> */}
						{/* Remember a link tag is basically the same thing as a anchor tag. */}
						<Link to="/Faceblur" className="display__box--button">
							Try It Now!
						</Link>
					</div>
				</div>
			</main>
		);
	}
}

export default Home;
