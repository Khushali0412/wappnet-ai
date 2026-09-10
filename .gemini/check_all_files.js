const fs = require('fs');
const path = require('path');

function getFiles(dir, exts = ['.html', '.css']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.gemini') {
        results = results.concat(getFiles(fullPath, exts));
      }
    } else {
      if (exts.includes(path.extname(file))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = getFiles('.');
console.log('Found files:', files);

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const count = (content.match(/letter-spacing/gi) || []).length;
  if (count > 0) {
    console.log(`${f}: ${count} matches`);
  }
});
