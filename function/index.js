'use strict';

var dollars = Object.create(null);

/**
 * Simple placeholder function where you can default to if no callback or fn is
 * supplied.
 *
 * @type {Function}
 * @public
 */
dollars.nope = function nope() {};

/**
 * Return a function which is optimized to call with a supplied with a given
 * amount of arguments.
 *
 * @param {Number} amount The amount of arguments we should optimize for.
 * @param {Boolean} context Does the supplied function require context.
 * @returns {Function}
 * @api public
 */
dollars.applies = function applies(amount, context) {
  var body = [ 'return function applies() { "use strict"; switch (arguments.length) {' ]
    , i = 0
    , args
    , j;

  for (; i < amount; i++) {
    for (j = 0, args = new Array(i); j < i; j++) {
      args[j] = 'arguments['+ j +']';
    }

    body.push(
      'case '+ i +': return fn',
      context ? '.call(context,' : '(',
      args.join(','),
      ');'
    );
  }

  body.push(
        'default: return fn.apply(',
        context ? 'context' : 'undefined',
      ', arguments);',
      '}',
    '};'
  );

  return context
    ? new Function('fn', context, body.join(''))
    : new Function('fn', body.join(''));
};

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
