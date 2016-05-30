var core = require('../src/core');
var view = require('../src/view');
var step = 0;

var compareController = function (numbers, answer) {
    var compareResult = '';

    if (!core.verifyNumber(numbers)) {
        compareResult += 'invalid number';
        step--;
    } else {
        compareResult += core.compareInputAndAnswer(numbers, answer);
    }

    return compareResult;
}

var statusController = function (input, maxStep) {
    var result = '';

    if (input === '4A0B') {
        result += 'Congratulations!\n';
    }

    step++;

    if (step >= maxStep) {
        result += 'Failed!\n';
    }

    return result;
}

var gameController = function (numbers, answer, maxStep) {
    var compareResult = compareController(numbers, answer);
    var status = statusController(compareResult, maxStep);

    return view.printGameResult(compareResult. status);
}

var generateRandom = function () {
    var result = '';
    var lenOfNum = 4;

    for (var i=0; i<lenOfNum; i++) {
        var digit = Math.floor(Math.random() * 10);
        result += digit.toString();
    }

    return result;
}

var main = function (input) {
    var answer = generateRandom();
    var maxStep = 6;
    var split = input.split('');
    var numbers = split.map(function (item) {
        return parseInt(item);
    });

    return gameController(numbers, answer, maxStep);
}

module.exports = {
    compareController: compareController,
    gameController: gameController,
    main: main
}