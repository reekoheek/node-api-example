# Developer Guide

This document describes how to set up your development environment to build and
test.

- [Prerequisite Softwares](#prerequisite-softwares)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Useful Commands](#useful-commands)

See the [contribution guidelines](CONTRIBUTING.md)
if you'd like to contribute to ng-bootstrap.

## Prerequisite Softwares

Before you can build and test, you must install and configure the following
products on your development machine:

- [Git](http://git-scm.com) (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)) to access source code repository.

- [Docker](https://www.docker.com/) to run server as container.

- [Docker Compose](https://docs.docker.com/compose/) to orchestrate containers.

- [Node.js](https://nodejs.org), (version `>=8.9.0`) which is used to run
  servers, tests, and generate distributable files. Depending on your system, you can install Node either from source or as a pre-packaged bundle, or by
  [NVM](https://github.com/creationix/nvm).

- [Mocha](https://mochajs.org/) to run our tests. You must install Mocha
  globally.

```sh
npm i mocha -g
```

- [Eslint](https://eslint.org/) to run code analysis. You must install Eslint
  and its dependencies globally.

```sh
npm i eslint eslint-config-standard eslint-config-xinix eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard babel-eslint -g
```

- [Nodemon](https://nodemon.io/) to run server on development. You must
  install Nodemon globally.

```sh
npm i nodemon -g
```

## Project Structure

- `bin` Directory to store binary or executable files.
- `bundles` Directory to store application bundles.
- `docs` Directory to store documentation.
- `migrations` Directory to store migration rules.
- `observers` Directory to store schema observers.
- `schemas` Directory to store schemas.
- `test` Directory to store test specifications.
- `config.js` Configuration files.

## Environment Variables

- `PORT`
- `SECRET`
- `NORM_ADAPTER`
- `NORM_FILE_DIR`
- `NORM_MYSQL_HOST`
- `NORM_MYSQL_USER`
- `NORM_MYSQL_PASSWORD`
- `NORM_MYSQL_DATABASE`

## Useful Commands

The most useful commands are:

- NPM commands:

```sh
npm i # install dependencies

npm run lint # run code analysis (lint)

npm test # run test once
npm test -- -w # run test wait and listen to file changes

npm run migrate -- up # run migration up
npm run migrate -- down # run migration down

npm run # show all available npm scripts
```

- Docker commands:

```sh
docker-compose up -d # deploy to production

```
