const util = require('util');

if (!util.styleText) {
  util.styleText = function(format, text) {
    return text;
  };
}

if (!Array.prototype.toReversed) {
  Array.prototype.toReversed = function() {
    return this.slice().reverse();
  };
}

if (!Array.prototype.toSpliced) {
  Array.prototype.toSpliced = function(...args) {
    const copy = this.slice();
    copy.splice(...args);
    return copy;
  };
}
