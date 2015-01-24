describe('dollars', function () {
  'use strict';

  var dollars = require('./')
    , assume = require('assume');

  describe('.clone', function () {
    it('clones an array', function () {
      var data = ['foo', ['bar']]
        , clone = dollars.clone(data);

      assume(clone).does.not.equal(data);
      assume(clone).deep.equals(data);
    });

    it('clones an object', function () {
      var data = { foo: 'boo', bar: { foo: 'bar' }}
        , clone = dollars.clone(data);

      assume(clone).does.not.equal(data);
      assume(clone).deep.equals(data);
    });
  });

  describe('.object', function () {
    describe('.clone', function () {
      var obj = { foo: 'bar', bar: undefined };

      it('returns a new object', function () {
        var o = dollars.object.clone(obj);

        assume(o !== obj).is.true();
        assume(o).contains('foo');
        assume(o).contains('bar');
      });
    });

    describe('.each', function () {
      it('iterates the values', function (next) {
        next = assume.plan(4, next);

        dollars.object.each({ foo: 1, far: 1}, function (value, key) {
          assume(value).equals(1);
          assume(key.charAt(0)).equals('f');
        });

        next();
      });
    });

    describe('.breaks', function () {
      it('can break the iteration by returning true', function (next) {
        next = assume.plan(1, next);

        dollars.object.breaks({ foo: 'bar', bar: 'bar' }, function (value, key) {
          assume(value).equals('bar');

          return true;
        });

        next();
      });
    });

    describe('.map', function () {
      it('returns a new modified object', function () {
        var res = dollars.object.map({ foo: 'bar', bar: 'baz' }, function (value, key) {
          return value.toUpperCase();
        });

        assume(res.foo).equals('BAR');
        assume(res.bar).equals('BAZ');
      });
    });

    describe('.concat', function () {
      it('merges objects', function () {
        var res = dollars.object.concat({}, { foo: 'bar' }, { bar: 'foo' });

        assume(res).has.length(2);
        assume(res.foo).equals('bar');
        assume(res.bar).equals('foo');
      });

      it('can override values', function () {
        var res = dollars.object.concat({ foo: 'bar' }, { foo: 'pez' });

        assume(res).has.length(1);
        assume(res.foo).equals('pez');
      });
    });
  });
});
