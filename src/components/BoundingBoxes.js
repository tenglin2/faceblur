import React from 'react';
import { useSelector } from 'react-redux';
import BoundingBox from './BoundingBox';
import '../stylesheets/BoundingBoxes.scss';

// boundingBoxes is the array of objects that define the
const BoundingBoxes = function({ boundingBoxes }) {
	console.log(`the bounding boxes are currently ${boundingBoxes}`);

	const renderBoxes = function(boundingBoxes) {
		return boundingBoxes.map((boundingBox, id) => {
			return <BoundingBox key={id} bound={boundingBox} />;
		});
	};

	const imageHeight = useSelector((state) => state.imageDimensions.height);
	const imageWidth = useSelector((state) => state.imageDimensions.width);

	const boxesStyle = {
		height: imageHeight,
		width: imageWidth
	};

	return (
		<div className="BoundingBoxes" style={boxesStyle}>
			{renderBoxes(boundingBoxes)}
		</div>
	);
};

export default BoundingBoxes;
