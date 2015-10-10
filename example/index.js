var Brogress = require('../'),
    brogress = new Brogress(),
    crel = require('crel'),
    doc = require('doc-js'),
    animationTime = 2500,
    progressComplete,
    startTime,
    endTime;

function switchStyles(){
    var currentStyle = brogress.style(),
        nextStyle = currentStyle === 'horizontal' ? 'vertical': 'horizontal';

    brogress.style(nextStyle);
}

function animateProgress(){
    var now = Date.now();

    if(!progressComplete){
        endTime = now + animationTime;
        progressComplete = true;
    }

    var progress = 1 - ((endTime - now) / animationTime);

    brogress.value(progress);

    if(now > endTime) {
        progressComplete = false;
    }

    requestAnimationFrame(animateProgress);
}

var heading = crel('h1', 'Bar of Progress'),
    link = crel('a',
        {
            href:'https://www.npmjs.com/package/bar-of-progress',
            target: '_blank'
        },
        'https://www.npmjs.com/package/bar-of-progress'
    ),
    toggleButton = crel('button', 'Switch Style');

doc(toggleButton).on('click', switchStyles);
doc.ready(function() {
    crel(document.body,
        heading,
        link,
        toggleButton,
        brogress.element
    );
    animateProgress();
});
