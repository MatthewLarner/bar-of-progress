var bar = require('bar-of-progress'),
    brogress = new bar();

/**
*   Defaults:
*   min 0
*   max 1
*   value 0
*   css class 'progress-bar' override by passing in a class name as the first parameter
**/

brogress.value(0.5); // Set value to 50% and updates display
brogress.value(); // Gets current value: 0.5
