/* eslint-disable import/no-dynamic-require, node/global-require -- required */
import { ok } from 'assert';
import { join } from 'path';
const compat = require('@core-js/compat/data');
let tested = 0;
let PATH;

function load(...path) {
  tested++;
  return require(join(PATH, ...path));
}

for (PATH of ['core-js-pure/commonjs', 'core-js/commonjs']) {
  for (const NS of ['es', 'stable', 'actual', 'full']) {
    let O;
    ok(load(NS, 'global-this').Math === Math);
    ok(new (load(NS, 'aggregate-error'))([42]).errors[0] === 42);
    ok(load(NS, 'object/assign')({ q: 1 }, { w: 2 }).w === 2);
    ok(load(NS, 'object/create')(Array.prototype) instanceof Array);
    ok(load(NS, 'object/define-property')({}, 'a', { value: 42 }).a === 42);
    ok(load(NS, 'object/define-properties')({}, { a: { value: 42 } }).a === 42);
    ok(load(NS, 'object/freeze')({}));
    ok(load(NS, 'object/get-own-property-descriptor')({ q: 1 }, 'q').enumerable);
    ok(load(NS, 'object/get-own-property-names')({ q: 42 })[0] === 'q');
    ok(load(NS, 'object/get-own-property-symbols')({ [Symbol()]: 42 }).length === 1);
    ok(load(NS, 'object/get-prototype-of')([]) === Array.prototype);
    ok(load(NS, 'object/is')(NaN, NaN));
    ok(load(NS, 'object/is-extensible')({}));
    ok(!load(NS, 'object/is-frozen')({}));
    ok(!load(NS, 'object/is-sealed')({}));
    ok(load(NS, 'object/keys')({ q: 0 })[0] === 'q');
    ok(load(NS, 'object/prevent-extensions')({}));
    ok(load(NS, 'object/seal')({}));
    ok(load(NS, 'object/set-prototype-of')({}, []) instanceof Array);
    ok(load(NS, 'object/to-string')([]) === '[object Array]');
    ok(load(NS, 'object/entries')({ q: 2 })[0][0] === 'q');
    ok(load(NS, 'object/from-entries')([['a', 42]]).a === 42);
    ok(load(NS, 'object/values')({ q: 2 })[0] === 2);
    ok(load(NS, 'object/get-own-property-descriptors')({ q: 1 }).q.enumerable);
    ok(typeof load(NS, 'object/define-getter') === 'function');
    ok(typeof load(NS, 'object/define-setter') === 'function');
    ok(typeof load(NS, 'object/lookup-getter') === 'function');
    ok(typeof load(NS, 'object/lookup-setter') === 'function');
    ok('values' in load(NS, 'object'));
    load(NS, 'function/name');
    load(NS, 'function/has-instance');
    load(NS, 'function');
    ok(Array.isArray(load(NS, 'array/from')('qwe')));
    ok(Array.isArray(load(NS, 'array/of')('q', 'w', 'e')));
    ok(load(NS, 'array/join')('qwe', 1) === 'q1w1e');
    ok(load(NS, 'array/slice')('qwe', 1)[1] === 'e');
    ok(load(NS, 'array/sort')([1, 3, 2])[1] === 2);
    ok(typeof load(NS, 'array/for-each') === 'function');
    ok(typeof load(NS, 'array/map') === 'function');
    ok(typeof load(NS, 'array/filter') === 'function');
    ok(typeof load(NS, 'array/flat') === 'function');
    ok(typeof load(NS, 'array/flat-map') === 'function');
    ok(typeof load(NS, 'array/some') === 'function');
    ok(typeof load(NS, 'array/every') === 'function');
    ok(typeof load(NS, 'array/reduce') === 'function');
    ok(typeof load(NS, 'array/reduce-right') === 'function');
    ok(typeof load(NS, 'array/reverse') === 'function');
    ok(typeof load(NS, 'array/index-of') === 'function');
    ok(typeof load(NS, 'array/last-index-of') === 'function');
    ok(load(NS, 'array/concat')([1, 2, 3], [4, 5, 6]).length === 6);
    ok(load(NS, 'array/copy-within')([1, 2, 3, 4, 5], 0, 3)[0] === 4);
    ok('next' in load(NS, 'array/entries')([]));
    ok(load(NS, 'array/fill')(Array(5), 2)[0] === 2);
    ok(load(NS, 'array/find')([2, 3, 4], it => it % 2) === 3);
    ok(load(NS, 'array/find-index')([2, 3, 4], it => it % 2) === 1);
    ok('next' in load(NS, 'array/keys')([]));
    ok('next' in load(NS, 'array/values')([]));
    ok(load(NS, 'array/includes')([1, 2, 3], 2));
    ok('next' in load(NS, 'array/iterator')([]));
    ok(load(NS, 'array/virtual/join').call('qwe', 1) === 'q1w1e');
    ok(load(NS, 'array/virtual/slice').call('qwe', 1)[1] === 'e');
    ok(load(NS, 'array/virtual/splice').call([1, 2, 3], 1, 2)[0] === 2);
    ok(load(NS, 'array/virtual/sort').call([1, 3, 2])[1] === 2);
    ok(typeof load(NS, 'array/virtual/for-each') === 'function');
    ok(typeof load(NS, 'array/virtual/map') === 'function');
    ok(typeof load(NS, 'array/virtual/filter') === 'function');
    ok(typeof load(NS, 'array/virtual/flat') === 'function');
    ok(typeof load(NS, 'array/virtual/flat-map') === 'function');
    ok(typeof load(NS, 'array/virtual/some') === 'function');
    ok(typeof load(NS, 'array/virtual/every') === 'function');
    ok(typeof load(NS, 'array/virtual/reduce') === 'function');
    ok(typeof load(NS, 'array/virtual/reduce-right') === 'function');
    ok(typeof load(NS, 'array/virtual/reverse') === 'function');
    ok(typeof load(NS, 'array/virtual/index-of') === 'function');
    ok(typeof load(NS, 'array/virtual/last-index-of') === 'function');
    ok(load(NS, 'array/virtual/concat').call([1, 2, 3], [4, 5, 6]).length === 6);
    ok(load(NS, 'array/virtual/copy-within').call([1, 2, 3, 4, 5], 0, 3)[0] === 4);
    ok('next' in load(NS, 'array/virtual/entries').call([]));
    ok(load(NS, 'array/virtual/fill').call(Array(5), 2)[0] === 2);
    ok(load(NS, 'array/virtual/find').call([2, 3, 4], it => it % 2) === 3);
    ok(load(NS, 'array/virtual/find-index').call([2, 3, 4], it => it % 2) === 1);
    ok('next' in load(NS, 'array/virtual/keys').call([]));
    ok('next' in load(NS, 'array/virtual/values').call([]));
    ok(load(NS, 'array/virtual/includes').call([1, 2, 3], 2));
    ok('next' in load(NS, 'array/virtual/iterator').call([]));
    ok('from' in load(NS, 'array'));
    ok(load(NS, 'array/splice')([1, 2, 3], 1, 2)[0] === 2);
    ok(load(NS, 'math/acosh')(1) === 0);
    ok(Object.is(load(NS, 'math/asinh')(-0), -0));
    ok(load(NS, 'math/atanh')(1) === Infinity);
    ok(load(NS, 'math/cbrt')(-8) === -2);
    ok(load(NS, 'math/clz32')(0) === 32);
    ok(load(NS, 'math/cosh')(0) === 1);
    ok(load(NS, 'math/expm1')(-Infinity) === -1);
    ok(load(NS, 'math/fround')(0) === 0);
    ok(load(NS, 'math/hypot')(3, 4) === 5);
    ok(load(NS, 'math/imul')(2, 2) === 4);
    ok(load(NS, 'math/log10')(-0) === -Infinity);
    ok(load(NS, 'math/log1p')(-1) === -Infinity);
    ok(load(NS, 'math/log2')(1) === 0);
    ok(load(NS, 'math/sign')(-2) === -1);
    ok(Object.is(load(NS, 'math/sinh')(-0), -0));
    ok(load(NS, 'math/tanh')(Infinity) === 1);
    ok(load(NS, 'math/to-string-tag') === 'Math');
    ok(load(NS, 'math/trunc')(1.5) === 1);
    ok(load(NS, 'number/constructor')('5') === 5);
    ok(load(NS, 'number/epsilon') === 2 ** -52);
    ok(load(NS, 'number/is-finite')(42.5));
    ok(load(NS, 'number/is-integer')(42.5) === false);
    ok(load(NS, 'number/is-nan')(NaN));
    ok(load(NS, 'number/is-safe-integer')(42));
    ok(load(NS, 'number/max-safe-integer') === 0x1FFFFFFFFFFFFF);
    ok(load(NS, 'number/min-safe-integer') === -0x1FFFFFFFFFFFFF);
    ok(load(NS, 'number/parse-float')('1.5') === 1.5);
    ok(load(NS, 'number/parse-int')('2.1') === 2);
    ok(load(NS, 'number/to-fixed')(1, 1) === '1.0');
    ok(load(NS, 'number/to-precision')(1) === '1');
    ok(load(NS, 'parse-float')('1.5') === 1.5);
    ok(load(NS, 'parse-int')('2.1') === 2);
    ok(load(NS, 'number/virtual/to-fixed').call(1, 1) === '1.0');
    ok(load(NS, 'number/virtual/to-precision').call(1) === '1');
    ok('isNaN' in load(NS, 'number'));
    ok(load(NS, 'reflect/apply')((a, b) => a + b, null, [1, 2]) === 3);
    ok(load(NS, 'reflect/construct')(function () {
      return this.a = 2;
    }, []).a === 2);
    load(NS, 'reflect/define-property')(O = {}, 'a', { value: 42 });
    ok(O.a === 42);
    ok(load(NS, 'reflect/delete-property')({ q: 1 }, 'q'));
    ok(load(NS, 'reflect/get')({ q: 1 }, 'q') === 1);
    ok(load(NS, 'reflect/get-own-property-descriptor')({ q: 1 }, 'q').enumerable);
    ok(load(NS, 'reflect/get-prototype-of')([]) === Array.prototype);
    ok(load(NS, 'reflect/has')({ q: 1 }, 'q'));
    ok(load(NS, 'reflect/is-extensible')({}));
    ok(load(NS, 'reflect/own-keys')({ q: 1 })[0] === 'q');
    ok(load(NS, 'reflect/prevent-extensions')({}));
    ok(load(NS, 'reflect/set')({}, 'a', 42));
    load(NS, 'reflect/set-prototype-of')(O = {}, []);
    ok(load(NS, 'reflect/to-string-tag') === 'Reflect');
    ok(O instanceof Array);
    ok('has' in load(NS, 'reflect'));
    ok(load(NS, 'string/from-code-point')(97) === 'a');
    ok(load(NS, 'string/raw')({ raw: 'test' }, 0, 1, 2) === 't0e1s2t');
    ok(load(NS, 'string/trim')(' ab ') === 'ab');
    ok(load(NS, 'string/trim-start')(' a ') === 'a ');
    ok(load(NS, 'string/trim-end')(' a ') === ' a');
    ok(load(NS, 'string/trim-left')(' a ') === 'a ');
    ok(load(NS, 'string/trim-right')(' a ') === ' a');
    ok(load(NS, 'string/code-point-at')('a', 0) === 97);
    ok(load(NS, 'string/ends-with')('qwe', 'we'));
    ok(load(NS, 'string/includes')('qwe', 'w'));
    ok(load(NS, 'string/repeat')('q', 3) === 'qqq');
    ok(load(NS, 'string/starts-with')('qwe', 'qw'));
    ok(typeof load(NS, 'string/anchor') === 'function');
    ok(typeof load(NS, 'string/big') === 'function');
    ok(typeof load(NS, 'string/blink') === 'function');
    ok(typeof load(NS, 'string/bold') === 'function');
    ok(typeof load(NS, 'string/fixed') === 'function');
    ok(typeof load(NS, 'string/fontcolor') === 'function');
    ok(typeof load(NS, 'string/fontsize') === 'function');
    ok(typeof load(NS, 'string/italics') === 'function');
    ok(typeof load(NS, 'string/link') === 'function');
    ok(typeof load(NS, 'string/small') === 'function');
    ok(typeof load(NS, 'string/strike') === 'function');
    ok(typeof load(NS, 'string/sub') === 'function');
    ok(load(NS, 'string/substr')('12345', 1, 3) === '234');
    ok(typeof load(NS, 'string/sup') === 'function');
    ok(typeof load(NS, 'string/replace-all') === 'function');
    ok(load(NS, 'string/pad-start')('a', 3) === '  a');
    ok(load(NS, 'string/pad-end')('a', 3) === 'a  ');
    ok('next' in load(NS, 'string/iterator')('qwe'));
    ok(load(NS, 'string/virtual/code-point-at').call('a', 0) === 97);
    ok(load(NS, 'string/virtual/ends-with').call('qwe', 'we'));
    ok(load(NS, 'string/virtual/includes').call('qwe', 'w'));
    ok(typeof load(NS, 'string/virtual/match-all') === 'function');
    ok(typeof load(NS, 'string/virtual/replace-all') === 'function');
    ok(load(NS, 'string/virtual/repeat').call('q', 3) === 'qqq');
    ok(load(NS, 'string/virtual/starts-with').call('qwe', 'qw'));
    ok(load(NS, 'string/virtual/trim').call(' ab ') === 'ab');
    ok(load(NS, 'string/virtual/trim-start').call(' a ') === 'a ');
    ok(load(NS, 'string/virtual/trim-end').call(' a ') === ' a');
    ok(load(NS, 'string/virtual/trim-left').call(' a ') === 'a ');
    ok(load(NS, 'string/virtual/trim-right').call(' a ') === ' a');
    ok(typeof load(NS, 'string/virtual/anchor') === 'function');
    ok(typeof load(NS, 'string/virtual/big') === 'function');
    ok(typeof load(NS, 'string/virtual/blink') === 'function');
    ok(typeof load(NS, 'string/virtual/bold') === 'function');
    ok(typeof load(NS, 'string/virtual/fixed') === 'function');
    ok(typeof load(NS, 'string/virtual/fontcolor') === 'function');
    ok(typeof load(NS, 'string/virtual/fontsize') === 'function');
    ok(typeof load(NS, 'string/virtual/italics') === 'function');
    ok(typeof load(NS, 'string/virtual/link') === 'function');
    ok(typeof load(NS, 'string/virtual/small') === 'function');
    ok(typeof load(NS, 'string/virtual/strike') === 'function');
    ok(typeof load(NS, 'string/virtual/sub') === 'function');
    ok(load(NS, 'string/virtual/substr').call('12345', 1, 3) === '234');
    ok(typeof load(NS, 'string/virtual/sup') === 'function');
    ok(load(NS, 'string/virtual/pad-start').call('a', 3) === '  a');
    ok(load(NS, 'string/virtual/pad-end').call('a', 3) === 'a  ');
    ok('next' in load(NS, 'string/virtual/iterator').call('qwe'));
    ok('raw' in load(NS, 'string'));
    ok(String(load(NS, 'regexp/constructor')('a', 'g')) === '/a/g');
    ok(load(NS, 'regexp/to-string')(/./g) === '/./g');
    ok(load(NS, 'regexp/flags')(/./g) === 'g');
    ok(typeof load(NS, 'regexp/match') === 'function');
    ok(typeof load(NS, 'regexp/replace') === 'function');
    ok(typeof load(NS, 'regexp/search') === 'function');
    ok(typeof load(NS, 'regexp/split') === 'function');
    ok(typeof load(NS, 'regexp/dot-all') === 'function');
    ok(typeof load(NS, 'regexp/sticky') === 'function');
    ok(typeof load(NS, 'regexp/test') === 'function');
    load(NS, 'regexp');
    ok(load(NS, 'escape')('!q2ф') === '%21q2%u0444');
    ok(load(NS, 'unescape')('%21q2%u0444') === '!q2ф');
    ok(load(NS, 'json').stringify([1]) === '[1]');
    ok(load(NS, 'json/stringify')([1]) === '[1]');
    ok(load(NS, 'json/to-string-tag') === 'JSON');

    const date = new Date();
    ok(load(NS, 'date/get-year')(date) === date.getFullYear() - 1900);
    load(NS, 'date/set-year')(date, 1);
    ok(date.getFullYear() === 1901);
    ok(load(NS, 'date/to-gmt-string')(date) === date.toUTCString());
    ok(typeof load(NS, 'date/to-primitive')(new Date(), 'number') === 'number');
    ok(typeof load(NS, 'date/to-iso-string')(new Date()) === 'string');
    ok(load(NS, 'date/to-json')(Infinity) === null);
    ok(load(NS, 'date'));
    ok(typeof load(NS, 'symbol/constructor') === 'function');
    ok(Function[load(NS, 'symbol/has-instance')](it => it));
    ok(load(NS, 'symbol/is-concat-spreadable'));
    ok(load(NS, 'symbol/iterator'));
    ok(load(NS, 'symbol/match'));
    ok(load(NS, 'symbol/match-all'));
    ok(load(NS, 'symbol/replace'));
    ok(load(NS, 'symbol/search'));
    ok(load(NS, 'symbol/species'));
    ok(load(NS, 'symbol/split'));
    ok(load(NS, 'symbol/to-primitive'));
    ok(load(NS, 'symbol/to-string-tag'));
    ok(load(NS, 'symbol/unscopables'));
    ok(load(NS, 'symbol/async-iterator'));
    load(NS, 'symbol/description');
    ok(typeof load(NS, 'symbol/for') === 'function');
    ok(typeof load(NS, 'symbol/key-for') === 'function');
    ok('iterator' in load(NS, 'symbol'));
    const Map = load(NS, 'map');
    const Set = load(NS, 'set');
    const WeakMap = load(NS, 'weak-map');
    const WeakSet = load(NS, 'weak-set');
    ok(new Map([[1, 2], [3, 4]]).size === 2);
    ok(new Set([1, 2, 3, 2, 1]).size === 3);
    ok(new WeakMap([[O = {}, 42]]).get(O) === 42);
    ok(new WeakSet([O = {}]).has(O));
    const Promise = load(NS, 'promise/constructor');
    ok('then' in Promise.prototype);
    ok(load(NS, 'promise/all')([1, 2, 3]) instanceof Promise);
    ok(load(NS, 'promise/all-settled')([1, 2, 3]) instanceof Promise);
    ok(load(NS, 'promise/any')([1, 2, 3]) instanceof Promise);
    ok(load(NS, 'promise/catch')(new Promise(it => it), it => it) instanceof Promise);
    ok(load(NS, 'promise/finally')(new Promise(it => it), it => it) instanceof Promise);
    ok(load(NS, 'promise/race')([1, 2, 3]) instanceof Promise);
    ok(load(NS, 'promise/reject')(1).then(it => it, error => error) instanceof Promise);
    ok(load(NS, 'promise/resolve')(1) instanceof Promise);
    ok(load(NS, 'promise') === Promise);
    ok(load(NS, 'is-iterable')([]));
    ok(typeof load(NS, 'get-iterator-method')([]) === 'function');
    ok('next' in load(NS, 'get-iterator')([]));
    ok('Map' in load(NS));

    const instanceCodePointAt = load(NS, 'instance/code-point-at');
    ok(typeof instanceCodePointAt === 'function');
    ok(instanceCodePointAt({}) === undefined);
    ok(typeof instanceCodePointAt('') === 'function');
    ok(instanceCodePointAt('').call('a', 0) === 97);

    const instanceConcat = load(NS, 'instance/concat');
    ok(typeof instanceConcat === 'function');
    ok(instanceConcat({}) === undefined);
    ok(typeof instanceConcat([]) === 'function');
    ok(instanceConcat([]).call([1, 2, 3], [4, 5, 6]).length === 6);

    const instanceCopyWithin = load(NS, 'instance/copy-within');
    ok(typeof instanceCopyWithin === 'function');
    ok(instanceCopyWithin({}) === undefined);
    ok(typeof instanceCopyWithin([]) === 'function');
    ok(instanceCopyWithin([]).call([1, 2, 3, 4, 5], 0, 3)[0] === 4);

    const instanceEndsWith = load(NS, 'instance/ends-with');
    ok(typeof instanceEndsWith === 'function');
    ok(instanceEndsWith({}) === undefined);
    ok(typeof instanceEndsWith('') === 'function');
    ok(instanceEndsWith('').call('qwe', 'we'));

    const instanceEntries = load(NS, 'instance/entries');
    ok(typeof instanceEntries === 'function');
    ok(instanceEntries({}) === undefined);
    ok(typeof instanceEntries([]) === 'function');
    ok(instanceEntries([]).call([1, 2, 3]).next().value[1] === 1);

    const instanceEvery = load(NS, 'instance/every');
    ok(typeof instanceEvery === 'function');
    ok(instanceEvery({}) === undefined);
    ok(typeof instanceEvery([]) === 'function');
    ok(instanceEvery([]).call([1, 2, 3], it => typeof it === 'number'));

    const instanceFill = load(NS, 'instance/fill');
    ok(typeof instanceFill === 'function');
    ok(instanceFill({}) === undefined);
    ok(typeof instanceFill([]) === 'function');
    ok(instanceFill([]).call(Array(5), 42)[3] === 42);

    const instanceFilter = load(NS, 'instance/filter');
    ok(typeof instanceFilter === 'function');
    ok(instanceFilter({}) === undefined);
    ok(typeof instanceFilter([]) === 'function');
    ok(instanceFilter([]).call([1, 2, 3], it => it % 2).length === 2);

    const instanceFindIndex = load(NS, 'instance/find-index');
    ok(typeof instanceFindIndex === 'function');
    ok(instanceFindIndex({}) === undefined);
    ok(typeof instanceFindIndex([]) === 'function');
    ok(instanceFindIndex([]).call([1, 2, 3], it => it % 2) === 0);

    const instanceFind = load(NS, 'instance/find');
    ok(typeof instanceFind === 'function');
    ok(instanceFind({}) === undefined);
    ok(typeof instanceFind([]) === 'function');
    ok(instanceFind([]).call([1, 2, 3], it => it % 2) === 1);

    const instanceFlags = load(NS, 'instance/flags');
    ok(typeof instanceFlags === 'function');
    ok(instanceFlags({}) === undefined);
    ok(instanceFlags(/./g) === 'g');

    const instanceFlatMap = load(NS, 'instance/flat-map');
    ok(typeof instanceFlatMap === 'function');
    ok(instanceFlatMap({}) === undefined);
    ok(typeof instanceFlatMap([]) === 'function');
    ok(instanceFlatMap([]).call([1, 2, 3], (v, i) => [v, i]).length === 6);

    const instanceFlat = load(NS, 'instance/flat');
    ok(typeof instanceFlat === 'function');
    ok(instanceFlat({}) === undefined);
    ok(typeof instanceFlat([]) === 'function');
    ok(instanceFlat([]).call([1, [2, 3], [4, [5, [6]]]]).length === 5);

    const instanceForEach = load(NS, 'instance/for-each');
    ok(typeof instanceForEach === 'function');
    ok(instanceForEach({}) === undefined);
    ok(typeof instanceForEach([]) === 'function');

    const instanceIncludes = load(NS, 'instance/includes');
    ok(typeof instanceIncludes === 'function');
    ok(instanceIncludes({}) === undefined);
    ok(typeof instanceIncludes([]) === 'function');
    ok(typeof instanceIncludes('') === 'function');
    ok(instanceIncludes([]).call([1, 2, 3], 2));
    ok(instanceIncludes('').call('123', '2'));

    const instanceIndexOf = load(NS, 'instance/index-of');
    ok(typeof instanceIndexOf === 'function');
    ok(instanceIndexOf({}) === undefined);
    ok(typeof instanceIndexOf([]) === 'function');
    ok(instanceIndexOf([]).call([1, 2, 3], 2) === 1);

    const instanceKeys = load(NS, 'instance/keys');
    ok(typeof instanceKeys === 'function');
    ok(instanceKeys({}) === undefined);
    ok(typeof instanceKeys([]) === 'function');
    ok(instanceKeys([]).call([1, 2, 3]).next().value === 0);

    const instanceLastIndexOf = load(NS, 'instance/last-index-of');
    ok(typeof instanceLastIndexOf === 'function');
    ok(instanceLastIndexOf({}) === undefined);
    ok(typeof instanceLastIndexOf([]) === 'function');
    ok(instanceLastIndexOf([]).call([1, 2, 3], 2) === 1);

    const instanceMap = load(NS, 'instance/map');
    ok(typeof instanceMap === 'function');
    ok(instanceMap({}) === undefined);
    ok(typeof instanceMap([]) === 'function');
    ok(instanceMap([]).call([1, 2, 3], it => it % 2)[1] === 0);

    const instanceMatchAll = load(NS, 'instance/match-all');
    ok(typeof instanceMatchAll === 'function');
    ok(instanceMatchAll({}) === undefined);
    ok(typeof instanceMatchAll('') === 'function');
    ok(instanceMatchAll('').call('test1test2', /t(e)(st(\d?))/g).next().value[0] === 'test1');

    const instancePadEnd = load(NS, 'instance/pad-end');
    ok(typeof instancePadEnd === 'function');
    ok(instancePadEnd({}) === undefined);
    ok(typeof instancePadEnd('') === 'function');
    ok(instancePadEnd('').call('a', 3, 'b') === 'abb');

    const instancePadStart = load(NS, 'instance/pad-start');
    ok(typeof instancePadStart === 'function');
    ok(instancePadStart({}) === undefined);
    ok(typeof instancePadStart('') === 'function');
    ok(instancePadStart('').call('a', 3, 'b') === 'bba');

    const instanceReduceRight = load(NS, 'instance/reduce-right');
    ok(typeof instanceReduceRight === 'function');
    ok(instanceReduceRight({}) === undefined);
    ok(typeof instanceReduceRight([]) === 'function');
    ok(instanceReduceRight([]).call([1, 2, 3], (memo, it) => it + memo, '') === '123');

    const instanceReduce = load(NS, 'instance/reduce');
    ok(typeof instanceReduce === 'function');
    ok(instanceReduce({}) === undefined);
    ok(typeof instanceReduce([]) === 'function');
    ok(instanceReduce([]).call([1, 2, 3], (memo, it) => it + memo, '') === '321');

    const instanceRepeat = load(NS, 'instance/repeat');
    ok(typeof instanceRepeat === 'function');
    ok(instanceRepeat({}) === undefined);
    ok(typeof instanceRepeat('') === 'function');
    ok(instanceRepeat('').call('a', 3) === 'aaa');

    const instanceReplaceAll = load(NS, 'instance/replace-all');
    ok(typeof instanceReplaceAll === 'function');
    ok(instanceReplaceAll({}) === undefined);
    ok(typeof instanceReplaceAll('') === 'function');
    ok(instanceReplaceAll('').call('aba', 'a', 'c') === 'cbc');

    const instanceReverse = load(NS, 'instance/reverse');
    ok(typeof instanceReverse === 'function');
    ok(instanceReverse({}) === undefined);
    ok(typeof instanceReverse([]) === 'function');

    const instanceSlice = load(NS, 'instance/slice');
    ok(typeof instanceSlice === 'function');
    ok(instanceSlice({}) === undefined);
    ok(typeof instanceSlice([]) === 'function');

    const instanceSome = load(NS, 'instance/some');
    ok(typeof instanceSome === 'function');
    ok(instanceSome({}) === undefined);
    ok(typeof instanceSome([]) === 'function');
    ok(instanceSome([]).call([1, 2, 3], it => typeof it === 'number'));

    const instanceSort = load(NS, 'instance/sort');
    ok(typeof instanceSort === 'function');
    ok(instanceSort({}) === undefined);
    ok(typeof instanceSort([]) === 'function');

    const instanceSplice = load(NS, 'instance/splice');
    ok(typeof instanceSplice === 'function');
    ok(instanceSplice({}) === undefined);
    ok(typeof instanceSplice([]) === 'function');

    const instanceStartsWith = load(NS, 'instance/starts-with');
    ok(typeof instanceStartsWith === 'function');
    ok(instanceStartsWith({}) === undefined);
    ok(typeof instanceStartsWith('') === 'function');
    ok(instanceStartsWith('').call('qwe', 'qw'));

    const instanceTrimEnd = load(NS, 'instance/trim-end');
    ok(typeof instanceTrimEnd === 'function');
    ok(instanceTrimEnd({}) === undefined);
    ok(typeof instanceTrimEnd('') === 'function');
    ok(instanceTrimEnd('').call(' 1 ') === ' 1');

    const instanceTrimLeft = load(NS, 'instance/trim-left');
    ok(typeof instanceTrimLeft === 'function');
    ok(instanceTrimLeft({}) === undefined);
    ok(typeof instanceTrimLeft('') === 'function');
    ok(instanceTrimLeft('').call(' 1 ') === '1 ');

    const instanceTrimRight = load(NS, 'instance/trim-right');
    ok(typeof instanceTrimRight === 'function');
    ok(instanceTrimRight({}) === undefined);
    ok(typeof instanceTrimRight('') === 'function');
    ok(instanceTrimRight('').call(' 1 ') === ' 1');

    const instanceTrimStart = load(NS, 'instance/trim-start');
    ok(typeof instanceTrimStart === 'function');
    ok(instanceTrimStart({}) === undefined);
    ok(typeof instanceTrimStart('') === 'function');
    ok(instanceTrimStart('').call(' 1 ') === '1 ');

    const instanceTrim = load(NS, 'instance/trim');
    ok(typeof instanceTrim === 'function');
    ok(instanceTrim({}) === undefined);
    ok(typeof instanceTrim('') === 'function');
    ok(instanceTrim('').call(' 1 ') === '1');

    const instanceValues = load(NS, 'instance/values');
    ok(typeof instanceValues === 'function');
    ok(instanceValues({}) === undefined);
    ok(typeof instanceValues([]) === 'function');
    ok(instanceValues([]).call([1, 2, 3]).next().value === 1);
  }

  for (const NS of ['stable', 'actual', 'full']) {
    ok(typeof load(NS, 'dom-collections').iterator === 'function');
    ok(typeof load(NS, 'dom-collections/for-each') === 'function');
    ok(typeof load(NS, 'dom-collections/iterator') === 'function');
    ok(typeof load(NS, 'set-timeout') === 'function');
    ok(typeof load(NS, 'set-interval') === 'function');
    ok(typeof load(NS, 'set-immediate') === 'function');
    ok(typeof load(NS, 'clear-immediate') === 'function');
    ok(typeof load(NS, 'queue-microtask') === 'function');
    ok(typeof load(NS, 'url') === 'function');
    load(NS, 'url/to-json');
    ok(typeof load(NS, 'url-search-params') === 'function');
  }

  for (const NS of ['actual', 'full']) {
    ok(load(NS, 'array/at')([1, 2, 3], -2) === 2);
    ok(load(NS, 'array/virtual/at').call([1, 2, 3], -2) === 2);
    ok(load(NS, 'string/at')('a', 0) === 'a');
    ok(load(NS, 'string/virtual/at').call('a', 0) === 'a');
    ok(load(NS, 'array/find-last')([1, 2, 3], it => it % 2) === 3);
    ok(load(NS, 'array/find-last-index')([1, 2, 3], it => it % 2) === 2);
    ok(load(NS, 'array/virtual/find-last').call([1, 2, 3], it => it % 2) === 3);
    ok(load(NS, 'array/virtual/find-last-index').call([1, 2, 3], it => it % 2) === 2);
    ok(load(NS, 'object/has-own')({ foo: 42 }, 'foo'));

    const instanceAt = load(NS, 'instance/at');
    ok(typeof instanceAt === 'function');
    ok(instanceAt({}) === undefined);
    ok(typeof instanceAt([]) === 'function');
    ok(typeof instanceAt('') === 'function');
    ok(instanceAt([]).call([1, 2, 3], 2) === 3);
    ok(instanceAt('').call('123', 2) === '3');

    const instanceFindLastIndex = load(NS, 'instance/find-last-index');
    ok(typeof instanceFindLastIndex === 'function');
    ok(instanceFindLastIndex({}) === undefined);
    ok(typeof instanceFindLastIndex([]) === 'function');
    ok(instanceFindLastIndex([]).call([1, 2, 3], it => it % 2) === 2);

    const instanceFindLast = load(NS, 'instance/find-last');
    ok(typeof instanceFindLast === 'function');
    ok(instanceFindLast({}) === undefined);
    ok(typeof instanceFindLast([]) === 'function');
    ok(instanceFindLast([]).call([1, 2, 3], it => it % 2) === 3);
  }

  const Map = load('full/map');
  const Set = load('full/set');
  const WeakMap = load('full/weak-map');
  const WeakSet = load('full/weak-set');
  ok(typeof load('full/array/filter-reject') === 'function');
  ok(load('full/array/find-last')([1, 2, 3], it => it % 2) === 3);
  ok(load('full/array/find-last-index')([1, 2, 3], it => it % 2) === 2);
  ok(typeof load('full/array/group-by') === 'function');
  ok(typeof load('full/array/is-template-object') === 'function');
  load('full/array/last-item');
  load('full/array/last-index');
  ok(typeof load('full/array/unique-by') === 'function');
  ok(typeof load('full/array/virtual/filter-reject') === 'function');
  ok(load('full/array/virtual/find-last').call([1, 2, 3], it => it % 2) === 3);
  ok(load('full/array/virtual/find-last-index').call([1, 2, 3], it => it % 2) === 2);
  ok(typeof load('full/array/virtual/group-by') === 'function');
  ok(typeof load('full/array/virtual/unique-by') === 'function');
  ok(typeof load('full/async-iterator') === 'function');
  ok(typeof load('full/async-iterator/as-indexed-pairs') === 'function');
  ok(typeof load('full/async-iterator/drop') === 'function');
  ok(typeof load('full/async-iterator/every') === 'function');
  ok(typeof load('full/async-iterator/filter') === 'function');
  ok(typeof load('full/async-iterator/find') === 'function');
  ok(typeof load('full/async-iterator/flat-map') === 'function');
  ok(typeof load('full/async-iterator/for-each') === 'function');
  ok(typeof load('full/async-iterator/from') === 'function');
  ok(typeof load('full/async-iterator/map') === 'function');
  ok(typeof load('full/async-iterator/reduce') === 'function');
  ok(typeof load('full/async-iterator/some') === 'function');
  ok(typeof load('full/async-iterator/take') === 'function');
  ok(typeof load('full/async-iterator/to-array') === 'function');
  load('full/bigint/range');
  load('full/bigint');
  ok(typeof load('full/composite-key')({}, 1, {}) === 'object');
  ok(typeof load('full/composite-symbol')({}, 1, {}) === 'symbol');
  ok(typeof load('full/iterator') === 'function');
  ok(typeof load('full/iterator/as-indexed-pairs') === 'function');
  ok(typeof load('full/iterator/drop') === 'function');
  ok(typeof load('full/iterator/every') === 'function');
  ok(typeof load('full/iterator/filter') === 'function');
  ok(typeof load('full/iterator/find') === 'function');
  ok(typeof load('full/iterator/flat-map') === 'function');
  ok(typeof load('full/iterator/for-each') === 'function');
  ok(typeof load('full/iterator/from') === 'function');
  ok(typeof load('full/iterator/map') === 'function');
  ok(typeof load('full/iterator/reduce') === 'function');
  ok(typeof load('full/iterator/some') === 'function');
  ok(typeof load('full/iterator/take') === 'function');
  ok(typeof load('full/iterator/to-array') === 'function');
  ok(load('full/map/delete-all')(new Map(), 1, 2) === false);
  ok(load('full/map/emplace')(new Map([[1, 2]]), 1, { update: it => it ** 2 }) === 4);
  ok(load('full/map/every')(new Map([[1, 2], [2, 3], [3, 4]]), it => it % 2) === false);
  ok(load('full/map/filter')(new Map([[1, 2], [2, 3], [3, 4]]), it => it % 2).size === 1);
  ok(load('full/map/find')(new Map([[1, 2], [2, 3], [3, 4]]), it => it % 2) === 3);
  ok(load('full/map/find-key')(new Map([[1, 2], [2, 3], [3, 4]]), it => it % 2) === 2);
  ok(load('full/map/from')([[1, 2], [3, 4]]) instanceof Map);
  ok(load('full/map/group-by')([], it => it) instanceof Map);
  ok(load('full/map/includes')(new Map([[1, 2]]), 2), true);
  ok(load('full/map/key-by')([], it => it) instanceof Map);
  ok(load('full/map/key-of')(new Map([[1, 2]]), 2), 1);
  ok(load('full/map/map-keys')(new Map([[1, 2], [2, 3], [3, 4]]), it => it).size === 3);
  ok(load('full/map/map-values')(new Map([[1, 2], [2, 3], [3, 4]]), it => it).size === 3);
  ok(load('full/map/merge')(new Map([[1, 2], [2, 3]]), [[2, 4], [4, 5]]).size === 3);
  ok(load('full/math/clamp')(6, 2, 4) === 4);
  ok(load('full/math/deg-per-rad') === Math.PI / 180);
  ok(load('full/math/degrees')(Math.PI) === 180);
  ok(load('full/math/fscale')(3, 1, 2, 1, 2) === 3);
  ok(load('full/math/rad-per-deg') === 180 / Math.PI);
  ok(load('full/math/radians')(180) === Math.PI);
  ok(load('full/math/scale')(3, 1, 2, 1, 2) === 3);
  ok(load('full/math/signbit')(-2) === true);
  ok(load('full/map/of')([1, 2], [3, 4]) instanceof Map);
  ok(load('full/map/reduce')(new Map([[1, 2], [2, 3], [3, 4]]), (a, b) => a + b) === 9);
  ok(load('full/map/some')(new Map([[1, 2], [2, 3], [3, 4]]), it => it % 2) === true);
  ok(load('full/map/update')(new Map([[1, 2]]), 1, it => it * 2).get(1) === 4);
  ok(load('full/number/from-string')('12', 3) === 5);
  ok(load('full/number/range')(1, 2).next().value === 1);
  ok('from' in load('full/observable'));
  ok(typeof load('full/observable/constructor') === 'function');
  ok(typeof load('full/observable/from') === 'function');
  ok(typeof load('full/observable/of') === 'function');
  ok(load('full/set/add-all')(new Set([1, 2, 3]), 4, 5).size === 5);
  ok(load('full/set/delete-all')(new Set([1, 2, 3]), 4, 5) === false);
  ok(load('full/set/difference')(new Set([1, 2, 3]), [3, 4, 5]).size === 2);
  ok(load('full/set/every')(new Set([1, 2, 3]), it => typeof it == 'number'));
  ok(load('full/set/filter')(new Set([1, 2, 3]), it => it % 2).size === 2);
  ok(load('full/set/find')(new Set([2, 3, 4]), it => it % 2) === 3);
  ok(load('full/set/from')([1, 2, 3, 2, 1]) instanceof Set);
  ok(load('full/set/intersection')(new Set([1, 2, 3]), [1, 3, 4]).size === 2);
  ok(load('full/set/is-disjoint-from')(new Set([1, 2, 3]), [4, 5, 6]));
  ok(load('full/set/is-subset-of')(new Set([1, 2, 3]), [1, 2, 3, 4]));
  ok(load('full/set/is-superset-of')(new Set([1, 2, 3, 4]), [1, 2, 3]));
  ok(load('full/set/join')(new Set([1, 2, 3])) === '1,2,3');
  ok(load('full/set/map')(new Set([1, 2, 3]), it => it % 2).size === 2);
  ok(load('full/set/of')(1, 2, 3, 2, 1) instanceof Set);
  ok(load('full/set/reduce')(new Set([1, 2, 3]), (it, v) => it + v) === 6);
  ok(load('full/set/some')(new Set([1, 2, 3]), it => typeof it == 'number'));
  ok(load('full/set/symmetric-difference')(new Set([1, 2, 3]), [3, 4, 5]).size === 4);
  ok(load('full/set/union')(new Set([1, 2, 3]), [3, 4, 5]).size === 5);
  ok('next' in load('full/string/code-points')('a'));
  ok('next' in load('full/string/virtual/code-points').call('a'));
  ok(load('full/symbol/async-dispose'));
  ok(load('full/symbol/dispose'));
  ok(load('full/symbol/matcher'));
  ok(load('full/symbol/metadata'));
  ok(load('full/symbol/observable'));
  ok(load('full/weak-map/delete-all')(new WeakMap(), [], {}) === false);
  ok(load('full/weak-map/emplace')(new WeakMap(), {}, { insert: () => ({ a: 42 }) }).a === 42);
  ok(load('full/weak-map/from')([[{}, 1], [[], 2]]) instanceof WeakMap);
  ok(load('full/weak-map/of')([{}, 1], [[], 2]) instanceof WeakMap);
  ok(load('full/weak-set/add-all')(new WeakSet(), [], {}) instanceof WeakSet);
  ok(load('full/weak-set/delete-all')(new WeakSet(), [], {}) === false);
  ok(load('full/weak-set/from')([{}, []]) instanceof WeakSet);
  ok(load('full/weak-set/of')({}, []) instanceof WeakSet);

  const instanceCodePoints = load('full/instance/code-points');
  ok(typeof instanceCodePoints === 'function');
  ok(instanceCodePoints({}) === undefined);
  ok(typeof instanceCodePoints('') === 'function');
  ok(instanceCodePoints('').call('abc').next().value.codePoint === 97);

  const instanceFilterOut = load('full/instance/filter-reject');
  ok(typeof instanceFilterOut === 'function');
  ok(instanceFilterOut({}) === undefined);
  ok(typeof instanceFilterOut([]) === 'function');
  ok(instanceFilterOut([]).call([1, 2, 3], it => it % 2).length === 1);

  const instanceGroupBy = load('full/instance/group-by');
  ok(typeof instanceGroupBy === 'function');
  ok(instanceGroupBy({}) === undefined);
  ok(typeof instanceGroupBy([]) === 'function');
  ok(instanceGroupBy([]).call([1, 2, 3], it => it % 2)[1].length === 2);

  const instanceUniqueBy = load('full/instance/unique-by');
  ok(typeof instanceUniqueBy === 'function');
  ok(instanceUniqueBy({}) === undefined);
  ok(typeof instanceUniqueBy([]) === 'function');
  ok(instanceUniqueBy([]).call([1, 2, 3, 2, 1]).length === 3);

  load('proposals/accessible-object-hasownproperty');
  load('proposals/array-filtering');
  load('proposals/array-find-from-last');
  load('proposals/array-grouping');
  load('proposals/array-is-template-object');
  load('proposals/array-last');
  load('proposals/array-unique');
  load('proposals/collection-methods');
  load('proposals/collection-of-from');
  load('proposals/decorators');
  load('proposals/iterator-helpers');
  load('proposals/keys-composition');
  load('proposals/map-upsert');
  load('proposals/math-extensions');
  load('proposals/math-signbit');
  load('proposals/number-from-string');
  load('proposals/number-range');
  load('proposals/observable');
  load('proposals/pattern-matching');
  load('proposals/relative-indexing-method');
  load('proposals/set-methods');
  load('proposals/string-code-points');
  load('proposals/using-statement');
  load('proposals');
  ok(load('stage/4'));
  ok(load('stage/3'));
  ok(load('stage/2'));
  ok(load('stage/1'));

  for (const key in compat) load('modules', key);

  ok(load(''));
}

