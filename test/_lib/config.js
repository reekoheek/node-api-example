module.exports = function (data = {}) {
  let config = require('../../config');
  let connection = Object.assign({}, config.connections[0], {
    adapter: require('node-norm/adapters/memory'),
    data,
  });

  return Object.assign({}, config, {
    connections: [ connection ],
  });
};
