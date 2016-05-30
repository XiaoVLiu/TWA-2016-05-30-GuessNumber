var controller = require('../src/controller');
const readLine = require('readLine');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('please input four digits');

rl.on('line', function (input) {
    var result = controller.main(input);
    console.log(result);
    console.log('please input four digits');
});
