var crel = require('crel'),
    DefaultStyle = require('default-style'),
    style = new DefaultStyle('.progress-bar { position: relative; background: darkGray; width:100%; height: 20px; } .progress-bar .value { height: 100%; display: block; text-indent: -9999px; background-color: gray}');

function getValue(){
    var value = this._value;

    if (value == null) {
        value = 0;
    }

    return value;
}

function setClass(className){
    var classesToRemove = Object.keys(this.updateFunctions);
    classesToRemove.splice(classesToRemove.indexOf(className), 1);
    this.element.classList.remove.apply(this.element.classList, classesToRemove);
    this.element.classList.add(className);
}

var updateFunctions = {
        horizontal: function horizontal() {
            var value = getValue.call(this);

            this.valueElement.style.position = 'initial';
            this.valueElement.style.bottom = 'initial';
            this.valueElement.style.height = '100%';
            this.valueElement.style.width = Math.max(0, Math.min(100, 100 / (this.max() - this.min()) * value)) + '%';

            setClass.call(this, 'horizontal');
        },
        vertical: function vertical() {
            var value = getValue.call(this);

            this.valueElement.style.width = '100%';
            this.valueElement.style.position = 'absolute';
            this.valueElement.style.bottom = '0';
            this.valueElement.style.height = Math.max(0, Math.min(100, 100 / (this.max() - this.min()) * value)) + '%';

            setClass.call(this, 'vertical');
        }
    };

function ProgressBar(removeDefaultStyle, element) {
    this._render(element);

    if (removeDefaultStyle === true) {
        style.remove();
    } else {
        this.element.className = 'progress-bar';
    }
}

ProgressBar.prototype._render = function(valueElement) {
    if(valueElement) {
        this.element = valueElement.parentElement || crel('div', valueElement);
        this.valueElement = valueElement;
        return;
    }
    this.element = crel('div',
        this.valueElement = crel('div', {'class': 'value'})
    );
    this.element._progressBar = this;
    this.updateFunctions = updateFunctions;
    this._update();
};

ProgressBar.prototype._value = 0;
ProgressBar.prototype.value = function(value) {
    if (arguments.length === 0) {
        return this._value;
    }

    this._value = value;
    this._update();
};

ProgressBar.prototype._min = 0;
ProgressBar.prototype.min = function(min) {
    if (arguments.length === 0) {
        return this._min;
    }

    this._min = min;
    this._update();
};

ProgressBar.prototype._max = 1;
ProgressBar.prototype.max = function(max) {
    if (arguments.length === 0) {
        return this._max;
    }

    this._max = max;
    this._update();
};

ProgressBar.prototype._style = 'horizontal';
ProgressBar.prototype.style = function(value){
    if(!arguments.length){
        return this._style;
    }

    this._style = value;
    this._update();
};

ProgressBar.prototype._update = function(){
    var bar = this;
    var style = bar._style in bar.updateFunctions ? bar._style : 'horizontal';
    bar.updateFunctions[style].call(bar);
};

module.exports = ProgressBar;
