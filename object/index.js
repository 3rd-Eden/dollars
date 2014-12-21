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

//
// Expose the methods.
//
module.exports = dollars;
