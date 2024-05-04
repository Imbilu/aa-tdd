const { expect } = require('chai');
const {Triangle, Isosceles, Scalene} = require('../problems/triangle');

describe('triangle class', () => {
    describe('constructor function', () => {
        let tri;

        beforeEach(() => {
            tri = new Triangle(3, 4, 5);
        });

        it('should create an instance with properties side1, side2, side3', () => {
            expect(tri).to.have.property(side1);
            expect(tri).to.have.property(side2);
            expect(tri).to.have.property(side3);
        });

        //it('should set triangle properties to the ');
    });
});
