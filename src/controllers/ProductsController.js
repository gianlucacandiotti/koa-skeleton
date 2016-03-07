import APIModule from '../js/api/API';
const API = APIModule();

module.exports.getAll = function * dumpAll(next) {
	this.body = JSON.stringify(API.getAllProducts());
};

module.exports.getById = function * dumpById(next) {
	const id = parseInt(this.params.id, 10),
				product = API.getProductsById(id);

	if(product === undefined)
		this.throw(404, `line with id ${id} was not found`);

	this.body = JSON.stringify(product);
};