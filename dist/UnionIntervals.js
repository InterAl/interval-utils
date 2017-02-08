'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = unionIntervals;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unionIntervals() {
    var union = [];

    for (var _len = arguments.length, intervals = Array(_len), _key = 0; _key < _len; _key++) {
        intervals[_key] = arguments[_key];
    }

    var idxs = _lodash2.default.map(intervals, function () {
        return 0;
    });
    var sumLengths = getSumLengths(intervals);

    for (var i = 0; i < sumLengths; i++) {
        var minIdx = getMinimumIntervalIdx(intervals, idxs);
        var minIntervalIdx = idxs[minIdx];
        var currentMinInterval = intervals[minIdx][minIntervalIdx];
        var lastInterval = union.pop();
        var unionizedInterval = _unionIntervals(currentMinInterval, lastInterval);
        union = union.concat(unionizedInterval);
        idxs[minIdx]++;
    }

    return union;
}

function getSumLengths(intervals) {
    return _lodash2.default.sum(_lodash2.default.map(intervals, function (a) {
        return a.length;
    }));
}

function getMinimumIntervalIdx(intervals, idxs) {
    var idx = _lodash2.default.minBy(_lodash2.default.map(idxs, function (idx, i) {
        return { idx: idx, i: i };
    }), function (_ref) {
        var idx = _ref.idx,
            i = _ref.i;
        return intervalStart(intervals[i][idx]);
    });
    return idx.i;
}

function _unionIntervals(i1, i2) {
    if (!i1 && !i2) return [];

    if (!i1) return [i2];

    if (!i2) return [i1];

    var unionIntervalContainer = void 0;

    if (isOverlapping(i1, i2)) {
        var start = Math.min(intervalStart(i1), intervalStart(i2));
        var end = Math.max(intervalEnd(i1), intervalEnd(i2));
        var unionInterval = createInterval(start, end);
        unionIntervalContainer = [unionInterval];
    } else {
        unionIntervalContainer = intervalStart(i1) <= intervalStart(i2) ? [i1, i2] : [i2, i1];
    }
    return unionIntervalContainer;
}

function isOverlapping(i1, i2) {
    return intervalStart(i1) <= intervalEnd(i2) && intervalStart(i2) <= intervalEnd(i1);
}

function createInterval(start, end) {
    return [start, end];
}

function intervalStart(i) {
    return i && i[0];
}

function intervalEnd(i) {
    return i[1];
}