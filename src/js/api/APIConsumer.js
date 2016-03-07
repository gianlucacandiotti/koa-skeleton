require('es6-promise').polyfill();
import 'whatwg-fetch';

export const getAllProducts = () => {
	return fetch(`/api/products`).then(response => response.json());
}

export const getProductsById = id => {
	return fetch(`/api/products/${id}`).then(response => response.json());
}