'use strict';

// https://www.hackerrank.com/challenges/drawing-book/problem

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const even = n => n % 2 === 0

const fromFront = (p) => Math.ceil((p - 1) / 2);
const fromBack = (n, p) => even(p) ? Math.ceil(((n - p) - 1) / 2) : Math.ceil((n - p) / 2);

const frontOrBack = (n, p) => fromFront(p) < fromBack(n, p) ? fromFront(p) : fromBack(n, p);

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    /*
     * Write your code here.
     */

    console.log(fromFront(p));

    if (p === 1 || (p === n - 1 && n % 2 !== 0)) {
        return 0
    } else if (p === n - 1 && n % 2 === 0) {
        return 1
    } else {
        return frontOrBack(n, p)
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
