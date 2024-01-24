'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER maxSpan
 */

function processLogs(logs, maxSpan) {
    const sessions = {};
    logs.forEach(log => {
        const [userId, timestamp, action] = log.split(' ');
        if (!sessions[userId]) {
            sessions[userId] = {};
        }
        sessions[userId][action] = parseInt(timestamp);
    });

    return Object.keys(sessions).filter(userId => {
        const session = sessions[userId];
        if (session['sign-in'] && session['sign-out']) {
            return session['sign-out'] - session['sign-in'] <= maxSpan;
        }
        return false;
    }).sort((a, b) => parseInt(a) - parseInt(b));
}


function main() {
    const ws = process.stdout;

    const logsCount = parseInt(readLine().trim(), 10);

    let logs = [];

    for (let i = 0; i < logsCount; i++) {
        const logsItem = readLine();
        logs.push(logsItem);
    }

    const maxSpan = parseInt(readLine().trim(), 10);

    const result = processLogs(logs, maxSpan);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
