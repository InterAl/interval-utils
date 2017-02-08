export default function intersectIntervals(intervalGroup1, intervalGroup2) {
    let intersections = [];

    for (var z = 0; z < intervalGroup1.length; z++) {
        const i1 = intervalGroup1[z];

        for (var i = 0; i < intervalGroup2.length; i++) {
            const i2 = intervalGroup2[i];
            if (isOverlapping(i1, i2))
                intersections.push(getIntersection(i1, i2));
        }
    }

    return intersections;
}

function getIntersection(i1, i2) {
    if (isOverlapping(i1, i2)) {
        const start = Math.max(intervalStart(i1), intervalStart(i2));
        const end = Math.min(intervalEnd(i1), intervalEnd(i2));
        return createInterval(start, end);
    }

    return null;
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
