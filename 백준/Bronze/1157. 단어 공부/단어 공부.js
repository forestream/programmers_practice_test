const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')[0];

const chars = {};

Array.from(input).forEach((char) => {
    const lower = char.toLowerCase();
    if (chars[lower] === undefined) chars[lower] = 0;
    chars[lower]++;
});

const entries = Object.entries(chars);
const most = entries.reduce(([greatestChar, greatestValue], [char, value]) => {
    return greatestValue < value ? [char, value] : [greatestChar, greatestValue];
}, [null, 0]);

const answer = entries.some(([char, value]) => value === most[1] && char !== most[0]) 
    ? '?' 
    : most[0].toUpperCase();

console.log(answer);