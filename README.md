# Somali Professionals & Students Hub (SPSHub) [![CircleCI](https://circleci.com/gh/asdeev/spshub-ui/tree/master.svg?style=svg&circle-token=283eca03c1740c3cff6774a1a9e334020592b34a)](https://circleci.com/gh/asdeev/spshub-ui/tree/master)

SPSHub is an application developed for Somali professionals and students to find mentorship. The application has been developed with [Vue.js](https://vuejs.org/).

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

```bash
docker build -t spshub/app
docker run -d -p 8080:80 --rm --name spshub-client

# Expose the IP address to connect
docker-machine ip
```

## Authors

Zaid Bhura - [Asdeev](https://github.com/asdeev)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/asdeev/spshub/blob/master/LICENSE.md) file for details.
