'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _unionIntervals = require('./unionIntervals');

Object.defineProperty(exports, 'unionIntervals', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_unionIntervals).default;
  }
});

var _intersectIntervals = require('./intersectIntervals');

Object.defineProperty(exports, 'intersectIntervals', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_intersectIntervals).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }