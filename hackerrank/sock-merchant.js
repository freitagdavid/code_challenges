'use strict';

// https://www.hackerrank.com/challenges/sock-merchant/problem

const fs = require('fs');

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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const inventory = {};
    let pairs = 0;

    ar.forEach((value, index) => {
        if (typeof inventory[value] !== "undefined") {
            inventory[value]++;
            if (inventory[value] % 2 === 0) {
                pairs++
            }
        } else {
            inventory[value] = 1;
        }
    })
    return pairs
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
