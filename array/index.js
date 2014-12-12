'use strict';

/**
 * Clone a given array.
 *
 * @param {Array} arr Array which we need to clone.
 * @returns {Array}
 * @api public
 */
function clone(arr) {
  for (var i = 0, l = arr.length, result = new Array(l); i < l; i++) {
    result[i] = arr[i];
  }

  return result;
}

//
// Expose the methods.
//
exports.clone = clone;
