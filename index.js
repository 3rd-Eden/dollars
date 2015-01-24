'use strict';

var object = require('./object')
  , array = require('./array')
  , fn = require('./function');

//
// Property access on an object that is created by Object.create(null) is much
// faster than a regular object.
//
var dollars = Object.create(null);

//
//  Expose the API's for each type. With their full name as well as short name.
//
dollars.object    = dollars.obj = object;
dollars.array     = dollars.arr = array;
dollars.function  = dollars.fn  = fn;

//
// Create shorthand methods for methods that have API compatibility for Array's
// and Object's so we can provide one single seamless API.
//
array.each(['clone', 'each', 'breaks', 'concat'], function each(key) {
  dollars[key] = array[key].length === 2 ? function proxy2args(obj, fn) {
    return Array.isArray(obj)
    ? array[key](obj, fn)
    : object[key](obj, fn);
  } : function proxy1arg(obj) {
    return Array.isArray(obj)
    ? array[key](obj)
    : object[key](obj);
  };
});

//
// Now that the shorthand methods are added we can add shorthand methods for all
// other API's. These methods should not override the existing shorthands.
//
array.each([object, array, fn], function each(type) {
  object.each(type, function each(fn, method) {
    if (method in dollars) return;

    dollars[method] = fn;
  });
});

//
// Expose the optimized dollars object.
//
module.exports = dollars;
