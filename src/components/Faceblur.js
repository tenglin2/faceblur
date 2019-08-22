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
import BoundingBoxes from './BoundingBoxes';
import { useSelector } from 'react-redux';
import '../stylesheets/Faceblur.scss';

const Faceblur = function({ handleSubmit, handleChange }) {
	const input = useSelector((state) => state.input);
	const imageURL = useSelector((state) => state.imageURL);
	const faceData = useSelector((state) => state.faceData);
	console.log(faceData);
	const boundingBoxes = faceData.map((face) => {
		return face.region_info.bounding_box;
	});
	console.log(
		`expect bounding boxes to be an array of object containing only the boundary objects of ${boundingBoxes}`
	);
	console.log(boundingBoxes);

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
				{/* <h1>
					This should have the actual picture as an image. You need to get state for image url from a reducer.
					Also flex column if sizing is off.
				</h1> */}
				<div className="Faceblur__display--box">
					<img src={imageURL} alt="" className="Faceblur__display--image" id="inputImage" />
					<BoundingBoxes boundingBoxes={boundingBoxes} />
				</div>
			</section>
		</main>
	);
};

export default Faceblur;
