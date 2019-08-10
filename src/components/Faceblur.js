// import React from 'react';
// import '../stylesheets/Faceblur.css';

// class Faceblur extends React.Component {
//   render() {
//     return (
//       <main class="Faceblur">
//         <h1>This is the main faceblur component page that we show.</h1>

//         <form onSubmit={}>
//           <input type="text" onChange={} value={} />
//           <label>Submit Image</label>
//         </form>
//       </main>
//     );
//   }
// }

// export default Faceblur;

import React from 'react';
import { useSelector } from 'react-redux';
import '../stylesheets/Faceblur.css';

const Faceblur = function({ handleSubmit, handleChange }) {
	const input = useSelector((state) => state.input);

	return (
		<main className="Faceblur">
			<section className="Faceblur__options">
				{/* ON SUBMIT YOU SHOULD ERASE THE INPUT QUERY */}
				<form onSubmit={handleSubmit}>
					<input value={input} onChange={handleChange} className="input-field" />
					<button type="submit" className="input-button">
						Submit &rarr;
					</button>
				</form>
			</section>

			<section className="Faceblur__display">
				<h1>
					This should have the actual picture as an image. You need to get state for image url from a reducer.
					Also flex column if sizing is off.
				</h1>
			</section>
		</main>
	);
};

export default Faceblur;
