const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const regex = /letter-spacing\s*:\s*([^;\"'>]+)/gi;
let match;
let count = 0;
const values = new Set();
while ((match = regex.exec(content)) !== null) {
  count++;
  values.add(match[1].trim());
}
console.log('Matches in index.html:', count);
console.log('Unique values:', Array.from(values));

// Also check SVG letter-spacing attributes like letter-spacing="..."
const svgRegex = /letter-spacing\s*=\s*\"([^\"]+)\"/gi;
let svgMatch;
let svgCount = 0;
const svgValues = new Set();
while ((svgMatch = svgRegex.exec(content)) !== null) {
  svgCount++;
  svgValues.add(svgMatch[1].trim());
}
console.log('SVG attribute matches in index.html:', svgCount);
console.log('SVG Unique values:', Array.from(svgValues));
