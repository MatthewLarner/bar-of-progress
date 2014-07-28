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

test('value is assigned correctly', function(t) {
    t.plan(1);

    var bar = getCleanTestObject(),
        testBar = new bar();
        testValue = 0.4;
        debugger;
    testBar.value(testValue);

    t.equal(testBar.value(), testValue, 'bar-of-progress is a function');
});

