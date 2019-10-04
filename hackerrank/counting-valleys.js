'use strict';

// https://www.hackerrank.com/challenges/counting-valleys/problem

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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let currentAlt = 0;
    let prevStep = "";
    let valleys = 0;
    let counted = false;
    for (let i = 0; i < n; i++) {

        if (s[i] === "U") {
            currentAlt++
            if (currentAlt >= 0 && counted) {
                counted = false;
            }
        } else if (s[i] === "D") {
            currentAlt--
            if (currentAlt < 0 && !counted) {
                valleys++
                counted = true;
            }
        }
    }
    return valleys
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
