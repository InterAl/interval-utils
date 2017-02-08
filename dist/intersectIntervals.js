"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = intersectIntervals;
function intersectIntervals(intervalGroup1, intervalGroup2) {
    var intersections = [];

    for (var z = 0; z < intervalGroup1.length; z++) {
        var i1 = intervalGroup1[z];

        for (var i = 0; i < intervalGroup2.length; i++) {
            var i2 = intervalGroup2[i];
            if (isOverlapping(i1, i2)) intersections.push(getIntersection(i1, i2));
        }
    }

    return intersections;
}

function getIntersection(i1, i2) {
    if (isOverlapping(i1, i2)) {
        var start = Math.max(intervalStart(i1), intervalStart(i2));
        var end = Math.min(intervalEnd(i1), intervalEnd(i2));
        return createInterval(start, end);
    }

    return null;
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