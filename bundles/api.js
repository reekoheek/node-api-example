const Bundle = require('bono');
const NormBundle = require('bono-norm/bundle');

module.exports = class Api extends Bundle {
  constructor ({ manager, secret }) {
    super();

    this.manager = manager;

    this.use(require('kcors')());
    this.use(require('bono/middlewares/json')());
    this.use(require('koa-jwt')({ secret }));

    this.bundle('/example', new NormBundle({ schema: 'example' }));

    this.get('/', this.index.bind(this));
  }

  index (ctx) {
    let { name, version } = require('../package.json');
    return { name, version };
  }
};
