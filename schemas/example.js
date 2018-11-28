const NString = require('node-norm/schemas/nstring');
const Actorable = require('node-norm/observers/actorable');
const Timestampable = require('node-norm/observers/timestampable');
const ExampleObservable = require('../observers/example-observable');

module.exports = {
  name: 'example',
  fields: [
    new NString('code').filter('required', 'unique'),
    new NString('name').filter('required'),
  ],
  observers: [
    new Actorable(),
    new Timestampable(),
    new ExampleObservable(),
  ],
};
