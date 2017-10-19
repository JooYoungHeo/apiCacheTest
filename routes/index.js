const koa = require('koa');
const mount = require('koa-mount');
const dataInfo = require('./dataInfo');

const Koa = new koa();

Koa.use(mount('/datas', dataInfo));

module.exports = Koa;
