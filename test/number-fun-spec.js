const { expect } = require('chai');
const { returnsThree } = require('../problems/number-fun');
const { reciprocal } = require('../problems/number-fun');

describe('returnsThree function', () => {
    it('should return the number 3', () => {
        let num = returnsThree();
        expect(num).to.equal(3);
    });
});

describe('reciprocal function', () => {

    context('valid arguments', () => {
        it('should return the reciprocal of the number passed in', () => {
            let num1 = 100;
            let num2 = 5;
            let num3 = 6000;

            let rec1 = reciprocal(num1);
            let rec2 = reciprocal(num2);
            let rec3 = reciprocal(num3);

            expect(rec1).to.equal(1/num1);
            expect(rec2).to.equal(1/num2);
            expect(rec3).to.equal(1/num3);
        });
    });

    context('invalid arguments', () => {
        it('should throw RangeError for invalid arguments', () => {
            let badNum1 = 1000001;
            let badNum2 = -1;
            let badNum3 = 0;

            expect(() => reciprocal(badNum1)).to.throw(RangeError);
            expect(() => reciprocal(badNum2)).to.throw(RangeError);
            expect(() => reciprocal(badNum3)).to.throw(RangeError);
        });
    });
});
