const {expect} = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString function', () => {
    it('should reverse a string passed into it', () => {
        let nuf = reverseString('fun');

        expect(nuf).to.equal('nuf');
    })

    it('should throw a TypeError if not given a string', () => {
        let obj = {'one': 1, 'two': 2, 'three': 3}

        expect(() => reverseString(12)).to.throw(TypeError);
        expect(() => reverseString(obj)).to.throw(TypeError);
    });
});
