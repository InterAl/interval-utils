import {unionIntervals as union} from '../src/index';
import {expect} from 'chai';

describe('unionIntervals', () => {
    it('should union overlapping intervals', () => {
        let i1 = [[0, 10], [15, 19], [20, 28]];
        let i2 = [[4, 13], [14, 18], [25, 28]];
        let e =  [[0, 13], [14, 19], [20, 28]];

        let result = union(i1, i2);

        expect(result).to.deep.equal(e);
    });

    it('should union disjoint intervals', () => {
        let i1 = [[0, 12], [14, 19], [33, 42]];
        let i2 = [[12, 14], [19, 33], [42, 50], [60, 80], [90, 100]];
        let e =  [[0, 50], [60, 80], [90, 100]];

        let result = union(i1, i2);

        expect(result).to.deep.equal(e);
    });

    it('should union 4 intervals', () => {
        let i1 = [[5, 8], [20, 40], [60, 75]];
        let i2 = [[3, 10], [17, 30], [50, 90]];
        let i3 = [[9, 16], [25, 42], [48, 55], [200, 400]];
        let i4 = [[0, 4], [100, 120], [150, 170], [190, 500]];
        let e =  [[0, 16], [17, 42], [48, 90], [100, 120], [150, 170], [190, 500]];

        let result = union(i1, i2, i3, i4);

        expect(result).to.deep.equal(e);
    });

    it('should union empty intervals', () => {
        let result = union([], []);
        expect(result).to.deep.equal([]);
    });

    it('should union empty and non-empty intervals', () => {
        let result = union([], [[9, 10], [12, 14], [15, 18]], []);
        expect(result).to.deep.equal([[9, 10], [12, 14], [15, 18]]);
    });
});
