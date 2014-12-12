'use strict';

var object = require('./object')
  , array = require('./array');

//
// Expose the interfaces.
//
exports.object = object;
exports.shallow = {
  clone: function clone(obj) {
    return Array.isArray(obj) ? array.clone(obj) : object.clone(obj);
  }
};
