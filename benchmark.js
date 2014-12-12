describe('benchmark', function () {
  'use strict';

  var Benchmark = require('benchmark').Suite
    , dollars = require('dollars')
    , fast = require('fast.js')
    , kuler = require('kuler')
    , git = require('./');

  this.timeout(60000);

  /**
   * Poor man's log indention. It might look stupid but if it works, it ain't
   * stupid.
   */
  function log(line) {
    console.log('       '+ line);
  }

  describe('#object', function () {
    it('.clone', function (next) {
      var benchmark = new Benchmark()
        , data = require('./package.json');

      benchmark.add('dollars (git)', function run() {
        git.object.clone(data);
      }).add('dollars', function () {
        dollars.object.clone(data);
      }).add('fast.js', function run() {
        fast.object.clone(data);
      });

      benchmark.on('cycle', function cycle(event) {
        log(String(event.target));
      }).on('complete', function complete() {
        log('fastest is ' + kuler(this.filter('fastest').pluck('name'), 'lime'));
        next();
      }).on('error', function error(err) {
        next(err);
      });

      benchmark.run({ 'async': true });
    });
  });

  describe('#array', function () {
    it('.clone', function (next) {
      var benchmark = new Benchmark()
        , data = require('./package.json').keywords;

      data = data.concat(data.slice(0));

      benchmark.add('dollars (git)', function run() {
        git.array.clone(data);
      }).add('dollars', function () {
        dollars.array.clone(data);
      }).add('fast.js', function run() {
        fast.array.clone(data);
      });

      benchmark.on('cycle', function cycle(event) {
        log(String(event.target));
      }).on('complete', function complete() {
        log('fastest is ' + kuler(this.filter('fastest').pluck('name'), 'lime'));
        next();
      }).on('error', function error(err) {
        next(err);
      });

      benchmark.run({ 'async': true });
    });
  });
});
