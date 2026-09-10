const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Replace all letter-spacing declarations with letter-spacing: 0em
let modified = content.replace(/letter-spacing\s*:\s*[^;\"'>\s]+/gi, 'letter-spacing: 0em');

// Also ensure in global <style>:
// * { box-sizing: border-box; letter-spacing: 0em; }
modified = modified.replace(
  /\*\s*\{\s*box-sizing:\s*border-box\s*\}/,
  `* {\n          box-sizing: border-box;\n          letter-spacing: 0em;\n        }`
);

fs.writeFileSync('index.html', modified, 'utf8');
console.log('Successfully updated index.html');
