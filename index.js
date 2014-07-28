var crel = require('crel');

function ProgressBar(element) {
    this._render(element);
}

ProgressBar.prototype._render = function(element) {
    this.element = element || crel('div', {'class':'progress-bar'},
        crel('div', {'style': this.value + '%'}, '&#x200b;')
    );

};

ProgressBar.prototype.value = 0;

module.exports = ProgressBar;