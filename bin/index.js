#! /usr/bin/env node

const chalk = require('chalk');
const utils = require('./utils.js');
const usage = chalk.keyword('violet')("\nUsage:  ccwc [OPTION]... [FILE]... example: ccwc filepath \n or:  ccwc [OPTION]... --files0-from=F example: cat filepath|ccwc");
const fs = require('fs');

const yargs = require("yargs");

const options = yargs
    .usage(usage)
    .option("c", { alias: "bytes", describe: "Print the byte counts.", type: "boolean", demandOption: false })
    .option("m", { alias: "chars", describe: "Print the character count.", type: "boolean", demandOption: false })
    .option("l", { alias: "lines", describe: "Print the newline counts.", type: "boolean", demandOption: false })
    .option("L", { alias: "max-line-length", describe: "Print the length of the longest line.", type: "boolean", demandOption: false })
    .option("w", { alias: "words", describe: "print the word count.", type: "boolean", demandOption: false })
    .help(true)
    .argv;

// Function to read data from standard input
function readFromStdin() {
    let inputData = '';
    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', function (chunk) {
        inputData += chunk;
    });
    process.stdin.on('end', function () {
        processData(inputData);
    });
}

// Read data from standard input if no file name is provided
if (yargs.argv._.length === 0) {
    readFromStdin();
} else {
    // Read data from file
    try {
        const data = fs.readFileSync(yargs.argv._[0], 'utf-8');
        processData(data);
    } catch (err) {
        console.error(chalk.red(err.message));
    }
}

function processData(data) {
    // Trim trailing whitespace (including newline characters)
    data = data.trim();
    // Process data based on options
    if (!(options.c || options.bytes || options.m || options.chars || options.l || options.lines || options.L || options['max-line-length'] || options.w || options.words)) {
        // If no options provided, execute all utility functions
        console.log(utils.newLineCount(data), utils.wordCount(data), utils.byteCount(data), yargs.argv._[0]);
    } else {
        // If specific options provided, execute corresponding utility functions
        if (options.c || options.bytes) {
            console.log(utils.byteCount(data), yargs.argv._[0]);
        }
        if (options.m || options.chars) {
            console.log(utils.charCount(data), yargs.argv._[0]);
        }
        if (options.l || options.lines) {
            console.log(utils.newLineCount(data), yargs.argv._[0]);
        }
        if (options.L || options['max-line-length']) {
            console.log(utils.maxLineLength(data), yargs.argv._[0]);
        }
        if (options.w || options.words) {
            console.log(utils.wordCount(data), yargs.argv._[0]);
        }
    }
}
