import fetch from 'node-fetch';
import React from 'react';
import ReactDOM  from 'react-dom/server';

import APIModule from '../js/api/API';
const API = APIModule();

import ExampleContainer from '../js/components/containers/ExampleContainer/ExampleContainer';

module.exports.showProductsOverview = function * showProductsOverview(next) {
	const products = yield fetch(`${process.env.API_BASE_URL}/products`)
	.then(response => {
		return response.json()
	}).then(data => {
		return data;
	});

	yield this.render('products', {
		title: 'Your page title',
		react: ReactDOM.renderToString(<ExampleContainer data={products} />)
	});
};

//API

module.exports.getAll = function * getAll(next) {
	this.body = JSON.stringify(API.getAllProducts());
};

module.exports.getById = function * getById(next) {
	const id = parseInt(this.params.id, 10),
				product = API.getProductsById(id);

	if(product === undefined)
		this.throw(404, `line with id ${id} was not found`);

	this.body = JSON.stringify(product);
};