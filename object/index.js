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

exports.clone = clone;
