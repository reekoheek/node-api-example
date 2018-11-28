const Bundle = require('bono');
const Api = require('./bundles/api');
const { Manager } = require('node-norm');

class App extends Bundle {
  constructor ({ connections, secret }) {
    super();

    let manager = new Manager({ connections });

    this.bundle('/api', new Api({ manager, secret }));

    this.get('/', this.index.bind(this));
  }

  index (ctx) {
    let { name, version } = require('./package.json');
    ctx.body = { name, version };
  }
}

module.exports = App;
