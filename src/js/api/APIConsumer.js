import es6_promise from ('es6-promise');
es6_promise.polyfill();
import 'whatwg-fetch';

export const getAllProducts = () => {
	return fetch(`/api/products`).then(response => response.json());
}

export const getProductsById = id => {
	return fetch(`/api/products/${id}`).then(response => response.json());
}