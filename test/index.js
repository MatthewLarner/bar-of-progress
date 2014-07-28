var test = require('grape'),
    mockery = require('mockery'),
    pathToObjectUnderTest = '../';

function resetMocks(){
    mockery.registerMock('crel', function (){ 
        return {
            style: {}
        }; 
    });
    mockery.registerMock('default-style', function (){ return; });
}

function getCleanTestObject(){
    delete require.cache[require.resolve(pathToObjectUnderTest)];
    mockery.enable({ useCleanCache: true, warnOnReplace: false });
    var objectUnderTest = require(pathToObjectUnderTest);
    mockery.disable();
    resetMocks();
    return objectUnderTest;
}

resetMocks();

test('bar-of-progress exists', function(t) {
    t.plan(2);

    var testBar = new getCleanTestObject();

    t.ok(testBar, 'bar-of-progress exists');
    t.equal(typeof testBar, 'function', 'bar-of-progress is a function');
});

test('value gets / sets correctly', function(t) {
    t.plan(2);

    var bar = getCleanTestObject(),
        testBar = new bar();
        testValue = 0.4;
    testBar.value(testValue);
    t.equal(testBar.value(), testBar._value, 'getter equals property');
    t.equal(testBar.value(), testValue, 'getter equals setter value');

});

test('min is set correctly', function(t) {
    t.plan(2);

    var bar = getCleanTestObject(),
        testBar = new bar();
        testMin = 0.1;
    testBar.min(testMin);
    t.equal(testBar.min(), testBar._min, 'getter equals property');
    t.equal(testBar.min(), testMin, 'getter equals setter value');

});

test('max is set correctly', function(t) {
    t.plan(2);

    var bar = getCleanTestObject(),
        testBar = new bar();
        testmax = 0.1;
    testBar.max(testmax);
    t.equal(testBar.max(), testBar._max, 'getter equals property');
    t.equal(testBar.max(), testmax, 'getter equals setter value');

});