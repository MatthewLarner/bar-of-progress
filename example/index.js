var bar = require('../'),
    brogress = new bar(),
    doc = require('doc-js');

/**
*   Defaults:
*   min 0
*   max 1
*   value 0
*   css class 'progress-bar' override by passing in a class name as the first parameter
**/

brogress.value(0.5); // Set value to 50% and updates display
brogress.value(); // Gets current value: 0.5

doc.ready(function() {
    window.brogress = brogress;

    document.body.appendChild(brogress.element);
});
