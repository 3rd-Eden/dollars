# Dollars

**write less, do more, save dollars** - This is _the_ utility library for
Node.js and often praised the jQuery of Node.js (just kidding, I made that up).
It contains all the bat-shit-crazy utilities that I ship and create between
different projects.

## Installation

This module is only meant for Node.js usage or high-end browsers. It's released
in the public npm registry and can be installed using:

```
npm install --save dollars
```

## Usage

In all examples we assume that the library is required as followed:

```js
'use strict';

var dollars = require('dollars');
```

Or if you require more swag in your application you can require it as following:

```js
var $$$$$$$$$$$$$$$$$$$ = require('dollars');
```

## Table of Contents

- [Object](#object)
  - [clone](#dollarsobjectclone)
  - [map](#dollarsobjectmap)
  - [each](#dollarsobjecteach)
  - [breaks](#dollarsobjectbreaks)
  - [concat](#dollarsobjectconcat)
- [Array](#array)
- [Function](#function)

### Object

The `dollars.object` contains all object specific utility methods. We do try to
provide API parity with the [Array](#array) methods. The object is also aliased
as `dollars.obj` for shorter notation.

The following methods are available:

#### dollars.object.clone

Create a shallow clone of the given object. So only the first level properties
are copied on to a new clean object.

```js
var obj = dollars.object.clone({ foo: 'bar' });
```

#### dollars.object.map

Map the values of the object in to something completely different. It returns a
new object with new values. This method requires 2 arguments:

1. `Object` Object who's values need to be mapped.
2. `Function` Mapping function which is called for every property in the object.
   The function receives the value as first argument and the key as second
   argument.

```js
var obj = dollars.object.map({ foo: 'bar' }, function (value, key) {
  return value.toUpperCase();
});

// Results in: { foo: 'BAR' }
```

#### dollars.object.each

Execute the supplied callback for each key/value in the given object. The method
requires 2 arguments:

1. `Object` Object who's values need to be mapped.
2. `Function` Iteration function which is called for every property in the object.
   The function receives the value as first argument and the key as second
   argument.

```js
dollars.object.each({ foo: 'bar', bar: 'foo' }, function each(value, key) {
  console.log(key +':'+ value);
});

// Results in: foo:bar, bar:foo
```

#### dollars.object.breaks

A breakable iteration variant of `dollars.object.each`. In order to break out the
iteration you need to `return false`. Just like the each method we accept the
following arguments:

1. `Object` Object who's values need to be mapped.
2. `Function` Iteration function which is called for every property in the object.
   The function receives the value as first argument and the key as second
   argument.

```js
dollars.object.breaks({ foo: 'bar', bar: 'foo' }, function (value, key) {
  console.log(key +':'+ value);
  return false;
});

// Results in: foo:bar -- As the iteration is broken after the first.
```

#### dollars.object.concat

Concatenate multiple objects to one single uber object. All supplied objects
will be merged in to the first supplied object. There is no limit to the amount
of objects that can be merged in to one.

```js
dollars.object.concat({ foo: 'bar' }, { bar: 'foo' }, { hello: 'world' });A

// Results in: { foo: 'bar', bar: 'foo', hello: 'world' }
```

### Array

### Function

## License

MIT
