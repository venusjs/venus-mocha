var Promise = require('bluebird');
var Mocha = require('mocha');
var Reporter = require('./Reporter');

module.exports = Runner;

/**
 * Run a test file (one or more suites)
 * @constructor
 */
function Runner() {}

/**
 * Run a test
 */
Runner.prototype.run = function (testPath) {
  // setup global context
  global.__venus__ = {
    isServer: true
  };

  return new Promise(function (resolve) {
    var mocha = new Mocha({
      ui: 'bdd',
      reporter: Reporter.bind(null, function (suite) {
        resolve(suite);
      })
    });

    mocha.addFile(testPath);
    mocha.run();
  });
};
