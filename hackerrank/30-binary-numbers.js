'use strict';

// https://www.hackerrank.com/challenges/30-binary-numbers/problem

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function convertBinary(n) {
    let bin = [];
    let consec = 0;
    let currentConsec = 0;
    while (n > 0) {
        let remainder = n % 2;
        n = Math.floor(n / 2);
        bin.push(remainder);
    }

    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === 1) {
            currentConsec++
            consec = currentConsec > consec ? currentConsec : consec;
        } else {
            currentConsec = 0;
        }
    }

    console.log(consec)
}

function main() {
    const n = parseInt(readLine(), 10);
    return convertBinary(n);
}
