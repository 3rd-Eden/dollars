'use strict';

var dollars = Object.create(null):

/**
 * Simple placeholder function where you can default to if no callback or fn is
 * supplied.
 *
 * @type {Function}
 * @public
 */
dollars.nope = function nope() { };

/**
 * Helper function to prevent de-optimization of your code by executing the
 * try/catch statement in a dedicated function.
 *
 * @param {Function} fn Function that can probably throw.
 * @returns {Mixed} An Error or the result.
 * @api public
 */
dollars.try = function trying(fn) {
  try { return fn(); }
  catch (e) {
    if ('string' === typeof e) return new Error(e);
    return e;
  }
};

/**
 * Helper function to prevent de-optimization of your code by executing the
 * try/catch statement in a dedicated function. The error will be passed in as
 * first argument of the supplied completion callback.
 *
 * @param {Function} fn Function that probably throws an exception.
 * @param {Function} cb Error first completion callback.
 * @api public
 */
dollars.catch = function catching(fn, cb) {
  var data;

  try { data = fn(); }
  catch (e) {
    var err = e;

    if ('string' === typeof err) err = new Error(err);
    return cb(err);
  }

  cb(undefined, data);
};

//
// Expose the methods.
//
module.exports = dollars;
