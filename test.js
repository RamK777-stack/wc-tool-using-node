const fs = require('fs');

function countMetrics(text) {
    const lines = text.split('\n');
    
    const byteCount = Buffer.byteLength(text, 'utf8');
    const charCount = text.length;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const newLineCount = lines.length - 1; // Number of newlines is number of lines - 1
    
    const longestLineLength = lines.reduce((maxLength, line) => {
        return Math.max(maxLength, line.length);
    }, 0);

    return { byteCount, charCount, wordCount, newLineCount, longestLineLength };
}
function readFileAndCountMetrics(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const metrics = countMetrics(data);
        console.log('Byte count:', metrics.byteCount);
        console.log('Character count:', metrics.charCount);
        console.log('Word count:', metrics.wordCount);
        console.log('New line count:', metrics.newLineCount);
        console.log('Longest line length:', metrics.longestLineLength);
    });
}

const filePath = './test.txt'; // Change this to your input file path
readFileAndCountMetrics(filePath);