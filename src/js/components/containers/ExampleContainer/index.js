import React from 'react';
import ReactDOM from 'react-dom';
import ExampleContainer from './ExampleContainer';

import jquery from 'jquery';

export default (function(mountSitRouteFinder){

	mountSitRouteFinder(jquery, window, document);

}(function($, w, d){

	$(function() {

		const mount_point = document.getElementById('mount-point');
		
		if(mount_point) {
			ReactDOM.render(
				<ExampleContainer />,
				mount_point
			);
		}

	});

}));