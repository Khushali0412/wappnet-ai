const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Find all matches with context
const regex = /letter-spacing\s*:\s*([^;\"'>\s]+)/gi;
let match;
let count = 0;
while ((match = regex.exec(content)) !== null) {
  count++;
  console.log(`[${count}] Full: "${match[0]}", Value: "${match[1]}"`);
}
