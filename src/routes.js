import router  from 'koa-router';
import React from 'react';
import ReactDOM  from 'react-dom/server';
import ExampleContainer from './js/components/containers/ExampleContainer/ExampleContainer';

const Router = router();

Router.get('/', function *(next) {
	yield this.render('home', {
		title: 'Your page title',
		react: ReactDOM.renderToString(<ExampleContainer />)
	});
});

module.exports = Router;