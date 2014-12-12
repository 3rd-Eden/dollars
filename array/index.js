'use strict';

function clone(arr) {
  for (var i = 0, l = arr.length, result = new Array(l); i < l; i++) {
    result[i] = arr[i];
  }

  return result;
}
