const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const styleRegex = /<style[\s\S]*?<\/style>/gi;
let m;
while ((m = styleRegex.exec(content)) !== null) {
  console.log('--- STYLE BLOCK ---');
  console.log(m[0].substring(0, 500) + '...');
}
