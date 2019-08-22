import React from 'react';
import { useSelector } from 'react-redux';
import '../stylesheets/BoundingBox.scss';

const BoundingBox = function({ bound }) {
	console.log(bound);

	const imageDimensions = useSelector((state) => state.imageDimensions);
	const imageHeight = useSelector((state) => state.imageDimensions.height);
	const imageWidth = useSelector((state) => state.imageDimensions.width);

	console.log(`getting image from state we have height of ${imageHeight} and width of ${imageWidth}`);
	console.log(imageDimensions);

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

	// I expect the actual porportion in pixels.
	console.log('box dimensions are...');
	console.log(boxDimensions);

	// A big problem that may occur is that the responsive design of the display box changes the actual dimensions of the image. This makes the calculations inaccurate. This is in css so I don't have a way of checking the dimensions.
	// Perhaps I could select the dom element of the faceblur container. That's beyond the scope though.

	const boxStyle = {
		top: boxDimensions.top,
		left: boxDimensions.left,
		bottom: boxDimensions.bottom,
		right: boxDimensions.right,
		height: boxDimensions.bottom - boxDimensions.top,
		width: boxDimensions.right - boxDimensions.left
	};
	console.log(boxStyle);

	return <div className="BoundingBox" style={boxStyle} />;
};

export default BoundingBox;
