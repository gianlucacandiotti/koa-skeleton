import router  from 'koa-router';
import body from 'koa-body';

const Router = router();
const Body = body();

Router.get('/', function *(next) {
	yield this.render('home', {
		title: 'Your page title'
	});
});

module.exports = Router;