describe('test for compare input number and answer', function () {
    var compareInputAndAnswer, input, answer;

    beforeEach(function () {
        compareInputAndAnswer = require('../src/core');
        input = [];
        answer = [];
    });

    it ('should return OAOB when input 1234 but answer 5678', function () {
        input = [1, 2, 3, 4];
        answer = [5, 6, 7, 8];
        expect(compareInputAndAnswer.compareInputAndAnswer(input, answer)).toBe('0A0B');
    });

    it ('should return 1A0B when input 1234 but answer 1567', function () {
        input = [1, 2, 3, 4];
        answer = [1, 5, 6, 7];
        expect(compareInputAndAnswer.compareInputAndAnswer(input, answer)).toBe('1A0B');
    });

    it ('should return 0A1B when input 1234 but answer 5671', function () {
        input = [1, 2, 3, 4];
        answer = [5, 6, 7, 1];
        expect(compareInputAndAnswer.compareInputAndAnswer(input, answer)).toBe('0A1B');
    });

    it ('should return 4A0B when input 1234 and answer 1234', function () {
        input = [1, 2, 3, 4];
        answer = [1, 2, 3, 4];
        expect(compareInputAndAnswer.compareInputAndAnswer(input, answer)).toBe('4A0B');
    });

    it ('should return 0A4B when input 1234 and answer 4321', function () {
        input = [1, 2, 3, 4];
        answer = [4, 3, 2, 1];
        expect(compareInputAndAnswer.compareInputAndAnswer(input, answer)).toBe('0A4B');
    })
})