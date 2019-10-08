'use strict';

//https://www.hackerrank.com/challenges/30-2d-arrays/problem

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

function getHourGlass(arr, x, y) {
    let outArr = [];
    if (x <= arr[0].length - 3) {
        if (y <= arr.length - 3) {
            for (let i = 0; i < 3; i++) {
                outArr.push(arr[y][x + i])
            }
            outArr.push(arr[y + 1][x + 1])
            for (let i = 0; i < 3; i++) {
                outArr.push(arr[y + 2][x + i])
            }
            return outArr;
        }
    }    
}

function highestHourglass(arr) {
    const hourGlasses = [];
    const hourGlassSums = [];
    for (let y = 0; y < arr.length; y++) {
        for (let x = 0; x < arr[y].length; x++) {
            let hourGlass = getHourGlass(arr, x, y);
            if (typeof hourGlass !== "undefined") {
                hourGlasses.push(hourGlass)
            }
        }
    }

    hourGlasses.forEach((v, i) => {
        hourGlassSums.push(v.reduce((a, c) => a + c, 0));
    })
    console.log(Math.max(...hourGlassSums))
    // console.log(hourGlassSums)
}

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    return highestHourglass(arr);
}
