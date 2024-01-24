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
 * Complete the 'groupTransactions' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function groupTransactions(transactions) {
    transactions = transactions.sort();
    const group = {}
    transactions.forEach(txn => {
        if(group[txn] === undefined){
            group[txn] = 1;
        } else {
            group[txn] += 1;
        }
    })
    return Object.entries(group)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([item, count]) => `${item} ${count}`);
}

function main() {
    const ws = process.stdout;

    const transactionsCount = parseInt(readLine().trim(), 10);

    let transactions = [];

    for (let i = 0; i < transactionsCount; i++) {
        const transactionsItem = readLine();
        transactions.push(transactionsItem);
    }

    const result = groupTransactions(transactions);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
