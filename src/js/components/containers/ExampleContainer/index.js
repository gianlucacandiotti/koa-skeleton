import React from 'react';
import ReactDOM from 'react-dom';
import ExampleContainer from './ExampleContainer';

export default (function() {
	const mount_point = document.getElementById('mount-point');

	if(mount_point) {
		ReactDOM.render(
			<ExampleContainer />,
			mount_point
		);
	}
}());