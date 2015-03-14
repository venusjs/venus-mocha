var Runner = v.lib('Runner');

describe('Runner', function () {
  var summary;

  before(function (done) {
    new Runner()
      .run(v.path('fixtures', 'specs', 'runner.simple.spec.js'))
      .then(function (suite) {
        summary = suite.summary;
        done();
      })
      .then(null, done);
  });

  it('should report total test count', function () {
    v.assert.equal(summary.count, 3);
  });

  it('should report total test pass count', function () {
    v.assert.equal(summary.passCount, 2);
  });

  it('should report total test fail count', function () {
    v.assert.equal(summary.failCount, 1);
  });

  it('should report flattened list of suites and tests', function () {
    v.assert.equal(summary.results.length, 6);
  });
});
