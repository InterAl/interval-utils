import _ from 'lodash';

export default function UnionIntervals(...intervals) {
    let union = [];
    let idxs = _.map(intervals, () => 0);
    let sumLengths = getSumLengths(intervals);

    for (var i = 0; i < sumLengths; i++) {
        let minIdx = getMinimumIntervalIdx(intervals, idxs);
        let minIntervalIdx = idxs[minIdx];
        let currentMinInterval = intervals[minIdx][minIntervalIdx];
        let lastInterval = union.pop();
        let unionizedInterval = unionIntervals(currentMinInterval, lastInterval);
        union = union.concat(unionizedInterval);
        idxs[minIdx]++;
    }

    return union;
}

function getSumLengths(intervals) {
    return _.sum(_.map(intervals, a => a.length));
}

function getMinimumIntervalIdx(intervals, idxs) {
    let idx = _.minBy(_.map(idxs, (idx, i) => ({idx, i})),
                    ({idx, i}) => intervalStart(intervals[i][idx]));
    return idx.i;
}

function unionIntervals(i1, i2) {
    if (!i1 && !i2)
        return [];

    if (!i1)
        return [i2];

    if (!i2)
        return [i1];

    let unionIntervalContainer;

    if (isOverlapping(i1, i2)) {
        let start = Math.min(intervalStart(i1), intervalStart(i2));
        let end = Math.max(intervalEnd(i1), intervalEnd(i2));
        let unionInterval = createInterval(start, end);
        unionIntervalContainer = [unionInterval];
    } else {
        unionIntervalContainer = (intervalStart(i1) <= intervalStart(i2)) ?
                            [i1, i2] : [i2, i1];
    }
    return unionIntervalContainer;
}

function isOverlapping(i1, i2) {
    return intervalStart(i1) <= intervalEnd(i2) &&
           intervalStart(i2) <= intervalEnd(i1);
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
