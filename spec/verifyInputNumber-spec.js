describe('verify input number', function () {
    var verifyInputNumber;
    var number;

    beforeEach(function () {
        verifyInputNumber = require('../src/core');
        number = [];
    });

    it ('should return false when number length is 0', function () {
        expect(verifyInputNumber.verifyNumber(number)).toBe(false);
    });

    it ('should return true when number length is 4', function () {
        number = [0, 1, 2, 3];
        expect(verifyInputNumber.verifyNumber(number)).toEqual(true);
    });

    it ('should return false when number have repeat digit', function () {
        number = [0, 0, 1, 2];
        expect(verifyInputNumber.verifyNumber(number)).toBe(false);
    });

    it ('should return true when number have no repeat digit', function () {
        number = [1, 2, 3, 4];
        expect(verifyInputNumber.verifyNumber(number)).toBe(true);
    });
})