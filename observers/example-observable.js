class ExampleObservable {
  async insert ({ query }, next) {
    await next();
  }

  async update ({ query }, next) {
    await next();
  }

  async delete ({ query }, next) {
    await next();
  }
}

module.exports = ExampleObservable;
