module.exports = VenusMocha;

/**
 * @constructor
 * @param {Venus} venus Context object
 */
function VenusMocha(venus) {
  this.venus  = venus;
  this.config = venus.config;
}

/**
 * @property name
 */
VenusMocha.prototype.name = 'venus-mocha';

/**
 * Initialize
 */
VenusMocha.prototype.init = function () {
};

/**
 * Attach
 */
VenusMocha.prototype.attach = function () {
};


/**
 * @method onStart
 */
VenusMocha.prototype.run = function () {
  // console.log(this.store);
  // Promise.all(this.tests.map(function (test) {
    // return test.load();
  // })).then(function () {
    // this.info('init venus unit, running tests:', this.tests);
  // }.bind(this));
};
