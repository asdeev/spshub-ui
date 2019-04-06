import chai from 'chai';
import chaiJestSnapshot from 'chai-jest-snapshot';

// eslint-disable-next-line no-undef
global.performance = window.performance;

chai.use(chaiJestSnapshot);

before(function() {
  chaiJestSnapshot.resetSnapshotRegistry();
});

beforeEach(function() {
  chaiJestSnapshot.configureUsingMochaContext(this);
});
