var test = require('tape'),
    bar = require('../');

test('bar-of-progress exists', function(t) {
    t.plan(2);

    var testBar = bar;
    t.ok(testBar, 'bar-of-progress exists');
    t.equal(typeof testBar, 'function', 'bar-of-progress is a function');
});

test('value gets / sets correctly', function(t) {
    t.plan(2);

    var testBar = new bar(),
        testValue = 0.4;
    testBar.value(testValue);
    t.equal(testBar.value(), testBar._value, 'getter equals property');
    t.equal(testBar.value(), testValue, 'getter equals setter value');
});

test('min is set correctly', function(t) {
    t.plan(2);

    var testBar = new bar(),
        testMin = 0.1;
    testBar.min(testMin);
    t.equal(testBar.min(), testBar._min, 'getter equals property');
    t.equal(testBar.min(), testMin, 'getter equals setter value');
});

test('max is set correctly', function(t) {
    t.plan(2);

    var testBar = new bar(),
        testmax = 0.1;
    testBar.max(testmax);
    t.equal(testBar.max(), testBar._max, 'getter equals property');
    t.equal(testBar.max(), testmax, 'getter equals setter value');
});

test('style is set correctly', function(t) {
    t.plan(2);

    var testBar = new bar(),
        teststyle = 'spiral';
    testBar.style(teststyle);
    t.equal(testBar.style(), testBar._style, 'getter equals property');
    t.equal(testBar.style(), teststyle, 'getter equals setter value');
});
