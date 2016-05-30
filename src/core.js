function verifyNumLen(number) {

}

function verifyDigitAndRepeat(number) {

}

var verifyNumber = function (number) {
    if (number.length != 4) {
        return false;
    }

    for (var i=0; i<number.length; i++) {
        var digit = number[i];

        var existDigit = number.filter(function(element) {
            return element == digit;
        });

        if (existDigit.length >= 2) {
            return false;
        }
    }

    return true;
}

var compareInputAndAnswer = function(input, answer) {
    var countA = 0;
    var countB = 0;

    for (var i=0; i<input.length; i++) {
        var index = answer.indexOf(input[i]);

        if (index >= 0) {
            if (index === i) {
                countA++;
            } else {
                countB++;
            }
        }
    }

    return countA + 'A' + countB + 'B';
}

module.exports = {
    verifyNumber: verifyNumber,
    compareInputAndAnswer: compareInputAndAnswer
};