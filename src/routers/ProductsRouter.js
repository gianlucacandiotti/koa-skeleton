import router  from 'koa-router';
import body from 'koa-body';

import ProductsController from '../controllers/ProductsController';

const Router = router();
const Body = body();

Router.get('/products', ProductsController.showProductsOverview);

//API

if (process.env.NODE_ENV === 'development') {
	Router.get('/api/products', Body, ProductsController.getAll);

	Router.get('/api/products/:id', Body, ProductsController.getById);
}

module.exports = Router;