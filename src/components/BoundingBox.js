import React from 'react';
import { useSelector } from 'react-redux';
import '../stylesheets/BoundingBox.scss';

const BoundingBox = function({ bound }) {
	// Here we need to have state values for detect, blur, and pitch values and use a set state on click.

	// 1 should mean active state.
	// Wait is this state specific to this component? Meaning are there multiple state values for each bounding box? Hope so.
	const [ toggleState, setToggleState ] = React.useState(1);

	const [ detectStyle, setDetectStyle ] = React.useState({
		border: '.3rem solid black'
	});

	const [ blurStyle, setBlurStyle ] = React.useState({
		backgroundImage: 'url(img/blur.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		borderRadius: '50%',
		filter: 'blur(.3rem)'
	});

	const [ pitchStyle, setPitchStyle ] = React.useState({
		backgroundColor: 'black',
		borderRadius: '50%'
	});

	const imageHeight = useSelector((state) => state.imageDimensions.height);
	const imageWidth = useSelector((state) => state.imageDimensions.width);

	const top = bound.top_row * imageHeight;
	const left = bound.left_col * imageWidth;
	const bottom = bound.bottom_row * imageHeight;
	const right = bound.right_col * imageWidth;

	const boxDimensions = {
		top,
		left,
		bottom,
		right
	};

	let boxStyle = {
		top: boxDimensions.top,
		left: boxDimensions.left,
		bottom: boxDimensions.bottom,
		right: boxDimensions.right,
		height: boxDimensions.bottom - boxDimensions.top,
		width: boxDimensions.right - boxDimensions.left
	};

	const radioOption = useSelector((state) => state.radioOption);

	// What if I define the blur style and everything else inside of here and change the value based on that?

	// const detectStyle = {
	// 	border: '.3rem solid black'
	// };

	// const blurStyle = {
	// 	backgroundImage: 'url(/img/blur.jpg)',
	// 	backgroundRepeat: 'no-repeat',
	// 	backgroundAttachment: 'fixed',
	// 	backgroundSize: 'cover',
	// 	borderRadius: '50%',
	// 	filter: 'blur(.3rem)'
	// };

	// const pitchStyle = {
	// 	backgroundColor: 'black',
	// 	borderRadius: '50%'
	// };

	const clickBox = function() {
		console.log('the bounding box was clicked');
		console.log(`radio option is ${radioOption} and ${typeof radioOption}`);

		// OKAY SO NOW WE USE STATE INSTEAD TO RENDER CORRECTLY.
		if (radioOption === 'detect') {
			if (toggleState === 1) {
				setToggleState(0);
				setDetectStyle({});
			} else {
				setToggleState(1);
				setDetectStyle({
					border: '.3rem solid black'
				});
			}
		} else if (radioOption === 'blur') {
			if (toggleState === 1) {
				setToggleState(0);
				setBlurStyle({});
			} else {
				setToggleState(1);
				setBlurStyle({
					backgroundImage: 'url(/img/blur.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					backgroundSize: 'cover',
					borderRadius: '50%',
					filter: 'blur(.3rem)'
				});
			}
		} else if (radioOption === 'pitch') {
			if (toggleState === 1) {
				setToggleState(0);
				setPitchStyle({});
			} else {
				setToggleState(1);
				setPitchStyle({
					backgroundColor: 'black',
					borderRadius: '50%'
				});
			}
		} else {
			console.log('SOMETHING WENT WRONG WITH SETTING STATE!');
		}

		// switch (radioOption) {
		// 	case 'detect':
		// 		toggleStyle = {
		// 			border: '.3rem solid white',
		// 			backgroundColor: 'green'
		// 		};
		// 	case 'blur':
		// 		toggleStyle = {
		// 			// Might be a syntax issue here
		// 			filter: 'blur(1.5rem)',
		// 			backgroundColor: 'orange'
		// 		};
		// 	case 'pitch':
		// 		toggleStyle = {
		// 			backgroundColor: 'black'
		// 		};
		// 	default:
		// 		console.log('something went wrong!');
		// }

		// if (radioOption === 'detect') {
		// 	console.log('detect triggers');
		// 	boxStyle = { ...boxStyle };
		// 	console.log(boxStyle);
		// } else if (radioOption === 'blur') {
		// 	console.log('blur triggers');
		// } else {
		// 	console.log('pitch triggers');
		// }
	};

	// On possible solution is to make the whole boxStyle into a stateful object. I don't understand why applying these inline styles is not working....

	// A big problem that may occur is that the responsive design of the display box changes the actual dimensions of the image. This makes the calculations inaccurate. This is in css so I don't have a way of checking the dimensions.
	// Perhaps I could select the dom element of the faceblur container. That's beyond the scope though.

	// Alright so the goal now is to configure the on click toggle for each radio option.

	// console.log(boxStyle);

	let newStyle;

	if (radioOption === 'detect') {
		newStyle = detectStyle;
	} else if (radioOption === 'blur') {
		newStyle = blurStyle;
	} else if (radioOption === 'pitch') {
		newStyle = pitchStyle;
	} else {
		console.log('SOMETHING WENT WRONG WITH ASSIGNMENT!');
	}

	return <div className="BoundingBox" style={{ ...boxStyle, ...newStyle }} onClick={clickBox} />;
	// Okay so the inline thing does work. I just need to figure out how the onClick listener works.
};

export default BoundingBox;
