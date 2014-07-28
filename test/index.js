var test = require('grape'),
    Mockery = require('mockery'),
    mockery = new Mockery(),
    pathToObjectUnderTest = '../';

function resetMocks(){
    mockery.registerMock('crel', function (){ return; });
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

test('value is assigned correctly', function(t) {
    t.plan(1);

    var testBar = new getCleanTestObject(),
        testValue = 0.4;
        debugger;
    testBar.value(testValue);

    t.equal(testBar.value(), testValue, 'bar-of-progress is a function');
});

