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
	// console.log(
	// 	`expect bounding boxes to be an array of object containing only the boundary objects of ${boundingBoxes}`
	// );
	// console.log(boundingBoxes);

	const radioOption = useSelector((state) => state.radioOption);

	// So think about this clearly... Whenever the faceblur component rerenders it accesses the state from redux and uses that to render the radio buttons. We need this because there has to be a default and I want it to save. So to start with debugging let's just check if the state values are accurate.

	// Doesn't work. The current problem is that any input change reverts back and clears everything. Check the action for input change. The other problem could be that rendering the input part needs to be in its own component. Probably not though.

	console.log(`the current radio option is ${radioOption}`);

	const renderDetect = function() {
		if (radioOption === 'detect') {
			return <input type="radio" name="choice" value="detect" checked="checked" />;
		} else {
			return <input type="radio" name="choice" value="detect" />;
		}
	};

	const renderBlur = function() {
		if (radioOption === 'blur') {
			return <input type="radio" name="choice" value="blur" checked="checked" />;
		} else {
			return <input type="radio" name="choice" value="blur" />;
		}
	};

	const renderPitch = function() {
		if (radioOption === 'pitch') {
			return <input type="radio" name="choice" value="pitch" checked="checked" />;
		} else {
			return <input type="radio" name="choice" value="pitch" />;
		}
	};

	return (
		<main className="Faceblur">
			<section className="Faceblur__options">
				<h1>https://i.ytimg.com/vi/L4Z-pXRHQVA/maxresdefault.jpg</h1>

				<form className="Faceblur__form" onSubmit={handleSubmit}>
					<div className="Faceblur__form__input-query">
						<input value={input} onChange={handleChange} className="input-field" />
						<button type="submit" className="input-button">
							Submit &rarr;
						</button>
					</div>

					{/* YOU SHOULD CHANGE THIS SO THAT IT CHANGES STATE ON BUTTON CHANGE, NOT SUBMISSION! */}
					<div className="Faceblur__form__radio-buttons" id="radio-group">
						{renderDetect()}
						<label className="radio-label__detect">DETECT</label>
						{renderBlur()}
						<label className="radio-label__blur">BLUR</label>
						{renderPitch()}
						<label className="radio-label__pitch">PITCH</label>
					</div>
				</form>
				<h1>Hover Over And Click On Faces To Toggle</h1>
			</section>

			<section className="Faceblur__display">
				{/* <h1>
					This should have the actual picture as an image. You need to get state for image url from a reducer.
					Also flex column if sizing is off.
				</h1> */}
				<div className="Faceblur__display--box">
					<img
						src={imageURL}
						alt=""
						className="Faceblur__display--image"
						id="inputImage"
						// style={{ filter: 'blur(.5rem)' }}
					/>
					<BoundingBoxes boundingBoxes={boundingBoxes} />
				</div>
			</section>
		</main>
	);
};

export default Faceblur;
