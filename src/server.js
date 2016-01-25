'use strict';

require("babel-polyfill");
require("babel-register")({
	presets: [
    "es2015",
    "react"
  ],
	plugins: [
		"transform-class-properties"
	]
});

const koa = require('koa'),
			router  = require('./routes'),
			serve = require('koa-static'),
			koaBody = require('koa-body')(),
			nunjucksRender = require('koa-nunjucks-render');

const config = require('./config');

///////////////////////////////////

const app = koa();
app.poweredBy = false;

///////////////////////////////////

const nunjucksOptions = {
	ext: '.html',
	noCache: config.NODE_ENV === 'development',
	throwOnUndefined: true,
};

// Middleware

app
	.use(require('koa-helmet')())
	.use(require('koa-compress')())
	.use(serve('public'))
	.use(serve('build'))
	.use(nunjucksRender('views', nunjucksOptions));

///////////////////////////////////

app
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(config.PORT, function() {
	console.log('Listening on port', config.PORT);
});