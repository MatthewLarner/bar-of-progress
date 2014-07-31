var crel = require('crel'),
    DefaultStyle = require('default-style'),
    style = new DefaultStyle('.progress-bar { position: relative; display: inline-block; background: darkGray; width:100%; height: 20px; } .progress-bar > div { height: 100%; display: block; text-indent: -9999px; }');

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
        this.valueElement = crel('div')
    );
    this.element._progressBar = this;
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

ProgressBar.prototype._update = function() {
    var value = this._value;
    if (value == null) {
        value = 0;
    }
    this.valueElement.style.width = Math.max(0, Math.min(100, 100 / (this.max() - this.min()) * value)) + '%';
};

module.exports = ProgressBar;
