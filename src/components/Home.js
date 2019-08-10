import React from 'react';
import Button from './Button';
import '../stylesheets/Home.css';

class Home extends React.Component {
	render() {
		return (
			<main class="Home">
				<div class="display">
					<div class="display__box">
						<h1>Come and Anonymize Your Photos with Machine Learning and AI</h1>
						<Button destination="register" text="Sign Up Today!" />
					</div>
				</div>
			</main>
		);
	}
}

export default Home;
