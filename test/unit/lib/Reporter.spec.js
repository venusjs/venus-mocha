var Reporter = v.lib('Reporter');

describe('Reporter', function () {
  describe('#summary', function () {
    var runner, done, reporter, summary;

    before(function () {
      runner   = v.mock('mochaRunner')();
      done     = v.spy();
      reporter = new Reporter(done, runner);
      summary  = reporter.summary({ suites: [] });
    });

    it('default count should be 0', function () {
      v.assert.equal(summary.count, 0);
    });

    it('default passCount should be 0', function () {
      v.assert.equal(summary.passCount, 0);
    });

    it('default failCount should be 0', function () {
      v.assert.equal(summary.failCount, 0);
    });

    it('default flattened result list should be empty', function () {
      v.assert.equal(summary.results.length, 0);
    });
  });
});
