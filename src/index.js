var controller = require('../src/controller');
var readLine = require('readline-sync');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('please input four digits');

rl.on('line', function (input) {
    var result = controller.main(input);
    console.log(result);
});
