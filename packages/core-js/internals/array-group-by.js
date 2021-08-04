var bind = require('../internals/function-bind-context');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var toPropertyKey = require('../internals/to-property-key');
var arrayFromConstructorAndList = require('../internals/array-from-constructor-and-list');

var objectCreate = Object.create;
var push = [].push;

module.exports = function ($this, callbackfn, that, specificConstructor) {
  var O = toObject($this);
  var boundFunction = bind(callbackfn, that, 3);
  var target = objectCreate(null);
  var length = toLength(O.length);
  var index = 0;
  var Constructor, key, value;
  for (;length > index; index++) {
    value = O[index];
    key = toPropertyKey(boundFunction(value, index, O));
    // in some IE10 builds, `hasOwnProperty` returns incorrect result on integer keys
    // but since it's a `null` prototype object, we can safely use `in`
    if (key in target) push.call(target[key], value);
    else target[key] = [value];
  }
  if (specificConstructor) {
    Constructor = specificConstructor(O);
    if (Constructor !== Array) {
      for (key in target) target[key] = arrayFromConstructorAndList(Constructor, target[key]);
    }
  } return target;
};