for (const NS of ['es', 'stable', 'actual', 'full']) {
  ok(typeof load(NS, 'string/match') === 'function');
  ok('next' in load(NS, 'string/match-all')('a', /./g));
  ok(typeof load(NS, 'string/replace') === 'function');
  ok(typeof load(NS, 'string/search') === 'function');
  ok(load(NS, 'string/split')('a s d', ' ').length === 3);
  ok(typeof load(NS, 'array-buffer') === 'function');
  ok(typeof load(NS, 'array-buffer/constructor') === 'function');
  ok(typeof load(NS, 'array-buffer/is-view') === 'function');
  load(NS, 'array-buffer/slice');
  ok(typeof load(NS, 'data-view') === 'function');
  ok(typeof load(NS, 'typed-array/int8-array') === 'function');
  ok(typeof load(NS, 'typed-array/uint8-array') === 'function');
  ok(typeof load(NS, 'typed-array/uint8-clamped-array') === 'function');
  ok(typeof load(NS, 'typed-array/int16-array') === 'function');
  ok(typeof load(NS, 'typed-array/uint16-array') === 'function');
  ok(typeof load(NS, 'typed-array/int32-array') === 'function');
  ok(typeof load(NS, 'typed-array/uint32-array') === 'function');
  ok(typeof load(NS, 'typed-array/float32-array') === 'function');
  ok(typeof load(NS, 'typed-array/float64-array') === 'function');
  load(NS, 'typed-array/copy-within');
  load(NS, 'typed-array/entries');
  load(NS, 'typed-array/every');
  load(NS, 'typed-array/fill');
  load(NS, 'typed-array/filter');
  load(NS, 'typed-array/find');
  load(NS, 'typed-array/find-index');
  load(NS, 'typed-array/for-each');
  load(NS, 'typed-array/from');
  load(NS, 'typed-array/includes');
  load(NS, 'typed-array/index-of');
  load(NS, 'typed-array/iterator');
  load(NS, 'typed-array/join');
  load(NS, 'typed-array/keys');
  load(NS, 'typed-array/last-index-of');
  load(NS, 'typed-array/map');
  load(NS, 'typed-array/of');
  load(NS, 'typed-array/reduce');
  load(NS, 'typed-array/reduce-right');
  load(NS, 'typed-array/reverse');
  load(NS, 'typed-array/set');
  load(NS, 'typed-array/slice');
  load(NS, 'typed-array/some');
  load(NS, 'typed-array/sort');
  load(NS, 'typed-array/subarray');
  load(NS, 'typed-array/to-locale-string');
  load(NS, 'typed-array/to-string');
  load(NS, 'typed-array/values');
  ok(typeof load(NS, 'typed-array').Uint32Array === 'function');
}

for (const NS of ['actual', 'full']) {
  load(NS, 'typed-array/at');
}

load('full/typed-array/filter-reject');
load('full/typed-array/find-last');
load('full/typed-array/find-last-index');
load('full/typed-array/group-by');
load('full/typed-array/unique-by');

PATH = 'core-js';

load('bundle/actual');
load('bundle/full');

PATH = 'core-js-bundle';
load('');
load('actual');
load('actual.min');
load('full');
load('full.min');

// eslint-disable-next-line no-console -- output
console.log(chalk.green(`tested ${ chalk.cyan(tested) } commonjs entry points`));
