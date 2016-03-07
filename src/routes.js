import router  from 'koa-router';
import AppRouter from './routers/AppRouter';
import ProductsRouter from './routers/ProductsRouter';

const Router = router();

Router.use(AppRouter.routes());
Router.use(ProductsRouter.routes());

module.exports = Router;