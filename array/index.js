'use strict';

var dollars = Object.create(null);

/**
 * Clone a given array.
 *
 * @param {Array} arr Array which we need to clone.
 * @returns {Array}
 * @api public
 */
dollars.clone = function clone(arr) {
  for (var i = 0, l = arr.length, result = new Array(l); i < l; i++) {
    result[i] = arr[i];
  }

  return result;
};

/**
 * Map the values of the array to something else.
 *
 * @param {Array} arr Array who's results we should transform.
 * @returns {Array} Mapped array.
 * @api public
 */
dollars.map = function map(arr, fn) {
  for (var i = 0, l = arr.length, result = new Array(l); i < l; i++) {
    result[i] = fn(arr[i], i, arr);
  }

  return result;
};

/**
 * Iterate over the array and execute the supplied callback for each value.
 *
 * @param {Array} arr Array to iterate over.
 * @param {Function} fn Callback to execute for every value.
 * @api public
 */
dollars.each = function each(arr, fn) {
  for (var i = 0, l = arr.length; i < l; i++) {
    fn(arr[i], i);
  }
};

//
// Expose the methods.
//
module.exports = dollars;
