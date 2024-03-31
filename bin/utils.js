const chalk = require('chalk')
const usage = chalk.hex('#83aaff')("\nUsage: ccwc input file name");

function showHelp() {
    console.log(usage);
    console.log('\nOptions:\r')
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')
    console.log('    -l, --languages\t' + '      ' + 'List all languages.' + '\t\t' + '[boolean]\r')
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')
}

function byteCount(text) {
    return Buffer.byteLength(text, 'utf8');
}

function charCount(text) {
    return text.length
}

function wordCount(text) {
    return text.split(/\s+/).filter(Boolean).length
}

function maxLineLength(text) {
    const lines = text.split(/\s+/).filter(Boolean);
    const longestWordLength = lines.reduce((maxLength, line) => {
        return Math.max(maxLength, line.length);
    }, 0);
    return longestWordLength
}

function newLineCount(text) {
    return (text.match(/\n/g) || []).length;
}

module.exports = { 
    showHelp, 
    byteCount,
    charCount,
    wordCount,
    maxLineLength,
    newLineCount
 };
