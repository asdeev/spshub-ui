# Product Page

Product Page is a [Vue.js](https://vuejs.org/) application developed to be an online store.

## Installation

Use npm bundled with [Node.js](https://nodejs.org/en/) to install product-page dependencies once downloaded.

```bash
npm install
```

## Usage

To build out a development environment version of the application run the following command.

```bash
npm run build-dev
```

To build out a production environment version of the application run the following command.

```bash
npm run build-prod
```

## Formatting & Linting

Formatting is handled through [Prettier](https://prettier.io/) while linting is handled through [ESLint](https://eslint.org/) and [stylelint](https://stylelint.io/).

Formatting and linting are necessary so the code is up to standards. Run the following to format and lint both code and style.

```bash
npm run fix-code
npm run fix-style
```

## Unit Testing

Unit testing is handled through [Mocha.js](https://mochajs.org/) with [Chai.js](https://www.chaijs.com/) and [Sinon.js](https://sinonjs.org/) as testing dependencies.

Mocha unit test can be run immediately on all of the spec files.

```bash
npm run test:unit
```

The files can be unit tested in watch mode as follows.

```bash
npm run test:unit:watch
```

The tests use snapshots. If a component template is modified, the snapshot testing will fail. Run the following to update the snapshot after verifying the changes were intentional.

```bash
npm run test:unit:update
```

## E2E Testing

E2E testing is handled with [Cypress](https://www.cypress.io/). Run the following to launch Cypress and run the tests.

```bash
npm run test:e2e
```

## Deployment

TODO

## Authors

Zaid Bhura - [Asdeev](https://github.com/asdeev)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/asdeev/product-page/blob/master/LICENSE.md) file for details.
