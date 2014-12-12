'use strict';

/**
 * Clone a given object.
 *
 * @param {Object} obj Object which we need to clone.
 * @returns {Object}
 * @api public
 */
function clone(obj) {
  var result = Object.create(null)
    , keys = Object.keys(obj)
    , length = keys.length
    , i = 0;

  for (; i < length; i++) {
    result[keys[i]] = obj[keys[i]];
  }

  return result;
}

/**
 * Map the values of the object to something else.
 *
 * @param {Array} arr Array who's results we should transform.
 * @returns {Array} Mapped array.
 * @api public
 */
function map(obj, fn) {
  var result = Object.create(null)
    , keys = Object.keys(obj)
    , length = keys.length
    , i = 0;

  for (; i < length; i++) {
    result[keys[i]] = fn(obj[keys[i]], keys[i], obj);
  }

  return result;
}

//
// Expose the methods.
//
exports.clone = clone;
exports.map = map;
