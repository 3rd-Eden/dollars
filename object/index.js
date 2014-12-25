'use strict';

var dollars = Object.create(null);

/**
 * Clone a given object.
 *
 * @param {Object} obj Object which we need to clone.
 * @returns {Object}
 * @api public
 */
dollars.clone = function clone(obj) {
  var result = Object.create(null)
    , keys = Object.keys(obj)
    , length = keys.length
    , i = 0;

  for (; i < length; i++) {
    result[keys[i]] = obj[keys[i]];
  }

  return result;
};

/**
 * Map the values of the object to something else.
 *
 * @param {Object} obj Object who's results we should transform.
 * @param {Function} fn Callback to execute for every key.
 * @returns {Object} The transformed object.
 * @api public
 */
dollars.map = function map(obj, fn) {
  var result = Object.create(null)
    , keys = Object.keys(obj)
    , length = keys.length
    , i = 0;

  for (; i < length; i++) {
    result[keys[i]] = fn(obj[keys[i]], keys[i]);
  }

  return result;
};

/**
 * Iterate over the keys of an object an execute the supplied callback.
 *
 * @param {Object} obj Object to iterate over.
 * @param {Function} fn Callback to execute for every key.
 * @api public
 */
dollars.each = function each(obj, fn) {
  var keys = Object.keys(obj)
    , length = keys.length
    , i = 0;

  for (; i < length; i++) {
    fn(obj[keys[i]], keys[i]);
  }
};

/**
 * A breakable each. It iterates over the keys of an object and calls the
 * supplied callback. If the callback returns `true` we will stop the
 * iteration.
 *
 * @param {Object} obj Object to iterate over.
 * @param {Function} fn Callback to execute for every key.
 * @api public
 */
dollars.breaks = function breaks(obj, fn) {
  var keys = Object.keys(obj)
    , length = keys.length
    , i = 0;

  for (; i < length; i++) {
    if (true === fn(obj[keys[i]], keys[i])) break;
  }
};

/**
 * Merge multiple objects in to one single "uber" object.
 *
 * @param {Object} obj Object were all objects are merged in to.
 * @returns {Object} The supplied object.
 * @api public
 */
dollars.concat = function concat(obj) {
  var l = arguments.length
    , args = new Array(l - 1)
    , i = 1;

  for (; i < l; i++) {
    args[i - 1] = arguments[i];
  }

  l = args.length;
  i = 0;

  for (; i < l; i++) {
    for (var j = 0, keys = Object.keys(args[i]), len = keys.length; j < len; j++) {
      obj[keys[j]] = args[i][keys[j]];
    }
  }

  return obj;
};

//
// Expose the methods.
//
module.exports = dollars;
