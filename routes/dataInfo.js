const koa = require('koa');
const router = require('koa-router');

const Koa = new koa();
const Router = new router();

Router.get('/', async (ctx, next) => {
  ctx.body = [1,2,3];
});

Koa.use(Router.routes());

module.exports = Koa;