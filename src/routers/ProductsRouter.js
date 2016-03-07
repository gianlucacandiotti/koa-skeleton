import router  from 'koa-router';
import body from 'koa-body';
import fetch from 'node-fetch';
import React from 'react';
import ReactDOM  from 'react-dom/server';

import ProductsController from '../controllers/ProductsController';

import ExampleContainer from '../js/components/containers/ExampleContainer/ExampleContainer';

const Router = router();
const Body = body();

Router.get('/products', function *(next) {
	const products = yield fetch(`${process.env.API_BASE_URL}/api/products`)
	.then(response => {
		return response.json()
	}).then(data => {
		return data;
	});

	yield this.render('products', {
		title: 'Your page title',
		react: ReactDOM.renderToString(<ExampleContainer data={products} />)
	});
});


//API

Router.get('/api/products', Body, ProductsController.getAll);

Router.get('/api/products/:id', Body, ProductsController.getById);

module.exports = Router;