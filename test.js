describe('dollars', function () {
  'use strict';

  var dollars = require('./')
    , assume = require('assume');

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
