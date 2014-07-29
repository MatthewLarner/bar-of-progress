var crel = require('crel'),
    DefaultStyle = require('default-style');

new DefaultStyle('.progress-bar > div { height:100%; }');

function ProgressBar(cssclass, element) {
    this._render(cssclass, element);
}

ProgressBar.prototype._render = function(cssclass, element) {
    this.element = element || crel('div', {'class': cssclass || 'progress-bar' },
        this.valueElement = crel('div')
    );
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

ProgressBar.prototype.cssClass = 'progress-bar';
ProgressBar.prototype.cssClass = function(cssClass) {
    if (arguments.length === 0) {
        return this._class;
    }

    this._class = cssClass;
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
