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

/**
 * A breakable each. Iterate over the array and execute the supplied callback
 * for each value. If the callback returns `false` we will stop the iteration.
 *
 * @param {Array} arr Array to iterate over.
 * @param {Function} fn Callback to execute for every value.
 * @api public
 */
dollars.breaks = function breaks(arr, fn) {
  for (var i = 0, l = arr.length; i < l; i++) {
    if (false === fn(arr[i], i)) break;
  }
};

/**
 * Merge multiple arrays in to one single array.
 *
 * @param {Array} arr Array where all other arrays are merged in to.
 * @returns {Object} The supplied array.
 * @api public
 */
dollars.concat = function merge(arr) {
  var l = arguments.length
    , args = new Array(l - 1)
    , i = 1
    , j;

  for (; i < l; i++) {
    args[i - 1] = arguments[i];
  }

  Array.prototype.push.apply(arr, args);
  return arr;
};

//
// Expose the methods.
//
module.exports = dollars;
