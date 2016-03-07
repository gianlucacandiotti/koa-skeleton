import R from 'ramda';

export default () => {
	const products_data = [{
		'id': 1,
		'title': 'Apples'
	},{
		'id': 2,
		'title': 'Pears'
	},{
		'id': 3,
		'title': 'Strawberries'
	}];

	return {
		getAllProducts: () => {
			return products_data;
		},
		getProductsById: id => {
			return R.find(R.propEq('id', id), products_data);
		}
	}
}