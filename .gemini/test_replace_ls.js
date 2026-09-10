const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Replace all letter-spacing declarations
let modified = content.replace(/letter-spacing\s*:\s*[^;\"'>\s]+/gi, (match) => {
  return 'letter-spacing: 0em';
});

// Check if any letter-spacing declarations remain that are not 0em
const checkRegex = /letter-spacing\s*:\s*([^;\"'>\s]+)/gi;
let m;
let nonZero = 0;
let total = 0;
while ((m = checkRegex.exec(modified)) !== null) {
  total++;
  if (m[1] !== '0em' && m[1] !== '0') {
    nonZero++;
    console.log('Non 0em found:', m[0]);
  }
}

console.log(`Total letter-spacing: ${total}, Non-zero: ${nonZero}`);
