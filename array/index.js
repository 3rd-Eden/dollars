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

/**
 * Map the values of the array to something else.
 *
 * @param {Array} arr Array who's results we should transform.
 * @returns {Array} Mapped array.
 * @api public
 */
function map(arr, fn) {
  for (var i = 0, l = arr.length, result = new Array(l); i < l; i++) {
    result[i] = fn(arr[i], i, arr);
  }

  return result;
}

//
// Expose the methods.
//
exports.clone = clone;
exports.map = map;
