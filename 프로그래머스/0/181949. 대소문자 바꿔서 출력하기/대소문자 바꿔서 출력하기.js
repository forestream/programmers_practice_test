const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = '';
    for (let ch of str) {
        answer += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
    }
    console.log(answer);
});