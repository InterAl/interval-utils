import {intersectIntervals as intersect} from '../src/index.js';
import {expect} from 'chai';

describe('AvailabilityIntersection', () => {
    it('simple intersection', () => {
        let i1 = [[0, 10]];
        let i2 = [[4, 13]];
        let e =  [[4, 10]];

        let result = intersect(i1, i2);

        expect(result).to.deep.equal(e);
    });

    it('complex intersection', () => {
        let i1 = [[0, 10], [12, 18], [25, 30]];
        let i2 = [[2, 4], [5, 8], [9, 15], [20, 40], [55, 100]];
        let e =  [[2, 4], [5, 8], [9, 10], [12, 15], [25, 30]];

        let result = intersect(i1, i2);

        expect(result).to.deep.equal(e);
    });
});
