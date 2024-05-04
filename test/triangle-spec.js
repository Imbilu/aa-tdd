const { expect } = require('chai');
const {Triangle, Isosceles, Scalene} = require('../problems/triangle');

describe('triangle class', () => {

    let tri;
    let badTri;

    beforeEach(() => {
        tri = new Triangle(3, 4, 5);
        badTri = new Triangle(2, 2, 5);
    });

    describe('constructor function', () => {


        it('should create an instance with properties side1, side2, side3', () => {
            expect(tri).to.have.property('side1');
            expect(tri).to.have.property('side2');
            expect(tri).to.have.property('side3');
        });

        it('should set triangle properties to the passed in values', () => {
            expect(tri.side1).to.eq(3);
            expect(tri.side2).to.eq(4);
            expect(tri.side3).to.eq(5);
        });
    });

    describe('getPerimeter function', () => {
        it('should return the perimeter of the triangle instance', () => {
            let p = tri.getPerimeter();
            expect(p).to.eq(12);
        });
    });

    describe('hasValidSidelengths function', () => {
        it('should return true if the sum of any two sides is greater than the remaining side', () => {
            let validity = tri.hasValidSideLengths();
            let validity2 = badTri.hasValidSideLengths();

            expect(validity).to.eq(true);
            expect(validity2).to.eq(false);
        });
    });

    describe('validate method', () => {
        it('adds an isValid property to instance with a value of true if the triangle is valid', () => {
            tri.validate();
            badTri.validate();

            expect(tri.isValid).to.equal(true);
            expect(badTri.isValid).to.eq(false);
        })
    });
});
